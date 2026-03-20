class person {
    constructor(email,username,password){
        this.email = email;
        this.username = username;
        this.password = password;

    }

    get password(){
        return this._password.toUpperCase()
    }

    set password(value){
        this._password = value;
    }

}

const user = new person("dhiraj@gmail.com" , "dhiraj" , "askdfjak")
console.log(user.password)




// method second 

const Car = {
    name : "scorpio",
    brand : "mahindra",

    get : function(){
      return  this.name
    },
    set : function(){
        this.brand
    }

}

const newcar = Object.create(Car)
console.log(newcar.name)


// method third 


function student(name,age,std){

    this.name = name;
    this.age = age;
    this.std = std;

    Object.defineProperty(student,age,{
        get : function(){
            return this.age
        }
    })

}


const newstudent = new student("pramod",22,"lastyerar")

console.log(newstudent.age)