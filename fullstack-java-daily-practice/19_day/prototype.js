const obj1 = {
  fname: "dhiraj",
  lname: "rajput",
  getname() {
    return ` ${this.fname} ${this.lname}`;
  },
};


const obj2 = {
    __proto__: obj1
}

console.log(obj2.fname)
console.log(obj2.__proto__)


function user(name) {
    this.name = name;
}


user.prototype.greet = function (name) {
    console.log(`hello ${this.name}`)
}

user.prototype.hello = function () {
    console.log("hello")
}

const u = new user("Dhiraj");

u.greet();
u.hello();
u.__proto__;

