#!/usr/bin/env node

import type {AxiosError} from 'axios';
import {program as commander} from 'commander';
import {constants as fsConstants, promises as fs} from 'fs';
import * as path from 'path';

import {ICanHazDadJoke, JokeResultWithImage} from './';

interface CLIOptions {
  image?: boolean;
  output?: string;
  silent?: boolean;
}

async function init(dir: string = '.'): Promise<[string, ICanHazDadJoke]> {
  const resolvedPath = path.resolve(dir);

  try {
    await fs.access(resolvedPath, fsConstants.F_OK | fsConstants.R_OK);
    const iCanHazDadJoke = new ICanHazDadJoke();
    return [resolvedPath, iCanHazDadJoke];
  } catch {
    throw new Error('The specified path does not exist or is not writable.');
  }
}

async function save(filePath: string, imageResult: JokeResultWithImage, silent = false): Promise<void> {
  const {id, image} = imageResult;

  const resolvedFilePath = path.resolve(filePath, `dad_joke_${id}.png`);
  await fs.writeFile(resolvedFilePath, image);
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
  .option('-i, --image', 'Save the joke as image')
  .option('-o, --output <dir>', 'Specify the output directory', path.resolve('.'))
  .option('-s, --silent', `Don't output save messages`);

commander
  .command('random')
  .description('Fetch a random joke')
  .action(async () => {
    const options = commander.opts() as CLIOptions;
    try {
      const [resolvedPath, iCanHazDadJoke] = await init(options.output);
      const result = await iCanHazDadJoke.api.getRandom({withImage: !!options.image});
      console.info(result.joke);
      if (options.image) {
        await save(resolvedPath, result as JokeResultWithImage, !!options.silent);
      }
    } catch (error) {
      console.error(`Error: ${(error as AxiosError).message}`);
      process.exit(1);
    }
  });

commander
  .command('id')
  .argument('<id>', 'The joke ID')
  .description('Fetch joke by ID')
  .action(async id => {
    const options = commander.opts() as CLIOptions;
    try {
      const [resolvedPath, iCanHazDadJoke] = await init(options.output);
      const result = await iCanHazDadJoke.api.getById(id, {withImage: !!options.image});
      console.info(result.joke);
      if (options.image) {
        await save(resolvedPath, result as JokeResultWithImage, !!options.silent);
      }
    } catch (error) {
      console.error(`Error: ${(error as AxiosError).message}`);
      process.exit(1);
    }
  });

commander.parse(process.argv);

if (!process.argv.slice(2).length) {
  commander.outputHelp();
  process.exit(1);
}
