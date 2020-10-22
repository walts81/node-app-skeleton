import './logging/ioc-registration';
import { Container } from './ioc';
import { IocTypes } from './ioc-types';
import { Counter, Incrementer } from './counter';

Container.registerFactory(IocTypes.incrementer, () => new Incrementer(5), true);
Container.registerType(IocTypes.counter, Counter, true);
