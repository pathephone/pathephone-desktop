/* eslint-env mocha */
import utils from './utils'

describe('testing app', function () {
  this.timeout(30000)

  before(utils.startApp)


  require('./tests/add-album')
  require('./tests/albums-search')
  require('./tests/albums-feed')

  after(utils.closeApp)
})
