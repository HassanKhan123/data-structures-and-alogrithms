const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    const currentElement = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > currentElement) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = currentElement;
  }

  return arr;
};

const res = insertionSort([4, 3, 2, 10, 12, 1, 5, 6]);
console.log(res);
