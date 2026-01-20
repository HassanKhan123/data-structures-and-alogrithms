const countVowels = (str) => {
  const vowels = ["a", "e", "i", "o", "u"];
  const formattedStr = str.toLowerCase();
  let count = 0;

  for (let i = 0; i < formattedStr.length; i++) {
    if (vowels.includes(formattedStr[i])) {
      count++;
    }
  }

  return count;
};

const res = countVowels("hassan");
console.log(res);
