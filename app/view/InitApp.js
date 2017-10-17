import React from 'react';
import { start } from '../scripts/initDb';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react';

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
    console.log('ready');
    return this.props.children;
  }
}

export default InitApp;
