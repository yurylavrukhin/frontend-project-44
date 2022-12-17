export const getRandomNumber = (min, max) =>
  Math.floor(min + Math.random() * (max + 1 - min));
