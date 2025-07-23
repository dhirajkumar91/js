const name = "dhiraj"
const repoCount = 50

//console.log(name + repoCount + " value "); // not a good way, prefer writing using backticks

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('dhiraj')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('i'));

const newString = gameName.substring(0, 4); // 4 is not included
console.log(newString);

const anotherString = gameName.slice(-8, 4); // negative values gives the result from reverse order
console.log(anotherString);

const newStringOne = "   dhiraj   ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://dhiraj.com/dhiraj%20kumar"
console.log(url.replace('%20', '-'))
console.log(url.includes('sundar'))
console.log(gameName.split(' ')); // splitting on the basis of spaces