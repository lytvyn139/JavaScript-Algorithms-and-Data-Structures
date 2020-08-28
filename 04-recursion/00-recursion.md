# What is recursion?
A process (a function in our case) that calls itself

## It's EVERYWHERE!
- JSON.parse / JSON.stringify
- document.getElementById and DOM traversal algorithms
- Object traversal
- Very common with more complex algorithms
- It's sometimes a cleaner alternative to iteration

## How recursive functions work
Invoke the same function with a different input until you reach your base case!

## Base Case
The condition when the recursion ends. This is the most important concept to understand 


## Example
```cs
function takeShower(){
    return "Showering!"
}

function eatBreakfast(){
    let meal = cookFood()
    return `Eating ${meal}`
}

function cookFood(){
    let items = ["Oatmeal", "Eggs", "Protein Shake"]
    return items[Math.floor(Math.random()*items.length)];
}
function wakeUp() {
    takeShower()
    eatBreakfast()
    console.log("Ok ready to go to work!")
}

wakeUp()

```


## Our first recursive function
```cs
function countDown(num){
    if(num <= 0) {
        console.log("All done!");
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}
countDown(10);
```

```cs
function sumRange(num){
   if(num === 1) return 1; 
   return num + sumRange(num-1);
}
```


# Factorial
iterative way
```cs
//4! = 4*3*2*1 = 24
function factorial(num){
    let total = 1;
    for(let i = num; i > 1; i--){
        total *= i
    }
    return total;
}
```
recursive way
```cs
function factorial(num){
    if(num === 1) return 1;
    return num * factorial(num-1);
}
```