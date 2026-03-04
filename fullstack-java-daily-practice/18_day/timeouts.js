const hello = () => {
    console.log(" 2nd hello")
};
console.log("1st hello")
setTimeout(hello,2000)


const bye = () => {
    console.log(" say bye")
};

// setInterval(bye,1000)


setTimeout(()=>{
    console.log("this is timeout function")
},3000)