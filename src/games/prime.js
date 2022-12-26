#!/usr/bin/env node
import getRandomNumber from '../lib.js';
import playGame from '../index.js';

const MINIMUM_NUMBER = 1;
const MAXIMUM_NUMBER = 50;

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

export default () => playGame({
  description: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  playRound: () => {
    const number = getRandomNumber(MINIMUM_NUMBER, MAXIMUM_NUMBER);

    const solution = isPrime(number) ? 'yes' : 'no';

    return {
      question: number,
      solution,
    };
  },
});
