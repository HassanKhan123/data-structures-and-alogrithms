const flattenArray = (arr) => {
  let results = [];

  for (const item of arr) {
    if (Array.isArray(item)) {
      results = results.concat(flattenArray(item));
    } else {
      results.push(item);
    }
  }

  return results;
};

const res = flattenArray([1, [2, 3, [4, 5, 6]], [7, 8]]);
console.log(res);
