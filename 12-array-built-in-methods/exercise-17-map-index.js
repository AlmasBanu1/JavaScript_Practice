let fruits = [
    "Apple",
    "Mango",
    "Banana"
];

let result = fruits.map(function(fruit, index) {

    return (index + 1) + ". " + fruit;

});

console.log(result);