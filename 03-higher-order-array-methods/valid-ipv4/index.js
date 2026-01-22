const validIpV4 = (ip) => {
  const octets = ip.split(".");
  if (octets.length != 4) return false;

  return octets.every((octet) => {
    const num = parseInt(octet);

    return num >= 0 && num <= 255 && octet === num.toString();
  });
};

const res = validIpV4("123.045.65.89");
console.log(res);
