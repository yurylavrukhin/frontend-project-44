import readlineSync from "readline-sync";

const DEFAULT_NAME = "Guest";

export const askName = () => {
  console.log("Welcome to the Brain Games!");

  const name = readlineSync.question("May I have your name? ") || DEFAULT_NAME;

  console.log(`Hello, ${name}!`);

  return { name };
};
