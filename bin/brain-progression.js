#!/usr/bin/env node
import { getRandomNumber } from "../src/lib.js";
import { playGame } from "../src/index.js";

const PROGRESSION_LENGTH = 10;

const getProgression = (start, step) => {
  const iter = (progression, length) => {
    if (length === PROGRESSION_LENGTH) {
      return progression;
    }

    const nextNumber = start + step * length;
    return iter([...progression, nextNumber], length + 1);
  };

  return iter([], 0);
};

playGame({
  description: "What number is missing in the progression?",
  playRound: () => {
    const startNumber = getRandomNumber(1, 50);
    const progressionStep = getRandomNumber(-10, 10);
    const progression = getProgression(startNumber, progressionStep);
    const hiddenElementIndex = getRandomNumber(0, progression.length - 1);

    const progressionWithHiddenElement = progression.slice();
    const solution = String(
      progressionWithHiddenElement.splice(hiddenElementIndex, 1, "..")
    );

    const question = progressionWithHiddenElement.join(" ");

    console.log(question);

    return {
      solution,
    };
  },
});
