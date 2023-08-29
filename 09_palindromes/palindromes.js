const palindromes = function (palin) {
    
    let revPalin = palin.split("").reverse().join("");
    if (palin === revPalin) {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;
