const convertToCelsius = function(temp) {
  let celsiusConversion = ((temp - 32) * (5/9));
  let roundedCelsius = Math.round(celsiusConversion * 10) / 10;
  return roundedCelsius;
};


const convertToFahrenheit = function(temp) {
};

let temp = 100;
let celsiusConversion = ((temp - 32) * (5/9));
let roundedCelsius = Math.round(celsiusConversion * 10) / 10;
console.log(roundedCelsius);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
