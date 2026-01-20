const countOccurrences = (str, char) => {
  let count = 0;

  //   for (let i = 0; i < str.length; i++) {
  //     if (str[i] == char) {
  //       count++;
  //     }
  //   }

  return str.split(char).length - 1;

  //   return count;
};

const res = countOccurrences("hello world life", "l");
console.log(res);
