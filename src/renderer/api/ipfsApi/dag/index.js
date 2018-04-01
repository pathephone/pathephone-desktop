import get from './get'
import put from './put'

export default (node, endpoint) => {
  node.dag = {}
  node.dag.get = get(endpoint)
  node.dag.put = put(endpoint)
  return node
}
