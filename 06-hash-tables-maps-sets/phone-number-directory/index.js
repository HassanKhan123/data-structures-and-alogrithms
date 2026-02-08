const phoneNumberDirectory = (phoneNumbers) => {
  const phoneMap = new Map();

  for (const phone of phoneNumbers) {
    const [name, number] = phone.split(":");
    phoneMap.set(name, number);
  }

  return phoneMap;
};

const res = phoneNumberDirectory([
  "John:123-456-789",
  "Jane:423-456-789",
  "Mike:234-456-789",
]);
console.log(res);
