
export type INotificationType = 'SUCCESS' | 'WARNING' | 'ERROR';

export interface INotification {
  notificationType: INotificationType;
  text: string;
  id: number;
}

export type INotificationsState = INotification[];
