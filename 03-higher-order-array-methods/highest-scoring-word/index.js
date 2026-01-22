const highestScoringWord = (str) => {
  const words = str.split(" ");

  const scores = words.map((word) => {
    // let score = 0;
    // for (const letter of word) {
    //   score += letter.charCodeAt(0) - 96;
    // }
    // return score;
    return Array.from(word).reduce(
      (score, letter) => score + letter.charCodeAt(0) - 96,
      0,
    );
  });

  //   let highestScore = 0;
  //   let highestIndex = 0;

  //   for (let i = 0; i < scores.length; i++) {
  //     if (scores[i] > highestScore) {
  //       highestScore = scores[i];
  //       highestIndex = i;
  //     }
  //   }

  const highestScore = Math.max(...scores);
  const highestIndex = scores.indexOf(highestScore);

  return words[highestIndex];
};

const res = highestScoringWord("my name is xavier");
console.log(res);
