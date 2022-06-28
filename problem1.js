const listOfProducts = [{
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan"
  }
];

function getUniqueProductCount(listOfProducts) {
  let object = {};
  for (let i = 0; i < listOfProducts.length; i++) {
    if (object[listOfProducts[i].productName] == undefined) {
      object[listOfProducts[i].productName] = 1;
    } else {
      object[listOfProducts[i].productName] =
        object[listOfProducts[i].productName] + 1;
    }
  }
  console.log(object);
}

getUniqueProductCount(listOfProducts)