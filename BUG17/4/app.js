let one = document.querySelector("div.one");
let tow = document.querySelector("div.two");
[one.innerHTML, one.title, tow.innerHTML, tow.title] = [
  tow.innerHTML,
  tow.title,
  one.innerHTML + " 2",
  one.title,
];
