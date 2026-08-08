let numbers = [10, 15, 20, 25, 30, 35];

let evenNumbers = numbers.filter(function(number) {

    return number % 2 === 0;

});

console.log(evenNumbers);