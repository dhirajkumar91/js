// ++++++++++ Numbers +++++++++++
const score = 439
//console.log(score);

const balance = new Number(429);
//console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); // used to give the digits after decimal

const otherNumber = 125.432
//console.log(otherNumber.toPrecision(4));

const hundreds = 10000000;
//console.log(hundreds.toLocaleString('en-IN'));



// ++++++++++++++ Maths +++++++++++++
// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2)); // It is also a method to round-off but to a value of greater number means here 4-2 => 5
// console.log(Math.floor(4.2)); // It is used to round-off the value to the lower vslue here 4.2 => 4
// console.log(Math.min(4, 2, 6, 1));


console.log(Math.random());
console.log(Math.floor(Math.random()*10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max-min)+1) + min);