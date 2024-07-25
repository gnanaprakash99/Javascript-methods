const input = [
    { name: "Laptop", category: "Electronics", price: 1000 },
    { name: "Shirt", category: "Clothing", price: 50 },
    { name: "Phone", category: "Electronics", price: 500 },
    { name: "Pants", category: "Clothing", price: 70 },
    { name: "Headphones", category: "Electronics", price: 100 },
  ];
  let result = {};
  let seperateCategory = {};
  input.forEach((categories) => {
    let { category, price } = categories;
    if (!seperateCategory[category]) {
      seperateCategory[category] = [];
    }
    seperateCategory[category].push(price);
  });
  // console.log(seperateCategory);
  for (let category in seperateCategory) {
    let count = seperateCategory[category].length;
    // console.log(count);
    let totalPrice = seperateCategory[category].reduce(
      (sum, item) => sum + item,
      0
    );
    // console.log(totalPrice);
    let average = totalPrice / count;
    result[category] = {
      totalPrice: totalPrice,
      average: average,
      count: count,
    };
  }
  console.log(result);
  
// Result =>
//   {
//     Electronics: { totalPrice: 1600, average: 533.3333333333334, count: 3 },
//     Clothing: { totalPrice: 120, average: 60, count: 2 }
//   }
  