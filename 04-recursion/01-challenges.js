// Execsise 10: power
/* 
write a fn called power which accepts a base an exponent. The fn should return the power of the base to the exponent. This functions should mimic the functionality of Math.po()

*/
//POWER SOLUTION
function power(base, exponent) {
    if (exponent === 0) return 1;
    return base * power(base, exponent - 1);
}
power(2, 0) // 1
power(2, 2) // 4
power(2, 4) // 16


// Execsise 11: factorial
function factorial(x) {
    if (x < 0) return 0;
    if (x <= 1) return 1;
    return x * factorial(x - 1);
}
factorial(1) // 1
factorial(2) // 2
factorial(4) // 24
factorial(7) // 5040

// Execsise 12: productOfArray
/* 
productOfArray
Write a function called productOfArray which takes in an array of numbers and returns the product of them all.
*/
function productOfArray(arr) {
    if (arr.length === 0) {
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
}
productOfArray([1, 2, 3])    // 6
productOfArray([1, 2, 3, 10]) // 60


// Execsise 13: recursiveRange
/*
write a fn called recursiveRange which accepts a nubmer and add up all the numbers from 0 to the number passed to the fn
*/
function recursiveRange(x) {
    if (x === 0) return 0;
    return x + recursiveRange(x - 1);
}
recursiveRange(6) // 21
recursiveRange(10) // 55 

// Execsise 14: fib
//F(n) = F(n-1)+F(n-2)
function fib(n) {
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
}
fib(4) // 3
fib(10) // 55
fib(28) // 317811
fib(35) // 9227465