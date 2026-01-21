const firstNonRepeating = (str) => {
  const count = {};

  for (const char of str) {
    count[char] = (count[char] || 0) + 1;
  }

  for (const char of str) {
    if (count[char] == 1) return char;
  }

  return null;
};

const res = firstNonRepeating("abac");
console.log(res);
