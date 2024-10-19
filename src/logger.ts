import { config } from '@/configs';
import pino from 'pino';

export const logger = pino({
  name: config.APP_NAME,
  level: 'info',
  transport: {
    targets: [
      {
        level: 'trace',
        target: 'pino/file',
        options: {
          destination: './logs/debug.log',
          mkdir: true,
        },
      },
      {
        target: 'pino-pretty',
        options: { destination: 2 }, // 1-stdio | 2-stderr
      },
    ],
  },
});
