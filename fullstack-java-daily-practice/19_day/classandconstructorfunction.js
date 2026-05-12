class user  {

    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }

    greet() {
        console.log("Hello !!!!")
    }

}

class login extends user{
    constructor(name, age, city, islogin) {
        super(name, age, city);
        this.islogin = islogin;
    }
    
    greet() {
        console.log(`the user is login ${this.islogin}`)
    }
}


const newuser = new user("dhiraj", 23, "nashik");
console.log(newuser.greet())
console.log(newuser.city)

const anuser = new login("true");
console.log(anuser.greet())
