let arr = document.querySelectorAll("img");
for (let i = 0; i < arr.length; i++) {
  arr[i].setAttribute(
    "src",
    "https://elzero.org/wp-content/themes/elzero/imgs/logo.png"
  );
  arr[i].setAttribute("alt", "Elzero Logo");
}
