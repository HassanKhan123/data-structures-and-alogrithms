const findMissingLetter = (chars) => {
  //   const alphabets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  //   const startIndex = alphabets.indexOf(chars[0]);

  //   for (let i = 0; i < chars.length; i++) {
  //     if (chars[i] != alphabets[startIndex + i]) {
  //       return alphabets[startIndex + i];
  //     }
  //   }

  //   return "";

  let start = chars[0].charCodeAt();
  for (let i = 0; i < chars.length; i++) {
    const current = chars[i].charCodeAt(0);

    if (current - start > 1) return String.fromCharCode(start + 1);

    start = current;
  }
};

const res = findMissingLetter(["a", "b", "c", "d", "e", "g"]);
console.log(res);
