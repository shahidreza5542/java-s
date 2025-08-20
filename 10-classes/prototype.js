// let myName = "shahid      "
// let myChannel = "chai      "

// // console.log(myName.);


let myHero = ["thor", "spiderman"]

let heropower = {
    thor: "hammer",
    spiderman: "sling",

    getspidermanpower: function(){
        // console.log(`spidy Power is ${this.spiderman}`);
        
    }
}

Object.prototype.shahid = function(){
    // console.log(`shahid is present in all object`);
    
}

Array.prototype.heyshahid = function(){
    // console.log('shahid say hello');
    
}

// heropower.shahid()
myHero.shahid()
myHero.heyshahid()
// heropower.heyshahid()

// inheritance

const user = {
    name: "chai",
    email: "chai@gmail.com"
}

const Teacher = {
    makvideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'js assingment',
    fullTime: true,
    
}

Teacher.__proto__ = user

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "chaiaurcode    "

String.prototype.trueLenght = function(){
    // console.log(this);
    // console.log(this.name);
    console.log(`true lenght is ${this.trim().length}`);
    
    
}

anotherUsername.trueLenght()
"shahid".trueLenght()
"icetea".trueLenght()