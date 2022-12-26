#!/usr/bin/env node
import getRandomNumber from '../lib.js';
import playGame from '../index.js';

const PROGRESSION_LENGTH = 10;
const MINIMUM_STARTING_NUMBER = 1;
const MAXIMUM_STARTING_NUMBER = 50;
const MINIMUM_STEP_NUMBER = 1;
const MAXIMUM_STEP_NUMBER = 50;
const HIDDEN_ITEM_CHAR = '..';

const getProgression = (start, step, progressionLength) => {
  const iter = (progression, length) => {
    if (length === progressionLength) {
      return progression;
    }

    const nextNumber = start + step * length;
    return iter([...progression, nextNumber], length + 1);
  };

  return iter([], 0);
};

export default () => playGame({
  description: 'What number is missing in the progression?',
  playRound: () => {
    const startNumber = getRandomNumber(
      MINIMUM_STARTING_NUMBER,
      MAXIMUM_STARTING_NUMBER,
    );
    const progressionStep = getRandomNumber(
      MINIMUM_STEP_NUMBER,
      MAXIMUM_STEP_NUMBER,
    );
    const progression = getProgression(startNumber, progressionStep, PROGRESSION_LENGTH);
    const hiddenElementIndex = getRandomNumber(0, progression.length - 1);

    const progressionWithHiddenElement = progression.slice();
    const solution = String(
      progressionWithHiddenElement.splice(
        hiddenElementIndex,
        1,
        HIDDEN_ITEM_CHAR,
      ),
    );

    const question = `${progressionWithHiddenElement.join(' ')}`;

    return {
      question,
      solution,
    };
  },
});
