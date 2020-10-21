export enum SensorMessageLevel {
  armed,
  disarmed,
  both,
}

export interface ISensorMessage {
  message: string;
  level: SensorMessageLevel;
}

export interface IAlarm {
  readonly isArmed: boolean;
  arm(): void;
  disarm(): void;
  notify(message: ISensorMessage): void;
}
