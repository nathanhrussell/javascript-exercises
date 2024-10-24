const palindromes = function (str) {
    let strStripped = str.replace(/[\p{P}\s$+<=>^`|~]/gu, "").toLowerCase();
    let strReversed = strStripped.split("").reverse().join("");
    return (strStripped === strReversed) ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
