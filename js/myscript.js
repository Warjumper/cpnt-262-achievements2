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

// console.log('My favorite swords are the', commaSpace);
// console.log(swordList.toString().split())
// console.log(swordList.join(':').split(':'))
// console.log(swordList.join(' + '))

// for(i = 0; i < swordList.length; i++){
//     console.log("Sword" , i, "is", swordList[i]);
//     if(swordList[i] == "Rapier"){
//       console.log("and Rapier");
//     }
// }

// let word = "swords";

// for(i = 0; i < word.length; i++){
//     console.log(word[i]);
// }

// for(x of swordList){
//   console.log(x);
// }
 
// I have confused myself.