const removeDuplicates = (arr) => {
  const unique = [];

  for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
      unique.push(arr[i]);
    }
  }

  return unique;

  //   return [...new Set(arr)];
};

const res = removeDuplicates([
  1,
  "hello",
  true,
  2,
  1,
  true,
  "hello",
  2,
  3,
  4,
  5,
]);
console.log(res);
