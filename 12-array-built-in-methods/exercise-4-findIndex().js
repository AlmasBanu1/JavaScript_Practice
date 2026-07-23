let numbers = [

    5,
    10,
    15,
    20

];

let answer = numbers.findIndex(

    function(number) {

        return number > 12;

    }

);

console.log(answer);            // if condition is true then prints index of the value else -1