// Conversion of data types

let score = "32"; // can be converted into number 32
//let score = "342abc"; // on conversion to number it gives NaN
//  true => on converting gives 1, false => 0


//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);



let isLoggedIn = 1 // converted to true
// 0 => false
// empty string "" => false
// "Dhiraj" => true

let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn);



let someNumber = 33

let stringNumber = String(someNumber)
//console.log(stringNumber);
//console.log(typeof stringNumber);

// ***************** Operations *****************

let value = 3
let negValue = -value
//console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2); //power
// console.log(2/2);
// console.log(2%2); // remainder



let str1 = "hello";
let str2 = " dhiraj";

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2); // 12
// console.log(1 + "2"); // 12
// console.log("1" + 2 + 2); // 122
// console.log(1+ 2 + "2"); // 32

console.log(true); // true
console.log(+true); // 1 => means + likhne se conversion hota hai
console.log(+""); // 0