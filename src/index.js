import readlineSync from "readline-sync";
import { askName } from "./cli.js";

const ROUNDS = 3;

export const playGame = ({ description, playRound }) => {
  let isSuccess = true;
  const { name } = askName();

  console.log(description);

  for (let i = 1; i <= ROUNDS; i++) {
    const { solution } = playRound();

    const answer = readlineSync.question("Your answer: ");

    if (answer !== solution) {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${solution}'.`
      );
      isSuccess = false;
      break;
    }

    console.log("Correct!");
  }

  if (isSuccess) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};
