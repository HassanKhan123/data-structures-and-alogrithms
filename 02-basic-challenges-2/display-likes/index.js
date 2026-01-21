const displayLikes = (names) => {
  const length = names.length;
  if (length == 0) return "no one likes this";
  if (length == 1) return `${names[0]} like this`;
  if (length == 2) return `${names[0]} and ${names[1]}  like this`;
  if (length == 3) return `${names[0]}, ${names[1]} and ${names[2]}  like this`;

  return `${names[0]}, ${names[1]} and ${length - 2} others like this`;
};

const res = displayLikes(["Peter", "Alex", "Max", "Hassan", "Khan"]);
console.log(res);
