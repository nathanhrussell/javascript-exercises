const fibonacci = function(n) {

    if(typeof(n) === "string") {
        n = Number(n)
    }

    if (n < 0) {
        return "OOPS";
    }

    else if (n <= 1) {
        return n;
    }


    return fibonacci(n - 1) + fibonacci(n-2);
};

let n = "1";

console.log(n);

// Do not edit below this line
module.exports = fibonacci;
