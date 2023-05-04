function getCount(str) {
  let counter = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  const stringArray = str.split("");
  stringArray.map((c) => {
    if (vowels.includes(c)) counter += 1;
  });
  return counter;
}

console.log(getCount("abracadabreeeeiou"));
