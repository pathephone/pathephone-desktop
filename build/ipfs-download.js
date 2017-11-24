const http = require('https')
const fs = require('fs')
const mkdirp = require('mkdirp')
const uz = require('unzip')
const targz = require('targz')

function download (url, dest) {
  return new Promise((resolve, reject) => {
    let dir = dest.split('/')
    dir.pop()
    dir = dir.join('/')
    mkdirp(dir, (err) => {
      if (err) {
        reject(err)
        return
      }
      const file = fs.createWriteStream(dest)
      console.log('downloading', url)
      http.get(url, (response) => {
        response.pipe(file)
        file.on('finish', () => {
          console.log('done!')
          file.close(resolve) // close() is async, call cb after close completes.
        })
      }).on('error', (err) => { // Handle errors
        fs.unlink(dest) // Delete the file async. (But we don't check the result)
        reject(err.message)
      })
    })
  })
}

function unzip (file, path) {
  return new Promise((resolve, reject) => {
    console.log('unziping', file, 'to', path)
    fs.createReadStream(file).pipe(uz.Extract({ path })).on('close', () => {
      console.log('unziped')
      resolve()
    })
  })
}

function rename (oldFile, newFile) {
  return new Promise((resolve) => {
    console.log('rename', oldFile, 'to', newFile)
    fs.rename(oldFile, newFile, (err) => {
      if (err) { throw err }
      resolve()
    })
  })
}

function untargz (file, path) {
  return new Promise((resolve, reject) => {
    console.log('extracting', file, 'to', path)
    targz.decompress({
      src: file,
      dest: path
    }, function (err) {
      if (err) {
        reject(err)
      } else {
        console.log('done')
        resolve()
      }
    })
  })
}

(async () => {
  const vers = '0.4.11'

  // win
  await download(`https://dist.ipfs.io/go-ipfs/v${vers}/go-ipfs_v${vers}_windows-amd64.zip`, 'imports/win/download.zip')
  await unzip('imports/win/download.zip', 'imports/win/download')
  await rename('imports/win/download/go-ipfs/ipfs.exe', 'imports/win/ipfs.exe')
  // linux
  await download(`https://dist.ipfs.io/go-ipfs/v${vers}/go-ipfs_v${vers}_linux-amd64.tar.gz`, 'imports/linux/download.tar.gz')
  await untargz('imports/linux/download.tar.gz', 'imports/linux/download')
  await rename('imports/linux/download/go-ipfs/ipfs', 'imports/linux/ipfs')

  await download(`https://dist.ipfs.io/go-ipfs/v${vers}/go-ipfs_v${vers}_darwin-amd64.tar.gz`, 'imports/darwin/download.tar.gz')
  await untargz('imports/darwin/download.tar.gz', 'imports/darwin/download')
  await rename('imports/darwin/download/go-ipfs/ipfs', 'imports/darwin/ipfs')
})()
