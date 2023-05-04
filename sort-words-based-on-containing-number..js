function order(words) {
  return words
    .split(" ")
    .sort((a, b) => /\d/.exec(a) - /\d/.exec(b))
    .join(" ");
}

console.log(order("is2 Thi1s T4est 3a "));
//Thi1s is2 3a T4est
