#!/usr/bin/env node
import { getRandomNumber } from "../src/lib.js";
import { playGame } from "../src/index.js";

playGame({
  description: 'Answer "yes" if the number is even, otherwise answer "no".',
  playRound: () => {
    const number = getRandomNumber(1, 50);
    const question = `Question: ${number}`;

    console.log(question);
    const solution = number % 2 === 0 ? "yes" : "no";

    return {
      solution,
    };
  },
})