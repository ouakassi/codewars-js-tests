function narcissistic(value) {
  const numsArray = value.toString().split("");
  const digitsLenght = numsArray.length;
  let val = 0;

  numsArray.map((current) => {
    return (val = val + current ** digitsLenght);
  });
  return val === value;
}

console.log(narcissistic(153));
