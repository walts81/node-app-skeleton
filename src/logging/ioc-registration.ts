import { Container } from '../ioc';
import { IocTypes } from './ioc-types';
import { ILogger } from './interfaces';
import { ConsoleLogger } from './console-logger';

Container.registerInstance<ILogger>(IocTypes.logger, ConsoleLogger);
