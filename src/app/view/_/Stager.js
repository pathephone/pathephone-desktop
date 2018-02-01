import React from 'react'

class Stager extends React.Component {
  state = {
    stage: 0,
    payload: null
  }
  componentDidMount () {
    const { generator } = this.props
    const onNextStage = this.nextStage
    generator({ onNextStage })
  }
  nextStage = (payload = null) => {
    this.setState({
      stage: this.state.stage + 1,
      payload
    })
  }
  render () {
    return <this.props.view {...this.state} />
  }
}

export default Stager
