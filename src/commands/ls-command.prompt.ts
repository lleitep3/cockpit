import { execCommand } from '../helpers/exec-command';

export const COMMAND_NAME = 'Listar arquivos (ls)';

export async function run() {
  const command = 'ls';
  const result = execCommand(command); // Importe e use a função command como antes

  for await (const output of result) {
    console.log(`output: ${output}`);
  }
}
