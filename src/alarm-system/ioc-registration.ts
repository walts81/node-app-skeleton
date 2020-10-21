import { Container } from '../ioc';
import { IocTypes } from './ioc-types';
import { IAlarm } from './interfaces';
import { Alarm } from './alarm';
import { Sensor } from './sensor';

Container.registerType<IAlarm>(IocTypes.alarm, Alarm, true);
Container.registerType<Sensor>(IocTypes.sensor, Sensor, false);
