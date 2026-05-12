// const user = {
//     name: "DHiraj",
//     greet() {
//         console.log(this.name);
//     }
// }

// const callUser = user;
// callUser.greet();

// console.log(this)



// function normal() {
//     console.log(this)
// }
// normal()


const user = {
    name: "dhiraj",
    normal: function () {
        console.log(this.name)
    },
    arrow:() => {
        console.log(this.name)
    }
}

user.normal();
user.arrow();

const person = {
    name: "dhiraj",
    arrow() {
        setTimeout(() => {
            console.log(this.name)
        }, 1000);
    }
}

person.arrow()