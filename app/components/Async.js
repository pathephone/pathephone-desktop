import React from 'react';

class Async extends React.Component {
  state = {
    data: null,
    error: null,
    ready: false
  }
  async componentWillMount() {
    const { call } = this.props;
    try {
      const data = await call();
      this.setState({ data, ready: true });
    } catch (error) {
      this.setState({ error, ready: true });
    }
  }
  render() {
    const { ready, ...result } = this.state;
    if (ready) {
      return <this.props.onReady {...result} />;
    }
    if (this.props.onWait) {
      return <this.props.onWait />;
    }
    return null;
  }
}

export default Async;
