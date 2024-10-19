import { logger } from '@/logger';
import { execSync } from 'child_process';

// Função para executar comandos de shell
export function execCommandSync(shellCommand: string): string | undefined {
  try {
    // Executar o comando e capturar a saída
    const output = execSync(shellCommand, { encoding: 'utf-8' }); // encoding garante que seja uma string

    logger.debug({
      command: shellCommand,
      output,
    });

    return output;
  } catch (err) {
    logger.error(err, `ERROR running command "${shellCommand}"`);
    throw err; // Lançar o erro em vez de retornar Promise.reject em código síncrono
  }
}
