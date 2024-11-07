function evenSizeString(str) {
    const size = str.length;
    console.log(size, str);
    if (size % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}
// console.log(evenSizeString("Dhaka"));
// console.log(evenSizeString("faka"));

function doubleOrTriple(number, doDouble) {
    if (doDouble == true) {
        return number * 2;
    }
    else {
        return number * 3;
    }
}
// console.log(doubleOrTriple(10, true));
// console.log(doubleOrTriple(10, false));

// array 

function array(arr) {
    const length = arr.length;
    return length;
}
console.log(array([10, 20, 30, 40, 50, 60, 80, 11]));