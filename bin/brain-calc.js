#!/usr/bin/env node
import { getRandomNumber } from '../src/lib.js';
import { playGame } from '../src/index.js';

const OPERATORS = ['+', '-', '*'];

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

playGame({
  description: 'What is the result of the expression?',
  playRound: () => {
    const operator = OPERATORS[Math.floor(Math.random() * OPERATORS.length)];

    const number1 = getRandomNumber(1, 10);
    const number2 = getRandomNumber(1, 10);
    const question = `Question: ${number1} ${operator} ${number2}`;

    console.log(question);

    const solution = String(getExpressionResult(operator, number1, number2));

    return {
      solution,
    };
  },
});
