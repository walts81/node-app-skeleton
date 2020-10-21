import 'reflect-metadata';
import { Container } from './container';

// key for storing ctor arg metadata on an object
const injectKey = 'argument_injection';

/*
 * This is a property decorator.
 * This runs once per property declared in a class and replaces
 * the prop with a getter to lazily grab the value from the IoC container when accessed
 */
export const propInject = <T>(key: string) => (target: Object, propertyKey: string) => {
  let val: T;
  const getter = () => {
    if (!val) {
      val = Container.get<T>(key);
    }
    return val;
  };
  Object.defineProperty(target, propertyKey, {
    get: getter,
    configurable: true,
  });
};

/*
 * This an argument decorator for decorating constructor arguments.
 * This runs once per class (not when the ctor is called)
 * So the purpose of this is to gather the info for the arguments and store the info in metadata
 */
export const inject = (key: string) => (target: Object, argKey: string | symbol, index: number) => {
  const args: string[] = Reflect.getOwnMetadata(injectKey, target, argKey) || [];
  args.push(key);
  Reflect.defineMetadata(injectKey, args, target, argKey);
};

/*
 * This decorator is a class decorator.
 * Its purpose is to run in-concert with the "@inject" argument decorator.
 * The argument decorator runs first (once) and stores argument info.
 * This decorator also runs only once but overrides the ctor of the class and uses the
 * metadata stored by the argument decorators to construct the paramters and pass them into the original ctor
 */
export const injectable: ClassDecorator = (target: any) => {
  const argMetadata: string[] = Reflect.getOwnMetadata(injectKey, target) || [];
  function newCtor(...args: any[]) {
    const injectedArgs = argMetadata.map(x => Container.get<any>(x));
    return new target(...injectedArgs);
  }
  newCtor.prototype = target.prototype;
  return newCtor as any;
};
