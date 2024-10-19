import * as pkg from '../package.json';

export const config = {
  APP_NAME: pkg.name,
  APP_VERSION: pkg.version,
  COMMANDS_PATH: 'commands',

  // Log vars
  LOG_LEVEL: 'debug',
  LOG_PATH: 'logs'
};
