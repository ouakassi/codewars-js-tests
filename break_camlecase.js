function solution(string) {
  return string
    .split("")
    .map((char, i) => {
      return char === char.toUpperCase() ? " " + char : char;
    })
    .join("");
}

console.log(solution("camelCasing")); // camel Casing
console.log(solution("camelCasingTest")); //camel Casing Test
