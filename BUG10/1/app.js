let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

console.log(myFriends.slice(num - num, num)); // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends.pop();
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];
let myFriends2 = ["Ahmed", "Elham", "Osama", "Gamal"];
console.log(myFriends2.splice(num - num, num));
let myFriends3 = ["Ahmed", "Elham", "Osama", "Gamal"];

myFriends3.reverse().shift();

console.log(myFriends3.reverse());
let myFriends4 = ["Ahmed", "Elham", "Osama", "Gamal"];
myFriends4.length = num;
console.log(myFriends4);
