import React from 'react';

class Async extends React.Component {
  state = { }
  async componentWillMount() {
    const { call } = this.props;
    try {
      const data = await Promise.all(call);
      this.setState({ data, error: null });
    } catch (error) {
      this.setState({ error, data: null });
    }
  }
  render() {
    return <this.props.view {...this.state} />;
  }
}

export default Async;
