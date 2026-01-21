const formatPhoneNumber = (numbers) => {
  const phoneNumber = numbers.join("");
  return `(${phoneNumber.substring(0, 3)}) ${phoneNumber.substring(3, 6)}-${phoneNumber.substring(6)}`;
};

const res = formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
console.log(res);
