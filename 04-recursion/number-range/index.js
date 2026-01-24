const numberRange = (start, end) => {
  if (start > end) return [];
  if (start == end) return [start];

  return [start, ...numberRange(start + 1, end)];
};

const res = numberRange(1, 15);
console.log(res);
