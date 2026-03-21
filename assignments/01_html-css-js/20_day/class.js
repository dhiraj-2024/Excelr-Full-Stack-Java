

class userSignup {
    constructor(name, email, pass , mobile, adress) {
        this.name = name;
        this.email = email;
        this.pass = pass;
        this.mobile = mobile;
        this.adress = adress;
    }
}



class userLogin extends userSignup {

    constructor(name , email , pass ){
        super(name,email,pass)
    }

    showDetails(){
        console.log(`welcome master ${this.name} `)
    }

}

const user1 = new userSignup("dhiraj","dhiraj@gmail.com","234sdfeet",23492384083,"nashik maharashtra")
const user2 = new userLogin("dhiraj", "dhiraj@gmail.com", "123");
console.log(user1)
console.log(user2 instanceof userLogin)
console.log(user2 instanceof userSignup)

user2.showDetails()