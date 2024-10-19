import { select } from '@inquirer/prompts';
import { scanForCommands } from './helpers/scan-commands';
import { logger } from './logger';

async function displayMenu() {
  try {
    const choices = await scanForCommands();

    choices.push({ name: 'Quit\n', value: 'quit' });

    const answer = await select({
      message: 'Choose an option:',
      choices,
    });

    if (answer === 'quit') {
      logger.info('Bye Bye...');
      process.exit(0);
    }

    await answer();

    displayMenu();
  } catch (err) {
    logger.error(err, 'ERROR trying to run the command selected');
  }
}

process.on('SIGINT', () => {
  logger.info('Bye Bye...');
  process.exit(0);
});

displayMenu();
