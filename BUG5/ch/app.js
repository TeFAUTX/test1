/*
    Number Challenge
*/

let a = 100;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// Find Smallest Number In All Variables And Return Integer
console.log(Math.min(a, b, c, d));

// Use Variables a And d One Time To Get The Needed Output
console.log(a * c); // Output => 10000

// Get Integer "2" From d Variable With 4 Methods
console.log(parseInt(d));
console.log(parseInt(d.toFixed(0)));
console.log(Math.trunc(d));
console.log(Math.round(d));

// Use Variables b + d To Get The Needed Output
console.log((parseInt(b) / Math.ceil(d)).toFixed(parseInt(d))); // Output => 66.67 (String)
console.log(Math.ceil(parseInt(b) / Math.ceil(d))); // Output => 67 (Number)
