const elements = ['a', 'b', 'a', 'c', 'b', 'b'];

let highCount = (arr) => {
    let count = {};
    let maxCount = 0;
    let maxLetter = {};
    arr.forEach(val => {
        let letters = val.toLowerCase()
        // console.log(letters);
        if (count[letters]) {
            count[letters]++;
        } else {
            count[letters] = 1;
        }
        // console.log(count[letters]);
        if(count[letters]>maxCount){
            maxCount=count[letters];
            maxLetter=letters
        }
    });
    // console.log(count);
    // console.log(maxCount);
    console.log(maxLetter);
}
highCount(elements)

//output =>'b'