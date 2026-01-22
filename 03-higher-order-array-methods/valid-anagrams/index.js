const validAnagrams = (str1, str2) => {
  const freqCount1 = str1.split("").reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});

  const freqCount2 = str2.split("").reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});

  return Object.keys(freqCount1).every(
    (char) => freqCount1[char] === freqCount2[char],
  );

  //   for (const key in freqCount1) {
  //     if (freqCount1[key] !== freqCount2[key]) return false;
  //   }
  //   return true;
};

const res = validAnagrams("listen", "silent");
console.log(res);
