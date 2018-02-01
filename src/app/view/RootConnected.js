import { connect } from 'react-redux'
import Root from './Root'

// Map Redux state to component props
function mapStateToProps (state) {
  return { ...state }
}

// Connected Component
const AppConnected = connect(
  mapStateToProps
)(Root)

export default AppConnected
