let input = ["apple", "banana", "apple", "orange", "banana", "apple"];

let removeDuplicate = (arr) => {
  let result = [];
  arr.map((element) => {
    if (!result.includes(element)) {
      result.push(element);
    }
  });
  console.log(result);
};
removeDuplicate(input);

// Output=> ["apple", "banana", "orange"]
