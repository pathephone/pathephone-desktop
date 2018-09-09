import * as React from 'react';

import { CloseScreen } from '~renderer/ui/App/components/CloseScreen';
import { LockScreen } from '~renderer/ui/App/components/LockScreen';
import { ReadyScreen } from '~renderer/ui/App/components/ReadyScreen';
import { Root } from '~renderer/ui/App/components/Root';
import { StartScreen } from '~renderer/ui/App/components/StartScreen';

interface IProps {
  hasStartScreen: boolean;
  hasLockScreen: boolean;
  hasReadyScreen: boolean;
  hasCloseScreen: boolean;
  errorMessage: string;
  progress: number;
  onDidMount(): void;
}

export class AppContainer extends React.Component<IProps> {
  public componentDidMount: () => void = this.props.onDidMount;

  public render(): React.ReactElement<IProps> {
    const {
      hasStartScreen, hasLockScreen, hasReadyScreen, hasCloseScreen, ...restProps
    } = this.props;

    return (
      <Root>
        {
          hasStartScreen && (
            <StartScreen {...restProps} />
          )
        }
        {
          hasReadyScreen && (
            <ReadyScreen />
          )
        }
        {
          hasCloseScreen && (
            <CloseScreen />
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
