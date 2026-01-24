const reverseString = (str) => {
  if (str == "") return "";

  return str[str.length - 1] + reverseString(str.substring(0, str.length - 1));
};

const reverseString1 = (str) =>
  str === "" ? "" : reverseString1(str.substr(1)) + str.charAt(0);

const res = reverseString1("hello");
console.log(res);
