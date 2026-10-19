function truthCheck(collection, pre) {
  return collection.every(obj => Boolean(obj[pre]));
}

console.log(truthCheck([
  { name: "Quincy", role: "Founder", isBot: false },
  { name: "Naomi", role: "", isBot: false },
  { name: "Camperbot", role: "Bot", isBot: true }
], "name"));
// true

console.log(truthCheck([
  { name: "Quincy", role: "Founder" },
  { name: "Naomi", role: "" },
  { name: "Camperbot", role: "Bot" }
], "role"));
// false

console.log(truthCheck([
  { name: "Quincy", isBot: true },
  { name: "Naomi", isBot: true }
], "isBot"));
// true