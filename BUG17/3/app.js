let inNum = document.querySelector("input[name='dollar']");
console.log(inNum);

inNum.addEventListener("input", () => {
  let numValue = inNum.value;
  let trans = numValue * 15.6;
  trans = trans.toFixed(2);
  let result = document.querySelector("div.result");
  result.innerHTML = `${numValue} USD Dollar = ${trans} Egyptian Pound`;
});
