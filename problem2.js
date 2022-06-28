const listOfProducts = [
  {
    productName: "TV",
    quantity: 10,
    description: "television",
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner",
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television",
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner",
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan",
  },
];

function getUniquePrducts(listOfProducts) {
  let array = [];
  let object = {};
  for (let i = 0; i < listOfProducts.length; i++) {
    if (object[listOfProducts[i].productName] == undefined) {
      object[listOfProducts[i].productName] = 1;
      array.push(listOfProducts[i]);
    } else {
      for (let j = 0; j < array.length; j++) {
        if (array[j].productName == listOfProducts[i].productName) {
          array[j].quantity = array[j].quantity + listOfProducts[i].quantity;
        }
      }
    }
  }
  console.log(array);
}

getUniquePrducts(listOfProducts);
