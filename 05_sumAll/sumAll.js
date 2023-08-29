const sumAll = function(arg1, arg2) {
    let sum = 0;

    if (arg1 !== parseInt(arg1) || arg2 !== parseInt(arg2)) {
        return "ERROR";
    }
        
    if (arg1 < 0 || arg2 < 0) {
        return "ERROR";
    } else {
        if (arg1 >= arg2) {
            for (i = arg2; i <= arg1; i++) {
                sum += i;
            };
        } else {
        for (i = arg1; i <= arg2; i++) {
            sum += i;
    };}
};
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
