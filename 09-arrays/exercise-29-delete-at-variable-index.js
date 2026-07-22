let numbers = [10, 20, 30, 40, 50];
let index = 1;

for (let i = index; i < numbers.length - 1; i++) {
    numbers[i] = numbers[i + 1];
}
numbers.length--;
console.log(numbers);