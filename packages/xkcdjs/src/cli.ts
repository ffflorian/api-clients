#!/usr/bin/env node

import {program as commander} from 'commander';
import {constants as fsConstants, promises as fsAsync} from 'fs';
import * as path from 'path';

import {XKCD, XKCDResultWithData} from './';

async function init(dir: string = '.'): Promise<[string, XKCD]> {
  const resolvedPath = path.resolve(dir);

  try {
    await fsAsync.access(resolvedPath, fsConstants.F_OK | fsConstants.R_OK);
    const xkcd = new XKCD();
    return [resolvedPath, xkcd];
  } catch (error) {
    throw new Error(`The specified path does not exist or is not writable.`);
  }
}

async function save(filePath: string, imageResult: XKCDResultWithData): Promise<void> {
  const {data, num, safe_title} = imageResult;

  const extension = data.mimeType ? data.mimeType.replace('image/', '') : 'png';

  const resolvedFilePath = path.resolve(filePath, `xkcd #${num} - ${safe_title}.${extension}`);
  await fsAsync.writeFile(resolvedFilePath, data.data);
  console.info(`Saved image to "${resolvedFilePath}".`);
}

const {description, name, version}: {description: string; name: string; version: string} = require('../package.json');

commander.on('command:*', () => commander.help());

commander
  .name(name.replace(/^@[^/]+\//, ''))
  .version(version, '-v, --version')
  .description(description)
  .option('-o, --output <dir>', 'Specify the output directory', path.resolve('.'));

commander
  .command('latest')
  .description('Save the latest comic')
  .action(async command => {
    try {
      const [resolvedPath, xkcd] = await init(command.parent.output);
      const imageData = await xkcd.api.getLatest({withData: true});
      await save(resolvedPath, imageData);
    } catch (error) {
      console.error(`Error: ${error.message}`);
      commander.outputHelp();
      process.exit(1);
    }
  });

commander
  .command('random')
  .description('Save a random comic')
  .action(async command => {
    try {
      const [resolvedPath, xkcd] = await init(command.parent.output);
      const imageData = await xkcd.api.getRandom({withData: true});
      await save(resolvedPath, imageData);
    } catch (error) {
      console.error(`Error: ${error.message}`);
      commander.outputHelp();
      process.exit(1);
    }
  });

commander
  .command('number <index>')
  .description('Save comic by index number')
  .action(async (index, command) => {
    let parsedIndex: number;
    try {
      parsedIndex = parseInt(index, 10);
    } catch (error) {
      throw new Error('Invalid number specified.');
    }
    try {
      const [resolvedPath, xkcd] = await init(command.parent.output);
      const imageData = await xkcd.api.getByIndex(parsedIndex, {withData: true});
      await save(resolvedPath, imageData);
    } catch (error) {
      console.error(`Error: ${error.message}`);
      commander.outputHelp();
      process.exit(1);
    }
  });

commander.parse(process.argv);

if (!process.argv.slice(2).length) {
  commander.outputHelp();
  process.exit(1);
}
