import { join } from 'path';
import type { CommandResult } from '../../types';
import { execCommandSync } from '@/helpers/exec-command-sync';
import { confirm } from '@inquirer/prompts';
import { logger } from '@/logger';

export const COMMAND_NAME = 'Configure vim';

export async function run(): Promise<CommandResult> {
  const BACKUP_FILE_PREFIX = '.vimrc.bkp.';
  const CURRENT_BACKUP_FILE = `${BACKUP_FILE_PREFIX}${Date.now()}`;

  // if ".vimrc" exists, then backup it
  execCommandSync(`cp ~/.vimrc ~/${CURRENT_BACKUP_FILE}`);

  // Delete the old one
  execCommandSync(`rm ~/.vimrc`);

  // Create the new one
  const vimrcFile = join(import.meta.dirname, '.vimrc');
  execCommandSync(`cp ${vimrcFile} ~/.vimrc`);

  // how many old files?
  const oldBackupFiles = execCommandSync(`ls ~/.vimrc.bkp.*`)
    ?.split('\n')
    .filter((f) => f && !f.endsWith(CURRENT_BACKUP_FILE));

  // If many backup files, then ask to remove the old backups
  if (oldBackupFiles?.length) {
    const shouldRemove = await confirm({
      message: `You have ${oldBackupFiles.length} old backup files:\n
      ${oldBackupFiles.join('\n')}\n
      Delete the old ${oldBackupFiles.length} Backup files?`,
      default: false,
    });

    if (shouldRemove) {
      execCommandSync(`rm ${oldBackupFiles.join(' ')}`);
      logger.info(`${oldBackupFiles.length} backup files deleted`);
    }
  }

  return {
    command: import.meta.filename,
    success: true,
    details: {},
  };
}
