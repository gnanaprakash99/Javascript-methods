// Convert the following array of strings into an object where each key is the string and the value is its length.

const fruits = ["apple", "banana", "cherry"];

function arrayToObject(arr) {
    return arr.reduce((obj, item) => {
      obj[item] = item.length;
      return obj;
    }, {});
  }
  
  // Output: { apple: 5, banana: 6, cherry: 6 }
  