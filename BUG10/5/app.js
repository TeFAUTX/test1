let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
if (haystack.includes(needle)) {
  console.log("Found");
}

haystack.forEach((e) => {
  if (e === needle) {
    console.log("Found");
  }
});

if (haystack.indexOf(needle)) {
  console.log("Found");
}

if (haystack.lastIndexOf(needle) !== 0) {
  console.log("Found");
}
