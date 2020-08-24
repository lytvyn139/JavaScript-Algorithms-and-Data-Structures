# Space complexity

we can also use big O notation to analyze space complexity: how much additional memory do we need to allocate in order to run the code in out algo? 

Auxiliary space is temporary or extra space used by an algorithm. This temporary space allocated in order to solve the problem. Space complexity is total space taken by the algorithm with respect to the input size. Space complexity includes both auxiliary space and space taken by input size.

- most primitives (booleans, numbers, undefined, null) are constant space
- string require O(n) space (where n is the string lenght)
- reference types are generally O(n), where n is the length (for arrays) of the number of the keys (for objects) is the length of array is 2, and the other array length is 4, so it takes twice as much space
# O(1)
![](img/005.png)

# O(n)
![](img/006.png)

- Determine the space complexity for the following function. ANSWER: O(1)
```cs
function logUpTo(n) {
    for (var i = 1; i <= n; i++) {
        console.log(i);
    }
}
```

- Determine the space complexity for the following function. ANSWER: O(1)
```cs 
function logAtMost10(n) {
    for (var i = 1; i <= Math.min(n, 10); i++) {
        console.log(i);
    }
}
```

- Determine the space complexity for the following function.  ANSWER: O(1)
```cs
function logAtMost10(n) {
    for (var i = 1; i <= Math.min(n, 10); i++) {
        console.log(i);
    }
}
```


- Determine the  space complexity for the following function. ANSWER: O(n)
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

- Determine the space complexity for the following function. ANSWER: O(n)
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