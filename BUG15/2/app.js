let myString = "EElllzzzzzzzeroo";
// Elzero

let res = new Array(...myString);

res = res
  .filter((item, index) => {
    return myString.indexOf(item) === index;
  })
  .join("");

// res = res
//   .filter((item, index) => {
//     return myString.indexOf(item) === index;
//   })
//   .reduce((acc, cur) => acc + cur);
console.log(res);
