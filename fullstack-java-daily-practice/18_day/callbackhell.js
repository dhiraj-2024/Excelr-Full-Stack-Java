function greet(friendname){
    console.log(`hello my friend ${friendname}`)
    function hello(){
        setTimeout(()=>{

            console.log(`how are you ${friendname}`)
        },2000)
    }
    function bye(){
        setTimeout(() => {
            console.log(`see you later ${friendname}`)
        }, 4000);
    }
    hello();
    bye();
}

greet("dhiraj");



// callback hell function meanse we pass other functions as a statement in the parrent function ok ;
