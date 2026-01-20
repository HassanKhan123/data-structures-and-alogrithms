const palindrome = (str) => {
  const formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  if (formattedStr == "") return true;

  for (let i = 0; i < formattedStr.length / 2; i++) {
    if (formattedStr[i] !== formattedStr[formattedStr.length - 1 - i]) {
      return false;
    }
  }

  return true;
};

const res = palindrome("racecarracecarracecarracecar");
console.log(res);
