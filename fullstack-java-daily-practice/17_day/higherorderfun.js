const myltiplier = function (arg) {
    return function (num) {
        return num * arg;
    }
}

let result = myltiplier(4)(6);
console.log(result)
