const inventory = [];

function findProductIndex(productName) {
  const name = productName.toLowerCase();

  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name === name) {
      return i;
    }
  }

  return -1;
}

function addProduct(product) {
  const name = product.name.toLowerCase();
  const index = findProductIndex(name);

  if (index !== -1) {
    inventory[index].quantity += product.quantity;
    console.log(`${name} quantity updated`);
  } else {
    inventory.push({
      name: name,
      quantity: product.quantity
    });
    console.log(`${name} added to inventory`);
  }
}

function removeProduct(productName, quantity) {
  const name = productName.toLowerCase();
  const index = findProductIndex(name);

  if (index === -1) {
    console.log(`${name} not found`);
    return;
  }

  if (inventory[index].quantity < quantity) {
    console.log(
      `Not enough ${name} available, remaining pieces: ${inventory[index].quantity}`
    );
    return;
  }

  inventory[index].quantity -= quantity;

  console.log(
    `Remaining ${name} pieces: ${inventory[index].quantity}`
  );

  if (inventory[index].quantity === 0) {
    inventory.splice(index, 1);
  }
}

// Test 3–5: findProductIndex()
inventory.push({ name: "flour", quantity: 20 });

console.log(findProductIndex("flour")); // 0
console.log(findProductIndex("FloUr")); // 0
console.log(findProductIndex("Flour")); // 0 (case-insensitive match)

inventory.length = 0;
console.log(findProductIndex("Flour")); // -1

// Test 7–8: Update an existing product
inventory.push({ name: "flour", quantity: 10 });
addProduct({ name: "FLOUR", quantity: 5 });
// Expected log: flour quantity updated
console.log(inventory);
// Expected: [{ name: "flour", quantity: 15 }]

inventory.length = 0;

// Test 9–10: Add a new product
addProduct({ name: "FLOUR", quantity: 5 });
// Expected log: flour added to inventory
console.log(inventory);
// Expected: [{ name: "flour", quantity: 5 }]

// Test 12: Product not found
inventory.length = 0;
removeProduct("FLOUR", 5);
// Expected log: flour not found

// Test 13–14: Subtract quantity
inventory.push(
  { name: "flour", quantity: 20 },
  { name: "rice", quantity: 5 }
);

removeProduct("FLOUR", 5);
// Expected log: Remaining flour pieces: 15
console.log(inventory);
// Expected: [{ name: "flour", quantity: 15 }, { name: "rice", quantity: 5 }]

// Test 15: Remove product when quantity reaches zero
inventory.length = 0;
inventory.push({ name: "flour", quantity: 5 });

removeProduct("FLOUR", 5);
// Expected log: Remaining flour pieces: 0
console.log(inventory);
// Expected: []

// Test 16: Insufficient quantity
inventory.length = 0;
inventory.push(
  { name: "flour", quantity: 5 },
  { name: "rice", quantity: 5 }
);

removeProduct("FLOUR", 10);
// Expected log: Not enough flour available, remaining pieces: 5
console.log(inventory);
// Expected: [{ name: "flour", quantity: 5 }, { name: "rice", quantity: 5 }]


/*
0
0
0
-1
flour quantity updated
[ { name: 'flour', quantity: 15 } ]
flour added to inventory
[ { name: 'flour', quantity: 5 } ]
flour not found
Remaining flour pieces: 15
[ { name: 'flour', quantity: 15 },
  { name: 'rice', quantity: 5 } ]
Remaining flour pieces: 0
[]
Not enough flour available, remaining pieces: 5
[ { name: 'flour', quantity: 5 },
  { name: 'rice', quantity: 5 } ]
*/