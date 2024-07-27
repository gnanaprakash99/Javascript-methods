const students = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 92 },
    { name: "Charlie", score: 88 },
  ];
  let arrayOfString = (items) => {
    let result = items.map((value) => {
      return `Name:${value.name},Score:${value.score}`;
    });
    console.log(result);
  };
  arrayOfString(students);

//   Result =>[ 'Name:Alice,Score:85', 'Name:Bob,Score:92', 'Name:Charlie,Score:88' ]
