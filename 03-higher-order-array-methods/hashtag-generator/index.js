const hashtagGenerator = (str) => {
  if (str.trim() === "") return false;

  const hashtag = str
    .trim()
    .split(" ")
    .reduce((tag, word) => {
      return tag + word[0].toUpperCase() + word.substring(1).toLowerCase();
    }, "#");

  return hashtag.length > 140 ? false : hashtag;
};

const res = hashtagGenerator(" javascript is amazing");
console.log(res);
