// https://visualgo.net/en/sorting

# Before we sort, we must swap!
```cs
// ES5
function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}
```

```cs
// ES2015
const swap = (arr, idx1, idx2) => {
  [arr[idx1],arr[idx2]] = [arr[idx2],arr[idx1]];
}
```

## BubbleSort Pseudocode

```cs
// Optimized BubbleSort with noSwaps
// noSwaps - will stop swaping if it's aready sorted
function bubbleSort(arr){
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  let noSwaps;
  for(let i = arr.length; i > 0; i--){
    noSwaps = true;
    for(let j = 0; j < i - 1; j++){
      console.log(`array[${arr}] comparing ${arr[j]} to ${arr[j+1]}`);
      if(arr[j] > arr[j+1]){
        swap(arr, j, j + 1);
        noSwaps = false;         
      }
    }
    if(noSwaps) break;
  }
  return arr;
}

bubbleSort([8,1,2,3,4,5,6,7]);
```

## Big O of bubble sort
best case (nearly sorted) = O(n)
worst/average O(n²)