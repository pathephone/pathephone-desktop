/* eslint-env mocha */
import getIpfsNode from './ipfs'
import startIpfs from '$/src/background/modules/ipfsDaemon/startIpfs'
import assert from 'assert'

describe('IPFS', function () {
  this.timeout(30000)

  let ipfs
  let ipfsKill = null

  const bufferString = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]) // QmTRSxHhL8Uaz1YXfWLkydRQ7nPSHXaNFsYaHjqjCpU8W7

  describe('files', function () {
    it('init', async function () {
      this.timeout(20000)
      ipfsKill = await startIpfs({ silent: true })
      ipfs = getIpfsNode({port: 5001})
    })

    it('adding', async () => {
      const hash = (await ipfs.add(bufferString))[0].hash
      assert.equal(hash, 'QmTRSxHhL8Uaz1YXfWLkydRQ7nPSHXaNFsYaHjqjCpU8W7')
    })

    it('read after adding', async () => {
      const file = await ipfs.files.cat('QmTRSxHhL8Uaz1YXfWLkydRQ7nPSHXaNFsYaHjqjCpU8W7')
      assert.ok(file.equals(bufferString)) // файл и буфер должны быть одинаковыми
    })
    /* some times breaks on semaphore
    it('check file exists in ipfs', async () => {
      const exists = (await ipfs.files.exists('QmTRSxHhL8Uaz1YXfWLkydRQ7nPSHXaNFsYaHjqjCpU8W7'))[0]
      assert.ok(exists)
      const notExists = (await ipfs.files.exists('QmTRSxHhL8Uaz1YXfWLkydRQ7nPSHXaNFsYaHjqjCpU8W6'))[0] // 6 на конце
      assert.ok(!notExists)
    })
    */
    it('add big file', async () => {
      const hash = (await ipfs.add(Buffer.alloc(1024 * 1024 * 50, 'a')))[0].hash
      assert.equal(hash, 'QmYJHdtwgSWVkCJuLQmE3RqhJST1aWj5WHJxcNFtqut1UF')
    })

    it('read big file', async function () {
      this.timeout(10000)
      const file = await ipfs.files.cat('QmYJHdtwgSWVkCJuLQmE3RqhJST1aWj5WHJxcNFtqut1UF')
      assert.equal(file.length, 1024 * 1024 * 50)
    })
  })

  describe('dag', () => {
    const dagParams = { format: 'dag-cbor', hashAlg: 'sha3-512' }

    it('add', async () => {
      const hash = (await ipfs.dag.put({test: 23}, dagParams)).toBaseEncodedString() // zdpuAuFdrnkEm9vX8qnEnMbaM4kq3iFHcN6xXN8Mkm34SX5eT
      assert.equal(hash, 'zdpuAuFdrnkEm9vX8qnEnMbaM4kq3iFHcN6xXN8Mkm34SX5eT')
    })

    it('get', async () => {
      const obj = (await ipfs.dag.get('zdpuAuFdrnkEm9vX8qnEnMbaM4kq3iFHcN6xXN8Mkm34SX5eT')).value
      assert.equal(obj.test, 23)
    })
  })

  describe('pubsub', () => {
    it('publish/subscribe', () => new Promise(async (resolve) => {
      await ipfs.pubsub.subscribe(
        'XXXyyyyXXXzzfql93333', ({data}) => {
          if (data.equals(bufferString)) { resolve() }
        }
      )
      ipfs.pubsub.publish('XXXyyyyXXXzzfql93333', bufferString)
    }))
  })

  describe('close', () => {
    it('closing', () => {
      ipfsKill()
    })
  })
})
