//! print all event number between 1 to 100

let i = 0;
while (i <= 100) {
  if (i % 2 == 0) {
    console.log(`Even : ${i}`);
  }
  i++;
}


//! print all odd number between 1 to 100
let j = 0;
while (j <= 100) {
  if (j % 2 != 0) {
    console.log(`ODD ${j}`);
  }
  j++;
}