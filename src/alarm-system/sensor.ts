import { inject, injectable } from '../ioc';
import { IAlarm, SensorMessageLevel } from './interfaces';
import { IocTypes } from './ioc-types';

@injectable
export class Sensor {
  constructor(@inject(IocTypes.alarm) protected alarm: IAlarm) {}

  simulateOpen() {
    const level = this.alarm.isArmed ? SensorMessageLevel.armed : SensorMessageLevel.disarmed;
    this.alarm.notify({ message: 'Sensor is open', level });
  }

  simulateClose() {
    this.alarm.notify({ message: 'Sensor is closed', level: SensorMessageLevel.both });
  }
}
