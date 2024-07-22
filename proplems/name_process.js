const names = ["Alice,Ajay,Bob,Charlie,David,Eve,Frank,Kiran,Bhuvan"];


let getNameInOrder = (str) => {
    let splitWord = str.toString().split(',');
    let firstletters = [];
    let getWord = null;
    let result = {};
    splitWord.forEach(elements => {
        let firstletter = elements.charAt(0).toLocaleUpperCase();
        firstletters.push(firstletter);
    });

    firstletters.forEach(elements => {
        getWord = splitWord.filter(val => val.startsWith(elements));
        result[(elements <= "D" ? elements : "Others")] = result[elements <= "D" ? elements : "Others"] || [];
        result[(elements <= "D" ? elements : "Others")].push(...getWord)
    });
    console.log(result);

};
getNameInOrder(names)

