import cidToBuffer from './cidToBuffer'

export default (cid) => {
  return cidToBuffer(cid).slice(2)
}
