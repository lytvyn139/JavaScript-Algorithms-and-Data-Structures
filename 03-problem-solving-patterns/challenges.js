//////////////////////////////// #1

/* 
write a function called sameFrequence. Given two positive integers,
find out if the two numbers have the same frequence of digits.
Your solution must have: Time O(n) complexity

*/
function sameFrequency(num1, num2) {
    let strNum1 = num1.toString();
    let strNum2 = num2.toString();
    if (strNum1.length !== strNum2.length) return false;

    let countNum1 = {};
    let countNum2 = {};

    for (let i = 0; i < strNum1.length; i++) {
        countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
    }

    for (let j = 0; j < strNum1.length; j++) {
        countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
    }

    for (let key in countNum1) {
        if (countNum1[key] !== countNum2[key]) return false;
    }

    return true;
}

sameFrequency(182, 281);         //true
sameFrequency(34, 14);           //false
sameFrequency(3589578, 5879385); //true

//////////////////////////////// #2

/* 
write a function called areThereDuplicates. Which accepts a varuable numbers of arguments, and then checks wherether there are any duplicates amont the arguments passed in. You can solve this using the frequency counter patter or multiple pointers pattern.

*/
function areThereDuplicates() {
    let collection = {}
    for (let val in arguments) {
        collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
    }
    for (let key in collection) {
        if (collection[key] > 1) return true
    }
    return false;
}

/* 
areThereDuplicates Solution (Multiple Pointers)
function areThereDuplicates(...args) {
 // Two pointers
 args.sort((a,b) => a > b);
 let start = 0;
 let next = 1;
 while(next < args.length){
   if(args[start] === args[next]){
       return true
   }
   start++
   next++
 }
 return false
} */

/* 
areThereDuplicates One Liner Solution
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}
*/
areThereDuplicates(1, 2, 3); //false
areThereDuplicates(1, 2, 2); //true
areThereDuplicates('a', 'b', 'c', 'a'); //true


//////////////////////////////// #3
/* 
write a function called averagePair. Grives a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average, there may be more that one pair that matches the average target.
Time O(n)
Space O(1)

*/
//averagePair Solution
function averagePair(arr, num) {
    let start = 0
    let end = arr.length - 1;
    while (start < end) {
        let avg = (arr[start] + arr[end]) / 2
        if (avg === num) return true;
        else if (avg < num) start++
        else end--
    }
    return false;
}
averagePair([1, 2, 3], 2.5);              //true
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); //true
averagePair([-1, 0, 3, 4, 5, 6], 4.1);       //false

//////////////////////////////// #4
/* 
Write a function called isSubsequence which takes in two strings and checks whether the characteds in the first string from from a subsequence of the characters in the second string. In other words, the fn should check whether the characters in the first string appear in the second string, without their order changed
*/

//isSubsequence Solution - Iterative
function isSubsequence(str1, str2) {
    var i = 0;
    var j = 0;
    if (!str1) return true;
    while (j < str2.length) {
        if (str2[j] === str1[i]) i++;
        if (i === str1.length) return true;
        j++;
    }
    return false;
}

//isSubsequence Solution - Recursive but not O(1) Space
function isSubsequence(str1, str2) {
    if (str1.length === 0) return true
    if (str2.length === 0) return false
    if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))
    return isSubsequence(str1, str2.slice(1))
}

isSubsequence('hello', 'hello world');  //true
isSubsequence('sing', 'sting');         //true
isSubsequence('abc', 'acb');            //false order matters

//////////////////////////////// #5
/* 
sliding window - maxSubarraySum
Give and array of integers and a number, write a fn called maxSubarraySum, which finds the maximum sub of a subarray with the length of the number passed to the function. Note that a subarray must consist of consecutive (підряд) elements from the original array. In the first example below, [100,200,300] is a subarray of the original array, but [100,300] is not
*/
function maxSubarraySum(arr, num) {
    if (arr.length < num) return null;

    let total = 0;
    for (let i = 0; i < num; i++) {
        total += arr[i];
    }
    let currentTotal = total;
    for (let i = num; i < arr.length; i++) {
        currentTotal += arr[i] - arr[i - num];
        total = Math.max(total, currentTotal);
    }
    return total;
}

maxSubarraySum([100, 200, 300, 400], 2);      //700
maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4); //39
maxSubarraySum([-3, 4, 0, -2, 6, -1], 2); //5
maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2); //5

//////////////////////////////// #6
/* 
sliding window - minSubarrayLen,
write a fn minSubarrayLen, that takes two params ([positive array], positive int)

This fn should return the minimal length of a contiguous subawway of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 

*/

function minSubArrayLen(nums, sum) {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;

    while (start < nums.length) {
        // if current window doesn't add up to the given sum then 
        // move the window to right
        if (total < sum && end < nums.length) {
            total += nums[end];
            end++;
        }
        // if current window adds up to at least the sum given then
        // we can shrink the window 
        else if (total >= sum) {
            minLen = Math.min(minLen, end - start);
            total -= nums[start];
            start++;
        }
        // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
        else {
            break;
        }
    }

    return minLen === Infinity ? 0 : minLen;
}

minSubarrayLen([2, 3, 1, 2, 4, 3], 7); //2 > because [4,3] the smallest subarray
minSubarrayLen([2, 1, 6, 5, 4], 9);   //2 > because [5,4] the smallest subarray
minSubarrayLen([2, 1, 6, 5, 4], 9);   //0
//test cases
//https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/4410608#questions



//////////////////////////////// #7
/* write a fn called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters  
time complexity O(n)
*/

//findLongestSubstring Solution
function findLongestSubstring(str) {
    let longest = 0;
    let seen = {};
    let start = 0;

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (seen[char]) {
            start = Math.max(start, seen[char]);
        }
        // index - beginning of substring + 1 (to include current in count)
        longest = Math.max(longest, i - start + 1);
        // store the index of the next char so as to not double count
        seen[char] = i + 1;
    }
    return longest;
}
findLongestSubstring('bbbbbb'); //1
findLongestSubstring('thisisshowwedoit'); //6


