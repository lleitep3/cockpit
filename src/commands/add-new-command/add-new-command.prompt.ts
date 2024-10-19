import type { CommandResult } from '@/types';
import { execCommandSync } from '@/helpers/exec-command-sync';
import { input } from '@inquirer/prompts';
import { config } from '@/configs';

export const COMMAND_NAME = 'create a new command';

export async function run(): Promise<CommandResult> {
  const commandFolderName = await input({
    message: 'Type the folder name of your command:',
    required: true,
    validate: (value: string) => {
      // Regex para kebab case: letras minúsculas separadas por hifens
      const kebabCaseRegex = /^[a-z]+(-[a-z]+)*$/;

      if (!kebabCaseRegex.test(value)) {
        return 'The folder name must be in kebab-case (e.g. "my-folder-name")';
      }

      return true; // Validação passou
    },
  });

  // Create the folder
  execCommandSync(`mkdir ${import.meta.dirname}/../${commandFolderName}`);

  // copy the template file to the created folder
  execCommandSync(
    `cp ${import.meta.dirname}/template/command.template.ts ./src/${
      config.COMMANDS_PATH
    }/${commandFolderName}/${commandFolderName}.prompt.ts`
  );

  // replace content inside the folder
  let filePath = `${import.meta.dirname}/../`;
  filePath += `${commandFolderName}/${commandFolderName}.prompt.ts`;

  const command = `sed -i s/#command-template-name/${commandFolderName}/ ${filePath}`;

  execCommandSync(command);

  return {
    command: import.meta.filename,
    success: true,
    details: {},
  };
}
