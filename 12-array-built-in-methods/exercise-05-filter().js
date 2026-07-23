let fruits = [

    "Apple",
    "Mango",
    "Banana",
    "Mango"

];

let answer = fruits.filter(function(fruit) {

    return fruit === "Mango";

});

console.log(answer);              // if condition is true, prints all matching elements from array else [];