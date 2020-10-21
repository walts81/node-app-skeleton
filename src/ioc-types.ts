import { IocTypes as alarmTypes } from './alarm-system';
import { IocTypes as loggingTypes } from './logging';

const IocTypes = {
  ...alarmTypes,
  ...loggingTypes,
};

export { IocTypes };
