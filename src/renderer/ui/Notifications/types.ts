
export type INotificationType = 'OK' | 'WARNING' | 'ERROR';

export interface INotification {
  text: string;
  type: INotificationType;
  id: number;
}

export type INotificationsState = INotification[];
