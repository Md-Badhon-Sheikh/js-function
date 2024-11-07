function isEven (number){
    if(number %2 === 0){
        return true;
    }
    else{
        return false;
    }
}
const result = isEven(22);
// console.log("result is : ", result);

// console.log(isEven(2));


function isOdd(num){
    if(num % 2 === 1){
        return true;
    }
    return false;
}
console.log("Result is : ", isOdd(101));
console.log("Result is : ", isOdd(100));