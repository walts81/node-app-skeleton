import { ILogger } from './interfaces';

const getMessage = (message: any) => {
  return JSON.stringify(message);
};

export const ConsoleLogger: ILogger = {
  log(message: any): void {
    console.log(`[DEBUG] ${getMessage(message)}`);
  },
  info(message: any): void {
    console.info(`[INFO] ${getMessage(message)}`);
  },
  warn(message: any): void {
    console.warn(`[WARN] ${getMessage(message)}`);
  },
  error(message: any): void {
    console.error(`[ERROR] ${getMessage(message)}`);
  },
};
