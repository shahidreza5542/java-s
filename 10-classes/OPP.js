const user = {
    userName: "shahid",
    loginCount: 3,

    getUserDetails: function(){
        //console.log('Got user details from database');
        //console.log(`username: ${this.userName}`);
        // console.log(this);
        
    }
}




// console.log(user.userName);
// // console.log(user.getUserDetails());
// console.log(this);


function User(username, logincount, issloggedin){
    this.username = username;
    this.loginCount = logincount;
    this.issloggedin = issloggedin
    
    this.greeting = function() {
        console.log(`Welcom ${this.username}`);
        
    }
}

const userOne = new User("shahid", 12, true)
const userTwo = new User("chaicode", 10, false)
console.log(userOne.Constructor);
// console.log(userTwo);