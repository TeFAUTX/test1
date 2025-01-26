function createSelectBox(startYear, endYear) {
  for (let i = startYear; i <= endYear; i++) {
    let div = document.createElement("div");
    div.setAttribute("value", i);
    div.innerHTML = i;
    document.body.appendChild(div);
  }
}
createSelectBox(2000, 2021);
