function createPhoneNumber(numbers) {
  const phoneNumbers = numbers.map((number) => {
    if (number > 9 || number < 0) {
      return null;
    } else {
      return number;
    }
  });
  console.log(phoneNumbers.slice(0, 3).join(""));
  const areaCode = phoneNumbers.slice(0, 3).join("");
  const firstPart = phoneNumbers.slice(3, 6).join("");
  const secondPart = phoneNumbers.slice(6).join("");

  return `(${areaCode}) ${firstPart}-${secondPart}`;
}

console.log(createPhoneNumber([1, 2, 3, 5, 6, 8, 4, 9, 5, 2])); // Output: "(123) 568-4952"
