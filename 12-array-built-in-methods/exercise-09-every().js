let fruits = [

    "Apple",
    "Mango",
    "Banana"

];

let answer = fruits.every(function(fruit) {

    return fruit.length > 3;

});

console.log(answer);          // if the condition satisfies at every element of an array then return true, else false  