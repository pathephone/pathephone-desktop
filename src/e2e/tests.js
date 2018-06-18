/* eslint-env mocha */
import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
import 'chai/register-expect' // Using Expect style

import utils from './utils'

chai.use(chaiAsPromised)

describe('testing app', function () {
  this.timeout(30000)

  before(utils.startApp)

  require('./tests/sharing')
  // require('./tests/albums-search')
  // require('./tests/albums-feed')

  after(utils.closeApp)
})
