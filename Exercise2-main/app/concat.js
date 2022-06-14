const _ =require('lodash')
const fs = require('fs')



let JsonNumbers = fs.readFileSync('array.json')
let ObjectNumbers = JSON.parse(JsonNumbers)
const numbers = ObjectNumbers.nums

fs.readFile('./array.json', {encoding: 'utf-8'}, (err, data) => {
    if(err){
        console.error('ERROR!!! Array Not Found')
        
    } else {
        console.error('GOT DATA FROM ARRAY.JSON')

    }
})


function concat(arr){
    return _.concat(arr, numbers)
    
}

module.exports.concat = concat

