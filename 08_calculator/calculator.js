const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
  return arr.reduce((a, b) => a + b, 0);
};

const multiply = function(arr) {
  return arr.reduce((product, n) => product * n, 1);
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
  let f = [];
  if (num == 0 || num == 1)
    return 1;
  if (f[num] > 0)
    return f[num];
  return f[num] = factorial(num-1) * num;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
