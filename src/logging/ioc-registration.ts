import { Container } from '../ioc';
import { IocTypes } from './ioc-types';
import { ConsoleLogger } from './console-logger';

Container.registerInstance(IocTypes.logger, ConsoleLogger);
