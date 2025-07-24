const tinderUser = new Object() // it is empty object also called singleton object
const tinderUser1 = {} // it is also empty object but not called singleton

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// nested objects
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "dhiraj",
            lastname: "kumar"
        }
    }
}

//console.log(regularUser.fullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// merging the objects
// const obj3 = { obj1, obj2 }
//const obj3 = Object.assign({}, obj1, obj2, obj4)
const obj3 = {...obj1, ...obj2, ...obj4} // widely used method to merge the objects
//console.log(obj3);

// to find keys of objects
//console.log(Object.keys(tinderUser)); // gives the result in the form of array
//console.log(Object.values(tinderUser)); // gives the result in the form of array
//console.log(Object.entries(tinderUser)); // gives all the key value pairs in arrays inside another array


// Objects Destructuring

const course = {
    coursename: "js basics overview",
    price: "999",
    courseInstructor: "hitesh"
}

// let we want to access the courseInstructor form course object many times then instead of doing (course.sourseInstructor) many times we write it as: 
//const {courseInstructor} = course
//console.log(courseInstructor);
//let courseInstructor is a big name we can also rename it while accessing as:
const{courseInstructor: instructor} = course
console.log(instructor);

