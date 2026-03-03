// var 
var name = "dhiraj";
console.log(name); // dhiraj
name = "pandu";
console.log(name); // pandu

var age ;

console.log(age); // undefine
var city = "nashik";

const greet = (user)=>{
    console.log(`good morning ${user} , have a nice day`)
    console.log(`I belong form the city ${city}`)
};
greet("Dhiraj"); //good morning pandu , have a nice day
                 //I belong form the city nashik



let fname = "Anushka";
console.log(fname);

const welcomemsg = (fname)=>{
    let address = "mumbai";
    console.log(`hello welcome ${fname}`);
    console.log(address);
};

welcomemsg("sajju");
// console.log(address); // RefrenceError not define

let a = 12;
let b = "b"
let c = true;
let d = null;
let e ;



console.log(typeof(a))
console.log(typeof(b))
console.log(typeof(c))
console.log(typeof(d))
console.log(typeof(e))