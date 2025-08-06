function sayMyname() {
    console.log("s");
    console.log("h");
    console.log("a");
    console.log("h");
    console.log("i");
    console.log("d");

}

// sayMyname()

function addTwoNumber(number1, number2) {

    // let result = number1 + number2
    // return result 
    return number1 + number2
}

const result = addTwoNumber(3, 5)

// console.log("Result: ", result);

function loginUserMassage(username = "sam") {
    if (!username) {
        // console.log("please enter a username");
        // return
    }
    return `${username} just logged in`;
}


// console.log(loginUserMassage("shahid"))

function calculateCartPrice(...num1) {
    return num1

}

// console.log(calculateCartPrice(300, 200, 500, 1000));

const user = {
    username: "shahid",
    price: 500,
}

function handleobject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleobject(user)
handleobject({
    username: "sam",
    price: 299
})


const mynewarry = [200, 300, 400, 500]

function returnSecValue(getArray){
    return getArray[3]
}

console.log(returnSecValue(mynewarry));
