import getRandomNumber from '../lib.js';
import playGame from '../index.js';

const OPERATORS = ['+', '-', '*'];
const MINIMUM_NUMBER = 1;
const MAXIMUM_NUMBER = 10;

const getExpressionResult = (operator, firstOperand, secondOperand) => {
  switch (operator) {
    case '+':
      return firstOperand + secondOperand;
    case '-':
      return firstOperand - secondOperand;
    case '*':
      return firstOperand * secondOperand;
    default:
      return null;
  }
};

export default () => playGame({
  description: 'What is the result of the expression?',
  playRound: () => {
    const operator = OPERATORS[Math.floor(Math.random() * OPERATORS.length)];

    const number1 = getRandomNumber(MINIMUM_NUMBER, MAXIMUM_NUMBER);
    const number2 = getRandomNumber(MINIMUM_NUMBER, MAXIMUM_NUMBER);
    const question = `Question: ${number1} ${operator} ${number2}`;

    console.log(question);

    const solution = String(getExpressionResult(operator, number1, number2));

    return {
      solution,
    };
  },
});
