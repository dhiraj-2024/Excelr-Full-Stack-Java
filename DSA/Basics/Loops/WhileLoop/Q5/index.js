//! calculate sum of first n natural numbers

let sum = 0;
let i = 1;

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question("Enter your Number", n => {
    let mynumber = Number(n);
    if (isNaN(mynumber) || mynumber < 1) {
        console.log("please enter valid number")
    } else {
        while (i <= mynumber) {
            //! for natural numbers
        //   sum += i;
            //   i++;
            //! for even numbers
            if (i % 2 == 0) {
                sum += i;
            }
            i++;
        }
        console.log(sum)

    }
    readline.close();
});


