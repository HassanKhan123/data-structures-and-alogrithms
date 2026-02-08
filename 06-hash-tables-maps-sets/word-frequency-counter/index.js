const wordFrequencyCounter = (str) => {
  const wordMap = new Map();

  const words = str.toLowerCase().split(/\W+/);

  for (const word of words) {
    if (wordMap.has(word)) {
      wordMap.set(word, wordMap.get(word) + 1);
    } else {
      wordMap.set(word, 1);
    }
  }

  return wordMap;
};

const res = wordFrequencyCounter("The quick brown fox jumps over the lazy dog");
console.log(res);
