const swordArray = [
  "Shortsword",
  "Longsword",
  "Greatsword",
  "Falchion",
  "Scimitar",
  "Rapier",
];

const commaSpace = swordArray.join(", ");

let swords = document.getElementById("swordArray");

swords.innerHTML = commaSpace;
swords.innerHTML = commaSpace.replace("Rapier", "and Rapier");


console.log(swordArray.toString().replace("Rapier", "and Rapier"));


// For testing

console.log('My favorite swords are the', commaSpace);
console.log(swordArray.toString().split())
console.log(swordArray.join(':').split(':'))
console.log(swordArray.join(' + '))

for(i = 0; i < swordArray.length; i++){
    console.log("Sword" , i, "is", swordArray[i]);
    if(swordArray[i] == "Rapier"){
      console.log("and Rapier");
    }
}

let word = "swords";

for(i = 0; i < word.length; i++){
    console.log(word[i]);
}

for(x of swordArray){
  console.log(x);
}
 
// I have confused myself.