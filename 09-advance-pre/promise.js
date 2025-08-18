// fetch('https://youtube.com').then().catch().finally()

const { use } = require("react");

// const promise1 = new Promise(function(resolve, reject){
//     //DO an async task
//     // DB CALLS, crypography, network
//     setTimeout(function () {
//         console.log('Async task is compelete');
//         resolve()

//     }, 1000)
// })

// promise1.then(function() {
//     console.log("promise comsumed");
// })

// new Promise(function (resolve, resect) {
//     setTimeout(function () {
//         console.log("Async task 2");
//         resolve()
//     }, 1000)
// }).then(function () {
//     console.log("Async connect to resolve");

// })


// const promisethree = new Promise(function (resove, reject) {
//     setTimeout(function () {
//         resove({ username: "chai", email: "shahid@gmail.com" })
//     }, 1000)
// })

// promisethree.then(function (user) {
//     console.log(user);


// })


// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function() {
//         let error = true
//         if (!error) {
//             resolve({username: "shahid", password: "shahha"})
//         } else {
//             reject('ERROR, something went wrong')
//         }
//     }, 1000);

// })

// const username = promiseFour.then((user) => {
//     console.log(user);
//     return user.username
// }).then((username) => {
//       console.log(username);

// }).catch(function(error){
//     console.log(error);

// }).finally(() => console.log("the promise is either resoved or rejected");
// )


// const promiseFive = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = true
//         if (!error) {
//             resolve({ username: "javascript", password: "shahha" })
//         } else {
//             reject('ERROR, something went wrong')
//         }
//     }, 1000);
// })

// async function consumePromiseFive() {
//     const response = await promiseFive
//     console.log(response);
// }

// async function getAllUsers() {
//     try {
//         const response = fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
        

//     } catch (error) {
//         console.log(error);

//     }

// }

// getAllUsers()

fetch('https://api.github.com/users/shahidreza5542').then((Response) => {
    return Response.json()
}).then((data) => {
    console.log(data);
    
}).catch((error) => console.log(error));

