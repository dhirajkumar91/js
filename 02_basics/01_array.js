// array

const myArr = [0, 2, 5, 54, 3, 6];
const myHeros = ["shaktiman", "naagraj"];

const myArr2 = new Array(1, 2, 4, 6);
// console.log(myArr[4]);

// Array methods

// myArr.push(439);
// myArr.pop();

// myArr.unshift(9);
// myArr.shift();

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(4));

const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3);

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3);
console.log("C ", myArr);
console.log(myn2);