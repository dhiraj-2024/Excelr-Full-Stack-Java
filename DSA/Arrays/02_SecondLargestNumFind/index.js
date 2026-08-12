// find second largest number 

// const nums = [11, 78, 44, 32, 98, 52, 88, 98, 85];
const nums = [8, 5];

let first = nums[0];  
let second = nums[0]; 

for (let i = 1; i < nums.length; i++){
    if (nums[i] > first) {
        second = first;
        first = nums[i]
    }
    else if (nums[i] > second || first == second) {
        if (first != nums[i]) {
            second = nums[i];
        }
    }
    // else if (nums[i] > second && nums[i] != first) {
    //     second = nums[i]
    // }

    
}

console.log(second)

