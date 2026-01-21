const areAllCharsUnique = (str) => {
  if (str.length <= 1) return true;

  const count = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (count[char]) return false;
    count[char] = true;
  }

  return true;
};

const res = areAllCharsUnique("hasnA");
console.log(res);
