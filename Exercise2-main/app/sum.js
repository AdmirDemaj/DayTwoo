const readArray = require('./readArray')

const numbers = readArray.ObjectNumbers.nums

const SumJson = numbers.reduce((sum, number) => sum + number, 0)

function summation(arr){
    return arr.reduce(function(num1, num2){
        return num1 + num2;
    }, SumJson)
}



module.exports.summation = summation