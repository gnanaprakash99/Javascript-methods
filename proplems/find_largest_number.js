const numbers=[1,2,3,4,5,6,7,8,9];

let findLargestNumber=(arr)=>{
let largestNumber=Math.max(...arr)
console.log(largestNumber);
}
findLargestNumber(numbers)