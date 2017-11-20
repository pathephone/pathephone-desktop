import React from 'react'

const getDefaultState = () => ({
  data: null,
  error: null,
  ready: false
})

class Async extends React.Component {
  state = getDefaultState()
  componentWillMount () {
    const { call } = this.props
    this.performCall(call)
  }
  componentWillReceiveProps (nextProps) {
    const { call } = nextProps
    this.setState(getDefaultState)
    if (call !== this.props.call) {
      this.performCall(call)
    }
  }
  performCall = async (call) => {
    try {
      const data = await call()
      this.setState({ data, ready: true, error: null })
    } catch (error) {
      this.setState({ error, ready: true, data: null })
    }
  }
  render () {
    const { ready, ...result } = this.state
    if (ready) {
      if (result.error && this.props.errorView) {
        return <this.props.errorView {...result} />
      }
      return <this.props.readyView {...result} />
    }
    if (this.props.waitView) {
      return <this.props.waitView />
    }
    return null
  }
}

export default Async
