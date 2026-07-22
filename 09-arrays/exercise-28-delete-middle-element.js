let numbers = [10,20,30,40,50];

numbers[2] = numbers[3];
numbers[3] = numbers[4];

numbers.length--;

console.log(numbers);