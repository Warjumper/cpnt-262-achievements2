const swordArray = [
  "Shortsword",
  "Longsword",
  "Greatsword",
  "Falchion",
  "Scimitar",
  "and Rapier.",
];

const commaSpace = swordArray.join(", ");

document.getElementById("swordArray").innerHTML = commaSpace;

// For testing
console.log('My favorite swords are the', commaSpace);