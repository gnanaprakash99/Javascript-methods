const input = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Joe" },
  ];
  
  let arrayObjectToObject = (arrObj) => {
    let result = {};
    arrObj.map((element) => {
      // console.log(element);
      result[element.id] = element.name;
    });
    console.log(result);
  };
//   arrayObjectToObject(input);
  

  // result =>{ '1': 'John', '2': 'Jane', '3': 'Joe' }

  const sales = [
    { product: "Laptop", sales: 1500 },
    { product: "Phone", sales: 800 },
    { product: "Laptop", sales: 1200 },
    { product: "Tablet", sales: 600 }
  ];
result={}
  sales.forEach(items=>{
result[items.product]=items.sales
  });
  console.log(result);