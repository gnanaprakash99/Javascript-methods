const names = ["Alice,Ajay,Bob,Charlie,David,Eve,Frank,Kiran,Bhuvan"];

let getNameInOrder = (array) => {
    let result = {
        A: [],
        B: [],
        C: [],
        D: [],
        Others: [],
    };

    array[0].split(",").forEach((element) => {
        let letters = element[0];
        if (result[letters]) {
            result[letters].push(element);
        } else {
            result["Others"].push(element);
        }
    });
    console.log("output", result);
};
getNameInOrder(names);

// Result => {
//     A: ['Alice', 'Ajay'],
//     B: ['Bob', 'Bhuvan'],
//     C: ['Charlie'],
//     D: ['David'],
//     Others: ['Eve', 'Frank', 'Kiran']
// }
