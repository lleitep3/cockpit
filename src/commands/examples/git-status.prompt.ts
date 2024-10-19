import { execCommand } from '../../helpers/exec-command';

export const COMMAND_NAME = 'Rodar um git status';

export async function run() {
  const command = 'git status';
  const result = execCommand(command); // Importe e use a função command como antes

  for await (const output of result) {
    console.log(`output: ${output}`);
  }
}
