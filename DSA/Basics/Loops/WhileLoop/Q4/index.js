//! print table from 1 ro 10

let i = 1;
while (i <= 20) {
    let j = 1;
    while (j <= 10) {
        console.log(`${i}*${j} = ${i*j}`)
        j++;
    }
    console.log("***********************")
    i++;
};
