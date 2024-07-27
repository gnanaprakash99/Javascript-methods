//Create an array of strings
const sentence = "The quick brown fox jumps over the lazy dog";
let findLengthOfWord = (string) => {
  let result = {};
  string.split(" ").forEach((element) => {
    result[element] = element.length;
  });
  console.log(result);
};
findLengthOfWord(sentence);

// Result =>
    // {
    //     The: 3,
    //     quick: 5,
    //     brown: 5,
    //     fox: 3,
    //     jumps: 5,
    //     over: 4,
    //     the: 3,
    //     lazy: 4,
    //     dog: 3
    //   }