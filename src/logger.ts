import { config } from '@/configs';
import pino from 'pino';

export const logger = pino({
  name: config.APP_NAME,
  level: 'info',
  transport: {
    targets: [
      {
        target: 'pino-pretty',
      }
    ],
  },
});
