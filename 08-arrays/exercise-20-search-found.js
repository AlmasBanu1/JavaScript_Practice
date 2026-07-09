let fruits = [
    "Apple",
    "Banana",
    "Orange"
];

let target = "Banana";
let found = false;

for (let i = 0; i < fruits.length; i++) {

    if (fruits[i] === target) {
        found = true;
    }

}

console.log(found);