const multibase = require('multibase')

export default (cid) => {
  return multibase.decode(cid).slice(2);
}
