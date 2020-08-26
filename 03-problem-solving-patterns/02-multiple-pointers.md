# MULTIPLE POINTERS
Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition
Very efficient for solving problems with minimal space complexity as well

# EXAMPLE1
Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist
```cs
sumZero([-3,-2,-1,0,1,2,3]) // [-3,3] 
sumZero([-2,0,1,3]) // undefined
sumZero([1,2,3]) // undefined
```

## NAIVE SOLUTION
Time Complexity - O(N^2)
Space Complexity - O(1)
```cs
function sumZero(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return [arr[i], arr[j]];
            }
        }
    }
}
```

## REFACTOR
Time Complexity - O(N)
Space Complexity - O(1)
```cs
function sumZero(arr){
    let left = 0; //-4
    let right = arr.length - 1; //10

    while(left < right){ //also stoping condition when no pairs,
        //it will return 0, and 0 is stoping cond

        let sum = arr[left] + arr[right];
        console.log('sum: ', sum) //6,-1,0

        if(sum === 0){
          //we done over here "-3" - "3" = 0
            return [arr[left], arr[right]];
            
        } else if(sum > 0){
            right--;
        } else {
            left++;
        }
    }
}
sumZero([-4,-3,-2,-1,0,1,2,3,10]) //-3, 3
```



# EXAMPLE2
https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/11183948#questions

countUniqueValues
Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.
```cs
countUniqueValues([1,1,1,1,1,2]) // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4
```

## REFACTOR (no naive were provided)
```cs
function countUniqueValues(arr){
    if(arr.length === 0) return 0;
    var i = 0;
    for(var j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
        console.log(i,j);
    }
    return i + 1;
}
countUniqueValues([1,2,2,5,7,7,99])
```