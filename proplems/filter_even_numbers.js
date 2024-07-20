const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let filterEvenNumbers = (arr) => {
    let evenNumbers = arr.filter(val => {
        return val % 2 == 0;
    });
    console.log(evenNumbers);
};
filterEvenNumbers(numbers)


let filterOddNumbers = (arr) => {
    let oddNumbers = arr.filter(val => {
        return val % 2 != 0;
    });
    console.log(oddNumbers);
};
filterOddNumbers(numbers)