import { globSync } from 'node:fs';
import { config } from '@/configs';

const findCommandFiles = (commandPath: string) =>
  globSync('**/*.prompt.ts').map((f) =>
    (f.split(`${commandPath}/`)[1] as string)?.replace('.ts', '')
  );

export async function scanForCommands() {
  const files = findCommandFiles(config.COMMANDS_PATH);

  const choices = [];

  // Dynamic import
  for (const file of files) {
    const commandModule = await import(`@/${config.COMMANDS_PATH}/${file}`);

    choices.push({
      name: commandModule.COMMAND_NAME,
      value: commandModule.run,
    });
  }

  return choices;
}
