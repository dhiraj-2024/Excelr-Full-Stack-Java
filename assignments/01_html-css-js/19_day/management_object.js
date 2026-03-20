const user ={
    name: "dhiraj",
    age : 22,
    city : "nashik",

}

Object.defineProperty(user, "Dob",{value:2003})

console.log(user.Dob)

Object.defineProperty(user,"name",{value:"pramod"})

console.log(user)

const news = Object.getOwnPropertyNames(user)

console.log(news)


const check_seal = Object.isSealed(user)
console.log(check_seal)