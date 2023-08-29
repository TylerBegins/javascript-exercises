const add = function(x, y) {
    return x + y;
};

const subtract = function(x, y) {
    return x - y;
};

const sum = function(num) {
    let factSum = 0;
    
    num.forEach((item) => {
        if (num.includes(item)) {
          factSum += item;
        }
    });
    return factSum; 
};

const multiply = function(num) {
    let sum = 1;
  
    num.forEach((item) => {
        if (num.includes(item)) {
            sum *= item;
        }
  });
  return sum;
};

const power = function(x, y) {
    return x ** y;
};

const factorial = function(x) {
    if (x === 0) {
      return 1;
    } else {
      return factorial(x-1) * x;
    }
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
