// Q1. define call back function and provide simple example 


function greet(user,callback1,callback2){
    console.log(`hello ${user}`)
    callback1(user);
    callback2(user);
};


function welcome(user){
    console.log(`wellcome to our channer ${user}`)
}


function seeYou(user){
    console.log(`see you soon ${user}`)
}


greet("dhiraj",welcome,seeYou)
greet("pandu",welcome,seeYou)



// Q2. write a function ProcessData (data , callback) that takes array of number and callback function
//  the callback function should be used to print the each number in the array

function ProcessData (data , callback){
     for(let i = 0 ; i < data.length; i++){
        callback(data[i]);
     }
}

function printNum(num){
console.log(num);
}

const number =[10,20,30,40,50];

ProcessData(number,printNum);



// Q3. create a fuction fetchuserdata(callbak) that simulates the fetching user data with a 2-seconds delay
//  and calls the callback function with the fetch data

function fetchUserData(callback){
    setTimeout(() => {
      const  user = {
            id : 1,
            name:"dhiraj",
            city:"nashik",
        }
        callback(user)
    }, 2000);
}


// fetchUserData((data)=>{
//     console.log("user data", data)
// })

function getData(data){
    console.log(data)
}

fetchUserData(getData)



// Q4. higher order function that take two num and perform the operation using callback 

function calculate(a,b,operation){
        return operation(a,b)
}

function addition(x,y){
    return x+y
}

function multiplication(x,y){
    return x*y
}

console.log(calculate(2,2,addition))
console.log(calculate(6,6,multiplication))



// Q5 . what is callback hell and how it occure example of nested callback hell 


function chekInventery (callback1){
    console.log("inventery check")
    callback1();
}

function order(callback2){
    console.log("order placed")
    callback2();
}

function payment(callback3){
    console.log("payment recived")
    callback3();
}

function sendinvoice(){
    console.log("invoice send")
    
}

function main(){
    chekInventery(()=>{
        order(()=>{
        payment(()=>{
        sendinvoice();
        console.log("all done")
    });
    });
    });
    
    
}

main();

// example 2
setTimeout(() => {
    console.log("Task 1");

    setTimeout(() => {
        console.log("Task 2");

        setTimeout(() => {
            console.log("Task 3");
        }, 1000);

    }, 1000);

}, 1000);