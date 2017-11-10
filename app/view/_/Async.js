import React from 'react'

class Async extends React.Component {
  state = {
    data: null,
    error: null,
    ready: false
  }
  async componentWillMount () {
    const { call } = this.props
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
