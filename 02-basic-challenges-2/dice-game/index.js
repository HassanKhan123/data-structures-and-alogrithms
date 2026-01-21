const rollDice = () => Math.floor(Math.random() * 6) + 1;

const diceGameSimulation = (num) => {
  const results = [];

  for (let i = 0; i < num; i++) {
    let dice1 = rollDice();
    let dice2 = rollDice();

    const sum = dice1 + dice2;
    const result =
      sum == 7 || sum == 11
        ? "win"
        : sum == 2 || sum == 3 || sum == 12
          ? "lose"
          : "roll again";

    results.push({
      dice1,
      dice2,
      sum,
      result,
    });
  }

  return results;
};

const res = diceGameSimulation(5);
console.log(res);
