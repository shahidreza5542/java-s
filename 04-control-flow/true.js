const userEmail = []

if (userEmail) {
    console.log("Got user email");
    
} else {
    console.log("Dont have user email");
    
}

// false values

// false, 0, -0, bigInt 0n, "", null, undefined, nan

// true values 

// true, "0", 'false', " ", [], {}, funtion(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
    
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("obj is empty");
    
}


// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 20
val1 = null ?? 20 ?? 10

console.log(val1);

// terniary oprator

// condition ? true : false


const iceteaprice = 100
iceteaprice <= 80 ? console.log(("less than 80")) : console.log("more than 80");

