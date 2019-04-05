#!/usr/bin/env node

import * as program from 'commander';
import * as fs from 'fs-extra';
import * as path from 'path';

import {XKCD, XKCDResultWithData} from './';

async function init(dir: string = '.'): Promise<[string, XKCD]> {
  const resolvedPath = path.resolve(dir);

  try {
    await fs.access(resolvedPath, fs.constants.F_OK | fs.constants.R_OK);
    const xkcd = new XKCD();
    return [resolvedPath, xkcd];
  } catch (error) {
    throw new Error(`The specified path does not exist or is not writable.`);
  }
}

async function save(filePath: string, imageResult: XKCDResultWithData) {
  const {data, num, safe_title} = imageResult;

  const extension = data.mimeType ? data.mimeType.replace('image/', '') : 'png';

  const resolvedFilePath = path.resolve(filePath, `xkcd #${num} - ${safe_title}.${extension}`);
  await fs.writeFile(resolvedFilePath, data.data);
  console.error(`Saved image to "${resolvedFilePath}".`);
}

const {description, name, version}: {description: string; name: string; version: string} = require('../package.json');

program.on('command:*', () => program.help());

program
  .name(name.replace(/^@[^/]+\//, ''))
  .version(version, '-v, --version')
  .description(description)
  .option('-o, --output <dir>', 'Specify the output directory', path.resolve('.'));

program
  .command('latest')
  .description('Save the latest comic')
  .action(async command => {
    try {
      const [resolvedPath, xkcd] = await init(command.parent.output);
      const imageData = await xkcd.api.getLatest({withData: true});
      await save(resolvedPath, imageData);
    } catch (error) {
      console.error(`Error: ${error.message}`);
      program.outputHelp();
      process.exit(1);
    }
  });

program
  .command('random')
  .description('Save a random comic')
  .action(async command => {
    try {
      const [resolvedPath, xkcd] = await init(command.parent.output);
      const imageData = await xkcd.api.getRandom({withData: true});
      await save(resolvedPath, imageData);
    } catch (error) {
      console.error(`Error: ${error.message}`);
      program.outputHelp();
      process.exit(1);
    }
  });

program
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
      program.outputHelp();
      process.exit(1);
    }
  });

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
  process.exit(1);
}
