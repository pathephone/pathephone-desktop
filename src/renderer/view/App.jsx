import React from 'react';
import propTypes from 'prop-types';

import StartScreen from './App/StartScreen';
import CloseScreen from './App/CloseScreen';
import ReadyScreen from './App/ReadyScreen';
import LockScreen from './App/LockScreen';
import Root from './App/Root';

class App extends React.Component {
  componentDidMount = this.props.onDidMount

  render() {
    const {
      hasStartScreen, hasLockScreen, hasReadyScreen, hasCloseScreen, ...restProps
    } = this.props;
    return (
      <Root>
        {
          hasStartScreen ? (
            <StartScreen {...restProps} />
          ) : hasReadyScreen ? (
            <ReadyScreen />
          ) : hasCloseScreen && (
            <CloseScreen {...restProps} />
          )
        }
        {
          hasLockScreen && (
            <LockScreen />
          )
        }
      </Root>
    );
  }
}

App.propTypes = {
  hasStartScreen: propTypes.bool.isRequired,
  hasReadyScreen: propTypes.bool.isRequired,
  hasCloseScreen: propTypes.bool.isRequired,
  hasLockScreen: propTypes.bool.isRequired,
  onDidMount: propTypes.func.isRequired,
};

export default App;
