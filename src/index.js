import readlineSync from 'readline-sync';

const ROUNDS = 3;
const DEFAULT_NAME = 'Guest';

export default ({ description, playRound }) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ') || DEFAULT_NAME;

  console.log(`Hello, ${name}!`);

  console.log(description);

  for (let i = 1; i <= ROUNDS; i += 1) {
    const { question, solution } = playRound();
    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ');

    if (answer !== solution) {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${solution}'.`,
      );
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};
