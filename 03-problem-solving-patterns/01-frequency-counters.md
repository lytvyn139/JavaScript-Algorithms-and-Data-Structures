
# FREQUENCY COUNTERS
This pattern uses objects or sets to collect values/frequencies of values
This can often avoid the need for nested loops or O(N^2) operations with arrays / strings

Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

```cs
same([1,2,3], [4,1,9]) // true
same([1,2,3], [1,9]) // false
same([1,2,1], [4,4,1]) // false (must be same frequency)
```

## A NAIVE SOLUTION double loops
Time Complexity - N^2
```cs
function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    for(let i = 0; i < arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2) //indexOf is a loop
        if(correctIndex === -1) {
            return false;
        }
        arr2.splice(correctIndex,1)
    }
    return true
}
```
if arr1 and arr2 are 1000 elements each, and we run loop inside of loop, soit's 1 mln of operations
## REFACTORED
Time Complexity - O(n)

```cs
function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}
console.log(same([1,2,5,3], [4,1,9,25]));
```
if arr1 and arr2 are 1000 elements each, so if we run two separed loops it's only 2000 of operations

## ANAGRAMS
Time Complexity - O(n)
Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
```cs
validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram("rat","car") // false
validAnagram('awesome', 'awesom') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true
```

```cs
function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    // if letter exists, increment, otherwise set to 1
    lookup[first[i]] ? lookup[first[i]] += 1 : lookup[first[i]] = 1;
  }
  console.log(lookup)

  for (let i = 0; i < second.length; i++) {
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[second[i]]) {
      return false;
    } else {
      lookup[second[i]] -= 1;
    }
  }

  return true;
}
//{ t: 5, e: 2, x: 1, w: 1, i: 2, s: 1, m: 1 }
validAnagram('texttwisttime', 'timetwisttext') // true
```
