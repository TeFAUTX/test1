let start = 0;
let swappedName = "elZerO";

// method 1
// let result = "";
// for (let i = start; i < swappedName.length; i++) {
//   let char = swappedName[i];
//   if (char == char.toLocaleLowerCase()) {
//     result += char.toUpperCase();
//   } else {
//     result += char.toLowerCase();
//   }
// }
// console.log(result);

// method 2

// Output => "ELzERo"
let result = [];
for (let i = start; i < swappedName.length; i++) {
  swappedName[i] === swappedName[i].toLowerCase()
    ? result.push(swappedName[i].toUpperCase())
    : result.push(swappedName[i].toLowerCase());
}

console.log(result.join(""));
// Output
("ELzERo");
