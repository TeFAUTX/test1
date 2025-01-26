function calculate(firstNum, secondNum, operation) {
  if (secondNum === undefined) {
    return console.log(`Second Number Not Found`);
  }
  switch (operation) {
    case "add":
    default:
      return console.log(firstNum + secondNum);
      break;
    case "subtract":
      return console.log(firstNum - secondNum);
      break;
    case "multiply":
      return console.log(firstNum * secondNum);
      break;
  }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600
