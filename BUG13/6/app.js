function multiply(...args) {
  let res = 1;
  for (let i = 0; i < args.length; i++) {
    if (typeof args[i] === "number") {
      res *= parseInt(args[i]);
    }
  }
  console.log(res);
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
