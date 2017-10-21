import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';
import { start } from '../scripts/initDb';

class InitApp extends React.Component {
  state = {
    ready: false
  }
  async componentWillMount() {
    await start();
    this.setState({
      ready: true
    });
  }
  render() {
    const { ready } = this.state;
    if (!ready) {
      return (
        <Dimmer active>
          <Loader>Loading</Loader>
        </Dimmer>
      );
    }
    return this.props.children;
  }
}

export default InitApp;
