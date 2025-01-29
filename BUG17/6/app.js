let num = document.querySelector("form input[name='elements']");
let text = document.querySelector("form input[name='texts']");
let select = document.querySelector("form select[name='type']");
let submit = document.querySelector("form input[name='create']");
let results = document.querySelector("form div.results");

submit.addEventListener("click", function (e) {
  e.preventDefault();
  let numV = num.value;
  let textV = text.value;
  let selV = select.value;
  results.innerHTML = ``;
  for (let i = 1; i <= numV; i++) {
    let ele = document.createElement(`${selV}`);
    ele.classList.add("box");
  }
});
