//Question: Remove duplicates from an array.

let input =['a', 'b', 'a','p','p', 'c'];
let removeExtraElement=(arr)=>{
    return console.log([...new Set(arr)]);

};
removeExtraElement(input)

// Result => [ 'a', 'b', 'p', 'c' ]