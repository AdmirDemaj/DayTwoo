const { set } = require('lodash')
const concat = require('./concat')
const sum = require('./sum')


const ConcatNumbers = [2,5,8,9,11,5]



const ConcatResult = concat.concat(ConcatNumbers)
const SumResult = sum.summation(ConcatNumbers)


setTimeout(() =>{
    console.log(`Concated Numbers Are:   ${ConcatResult}`);
setTimeout(() => {
    console.log(`Sum is:   ${SumResult}`);
},4000);
},2000);



module.exports.ConcatNumbers = ConcatNumbers;