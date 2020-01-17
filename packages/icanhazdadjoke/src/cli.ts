#!/usr/bin/env node

import * as program from 'commander';
import {constants as fsConstants, promises as fsAsync} from 'fs';
import * as path from 'path';

import {ICanHazDadJoke, JokeResultWithImage} from './';

async function init(dir: string = '.'): Promise<[string, ICanHazDadJoke]> {
  const resolvedPath = path.resolve(dir);

  try {
    await fsAsync.access(resolvedPath, fsConstants.F_OK | fsConstants.R_OK);
    const iCanHazDadJoke = new ICanHazDadJoke();
    return [resolvedPath, iCanHazDadJoke];
  } catch (error) {
    throw new Error(`The specified path does not exist or is not writable.`);
  }
}

async function save(filePath: string, imageResult: JokeResultWithImage, silent = false): Promise<void> {
  const {id, image} = imageResult;

  const resolvedFilePath = path.resolve(filePath, `dad_joke_${id}.png`);
  await fsAsync.writeFile(resolvedFilePath, image);
  silent || console.info(`Saved image to "${resolvedFilePath}".`);
}

const {description, name, version}: {description: string; name: string; version: string} = require('../package.json');

program.on('command:*', () => program.help());

program
  .name(name.replace(/^@[^/]+\//, ''))
  .version(version, '-v, --version')
  .description(description)
  .option('-o, --output <dir>', 'Specify the output directory', path.resolve('.'))
  .option('-i, --image', 'Save the joke as image')
  .option('-s, --silent', `Don't output save messages`);

program
  .command('random')
  .description('Fetch a random joke')
  .action(async command => {
    try {
      const [resolvedPath, iCanHazDadJoke] = await init(command.parent.output);
      const result = await iCanHazDadJoke.api.getRandom({withImage: !!command.parent.image});
      console.log(result.joke);
      if (command.parent.image) {
        await save(resolvedPath, result as JokeResultWithImage, !!command.parent.silent);
      }
    } catch (error) {
      console.error(`Error: ${error.message}`);
      program.outputHelp();
      process.exit(1);
    }
  });

program
  .command('id <id>')
  .description('Fetch joke by id')
  .action(async (id, command) => {
    try {
      const [resolvedPath, iCanHazDadJoke] = await init(command.parent.output);
      const result = await iCanHazDadJoke.api.getById(id, {withImage: !!command.parent.image});
      console.log(result.joke);
      if (command.parent.image) {
        await save(resolvedPath, result as JokeResultWithImage, !!command.parent.silent);
      }
    } catch (error) {
      console.error(`Error: ${error.message}`);
      program.outputHelp();
      process.exit(1);
    }
  });

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
  process.exit(1);
}
