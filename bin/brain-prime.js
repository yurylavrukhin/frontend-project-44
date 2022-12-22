#!/usr/bin/env node
import { getRandomNumber } from "../src/lib.js";
import { playGame } from "../src/index.js";

const getIsPrime = (num) => {
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

playGame({
  description: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  playRound: () => {
    const number = getRandomNumber(1, 50);

    const question = `Question: ${number}`;

    console.log(question);
    const solution = getIsPrime(number) ? "yes" : "no";

    return {
      solution,
    };
  },
});
