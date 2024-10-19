import { execCommandSync } from '@/helpers/exec-command-sync';
import { logger } from '@/logger';
import type { CommandResult } from '@/types';

export const COMMAND_NAME = '#command-template-name';

export async function run(): Promise<CommandResult> {
  try {
    // example
    execCommandSync(`echo "hello from #command-template-name"`);
  } catch (err) {
    logger.error(err, 'ERROR running the command #command-template-name');
  }

  return {
    command: import.meta.filename,
    success: true,
    details: {},
  };
}
