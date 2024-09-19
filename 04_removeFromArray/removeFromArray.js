const removeFromArray = function (array, ...elements) {

    return array.filter(function (e) { return elements.indexOf(e) === -1 })
  };
  

// Do not edit below this line
module.exports = removeFromArray;
