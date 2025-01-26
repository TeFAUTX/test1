let num = "10";

// Solution One
console.log(parseInt(num) + parseInt(num)); // 20

// Solution Two
console.log(parseInt(num) * (true + true)); // 20

// Solution Three
console.log((parseInt(num) * num * (true + true)) / num); // 20

// Solution Four
console.log(parseInt(num) + parseInt(num) + parseInt(num) - num); // 20

// Solution five
console.log(parseInt(++num) + parseInt(--num) - true); // 20
