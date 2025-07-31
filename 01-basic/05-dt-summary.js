// primitive

// 7 types ; string, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.1

const isLoggedin = false
const outsideTemp = null
let useremail;

const id = Symbol(5000242)
const anotherId = Symbol("123")

console.log(id == anotherId);

const bigNumber = 1446844757547544n

// Reference (non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "ironman", "doga"];

let myObj = {
    name: "shahid",
    age: 17,
}


const myFunction = function(){
    console.log("hello world");
    
}

console.log(typeof anotherId)


// ***********************************

// Stack {primitive} , Heap {Non-Primitive}

let myInstaname = "shahid"

let anotherName = myInstaname
anotherName = "shahidooig"

console.log(myInstaname);
console.log(anotherName);


let userOne = {
    email: "sjaj@gamil.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "user@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

