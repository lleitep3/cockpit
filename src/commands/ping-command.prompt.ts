import { execCommand } from '../helpers/exec-command';

export const COMMAND_NAME = 'Ping Google';

export async function run() {
  const command = 'ping -c 4 google.com';
  const result = execCommand(command); // Importe e use a função command como antes

  for await (const output of result) {
    console.log(`output: ${output}`);
  }
}
