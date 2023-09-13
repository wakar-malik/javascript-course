"use strict";

// logical operator --> ||, &&, !
// falsy values --> 0, '', undefined, null, NaN

// if (0 || 10) {
//   console.log("working");
// }

// console.log(10 || "" || undefined || 10);

if (0 && 10) {
  console.log("working");
}

console.log(10 && undefined && 10);
