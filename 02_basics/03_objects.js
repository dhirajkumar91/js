// object literals

const mySymbol = Symbol("key1"); //to use it as symbol we write it using square brackets inside the object

const JsUser = {
    name: "Dhiraj",
    //"full name": "Dhiraj Kumar", // if we write it in this way then we can't access it using dot operator
    age: 18,
    location: "Bengaluru",
    [mySymbol]: "myKey1",
    email: "dhiraj@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// There are two ways to access the elements of objects
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser[mySymbol]);

JsUser.email = "dhiraj@chatgpt.com"
//console.log(JsUser.email);
//Object.freeze(JsUser); // Now, no changes can be done to the object
JsUser.email = "dhiraj@1234.com";
//console.log(JsUser.email);

JsUser.greeting = function() {
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());