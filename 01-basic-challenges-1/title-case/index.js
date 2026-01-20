const titleCase = (str) => {
  return str
    .toLowerCase()
    .split(" ")
    .map((s) => s[0].toUpperCase() + s.slice(1))
    .join(" ");
};

const res = titleCase("sHoRt AnD sToUt");
console.log(res);
