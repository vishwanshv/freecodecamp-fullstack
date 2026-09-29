const pantry = [
  { sku: "A10", name: "Tomatoes", qty: 4, expires: "2027-01-01", zone: "fridge" },
  { sku: "D43", name: "Pineapples", qty: 2, expires: "2020-01-01", zone: "general" }
];

const rawData = [
  "A10|Tomatoes|5|2027-01-01",
  "B21|Bananas|10|2027-01-01",
  "C32|Eggs|3|2027-01-01|fridge",
  "C32|Eggs|3|2027-01-01",
  "D43|Pineapples|0|2027-01-01",
  "E54|Peppers|-1|2027-01-01|fridge"
];

function parseShipment(rawData) {
  const shipment = [];
  const seenSkus = [];

  for (const data of rawData) {
    const parts = data.split("|");

    const sku = parts[0];
    const name = parts[1];
    const qty = Number(parts[2]);
    const expires = parts[3];
    const zone = parts[4] || "general";

    if (!seenSkus.includes(sku)) {
      shipment.push({
        sku: sku,
        name: name,
        qty: qty,
        expires: expires,
        zone: zone
      });

      seenSkus.push(sku);
    }
  }

  return shipment;
}


function planRestock(pantry, shipment) {
  const actions = [];

  for (const item of shipment) {
    if (item.qty <= 0) {
      actions.push({
        type: "discard",
        item: item
      });
      continue;
    }

    let exists = false;

    for (const pantryItem of pantry) {
      if (pantryItem.sku === item.sku) {
        exists = true;
        break;
      }
    }

    if (exists) {
      actions.push({
        type: "restock",
        item: item
      });
    } else {
      actions.push({
        type: "donate",
        item: item
      });
    }
  }

  return actions;
}


function groupByZone(actions) {
  const grouped = {};

  for (const action of actions) {
    const zone = action.item.zone;

    if (!grouped[zone]) {
      grouped[zone] = [];
    }

    grouped[zone].push(action);
  }

  return grouped;
}


function clonePantry(pantry) {
  const clonedPantry = [];

  for (const item of pantry) {
    clonedPantry.push({
      sku: item.sku,
      name: item.name,
      qty: item.qty,
      expires: item.expires,
      zone: item.zone
    });
  }

  return clonedPantry;
}


// Process the shipment
const shipment = parseShipment(rawData);
const pantryCopy = clonePantry(pantry);
const actions = planRestock(pantryCopy, shipment);
const groupedActions = groupByZone(actions);

console.log(groupedActions);