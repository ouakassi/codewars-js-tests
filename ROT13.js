function rot13(message) {
  const alphabites = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const ciphredAlphabites =
    "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM";

  return message.replace(/[a-z]/gi, (letter) => {
    let index = alphabites.indexOf(letter);
    return ciphredAlphabites[index];
  });
}

// function rot13(message) {
//   const alphabites = "abcdefghijklmnopqrstuvwxyz".split("");
//   const ciphredAlphabites = "nopqrstuvwxyzabcdefghijklm".split("");
//   const newMessage = [];

//   message.split("").map((msgChar) => {
//     alphabites.map((char, i) => {
//       if (char.toLowerCase() === msgChar.toLowerCase()) {
//         msgChar === msgChar.toUpperCase()
//           ? newMessage.push(ciphredAlphabites[i].toUpperCase())
//           : newMessage.push(ciphredAlphabites[i]);
//       }
//     });
//   });

//   return newMessage.join("");
// }

console.log(rot13("test")); // grfg
console.log(rot13("Test")); // Grfg
