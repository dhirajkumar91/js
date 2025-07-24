// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// }
// addTwoNumbers(3, 5)

function addTwoNumbers(number1, number2) {
    // let result = number1 + number2;
    // return result;

    return number1 + number2;
}
const result = addTwoNumbers(3, 5)

//console.log("Result: ", result);



// rest operator (...value)

// function calculateCartPrice(...num1) {
//     return num1
// }
// console.log(calculateCartPrice(200, 400, 600));

function calculateCartPrice(val1, val2, ...num1) {
    return num1;
}
//console.log(calculateCartPrice(200, 400, 600, 2000)); // here val=200, val2=400, and in num1 it will prints [ 600, 2000 ]

// how to pass objects to function
const user = {
    username: "dhiraj",
    price: 199
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user);
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500]));