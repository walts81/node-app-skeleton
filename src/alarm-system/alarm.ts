import { inject, injectable } from '../ioc';
import { IocTypes } from '../ioc-types';
import { ILogger } from '../logging';
import { IAlarm, ISensorMessage, SensorMessageLevel } from './interfaces';

@injectable
export class Alarm implements IAlarm {
  private alarmStatus: 'armed' | 'disarmed' = 'disarmed';

  constructor(@inject(IocTypes.logger) private logger: ILogger) {}

  get isArmed(): boolean {
    return this.alarmStatus === 'armed';
  }

  arm(): void {
    this.alarmStatus = 'armed';
  }

  disarm(): void {
    this.alarmStatus = 'disarmed';
  }

  notify(message: ISensorMessage): void {
    if (this.isArmed) {
      if (message.level === SensorMessageLevel.both || message.level === SensorMessageLevel.armed) {
        this.logger.warn(message.message);
      }
    } else {
      if (message.level === SensorMessageLevel.both || message.level === SensorMessageLevel.disarmed) {
        this.logger.info(message.message);
      }
    }
  }
}
