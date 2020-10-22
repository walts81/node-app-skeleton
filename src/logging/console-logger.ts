import { Logger } from './interfaces';

const getMessage = (message: any) => {
  return JSON.stringify(message);
};

enum LogLevel {
  debug,
  info,
  warn,
  error,
}

const getLevelText = (level: LogLevel) => {
  switch (level) {
    case LogLevel.info:
      return ' [INFO]';
    case LogLevel.warn:
      return ' [WARN]';
    case LogLevel.error:
      return '[ERROR]';
    default:
      return '[DEBUG]';
  }
};

const consoleLog = (level: LogLevel, message: string) => {
  const now = new Date().toISOString();
  const m = `${getLevelText(level)} ${now}: ${message}`;
  if (level === LogLevel.info) {
    console.info(m);
  } else if (level === LogLevel.warn) {
    console.warn(m);
  } else if (level === LogLevel.error) {
    console.error(m);
  } else {
    console.log(m);
  }
};

export const ConsoleLogger: Logger = {
  log(message: any): void {
    consoleLog(LogLevel.debug, getMessage(message));
  },
  info(message: any): void {
    consoleLog(LogLevel.info, getMessage(message));
  },
  warn(message: any): void {
    consoleLog(LogLevel.warn, getMessage(message));
  },
  error(message: any): void {
    consoleLog(LogLevel.error, getMessage(message));
  },
};
