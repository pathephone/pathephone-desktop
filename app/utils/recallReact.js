import React from 'react';

export default (points, View) => class extends React.Component {
  state = {}
  listeners = []
  componentWillMount() {
    Object.keys(points)
      .forEach((key) => {
        const listener = points[key]((value) => {
          this.setState({
            [key]: value
          });
        });
        this.listeners.push(listener);
      });
  }
  componentWillUnmount() {
    this.listeners.forEach(({ done }) => {
      done();
    });
  }
  render() {
    return <View {...this.props} {...this.state} />;
  }
};
