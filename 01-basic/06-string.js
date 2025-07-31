const name = "shahid"
const repoCount = 14

// console.log(name + repoCount + "Value");


// console.log('Hello my name is ${name} and my repo count is ${repoCount}');

const gameName = new String ('shahid-c')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('s'));

const newstring= gameName.substring(0, 4)
console.log(newstring);


const anotherString = gameName.slice(-6, 4)
console.log(anotherString);


const newstringone = "    shahid    "

console.log(newstringone.trim());
console.log(newstringone);


const url = "https://shahid.com/shahid%2002593"


console.log(url.replace('%20', '_'));

console.log(url.includes('shahid'));

console.log(gameName.split('-'));


