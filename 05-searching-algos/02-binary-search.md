## Binary Search (works on sorted array)
## Divide and Conquer
- Binary search is a much faster form of search
- Rather than eliminating one element at a time, you can eliminate half of the remaining elements at a time
- Binary search only works on sorted arrays!

## Binary Search Pseudocode
- This function accepts a sorted array and a value
- Create a left pointer at the start of the array, and a right pointer at the end of the array
- While the left pointer comes before the right pointer:
- - Create a pointer in the middle
- - If you find the value you want, return the index
- - If the value is too small, move the left pointer up
- - If the value is too large, move the right pointer down
-If you never find the value, return -1

## Binary Search BIG O?
- Worst and Average Case O(log n)
- Best Case O(1)

## Original Solution
```cs

function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    console.log(`start = ${start} middle = ${middle} end = ${end} `);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]){
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    console.log(`start = ${start} middle = ${middle} end = ${end} `);
    if(arr[middle] === elem){
        return middle;
    }
    return -1;
}
console.log(binarySearch([2,5,6,9,13,15,28,30],28));
[2,5,6,9,13,15,28,30]
 S     M          E
[2,5,6,9,13,15,28,30]
         S   M    E
[2,5,6,9,13,15,28,30]
               S M E
```

## Refactored Version
 ```cs
function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === elem ? middle : -1;
}

console.log(binarySearch([2,5,6,9,13,15,28,30],28));
```

## BIG O?
- Best Case O(1) - could be first guess, lucky middle shot.
- Worst and Average Case O(log n) 

## Suppose we're searching for 13
[2,4,5,9,11,14,15,19,21,25,28,30,50,52,60,63]
[2,4,5,9,11,14,15]
[11,14,15]
[11]
NOPE, NOT HERE!
16 elements = 4 "steps"
log base 2 of 16 aka log2(16) = 4


To add another "step", we need to double the number of elements
32 elements = 5 "steps" (worst case)
log base 2 of 32 aka log2(32) = 5



