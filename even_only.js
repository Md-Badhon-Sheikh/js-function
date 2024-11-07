function evenNumbersOnly(numbers) {
    const even = [];
    for (number of numbers) {
        if (number % 2 == 0) {
            even.push(number);
        }
    }
    return even;
}
const array = [2, 5, 7, 12, 15, 14, 18];
// const numbs = evenNumbersOnly(array);
// console.log(numbs);


function sumOfEvenNumbers(numbers) {
    let sum = 0;
    for (number of numbers) {
        if (number % 2 === 0) {
            console.log(number);
            sum = sum + number;
        }
    }
    return sum;
}
const sum = sumOfEvenNumbers(array);
console.log("Sum of numbers:", sum);