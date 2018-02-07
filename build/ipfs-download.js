const http = require('https')
const fs = require('fs')
const mkdirp = require('mkdirp')
const uz = require('unzip')
const targz = require('targz')

const mkdir = (url) => new Promise((resolve, reject) => {
	mkdirp(url, (err) => {
      if (err) {
        reject(err)
        return
      }
      resolve()
  	})
})

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
      console.log('downloading', url)
      const request = http.get(url, (response) => {
        const size = response.headers['content-length']
        const stats = fs.existsSync(dest) && fs.statSync(dest)
        if (stats) {
          const fileSize = stats.size
          if (size > 0 && fileSize === parseInt(size)) {
            request.abort()
            console.log(url, 'already downloaded')
            resolve(true)
            return
          }
        }

        const file = fs.createWriteStream(dest)
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
      console.log('unziped!')
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
        console.log('done!')
        resolve()
      }
    })
  })
}

(async () => {
  const vers = '0.4.13'

  await mkdir('imports/win')
  await mkdir('imports/linux')
  await mkdir('imports/darwin')

  // win
  await download(`https://dist.ipfs.io/go-ipfs/v${vers}/go-ipfs_v${vers}_windows-amd64.zip`, 'imports/download_win.zip')
  await unzip('imports/download_win.zip', 'imports/download_win')
  await rename('imports/download_win/go-ipfs/ipfs.exe', 'imports/win/ipfs.exe')
  // linux
  await download(`https://dist.ipfs.io/go-ipfs/v${vers}/go-ipfs_v${vers}_linux-amd64.tar.gz`, 'imports/download_linux.tar.gz')
  await untargz('imports/download_linux.tar.gz', 'imports/download_linux')
  await rename('imports/download_linux/go-ipfs/ipfs', 'imports/linux/ipfs')

  await download(`https://dist.ipfs.io/go-ipfs/v${vers}/go-ipfs_v${vers}_darwin-amd64.tar.gz`, 'imports/download_darwin.tar.gz')
  await untargz('imports/download_darwin.tar.gz', 'imports/download_darwin')
  await rename('imports/download_darwin/go-ipfs/ipfs', 'imports/darwin/ipfs')
})()
