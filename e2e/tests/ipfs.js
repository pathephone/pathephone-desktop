/* eslint-env mocha */
import getIpfsNode from '../../src/app/api/ipfs'
const assert = require('assert')
const utils = require('../utils')

describe('IPFS', function () {
  this.timeout(30000)

  before(utils.beforeEach)
  after(utils.afterEach)

  // запускаем ipfs с приложением, простой путь
  it('app is runned', async function () {
    const { app } = this
    await app.client.waitForExist('#app')
  })

  const ipfs = getIpfsNode()
  const bufferString = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]) // QmTRSxHhL8Uaz1YXfWLkydRQ7nPSHXaNFsYaHjqjCpU8W7

  describe('files', () => {
    it('adding', async () => {
      const hash = (await ipfs.add(bufferString))[0].hash
      assert.equal(hash, 'QmTRSxHhL8Uaz1YXfWLkydRQ7nPSHXaNFsYaHjqjCpU8W7')
    })

    it('read after adding', async () => {
      const file = await ipfs.files.cat('QmTRSxHhL8Uaz1YXfWLkydRQ7nPSHXaNFsYaHjqjCpU8W7')
      assert.ok(file.equals(bufferString)) // файл и буфер должны быть одинаковыми
    })

    it('check file exists in ipfs', async () => {
      const exists = (await ipfs.files.exists('QmTRSxHhL8Uaz1YXfWLkydRQ7nPSHXaNFsYaHjqjCpU8W7'))[0]
      assert.ok(exists)
      const notExists = (await ipfs.files.exists('QmTRSxHhL8Uaz1YXfWLkydRQ7nPSHXaNFsYaHjqjCpU8W6'))[0] // 6 на конце
      assert.ok(!notExists)
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
})
