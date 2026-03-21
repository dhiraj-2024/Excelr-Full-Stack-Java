const user =[
    {
        name : "dhiraj",
        email : "dhiraj@gmail.com",
        role : "software engineer",
        phone : 2349384738
    },
    {
        name : "pramod",
        email : "pramod@gmail.com",
        role : "software tester",
        phone : 2398458332
    }
]





function getUserData(){

    setTimeout(() => {
        user.forEach((data,index)=>{
        console.log(data.name)
        console.log(data.email)
    })
    }, 1000);

}

// method 1 
// function createUser(data){
//     setTimeout(() => {
//         user.push(data)
//     }, 2000);
// }

// createUser( {
//         name : "pandu",
//         email : "pandu@gmail.com",
//         role : "Data Analyst",
//         phone : 9875394854
//     })

// getUserData()


// method 2 using callback

// function createUser(data,callback){
//     setTimeout(() => {
//         user.push(data)
//         callback();
//     }, 2000);
// }

// createUser( {
//         name : "pandu",
//         email : "pandu@gmail.com",
//         role : "Data Analyst",
//         phone : 9875394854
//     },getUserData)




// method 3 using promises

// function createUser(data){

//     return new Promise((resolve, reject)=>{

//     setTimeout(() => {
//         user.push(data)
//         let error = true;
//         if(!error){
//             resolve();
//         }else{
//             reject("anything is wrong");
//         }
//         getUserData()
//     }, 2000);

//     })
// }



// method 4 using async await 

 function createUser(data){
    setTimeout(() => {
        user.push(data)
    }, 2000);
}

async function start(){
    await createUser( {
        name : "pandu",
        email : "pandu@gmail.com",
        role : "Data Analyst",
        phone : 9875394854
    });

    getUserData();
}

start()



// getUserData()

