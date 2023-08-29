const convertToCelsius = function(temp) {
    const ctemp = Math.round(((temp - 32) * (5/9)) * 10) / 10;
    return ctemp;
};

const convertToFahrenheit = function(temp) {
    const ftemp = Math.round(((temp * 9/5) + 32) * 10) / 10;
    return ftemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
