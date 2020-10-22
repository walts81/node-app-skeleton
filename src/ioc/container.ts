interface IocRegistration<T> {
  key: string;
  factory?: () => T;
  ctor?: new (...args: any[]) => T;
  instance?: T;
  isSingleton: boolean;
}

const registrations: { [key: string]: IocRegistration<any> } = {};

export const Container = {
  registerFactory: <T>(key: string, factory: () => T, singleton: boolean) => {
    registrations[key] = {
      key,
      factory,
      isSingleton: singleton,
    };
  },
  registerType: <T>(key: string, ctor: new (...args: any[]) => T, singleton: boolean) => {
    registrations[key] = {
      key,
      ctor,
      isSingleton: singleton,
    };
  },
  registerInstance: <T>(key: string, instance: T) => {
    registrations[key] = {
      key,
      instance,
      isSingleton: true,
    };
  },
  get: <T>(key: string) => {
    const reg = registrations[key] as IocRegistration<T>;
    if (!!reg) {
      if (reg.isSingleton) {
        if (!reg.instance) {
          if (!!reg.ctor) {
            reg.instance = new reg.ctor();
          } else if (!!reg.factory) {
            reg.instance = reg.factory();
          } else {
            throw new Error(`No constructor or factory provided for ${key}`);
          }
        }
        return reg.instance;
      }
      if (!!reg.ctor) {
        return new reg.ctor();
      } else if (!!reg.factory) {
        return reg.factory();
      }
      throw new Error(`No constructor or factory provided for ${key}`);
    }
    throw new Error(`No registration found ${key}`);
  },
};
