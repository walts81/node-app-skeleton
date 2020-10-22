import './ioc-registrations';
import { propInject } from './ioc';
import { IocTypes } from './ioc-types';
import { Logger } from './logging';
import { Counter } from './counter';

class Main {
  @propInject(IocTypes.logger) logger!: Logger;
  @propInject(IocTypes.counter) counter!: Counter;

  run() {
    const log = [this.logger.log, this.logger.info, this.logger.warn, this.logger.error];
    for (let i = 1; i <= 5; i++) {
      let ix = i - 1;
      if (ix >= log.length) ix = 0;
      log[ix]('Counter value = ' + this.counter.value);
      this.counter.increment();
    }
  }
}

const main = new Main();
main.run();

export { main };
