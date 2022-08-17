<div align="right">
  <a href="/README.md#this-is-a-collection-of-modern-interview-code-challenges-on-javascript-suitable-for" id="home">Home</a>
</div>

<h2 align="center">JavaScript challenges on Collections - challenges</h2>

<br>

### Q. Write a function which can concatenate 2 arrays. If only one array is passed it will duplicate it

- Function can take 2 arguments which concatenates arrays
- 2nd array parameter can be defaulted to 1st array if the value is not passed

```js
function mergeArray(arr1, arr2 = arr1){
    return [...arr1, ...arr2];
}
```

```js
function mergeArray(arr1, arr2 = arr1){
    return arr1.concat(...arr2);
}
```

```js
function mergeArray(arr1, arr2 = arr1){
    arr1.push(...arr2);
    return arr1;
}
```

###### Notes
When 2nd argument is not passed, the case is same as duplicating the array

###### References
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat

<br />

### Q. Write a program to replace 3 center elements of the 1st array by center 3 elements of the 2nd array

- `slice` method on array can be used to fetch the values of range in the array
- `splice` method on array can be used to replace the value of range in the array

```js
const a = [1, 2, 3, 4, 5];
const b = [4, 0, 0, 0, 8];

const startPositionFor1stArray = a.length / 2 - 1;
const startPositionFor2ndArray = b.length / 2 - 1;
a.splice(startPositionFor1stArray, 3, ...b.slice(startPositionFor2ndArray, startPositionFor2ndArray + 3));
```

###### Notes
The center most 3 values of array 'a' is replaced by 'b'

<br />

### Q. Sort the given array of integers in ascending or descending order

- `sort` method sorts the elements of an array in place and returns the sorted array
- It receives a function as an argument, which is used for comparision

```js
arr.sort((a, b)=> a - b);       // ascending
arr.sort((a, b)=> b - a);       // descending
```

###### Notes
If function is not passed an argument, default sorting will happen

###### References
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

<br />

### Q. Sort the given array of objects in ascending order according the authors lastname
```js
// Example
const books = [
    { name: "Harry Potter", author: "Joanne Rowling" },
    { name: "Warcross", author: "Marie Lu" },
    { name: "The Hunger Games", author: "Suzanne Collins" },
]
```
- `sort` takes a function and expects the return value to be an integer for sorting
- The last names of the author can be compared and the result can be returned for sorting

```js
books.sort((book1, book2) => {
    const authorLastName1 = book1.author.split(" ")[1];
    const authorLastName2 = book2.author.split(" ")[1];
    return authorLastName2 > authorLastName1 ? -1 : 1;
});
```

###### Notes
Returning a true or false will not work as the algorithm expects an integer value

<br />

### Q. Square all the positive numbers of the array and return the output array

- `filter` is the method on Array which can be used to filter. It receives a function which can return boolean to filter the elements
- `map` is the method on Array which can be used to map the values to new values. It receives a function which can return the modified value

```js
const positiveArr = arr.filter((value) => value >= 0);
const squaredPositiveArr = arr.map((value) => value * value);
```

```js
const squaredPositiveArr = arr.filter((value) => value >= 0).map((value) => value * value);
```

###### Notes
2nd solution uses method chaining where the return value from `filter` fuction is an array on which `map` method is being called

###### References
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

<br />

### Q. Write a code to generate an array with range of numbers and shuffle them

- An array of numbers in the range can be generated from a function which can take start and end value of the range
- The shuffling can be achieved simply by sorting the array using a function which randomly returns positive or negative numbers
- The shuffling of the values can be also done by picking a value from a random index from the current array and moving it in to a new array

```js
function rangeGenFunc(start = 1, end = 0) {
    const arr = [];
    for (let i = start; i <= end; i++) {
        arr.push(i);
    }
    return arr;
}

const arr = rangeGenFunc(1, 10);                    // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arr.sort(() => 0.5 - Math.random());                // [6, 8, 5, 10, 4, 3, 9, 2, 7, 1]
```

```js
function* rangeGen(start = 1, end = 0) {
  for (let i = start; i <= end; i++){
      yield i;
  }
}

let arr = [...rangeGen(1, 10)];                     // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let shuffledArr = [];
const length = arr.length;
for (let i = 0; i < length; i++) {
    shuffledArr.push(...arr.splice(Math.floor(Math.random() * arr.length), 1));
}

console.log(shuffledArr)                             // [5, 4, 7, 10, 3, 6, 8, 2, 1, 9]
```

###### Notes
2nd solution uses generator function to generate the range of values which can be converted to an array by spreading.

<br />

### Q. Check if the user with the name "John" exists in the array of objects

```js
const doesJohnExist = arr.some((obj) => obj.name === "John");
```

```js
const jonhObject = arr.find((obj) => obj.name === "John");
const doesJohnExist = jonhObject ? true : false;
```

```js
const jonhIndex = arr.findIndex((obj) => obj.name === "John");
const doesJohnExist = jonhIndex < 0 ? false : true;
```

<br />

### Q. Generate an array of objects with properties id and full name from an array of objects where each object will have id, firstname and lastname

- To manipulate array of objects `map` method can be used

```js
const employeesListWithFullName = arr.map((obj) => { return { id, fullName: obj.firstName + " " + obj.lastName } });
```

<br />

### Q. Write a program to calculate the sum of all the values of an array

- Sum of the values of an array can calculated by iterating and adding all the values of the array
- `reduce` method of array can be used efficiently to calculate the sum with or without initial value

```js
const sum = arr.reduce((acc, value) => acc + value, 0);
```

```js
const sum = arr.reduce((acc, value) => acc + value);
```

```js
const sum = 0;
for(let value of arr){
    sum = sum + value;
}
```

###### Notes
`reduce` method takes a function as 1st argument and initial value as 2nd argument. The return value of current iteration will be 1st argument for the next iteration along with the next element of the array

###### References
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

<br />

### Q. Get the maximum value from a numbers array along with its index

- `Math.max` is a method which returns maximum value from a given list of values
- `reduce` can also be designed to return the maximum value of each comparision

```js
const max = Math.max(...arr);
arr.indexOf(max);           // position of max number
```

```js
let max = a[0], position = 0;
for(let index in arr){
    if(arr[index] > max){
        position = index
        max = value;
    }
}

position;                   // position of max number
```

```js
const max = arr.reduce((a, b) => a > b ? a : b);
arr.indexOf(max);           // position of max number
```

###### Notes
Though 1st solution is verbose compared to 2nd, but has good performance

###### References
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min

<br />

### Q. Find the number of occurences of minimum value in the numbers list

- `filter` method can be used to fetch all the minimum values and we can get the count of those valuses

```js
const min = Math.min(...arr);
minArr = arr.filter((value) => value === min);
minArr.length;                                  // count of minimum value occurences
```

<br />

### Q. Create an array of length n with all the values of it set to 10

- `fill` is a method on Array prototype which fills all the slots of array with the value given passed as the argument

```js
const n = 5;
const arr = new Array(n);
arr.fill(10);
```

###### Notes
If an object is passed the object reference is copied to all the slots and not the different objects

###### References
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill

<br />

### Q. Write the code to remove the duplicates from the array

- Set is a data structure which does not allow duplicate elements

```js
const set = new Set(...arr);
const distinctArr = [...set];
```

<br />

### Q. Design a flat function which flattens an array to any depth

- Flat function can be used to flatten the array by recursive call

```js
function flat(arr){
    const flatArr = [];
    arr.forEach((value) => {
        if(Array.isArray(value)){
            flatArr.push(...flat(value));
        }
        else{
            flatArr.push(value);
        }
    });
    return flatArr;
}
```

<br />

### Q. Check if all the students of have passed or not (40 is the pass marks)

- `every` is a method on Array prototype which returns true only if all the elements condition satisfies the condition

```js
const isAllPass = students.every((student) => student.marks >= 40);
```

<br />

### Q. Get the average of all the salaries which is greater than 10000 from the department of "IT" from the array of objects)

```js
const itEmployeesWithSalaryGT10K = employees.filter((employee) => employee.salary > 10000 && employee.dept === 'IT );
const itTotalSalaryGT10K = itEmployeesWithSalaryGT10K.reduce((acc, value) => acc + value, 0);
const itAvgSalaryGT10K = itTotalSalaryGT10K / itEmployeesWithSalaryGT10K.length;
```

<br />

### Q. Extract the list of all the elements from the list of numbers given in 2 arrays

- The union array will be the result if all the elements from the 2 arrays are picked

```js
const set1 = new Set(...arr1);
const set2 = new Set(...arr2);
const distinctArr = [...set1, ...set2];
```

<br />

### Q. Get the list of all distinct elements which are present in both list of numbers

- The intersection array will be the result if the common elements from the 2 arrays are picked

```js
const intersectionArr = arr1.filter(value => arr2.includes(value));
const distinctIntersectionArr = [...new Set(intersectionArr)];
```

```js
const set1 = new Set(arr1);
const set2 = new Set(arr2);
const distinctIntersectionArr = [...set1].filter(value => set2.has(value));
```

<br />

### Q. Extract list of elements present only in the first list given.

- The only present elements of 1st list will be the result when all the elements of 1st list not present in the 2nd are chosen

```js
const set1 = new Set(arr1);
const set2 = new Set(arr2);
const intersectionArr = [...set1].filter(value => !set2.has(value));
```

###### Notes
Elements of 2nd list only can be obtained by checking for all the elements of lis 2 which are not present in list1

<br />

### Q. Create a function named "average" which can calculate the average of an array and should be available to be called from any Array object.

- The function added to Array prototype are accessible to all the objects of Array

```js
Array.prototype.average = function (){
    let total = 0;

    for(let index in this) {
      total += this[index];
    }
    return total / this.length;
}
```

<br />

### Q. Write a code to eliminate duplicate objects in an array where each object has an 'id' property which can be used to identify the object and the duplicate object with lower rank to be removed
```js
// Example
const arr = [
    {
        id: 1,
        name: 'emp1',
        rank: 4,
    },
    {
        id: 2,
        name: 'emp2',
        rank: 1,
    },
    {
        id: 2,
        name: 'emp2',
        rank: 2,                // this is a duplicate object (id = 2) and has lower rank 
    },
    {
        id: 3,
        name: 'emp3',
        rank: 3,
    },
];
```

- The duplicate objects cannot be removed using `Set` as the 2 objects with same structure and data have different references
- `Map` can be used to have 'id' as the key and object as value
- If 'id' is already present in the array, object with the higher rank can be retained

```js
const map = new Map();

arr.forEach(obj => {
    if (map.has(obj.id)) {
        if (obj.rank < map.get(obj.id).rank) {
            map.set(obj.id, obj);
        }
    } else {
        map.set(obj.id, obj);
    }
});

distinctArr = [...map.values()];
```

<br />

### Q. Create an array which will only accept string values. (Homogeneous array of strings)

- Array in JavaScript a collection of values of any type by default
- Proxy can be used to validate and insert to the array only if the value satisfies the condition using `set` trap

```js
var stringsArr = [];

var stringsArr = new Proxy(stringsArr, {
  set(target, prop, receiver){
    if(typeof receiver === "string"){
      target[target.length] = receiver;
    }
    return true;
  }
});

// driver code
stringsArr.push("Hello", 5, {}, "world", true, [1, 2, 3]);
stringsArr;                                                     // ["Hello", "world"]
```

###### Notes
The functionality of the code can be modified to make the array accept any one or more kind of values only

<br />

### Q. Create a Proxy object through which the array can be accessed as usual but also allow to access the values through negative indices
```js
// Example
let arr = [10, 20, 30];

arr[-1];            // 30
arr[-2];            // 20
```

- `get` trap of proxy can be used to map the negative index to the valid array position

```js
arr = new Proxy(arr, {
    get(target, handler) {
        if (handler < 0) return target[target.length + Number(handler)];
        else return target[handler];
    },
});
```

<br />

[[↑] Back to top](#home)
