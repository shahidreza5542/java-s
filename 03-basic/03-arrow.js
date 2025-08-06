const user = {
    username: "shahid",
    price: 999,

    welcomeMassage: function () {
        console.log(`${this.username} , welcome to website`);
      

    }
}

// user.welcomeMassage()
// user.username = "sam"
// user.welcomeMassage()

// console.log(this);


// function chai(){
//     let username = "shahid"
//     console.log(this.username);
    

// }

// chai()


// const chai = function () {
//     let username = "shahid"
//     console.log(this.username);
// }

const chai = () => {
    let username = "shahid"
    console.log(this);
    
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)
const addTwo = (num1, num2) => ({username: "shahid"})
console.log(addTwo(3, 4));


const myArry = [2, 3, 4, 5, 6]

// myArry.forEach(() => ())
