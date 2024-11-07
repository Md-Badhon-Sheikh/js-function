function square(number) {
    // console.log("Value of the number parameter is : ",number);
    const borgo = number * number;
    // console.log("Square the given number is : " ,borgo);
}
square(5);

// add 2 number 

function add(a, b) {
    const sum = a + b;
    // console.log("Summation of the value is :", sum);
}
add(10, 20);
// console.log("-------------------");
add(50, 50);
// console.log("-------------------");
add(100, 50);

// add multi number 

function total(a, b, c, d, e) {
    console.log("Value of the parameter:", a,b,c,d,e);
    const sum = a + b + c + d + e;
    console.log("total value is :", sum);
}
total(10, 10, 10, 10 );
console.log("---------------")
total(10, 10, 10, 10,10 );