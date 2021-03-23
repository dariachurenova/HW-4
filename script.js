
// задача 1
function calculateArea(myRadius) {
    return myRadius * myRadius * Math.PI;
}
console.log(calculateArea(2));

// задача 2
function calculateLength(MyDiameter) {
    return MyDiameter * Math.PI;
}
console.log(calculateLength(5));

// задача 3
function calculateAverage(a, b) {
    return (a + b) / 2;
}
console.log(calculateAverage(4, 2));

// задача 4
function calc(x, y, action) {
    switch (action) {
        case '+':
            return x + y;
        case '-':
            return x - y;
        case '*':
            return x * y;
        case '/':
            return x / y;
        case '%':
            return x % y;
        case '**':
            return x ** y;
        default:
            return undefined;
    }
}
console.log(calc(4, 2, '+'));


