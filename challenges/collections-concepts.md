<div align="right">
  <a href="/README.md#this-is-a-collection-of-modern-interview-code-challenges-on-javascript-suitable-for" id="home">Home</a>
</div>

<h2 align="center">JavaScript challenges on Collections - concepts</h2>

<br>

### Q. Show the different ways of creating an array

- Arrays are the collection of values in javascript. Array is a special type of object in JavaScript
- Arrays values are indexed from 0 and have special property length which stores the count of elements present in array

```js
// literal form
const arr = [];
```

```js
// consturctor form
const arr = new Array();
```

```js
// pre defined number of slots
const arr = new Array(10);
```

```js
// with values
const arr = [1, true, "string"];
```

```js
// constructor form with values
const arr = new Array(1, true, "string");
```

###### References
- https://javascript.info/array

<br />

### Q. Write a program to iterate over an array and print all the values of it

- Arrays can be iterated by using its index to fetch the values
- Arrays also can be iterated with for each style loops

```js
for(let i =0; i < arr.length; i++){
    console.log(arr[i]);
}
```

```js
for(let index in arr){
    console.log(arr[index]);
}
```

```js
for(let value of arr){
    console.log(value);
}
```

```js
arr.forEach(val => console.log(val));
```

<br />

### Q. Write a program to append and prepend, single or multiple values in to an array

- Values to the array can be appended using `push` method of array
- Values to the array can be prepended using `unshift` method of array

```js
const arr = [2, 3];
arr.push(4);                    // [2, 3, 4]
arr.unshift(1);                 // [1, 2, 3, 4]
```

```js
const arr = [3, 4];
arr.push(5, 6);                 // [3, 4, 5, 6]
arr.unshift(1, 2);              // [1, 2, 3, 4, 5, 6]
```

```js
const arr = [1, 2, 3];
const otherArr = [4, 5, 6];
arr.push(...otherArr);          // [1, 2, 3, 4, 5, 6]
arr.unshift(...otherArr);            // [4, 5, 6, 1, 2, 3, 4, 5, 6]
```

###### Notes
To remove the elements from the end of the array `pop` operation can be used but one element at a time. To remove the elements from the start of the array `shift` operation can be used but one element at a time


###### References
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift

<br />

### Q. Show insertion and removal of elements can happen in the array for given index

- Values of the array can be removed from any position using `splice` method of array
- Values of the array can also be inserted to any position using `splice` method of array
- 2nd argument is passed as 0 which inserts the elements without replacing
- The values passed after 2nd argument are considered for insertion

```js
const arr = [1, 2, 2, 3];
const position = 2;
const count = 1;
arr.splice(position, count);        // [2]
console.log(arr);               // [1, 2, 3]
```

```js
const arr = [1, 2, 4, 5];
const position = 2;
arr.splice(position, 0, 3);
console.log(arr);               // [1, 2, 3, 4, 5]
```

###### Notes
'count' indicates the number of elements to be removed from the index 'position'. Multiple values can be inserted or removed using `splice`

###### References
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

<br />

### Q. Show the different ways of emptying an array which has values

- Array can be emptied by giving a new reference of an empty array
- Setting the `length` of the array to 0 will automatically makes the array empty
- `pop` and `shift` operation on array can also be used to empty the array where each elements get removed

```js
arr = [];
```

```js
arr = new Array()
```
```js
arr.length = 0;
```

```js
while(arr.length > 0){
    arr.pop();
}
```

```js
while(arr.length > 0){
    arr.shift()
}
```

```js
arr.splice(0, arr.length)
```

###### Notes
`splice` operation used here to empty the array is a trick by passing the length of the array as argument, where all the elements of the array get removed

###### References
- https://www.javascripttutorial.net/array/4-ways-empty-javascript-array/

<br />

### Q. Check if given input is an array or not

- `Array.isArray` is a method which checks if the given argument is an array or not
- Alternatively the `toString` method present on Object prototype can be used to check if it is an array

```js
Array.isArray(arr);
```

```js
Object.prototype.toString.call(arr) === '[object Array]'
```

###### Notes
`typeof` operator cannot be used to check if a value is an array or not because array is an object and `typeof arr` returns us "object"

###### References
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray

<br />

### Q. Show how an array in JavaScript can act like a stack and queue

- Stack is a 'Last In First Out' data structure can be achieved using `push` and `pop` operations
- Queue is a 'First In First Out' data structure can be achieved using `push` and `shift` operations

```js
// To add the value to the stack
arr.push(value);

// To remove the value from the stack
arr.pop();
```

```js
// To add the value to the queue
arr.push(value);

// To remove the value from the queue
arr.shift();
```

<br />

### Q. Create an array by removing all the holes of the array

- Holes are `undefined` value present inside array
- Holes do not get iterated in `filter` which will just fetch all the values except `undefined`

```js
const uniqueArr = arr.filter(value => true);
```

###### Notes
Holes can be formed when an array value by index is deleted. Example: `delete arr[index]`

<br />

### Q. Optimize the given statements having lot of logical checks to use a compact and cleaner logic
```js
// Example1
browser === "chrome" || browser === "firefox" || browser === "IE" || browser === "safari"

// Example2
browser !== "chrome" && browser !== "firefox" && browser !== "IE" && browser !== "safari"
```

- Examples can be modified to store the values of comparision in an array and check for the presence of value if it is present inside array

```js
// Example1
// browser === "chrome" || browser === "firefox" || browser === "IE" || browser === "safari"

const browserList = ["chrome", "firefox", "IE", "safari"];
browserList.includes(browser);
```

```js
// Example2
// browser !== "chrome" && browser !== "firefox" && browser !== "IE" && browser !== "safari"

const browserList = ["chrome", "firefox", "IE", "safari"];
!browserList.includes(browser);
```

###### Notes
Generally this use case can be implemented for `if` conditions

<br />

### Q. Write a program to iterate over a 2 dimensional array and print all the values of it

- Arrays can be iterated by using its index to fetch the values
- Arrays also can be iterated with for each style loops, with one loop to iterate the rows and inside it for cells

```js
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j]);
    }
}
```

```js
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j]);
    }
}
```

```js
for (let rowArr of arr) {
    for (let value of rowArr) {
        console.log(value);
    }
}
```

```js
arr.forEach(rowArr => rowArr.forEach(val => console.log(val)));
```

<br />

### Q. Write a program to store values in to a set

- Set lets us store unique values of any type
- Set can be created empty & then added with values or can be initialized also

```js
const set = new Set();
set.add(1);
set.add(true);
set.add("text");
set.add(1);

set;            // 1, true, "text"
```

```js
const set = new Set([1, 2, 3]);

set;            // 1, 2, 3
```

###### References
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

<br />

### Q. Write a program to store values in to a map

- `Map` holds key-value pairs and remembers the original insertion order of the keys
- `Map` can be created empty & then added with values or can be initialized also with key-value pairs

```js
const map = new Map();
map.set(1, 1000);
map.set(true, false);
map.set("text", "String");

map;                                                            // [1, 1000] [true, false] ["text", "String"]
```

```js
const map = new Map([[1, "One"], [2, "two"], [3, "three"]]);
map;                                                            // [1, "One"] [2, "two"] [3, "three"]
```

###### Notes
Unlike objects, `Map` can have any primitive or object as the key

###### References

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

<br />

### Q. Write a code to iterate over a set

- `set` is an iterable object and can be iterated using for..of loop
- `set` can also be iterated by simple `forEach` loop

```js
for(let val of set) console.log(val);
```

```js
set.forEach(value => console.log(value));
```

<br />

### Q. Write a code to iterate over a map

- `map` is an iterable object and can be iterated using for..of loop
- `map` can also be iterated by simple `forEach` loop

```js
for(let val of map) console.log(val[0], val[1]);
```

```js
for(let key of map.keys()) console.log(key, map.get(key));
```

```js
map.forEach((value, key) => console.log(key, value));
```

<br />

### Q. Show how map is different from object to store key value pairs with coding example

- Map does not contain any keys by default unlike objects which has keys from its prototype
- Map's keys can be any value (including functions, objects, or any primitive) unlike object where keys are only strings
- The keys in Map are ordered in a simple, straightforward way
- The number of items in a Map is easily retrieved from its `size` property
- Map is an iterable object

```js
map.set(1, 'Mapped to a number');           // primitive number as key
map.set('1', 'Mapped to a string');         // string value as key
map.set({}, 'Mapped to a object');          // object as key
map.set([], 'Mapped to an array');          // array as key
map.set(()=>{}, 'Mapped to a function');    // function as key
```

###### Notes
Maps perform better than objects in most of the scenarios involving addition and removal of keys

<br />

### Q. Write a program to polyfill `filter` functionality of the Array

- `filter` iterates over the all values of array and passes value, index and array (itself) as the arguments
- Function returns a new array which filtering the values of the original array

```js
if (!Array.prototype.filter) {
 Array.prototype.filter = function(callback) {
    
    if(typeof callback !== "function")
        throw new Error("Argument passed has to be a function");
 
    let newArray = [];

    for(let index in this) {
      if(callback(this[index], index, this)){
          newArray.push(this[index]);
      }
    }
    return newArray;
  }
}
```

###### Notes
The solution is a simple polyfill of `filter` and not intended to handle all the corner scenarios

<br />

### Q. Write a program to polyfill `map` functionality of the Array

- `map` iterates over the all values of array and passes value, index and array (itself) as the arguments
- Function returns a new array which is same as the length of the original array

```js
if (!Array.prototype.map) {
 Array.prototype.map = function(callback) {
    if(typeof callback !== "function")
        throw new Error("Argument passed has to be a function");
        
    let newArray = [];

    for(let index in this) {
      newArray.push(callback(this[index], index, this));
    }
    return newArray;
  }
}
```

###### Notes
The solution is a simple polyfill of `map` and not intended to handle all the corner scenarios

<br />

### Q. Write a program to polyfill `reduce` functionality of the Array

- `reduce` iterates over the all values of array and passes value, index and array (itself) as the arguments
- `reduce` accepts an optional initial value which when not provided can be skipped
- Function returns a single value after all the iteration

```js
if (!Array.prototype.reduce) {
 Array.prototype.reduce = function(callback, init) {
    let startPosition = 0;
    let accumulator = init ?? this[startPosition++];

    for(let index = startPosition; index < this.length; index++) {
      accumulator = callback(accumulator, this[index], index, this);
    }
    return accumulator;
  }
}
```

###### Notes
The solution is a simple polyfill of `reduce` and not intended to handle all the corner scenarios

<br />

[[↑] Back to top](#home)
