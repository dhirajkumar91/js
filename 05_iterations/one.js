// for
// ctrl+D is the shortcut to select multiple same keywords

// for(let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(element);
// }


// for-of loop
const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for(const greet of greetings) {
    //console.log(`Each char is ${greet}`);
}

// Maps
const map = new Map();
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
//console.log(map);

for(const key of map) {
    //console.log(key);
}

for(const [key, value] of map) {
    //console.log(key, ':-', value);
}

const myObject1 = {
    'game1': 'NFS',
    'game2': 'spiderman'
}

// for(const [key, value] of myObject1) {
//     console.log(key, ':-', value);
// }

const myObject = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by apple"
}
// to iterate on objects we use for-in loop
for (const key in myObject) {
    // console.log(key);
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(programming[key]);
}


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    // console.log(item.languageName);
})


// "filter" keyword
const books = [
    { title: 'Book one', genre: 'Fiction', publish: 1981, ediiton: 2004},
    { title: 'Book two', genre: 'Non-Fiction', publish: 1992, ediiton: 2008},
    { title: 'Book three', genre: 'History', publish: 1999, ediiton: 2007},
    { title: 'Book four', genre: 'Non-Fiction', publish: 1989, ediiton: 2010},
    { title: 'Book five', genre: 'Science', publish: 2009, ediiton: 2014},
    { title: 'Book six', genre: 'Fiction', publish: 1987, ediiton: 2010},
    { title: 'Book seven', genre: 'History', publish: 1986, ediiton: 1996},
    { title: 'Book eight', genre: 'Science', publish: 2011, ediiton: 2016},
];

// const userBooks = books.filter( (bk) => bk.genre === 'History');
const userBooks = books.filter( (bk) => {
    return bk.publish >= 1995 && bk.genre === "History"
});

console.log(userBooks);