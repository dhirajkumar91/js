const user = {
    username: "dhiraj",
    price: 999,

    welcomeMessage: function() {
        // console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }

}

// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();

// console.log(this);

// function chai() {
//     let username = "dhiraj"
//     console.log(this.username); // gives undefined
// }

// chai()

// const chai = function () {
//     let username = "dhiraj"
//     console.log(this.username); // gives undefined
// }

// chai()

// const chai = () => {
//     let username = "dhiraj"
//     console.log(this.username); // undefined
// }

// chai()

const addTwo = (num1, num2) => {
    return num1 + num2
}

// const addTwo = (num1, num2) => ({username: "dhiraj"})
console.log(addTwo(3, 4));