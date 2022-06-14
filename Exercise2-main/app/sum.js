
const fs = require('fs')

let JsonNumbers = fs.readFileSync('array.json')
let ObjectNumbers = JSON.parse(JsonNumbers)

const numbers = ObjectNumbers.nums

const SumJson = numbers.reduce((sum, number) => sum + number, 0)

function summation(arr){
    return arr.reduce(function(num1, num2){
        return num1 + num2;
    }, SumJson)
}

const Promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      
    }, 5000);
  });

module.exports.summation = summation