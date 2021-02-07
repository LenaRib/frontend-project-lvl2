#!/usr/bin/env node
import program from 'commander';
import genDiff from '../src/parser.js';

program
  .usage('[options] <filepath1> <filepath2>')
  .helpOption('-h, --help', 'output usage information')
  .option('-V, --version', 'output the version number')
  .option('-f, --format [type]', 'output format')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>')
  .action(
    (filepath1, filepath2) => {
      genDiff(filepath1, filepath2);
    },
  )
  .parse(process.argv);

const options = program.opts();
if (options.help) {
  console.log('Options: ', program.opts());
}
