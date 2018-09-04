import * as React from 'react';

import { INotificationType } from '../types';
import styles from './styles';

interface IProps {
  text: string;
  type: INotificationType;
  onToastClick: (params: number) => void;
  id: number;
}

class Toast extends React.Component<IProps> {
  public handleToastClick = () => {
    const { onToastClick, id } = this.props;
    onToastClick(id);
  }

  public render() {
    const { text, type } = this.props;
    return (
      <button
        type="button"
        className={this.getToastClassname(type)}
        onClick={this.handleToastClick}
      >
        {text}
      </button>
    );
  }

  private getToastClassname = (type: INotificationType) => (
    type === 'OK'
      ? styles.toastSuccess
      : type === 'WARNING'
        ? styles.toastWarning
        : type === 'ERROR'
          && styles.toastError
  )
}

export default Toast;
