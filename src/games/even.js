#!/usr/bin/env node
import { getRandomNumber } from "../lib.js";
import { playGame } from "../index.js";

const MINIMUM_NUMBER = 1;
const MAXIMUM_NUMBER = 50;

export const play = () =>
  playGame({
    description: 'Answer "yes" if the number is even, otherwise answer "no".',
    playRound: () => {
      const number = getRandomNumber(MINIMUM_NUMBER, MAXIMUM_NUMBER);

      const question = `Question: ${number}`;

      console.log(question);
      const solution = number % 2 === 0 ? "yes" : "no";

      return {
        solution,
      };
    },
  });
