const myPromise = new Promise((resolve , reject)=>{

let ok = false;
if(ok){
    resolve("successfull");
}
else{
    reject("rejected");
}
});

myPromise.then((message)=>{
    console.log(`mypromise ka msg ye hai : ${message}`)
}).catch((error)=>{
    console.log(error)
})




// by using callbacks 
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