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

    if(typeof(num1) != "number" || typeof(num2) != "number") {
        return "ERROR";
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

let num1 = 90;
let num2 = 4;
if(typeof(num1) != "number" || typeof(num2) != "number") {
    console.log("ERROR");
}

// Do not edit below this line
module.exports = sumAll;
