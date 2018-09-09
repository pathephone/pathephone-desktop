
export type INotificationType = 'OK' | 'WARNING' | 'ERROR';

export interface INotification {
  notificationType: INotificationType;
  text: string;
  id: number;
}

export type INotificationsState = INotification[];
