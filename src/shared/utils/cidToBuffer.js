const multibase = require('multibase');

export default cid => multibase.decode(cid);
