let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let res = mix
  .map((e) => (typeof e === "string" ? e : ""))
  .reduce((acc, cur) => acc + cur);
console.log(res);
