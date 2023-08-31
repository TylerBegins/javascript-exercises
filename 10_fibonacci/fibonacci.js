const fibonacci = function(num) {
    let x = 0;
    let y = 1;
    let z = 1;
    let intNum = Number(num);
    if (intNum < 0) {
        return "OOPS";
    };
    if (intNum === 1) {
        return 1;
    };
    for (i=1; i < intNum; i++) {
        x += y;
        y = z;
        z = x;
    };
    return x;


};

/*
    x starts at 1
    y starts at 0
    for each iteration:
        y is increased by x
        y's value is assigned to x
    1 1 2 3 5 8 13 21 34 55

*/





// Do not edit below this line
module.exports = fibonacci;
