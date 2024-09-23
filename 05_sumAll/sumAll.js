const sumAll = function(num1, num2) {

    if(num1 < 0 || 
       num2 < 0 ||
       num1 % 1 != 0 ||
       num2 % 1 != 0 ||
       typeof(num1) != "number" || 
       typeof(num2) != "number") {
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

// Do not edit below this line
module.exports = sumAll;
