
const arr = [20, 40, 2, 4, 5, 6, 89, 45, 34];

// Not optimized way if array is larger then it become slow in speed 
/*
let maxelement = Math.max(...arr);
console.log(maxelement)
*/

let max = arr[0];
let min = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
    if (arr[i] < min) {
        min = arr[i];
    }
}

console.log(max);
console.log(min);