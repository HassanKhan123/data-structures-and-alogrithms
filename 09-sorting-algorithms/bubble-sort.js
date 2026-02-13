const bubbleSort1 = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
};

const bubbleSort2 = (arr) => {
  let swapped = false;
  while (!swapped) {
    swapped = true;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = false;
      }
    }
  }

  return arr;
};

const res1 = bubbleSort1([5, 4, 2, 1]);
console.log(res1);

const res2 = bubbleSort2([5, 4, 2, 1]);
console.log(res2);
