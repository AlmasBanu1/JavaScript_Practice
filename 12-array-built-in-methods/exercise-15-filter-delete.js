let numbers = [10, 20, 30, 40, 50];

let updatedNumbers = numbers.filter(function(number) {
    return number !== 30;
});

console.log(updatedNumbers);