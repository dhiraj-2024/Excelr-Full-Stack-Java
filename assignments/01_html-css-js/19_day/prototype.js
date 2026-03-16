// Q1 . Create a constructor function Person that initializes a name and age.
//  Add a method greet to its prototype that returns a greeting message.

function Person(name,age){
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function(){
    return `Hello ${this.name} your age is ${this.age}`
}

const p1 = new Person("dhiraj",22);
console.log(p1.greet())



// Q2 . Write a prototype method for a Car constructor to calculate the remaining fuel after a drive.

function Car(fule,milage){
    this.fule = fule;    // liters
    this.milage = milage;    // milage
}

Car.prototype.remainingFuel = function(distance){
    const fuelUsed = distance / this.milage;
    return this.fule - fuelUsed;
}

const car1 = new Car(30,15);
console.log(car1.remainingFuel(77))


// Q3 . Modify the prototype of an existing constructor function to add a new method without affecting existing instances.
/* 
function Student(name){
    this.name = name;
}

Student.prototype.lname = "rajput"

const s1 = new Student("dhiraj")
console.log(s1.name)

*/

function Student(name,branch){
    this.name = name;
    this.branch = branch;
}

Student.prototype.study = function(branch){
    return `${this.name} is studyning in the branch of ${this.branch}`
}

const s1 = new Student("dhiraj","CSD")
console.log(s1.study())