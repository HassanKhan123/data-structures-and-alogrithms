const findMissingLetter = (arr) => {
  let start = arr[0].charCodeAt(0);
  let missingChar = "";

  arr.slice(1).some((char) => {
    const current = char.charCodeAt(0);
    if (current - start > 1) {
      missingChar = String.fromCharCode(start + 1);
      return;
    }
    start = current;
    return false;
  });

  return missingChar;
};

const res = findMissingLetter(["a", "b", "d"]);
console.log(res);
