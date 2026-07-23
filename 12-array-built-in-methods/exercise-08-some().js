let numbers = [

    2,
    4,
    6

];

let answer = numbers.some(function(number) {

    return number % 2 !== 0;

});

console.log(answer);            // if condition stisfies atleast once then true, else false