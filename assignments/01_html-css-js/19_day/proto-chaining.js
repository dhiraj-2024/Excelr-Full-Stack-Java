// Q1. Create a prototype chain where Animal is a parent constructor, 
// and Dog inherits from Animal. Add a bark method to Dog and test inheritance.

function Animal(name){
    this.name = name;
}

Animal.prototype.eat  = function(){
    console.log(`${this.name} is eatting a chicken`)
}

function Dog(name, breed){
    Animal.call(this, name);
    this.breed = breed;

}

// inheritance
Dog.prototype = Object.create(Animal.prototype);

// fix cunstroctor reference
Dog.prototype.cunstroctor = Dog;

Dog.prototype.bark = function(){
    console.log(`${this.name} is barking`)
}

// test 

const d1 = new Dog("Tommy","germen")

d1.eat();
d1.bark();




// Q2. Write a program to create a prototype chain with three levels 
// (e.g., Vehicle -> Car -> ElectricCar) and demonstrate method overriding.

function vehicle(category,prices){
        this.category = category;
        this.prices = prices;
}   

vehicle.prototype.price = function(){
    console.log(`price of ${this.category} category vehicle is ${this.prices}`)
}


const v1 = new vehicle("offroad",3000000)

v1.price()





function car(category,prices,milage){
    vehicle.call(this,category,prices);
    this.milage= milage;
}

// inheritance
car.prototype = Object.create(vehicle.prototype)
// fix constructorr
car.prototype.constructor = car;

car.prototype.specification = function(){
    console.log(`The ${this.category} car gives a milage of ${this.milage} and its price is ${this.prices}`)
}


const v2 = new car("suv",1000000,15)

v2.specification()
console.log(v2.prices)

v2.price() // we can access parent class methed because of the inheritance 

console.log(v1.constructor)
console.log(v2.constructor)


function electricCar(category,prices,milage,battery){
        car.call(this, category,prices,milage);
        this.battery = battery;

}
// inheritance
electricCar.prototype = Object.create(car.prototype)
electricCar.prototype.constructor = electricCar;

electricCar.prototype.charging = function(){
    console.log(`The charging is ${this.battery}% remaining of  ${this.category} car and price of this car is ${this.prices}`)
}


const v3 = new electricCar(" electric xuv",2000000,30,74)

v3.charging()
v3.specification()
v3.price()

