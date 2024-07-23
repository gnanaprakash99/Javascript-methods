const names = ["Alice,Ajay,Bob,Charlie,David,Eve,Frank,Kiran,Bhuvan"];

let getNameInOrder = (array) => {
  let result = {
    A: [],
    B: [],
    C: [],
    D: [],
    Others: [],
  };

  let splitWord = array[0].split(",").forEach((element) => {
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
