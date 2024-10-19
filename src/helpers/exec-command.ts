import { logger } from '@/logger';
import { spawn } from 'child_process';

// Função para executar comandos de shell
export async function* execCommand(
  shellCommand: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): AsyncGenerator<any, void, unknown> {
  logger.debug(`running command "${shellCommand}"`);
  const [c, ...args] = shellCommand.split(' ');

  const childProcess = spawn(c, args);

  // Combinar stdout e stderr em um único fluxo
  // const streams = [childProcess.stdout, childProcess.stderr];

  // for (const stream of streams) {
  for await (const chunk of childProcess.stdout) {
    yield chunk.toString();
  }
  // }
  await new Promise((resolve) => childProcess.on('close', resolve));
}
