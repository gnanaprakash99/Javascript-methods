const input = [
    "The quick brown fox jumps over the lazy dog ",
    "A journey of a thousand miles begins with a single step",
    "To be or not to be that is the question",
  ];
  let result = {};
  input.forEach((sentence) => {
    let maxCount = 0;
    let maxWord = "";
    sentence.split(" ").forEach((element) => {
      let count = element.length;
      if (count > maxCount) {
        maxCount = count;
        maxWord = element;
      }
    });
    result[sentence] = maxWord;
  });
  console.log(result);
//   Result=>
//     {
//         'The quick brown fox jumps over the lazy dog ': 'quick',
//         'A journey of a thousand miles begins with a single step': 'thousand',
//         'To be or not to be that is the question': 'question'
//       }