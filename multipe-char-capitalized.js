function accum(s) {
  const array = s.split("");
  let newArray = [];
  array.map((char, i) => {
    newArray.push(char.toUpperCase().padEnd(i + 1, char.toLowerCase()));
  });
  return newArray.join("-");
}

console.log(accum("ZpglnRxqenU"));
console.log(accum("NyffsGeyylB"));
console.log(accum("MjtkuBovqrU"));
console.log(accum("HbideVbxncC"));
