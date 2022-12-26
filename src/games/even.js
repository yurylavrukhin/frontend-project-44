#!/usr/bin/env node
import getRandomNumber from '../lib.js';
import playGame from '../index.js';

const MINIMUM_NUMBER = 1;
const MAXIMUM_NUMBER = 50;

const isEven = (number) => number % 2 === 0;

export default () => playGame({
  description: 'Answer "yes" if the number is even, otherwise answer "no".',
  playRound: () => {
    const number = getRandomNumber(MINIMUM_NUMBER, MAXIMUM_NUMBER);

    const solution = isEven(number) ? 'yes' : 'no';

    return {
      question: number,
      solution,
    };
  },
});
