const index = require('./index.js')
const concat = require('./concat')

const sort = async(arr) => {
     let i, j, temp;
     
    try {

     for(i=0; i<arr.length; i++){
        for(j= i+1; j< arr.length; j++){
            if (arr[i]>arr[j]){
                temp=await arr[i];
                arr[i] = await arr[j];
                arr[j] = await temp;
            }
        }
     }
     return arr;
}
catch(error) {

    console.log(error)
}
}

setTimeout(  PrintSortedArray = async () => {
    try {
      
        const ConcatNumbers = [2,5,8,9,11,5]
        const ConcatResult = concat.concat(ConcatNumbers)
        let arr = ConcatResult
        const sortedArray = await sort(arr)
        console.log(`Sorted Concated Numbers Are: ${sortedArray.toString()}`)
    }
    catch(error) {
        console.log(error)
    }
    // console.log(`Sorted Concated Numbers Are:   ${PrintSortedArray()}`)
}, 3000)
