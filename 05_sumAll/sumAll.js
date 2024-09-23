const sumAll = function(num1, num2) {

    if(num1 < 0 || num2 < 0) {
        return "ERROR";
    }

    if(num1 % 1 != 0 || num2 % 1 != 0) {
        return "ERROR";
    }

    if(num1 > num2) {
        [num1, num2] = [num2, num1];
    }

    let numArray = [];
    sum = 0;
    
    while (num1 <= num2){
        numArray.push(num1++);
    }

    for (let i = 0; i <numArray.length; i++) {
        sum += numArray[i];
    }

    return sum;
};

let num1 = 2;
let num2 = 4;
if(num1 % 1 != 0 || num2 % 1 != 0) {
    console.log("ERROR");
}

// Do not edit below this line
module.exports = sumAll;
