let numbers = [
    10,
    20,
    30,
    40
];

let target = 30;
let found = false;

for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] === target) {
        found = true;
    }

}

console.log(found);