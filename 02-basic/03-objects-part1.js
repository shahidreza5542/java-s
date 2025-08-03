// singleton


// object literals

// Object.create

const mySym = Symbol("key1")

const JsUser = {
    name: "shahid",
    "full name": "shahid reza",
    [mySym]: "mykey1",
    age: 17,
    email: "shahid@gmain.com",
    isLoggedIn: false,
}

// console.log(JsUser.name)

// console.log(JsUser["name"])

// console.log(JsUser["full name"])
// console.log(JsUser[mySym]);

JsUser.email = "shahid@mail.com"
// Object.freeze(JsUser)
JsUser.email = "shahid@chat.com"
// console.log(JsUser.email);



JsUser.greeting = function(){
    console.log("hello js user")
}

JsUser.greetingTwo = function(){
    console.log('hello js user ${this.name}');
}


console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
