#!usr/bin/env node

const commander = require('commander');
const programm = new commander.Command();

programm
    .option('-V', '--version', 'output the version number')
    .option('-h', '--help', 'output usage information');
