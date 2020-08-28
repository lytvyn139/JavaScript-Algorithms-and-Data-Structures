# JavaScript has linear search!
There are many different search methods on arrays in JavaScript:

- indexOf
- includes
- find
 -findIndex

 ## Linear Search BIG O
- Best O(1)
- Average O(n)
- Worst O(n)

# Linear Search Pseudocode
- This function accepts an array and a value
- Loop through the array and check if the current array element is equal to the value
- If it is, return the index at which the element is found
- If the value is never found, return -1


```cs

function linearSearch(arr, val){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === val) {return i;
    }
    return -1;
}

linearSearch([34,51,1,2,3,45,56,687], 100)
```

