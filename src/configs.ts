import * as pkg from '../package.json';

export const config = {
  APP_NAME: pkg.name,
  APP_VERSION: pkg.version,
  LOG_LEVEL: 'debug',
  COMMANDS_PATH: 'commands',
};
