import intersection from 'lodash.intersection'

export default (node) => {
  // не могли предусмотреть чтоли проверку есть ли файл, напочему мне надо это реализовывать? =\
  node.files.exists = async (cids) => {
    const list = (await node.refs.local()).map(obj => obj.Ref)
    if (!Array.isArray(cids)) { cids = [cids] }
    const exists = intersection(list, cids)
    return exists.length > 0 ? exists : false
  }
  return node
}
