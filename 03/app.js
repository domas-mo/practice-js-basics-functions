const sumNumbers = function(x) {

    let sum = 0;

    for(let i = 0; i <= x; i++) {
        sum += i;
    }

    return sum
}

console.log(sumNumbers(4));