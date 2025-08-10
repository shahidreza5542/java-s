const coding = ["js", "py", "rb", "java"]

// coding.forEach( function (item) {
//     console.log(item);
    
// } )

// coding.forEach( (item) => {
//     console.log(item);
    
// } )

// function printme(item){
//     console.log(item);
    
// }

// coding.forEach(printme)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
    
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFilename: "js"
    },
    {
        languageName: "java",
        languageFilename: "java"
    },
    {
        languageName: "python",
        languageFilename: "py"
    }
]

myCoding.forEach( (item) => {

    console.log(item.languageName);
    
} )