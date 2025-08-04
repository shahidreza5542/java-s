 const tinderUser = new Object()

 tinderUser.id = "135bd"
 tinderUser.name = "shahid"
 tinderUser.isLoggedin = false


//  console.log(tinderUser);
 

const regulerUser = {
    email: "shahid@gmain.com",
    fullname: {
        userfullname: {
        firstname: "hahid",
        lastname: "reza",
       } 
    }
}

// console.log(regulerUser.fullname)

const obj1= {1: "1", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4 )

const obj3 = {...obj1, ...obj2}

// console.log(obj3);

const users = {
    id: 1,
    email: "shahid@gmail.com",
}
    

// user[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedin'));


const course = {
    coursename: "js in hindi",
    price: "0999",
    courseInstructer: "shahid",
}

const {courseInstructer: Instructer} = course


// console.log(courseInstructer);
console.log(Instructer);

// {
//     name: "shahid",
//     coursename: "js in hindi"
//     price: "free"
