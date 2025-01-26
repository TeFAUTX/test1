let num = 3;

// Solution One
console.log(num * (num - true)); // 6

// Solution Two
console.log((true + true) * num); // 6

// Soultion Three
console.log(num + num); // 6

// Soultion Four
console.log(num * num - num); // 6

console.log(num + num); // 6

console.log(num << Boolean(num)); // 6 (Left shift by 1 bit)

console.log(num + !!(num / num) + num / num + true); // 6 (Using Boolean casting)

console.log(num * true + num * true); // 6

console.log(num * num - num); // 6
