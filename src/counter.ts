import { inject, injectable } from './ioc';
import { IocTypes } from './ioc-types';

export class Incrementer {
  constructor(protected amount: number) {}

  increment(value: number) {
    return value + this.amount;
  }
}

@injectable
export class Counter {
  private _value: number = 0;

  constructor(@inject(IocTypes.incrementer) protected incrementer: Incrementer) {}

  get value(): number {
    return this._value;
  }

  increment() {
    this._value = this.incrementer.increment(this.value);
  }
}
