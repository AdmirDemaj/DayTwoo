const fs = require('fs')

let JsonNumbers = fs.readFileSync('array.json')
let ObjectNumbers = JSON.parse(JsonNumbers)

module.exports.ObjectNumbers = ObjectNumbers;