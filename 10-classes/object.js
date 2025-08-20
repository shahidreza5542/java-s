function multiplayby5(num) {
    this.num = num
    return num*5
}
// multiplayby5.power = 2
// console.log(multiplayby5(5));
// console.log(multiplayby5.power);
// console.log(multiplayby5.prototype);


function createuser(username, score){
    this.username = username
    this.score = score
}

createuser.prototype.increment = function(){
    score++;
}

const chai = createuser("chai", 25)
const tea = createuser("tea", 250)