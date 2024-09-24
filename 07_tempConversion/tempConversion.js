const convertToCelsius = function(temp) {
  let celsiusConversion = ((temp - 32) * (5/9));
  let roundedCelsius = Math.round(celsiusConversion * 10) / 10;
  return roundedCelsius;
};


const convertToFahrenheit = function(temp) {
  let fahrenheitConversion = (temp * (9/5) + 32);
  let roundedFahrenheit = Math.round(fahrenheitConversion * 10) / 10;
  return roundedFahrenheit;
};

let temp = 14;
let fahrenheitConversion = (temp * (9/5) + 32);
let roundedFahrenheit = Math.round(fahrenheitConversion * 10) / 10;
console.log(roundedFahrenheit);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
