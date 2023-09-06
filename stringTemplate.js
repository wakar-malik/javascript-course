const userName = "steven";
const userAge = 20;
const userAddress = "New Delhi";
const list = document.getElementById("list");

const arr = ["steven", "mark", "peter", "john"];

let html = "";

arr.forEach((friend) => (html += `<li><div>${friend}</div></li>`));

console.log(html);

list.insertAdjacentHTML("afterbegin", html);

// const userName2 = `steven`;

// console.log(
//   "My name is " +
//     userName +
//     ", " +
//     "I am " +
//     userAge +
//     "years old. " +
//     "i live in " +
//     userAddress
// );

// console.log("my name is steven,\ni live in new york,\ni am 20 years old.");

// console.log(
//   `my name is ${userName}, i am ${userAge} years old. I live in ${userAddress}.`
// );

// console.log(`my name is steven,
// i live in new york,
// i am 20 years old.`);
