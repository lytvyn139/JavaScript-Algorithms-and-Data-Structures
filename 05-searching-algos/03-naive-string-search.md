## Naive String Search
Suppose you want to count the number of times a smaller string appears in a longer string. A straightforward approach involves checking pairs of characters individually

Long string:
wowomgzomg

Short string: 
omg

## logic
=> under the hood we checking not 3 letters, but comparing 
w to o - miss, move +1 to the right
moving to the right
o to o - okay that might work
    w to m - nope the sequence is broken, move +1 to the right
w to o - miss, move +1 to the right
o to o - okay
    m to m - okay
        g to g - okay we have one sequnce
    




wowomgzomg
omg 

wowomgzomg
 omg

wowomgzomg  1 FOUND
   omg

wowomgzomg
    omg

wowomgzomg
     omg

wowomgzomg
      omg

wowomgzomg 2 FOUND
       omg


## Pseudocode
- Loop over the longer string
- Loop over the shorter string
- If the characters don't match, break out of the inner loop
- If the characters do match, keep going
- If you complete the inner loop and find a match, increment the count of matches
- Return the count

```cs
function naiveSearch(long, short){
    var count = 0;
    for(var i = 0; i < long.length; i++){
        for(var j = 0; j < short.length; j++){
            console.log(short[j], long[i+j]);
            if(short[j] !== long[i+j]) {
               console.log('BREAK');
               break;
           }
           if(j === short.length - 1) {
               console.log('FOUND, COUNT +1');
               count++;
           }
        }
    }
    return count;
}

naiveSearch("lorie loled in the house of lolz but why lol", "lol");
```