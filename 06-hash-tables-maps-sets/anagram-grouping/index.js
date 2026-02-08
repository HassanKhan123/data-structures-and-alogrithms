const anagramGrouping = (words) => {
  const anagramGroups = new Map();

  for (const word of words) {
    const sortedChars = word.split("").sort().join("");

    if (anagramGroups.has(sortedChars)) {
      anagramGroups.get(sortedChars).push(word);
    } else {
      anagramGroups.set(sortedChars, [word]);
    }
  }

  console.log(anagramGroups);

  return Array.from(anagramGroups.values());
};

const res = anagramGrouping(["cat", "act", "dog", "god", "tac"]);
console.log(res);
