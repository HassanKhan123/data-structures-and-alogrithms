const passwordValidation = (password) => {
  if (password.length < 8) return false;

  const passwordArr = password.split("");

  const hasUpperCase = passwordArr.some(
    (char) => char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90,
  );

  const hasLowerCase = passwordArr.some(
    (char) => char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122,
  );

  const hasDigit = passwordArr.some(
    (char) => char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57,
  );

  return hasUpperCase && hasLowerCase && hasDigit;
};

const res = passwordValidation("HelloWorld123");
console.log(res);
