const arrayIntersection = (arr1, arr2) => {
  const common = [];

  //   for (let i = 0; i < arr1.length; i++) {
  //     if (arr2.includes(arr1[i]) && !common.includes(arr1[i])) {
  //       common.push(arr1[i]);
  //     }
  //   }

  const set1 = new Set(arr1);

  for (let num of arr2) {
    if (set1.has(num)) {
      common.push(num);
    }
  }
  return common;
};

const res = arrayIntersection([1, 1, 2, 3, 4, 5], [1, 1, 5, 6, 7, 8]);
console.log(res);
