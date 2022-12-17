#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { askName } from '../src/cli.js';
import { getRandomNumber } from '../src/lib.js';

const { name } = askName();

const ROUNDS = 3;

const playIsOddEvenGame = ({ playerName }) => {
  let isSuccess;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const playRound = ({ playerName }) => {
    const number = getRandomNumber(1, 50);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');

    const solution = number % 2 === 0 ? 'yes' : 'no';

    if (answer === solution) {
      console.log('Correct!');

      isSuccess = true;
    } else {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${solution}'.`
      );
      console.log(`Let's try again, ${playerName}!`);

      isSuccess = false;
    }
  };

  for (let i = 1; i <= ROUNDS; i++) {
    playRound({ playerName });

    if (!isSuccess) {
      break;
    }
  }

  if (isSuccess) {
    console.log(`Congratulations, ${playerName}!`);
  }
};

playIsOddEvenGame({ playerName: name });
