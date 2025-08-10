// for of

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
    
}

const greetings = "hello world!"
for (const greet of greetings) {
   // console.log(`Each char is ${greet}`);
    
}

// maps

const map = new Map()
map.set(`IN`, "india")
map.set(`USA`, "united states of america")
map.set(`FR`, "france")

//console.log(map);

for (const [key, value] of map) {
   // console.log(key, ':-', value);
    
}

// const myObj = {
//     game1: "NFS"
//     game2: "Spiderman"
// }

// for (const [key, value] of myObj) {
//     console.log(key, ':-', value);
// }

