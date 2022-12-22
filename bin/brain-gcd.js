#!/usr/bin/env node
import { getRandomNumber } from '../src/lib.js';
import { playGame } from '../src/index.js';

const getGcd = (a, b) => {
  if (b) {
    return getGcd(b, a % b);
  }

  return Math.abs(a);
}

playGame({
  description: 'Find the greatest common divisor of given numbers.',
  playRound: () => {
    const number1 = getRandomNumber(1, 50);
    const number2 = getRandomNumber(1, 50);

    
    const question = `Question: ${number1} ${number2}`;
    
    console.log(question);
    const solution = String(getGcd(number1, number2));

    return {
      solution,
    };
  },
});
