#!/usr/bin/env node
console.log('Welcome to the Brain Games!');

import readlineSync from 'readline-sync';

const name = readlineSync.question('May I have your name? ');

console.log(`Hello, ${name}!`)
