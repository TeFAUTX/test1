let numOne = 10;
let numTwo = 20;
// Add Variables Here

// Ouput
console.log("" + numOne + numTwo); // Normal Concatenate => 1020
console.log(typeof ("" + numOne + numTwo)); // Normal Concatenate => String
console.log(`${numOne}${numTwo}`); // Template Literals Way => 1020
console.log(typeof `${numOne}${numTwo}`); // Template Literals Way => String

console.log(numOne + "\n" + numTwo);
/*
  Normal Concatenate
  20
  10
*/

console.log(`${numOne}
${numTwo}`);
/*
  Template Literals Way
  20
  10
*/
