function highAndLow(numbers) {
  const numbersArray = numbers.split(" ");

  const maxValue = Math.max(...numbersArray);
  const lowValue = Math.min(...numbersArray);

  console.log(numbersArray);

  return `${maxValue} ${lowValue}`;
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
