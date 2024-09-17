const removeFromArray = function(arr, ele) {
    let indexToRemove = arr.indexOf(ele);
    let numberToRemove = String(ele).length;

    console.log(indexToRemove);
    console.log(numberToRemove);

    arr.splice(indexToRemove, numberToRemove);
    
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
