#!/usr/bin/env node

import type {AxiosError} from 'axios';
import {program as commander} from 'commander';
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
    throw new Error('The specified path does not exist or is not writable.');
  }
}

async function save(filePath: string, imageResult: JokeResultWithImage, silent = false): Promise<void> {
  const {id, image} = imageResult;

  const resolvedFilePath = path.resolve(filePath, `dad_joke_${id}.png`);
  await fsAsync.writeFile(resolvedFilePath, image);
  if (!silent) {
    console.info(`Saved image to "${resolvedFilePath}".`);
  }
}

const {description, name, version}: {description: string; name: string; version: string} = require('../package.json');

commander.on('command:*', () => commander.help());

commander
  .name(name.replace(/^@[^/]+\//, ''))
  .version(version, '-v, --version')
  .description(description)
  .option('-o, --output <dir>', 'Specify the output directory', path.resolve('.'))
  .option('-i, --image', 'Save the joke as image')
  .option('-s, --silent', `Don't output save messages`);

commander
  .command('random')
  .description('Fetch a random joke')
  .action(async command => {
    try {
      const [resolvedPath, iCanHazDadJoke] = await init(command.parent.output);
      const result = await iCanHazDadJoke.api.getRandom({withImage: !!command.parent.image});
      console.info(result.joke);
      if (command.parent.image) {
        await save(resolvedPath, result as JokeResultWithImage, !!command.parent.silent);
      }
    } catch (error) {
      console.error(`Error: ${(error as AxiosError).message}`);
      commander.outputHelp();
      process.exit(1);
    }
  });

commander
  .command('id <id>')
  .description('Fetch joke by id')
  .action(async (id, command) => {
    try {
      const [resolvedPath, iCanHazDadJoke] = await init(command.parent.output);
      const result = await iCanHazDadJoke.api.getById(id, {withImage: !!command.parent.image});
      console.info(result.joke);
      if (command.parent.image) {
        await save(resolvedPath, result as JokeResultWithImage, !!command.parent.silent);
      }
    } catch (error) {
      console.error(`Error: ${(error as AxiosError).message}`);
      commander.outputHelp();
      process.exit(1);
    }
  });

commander.parse(process.argv);

if (!process.argv.slice(2).length) {
  commander.outputHelp();
  process.exit(1);
}
