let imgArr = document.querySelectorAll("img[decoding='async']");
for (let i = 0; i < imgArr.length; i++) {
  if (imgArr[i].hasAttribute("alt")) {
    imgArr[i].setAttribute("alt", "Old");
  } else {
    imgArr[i].setAttribute("alt", "Elzero New");
  }
}
