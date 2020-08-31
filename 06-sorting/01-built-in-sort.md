# SORT

## Letters
```cs
[ "Steele", "Colt", "Data Structures", "Algorithms" ].sort();
// [ "Algorithms", "Colt", "Data Structures", "Steele" ]
```
## Numbers
will not work because "The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values."
```cs
[ 6, 4, 15, 10 ].sort();
// [ 10, 15, 4, 6 ]
```

## Actually Telling JavaScript how to sort
- The built-in sort method accepts an optional comparator function
- You can use this comparator function to tell JavaScript how you want it to sort
- The comparator looks at pairs of elements (a and b), determines their sort order based on the return value
- - If it returns a negative number, a should come before b
- - If it returns a positive number, a should come after b,
- - If it returns 0, a and b are the same as far as the sort is concerned

```cs
function numberCompare(num1, num2) {
  return num1 - num2;
}

[ 6, 4, 15, 10 ].sort(numberCompare);
// [ 4, 6, 10, 15 ]
Before we sort, we must swap!
```

```cs
function compareByLen(str1, str2) {
  return str1.length - str2.length;
}

[ "Steele", "Colt", "Data Structures", "Algorithms" ]
  .sort(compareByLen);
// [ "Colt", "Steele", "Algorithms", "Data Structures" ]
```

