# Define "time complexity" and "space complexity"

Imagine we have multiple implementations of the same function.
How can we determine which one is the "best?"

## #1
```cs
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

var t1 = performance.now();
addUpTo(1000000000);
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)
```

## #2
```cs
function addUpTo(n) {
  return n * (n + 1) / 2;
}

var time1 = performance.now();
addUpTo(1000000000);
var time2 = performance.now();
console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`)
```

## The big O
it allows us to talk formally about how the runtime of an algorithm grows as the inputs grow

## Problem with time
* different machines will record different times
* even the same machines will record different times
* in case of fast algos, speed measurements may not be precise enough
* you don't want to run test for few hours, and see which one is faster

## If not time, then what?
* let's count the number of simple operations the PC has to perform!


# O(1)
### #1 alwasys fixed ammount of operations

```cs
  return n * (n + 1) / 2;
```
it our case there's only 3 operations *, +, /

# O(log n)
### #2 


# O(n)
### #3 numbers of operations is bounded by a multiple of n 
```cs
 for (let i = 1; i <= n; i++) {
    total += i;
  }
```
if n = 5; there's five operations (total += i;)
if n = 20; there's twenty operations (total += i;)
and then you have equal sign after +
on top of that you have ++
on top of that you have comparisons i<=n 
* regardless of the exact number, the number of operations grows roughly proportionally with n 

still O(n) it's just two loops/one loop 

```cs
function countUpAndDown(n) {
  console.log("Going up!");
  for (var i = 0; i < n; i++) {
    console.log(i);
  }
  console.log("At the top!\nGoing down...");
  for (var j = n - 1; j >= 0; j--) {
    console.log(j);
  }
  console.log("Back down. Bye!");
}
```

# O(n log n) || O(n^2)
### #4 

# O(n*n)
### #5 double loops O(n * n) || O of n squared !

```cs
function printAllPairs(n) {
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}

```
![](img/003.png)

## Time complexity demo
https://rithmschool.github.io/function-timer-demo/


## Constants don't matter
![](img/001.png)
![](img/002.png)

## Big O shorthands
1. Arithmetic operations are constant ( 2+2 same as 10000000 + 2 )
2. Variable assignment is constant ( x = 20 same as x = 200000 )
3. Accessing elements in an array (by index or obj key) is constant 
4. In a loop, the complexity is the length of the loop TIMES the complexity of whatever happens inside of the loop 


## QUIZ
- Simplify the big O expression as much as possible - O(n + 10). ANSWER: O(n)
- Simplify the big O expression as much as possible - O(100 * n). ANSWER: O(n)
- Simply the following big O expression as much as possible - O(25). ANSWER: O(1) 
- Simply the following big O expression as much as possible -  O(n^2 + n^3). ANSWER: O(n^3) 
- Simply the following big O expression as much as possible - O(n + n + n + n).  ANSWER: O(n)
- Determine the time complexity for the following function. ANSWER: O(n)
```cs
function logUpTo(n) {
    for (var i = 1; i <= n; i++) {
        console.log(i);
    }
}
```
- Determine the time complexity for the following function. ANSWER: O(1)
```cs
function logAtMost10(n) {
    for (var i = 1; i <= Math.min(n, 10); i++) {
        console.log(i);
    }
}
```
- Determine the time complexity for the following function. ANSWER: O(n)
```cs
function logAtLeast10(n) {
    for (var i = 1; i <= Math.max(n, 10); i++) {
        console.log(i);
    }
}
```

- Determine the time complexity for the following function. ANSWER: O(n)
```cs
function onlyElementsAtEvenIndex(array) {
    var newArray = Array(Math.ceil(array.length / 2));
    for (var i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            newArray[i / 2] = array[i];
        }
    }
    return newArray;
}
```

- Determine the time complexity for the following function
```cs
function subtotals(array) {
    var subtotalArray = Array(array.length);
    for (var i = 0; i < array.length; i++) {
        var subtotal = 0;
        for (var j = 0; j <= i; j++) {
            subtotal += array[j];
        }
        subtotalArray[i] = subtotal;
    }
    return subtotalArray;
}
```

