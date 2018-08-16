/* eslint-env mocha */
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import 'chai/register-expect'; // Using Expect style

chai.use(chaiAsPromised);

describe('testing app', function () {
  this.timeout(30000);
  require('./tests/sharePageTests');
  require('./tests/discoverPageTests');
});
