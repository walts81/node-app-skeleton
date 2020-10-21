import './ioc-registrations';
import { ILogger } from './logging';
import { IAlarm, Sensor } from './alarm-system';
import { propInject } from './ioc';
import { IocTypes } from './ioc-types';
import { counter } from './counter';

class Main {
  @propInject<ILogger>(IocTypes.logger) logger!: ILogger;
  @propInject<IAlarm>(IocTypes.alarm) alarm!: IAlarm;
  @propInject<Sensor>(IocTypes.sensor) sensor!: Sensor;

  run() {
    counter.value++;
    this.sensor.simulateOpen();
    this.alarm.arm();
    this.sensor.simulateOpen();
    this.sensor.simulateClose();
    this.alarm.disarm();
    this.sensor.simulateClose();
    this.logger.log(counter);
  }
}

const main = new Main();
main.run();

export { main };
