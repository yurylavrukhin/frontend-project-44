import getRandomNumber from '../lib.js';
import playGame from '../index.js';

const MINIMUM_NUMBER = 1;
const MAXIMUM_NUMBER = 50;

const getGcd = (a, b) => {
  if (b) {
    return getGcd(b, a % b);
  }

  return Math.abs(a);
};

export default () => playGame({
  description: 'Find the greatest common divisor of given numbers.',
  playRound: () => {
    const number1 = getRandomNumber(MINIMUM_NUMBER, MAXIMUM_NUMBER);
    const number2 = getRandomNumber(MINIMUM_NUMBER, MAXIMUM_NUMBER);

    const question = `${number1} ${number2}`;

    const solution = String(getGcd(number1, number2));

    return {
      question,
      solution,
    };
  },
});
