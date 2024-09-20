const sumAll = function(num1, num2) {

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


// TEST WITH FOLLOWING CASE: expect(sumAll(123, 1)).toEqual(7626);
// IF NUM 1 BIGGER THAN NUM 2 THEN REVERSE VALUES?

console.log(sumAll(1, 4));

// Do not edit below this line
module.exports = sumAll;
