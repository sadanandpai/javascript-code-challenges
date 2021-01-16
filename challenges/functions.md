<div align="right">
  <a href="/README.md#this-is-a-collection-of-modern-interview-code-challenges-on-javascript-suitable-for" id="home">Home</a>
</div>

## JavaScript interview code challenges on Functions

1. [Write a function which returns another function and execute it after calling](#Q1)
2. [Write a function which executes another function recieved as an argument](#Q2)
3. [Create a function having no parameters declared and print all the arguments passed to it](#Q3)
4. [Write a function which executes only if the number of arguments match the number of parameters the function is expecting](#Q4)
5. [Design a function which can recieve variable number of arguments in parameters and print them](#Q5)
6. [Show the most common ways of creating functions in JavaScript](#Q6)
7. [Code the different forms of arrow functions for varying number of parameters](#Q7)
8. [Write a program where hoisting can be visualized](#Q8)
9. [Code an Immediately Invoked Function Expression (IIFE) and show the different ways of executing it](#Q9)
10. [Create an IIFE which receives arguments and executes](#Q10)
11. [Show the usage of IIFE to set a value of a variable](#Q11)
12. [Design a Calulator interface for 2 number inputs which can perform sum, difference, product and dividend whenever invoked on the same interface](#Q12)
13. [Write a function which can return multiple values from a function](#Q13)
14. [Write a function which can set default value to the parameters of function when an argument is not passed. Also show how to use exisiting parameters to set the value of another parameter](#Q14)
15. [Design a private counter function which exposes increment and retrive functionalities](#Q15)
16. [Show the usage of call, apply and bind with practical example](#Q16)
17. [Show the usage of function which can used as a constructor](#Q17)
18. [Show the procedure of creating object using a factory function](#Q18)
19. [Achieve prototypal inheritance using functions to create objects in JavaScript](#Q19)
20. [Write a polyfill for bind function](#Q20)
21. [Write a function which will create a function bounded to the context like `bind`, but can be overridden when the context is set explicitly](#Q21)
22. [Write a function which helps to achieve multiply(a)(b) and returns product of a and b](#Q22)
23. [Write a code to show the differences between the techniques, currying and partial application](#Q23)
24. [Create a function which takes another function as an argument and makes it eligible for currying or partial application](#Q24)
25. [Design a function which helps to do debouncing](#Q25)
26. [Design a function which helps to do throttling](#Q26)
27. [Design an interface which limits the number of function calls by executing the function once for a given count of calls](#Q27)
28. [Write a singleton function to create an object only once](#Q28)
29. [Design a function with toggle functionality for given list of inputs where toggle function accepts list of values to be toggled upon](#Q29)
30. [Create a range function which returns an array for the provided inputs as start and end](#Q30)
31. [Write a function which takes a function as an argument to achieve memoization](#Q31)
32. [Write a function to copy functions of an object to another object (mixin)](#Q32)
33. [Create a single function which can perform sum(a, b, c), sum(a, b)(c), sum(a)(b, c) and sum(a)(b)(c) and returns sum of a, b and c](#Q33)
34. [Design a function which can keep recieving the arguments on each function call and returns the sum when no argument is passed](#Q34)
35. [Show the usage Proxy for function](#Q35)
36. [Create an interface for a function such that whenever a function is triggered the system should log the time. Do not modify the function code](#Q36)
37. [Create an interface exposing subscribe and publish functionality, which allows publishing data which in turn invokes all the subscribers with the data](#Q37)

---

#### Q1
### Write a function which returns another function and execute it after calling

- Functions can be declared, executed or returned inside another function

```js
function higherOrderFunction(){
    function displayHello(){
        console.log("Hello")
    }
    return displayHello;
}

// driver code
var func = higherOrderFunction();
func();                                 // hello
```

###### Notes
Function can also be stored in variables like other values in JavaScript

###### References
- https://eloquentjavascript.net/05_higher_order.html
- https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function

<br />

#### Q2
### Write a function which executes another function recieved as an argument
- Functions can be passed as arguments to another functions
- Passing the function as argument will pass its reference hence no parenthesis

```js
function callbackExecutor(callback){
    if(typeof callback === "function"){
        callback();
    }
}


// driver code
function callbackFunc(){
    console.log("Callback function executed");
}

callbackExecutor(callbackFunc);                         // Callback function executed
```

###### References
- https://developer.mozilla.org/en-US/docs/Glossary/Callback_function

<br />

#### Q3
### Create a function having no parameters declared and print all the arguments passed to it

- When a function is invoked the arguments passed to it are accessible using the defualt object called "arguments"
- Numbers starting from 0 is set as key of the object "arguments" corresponding to each argument in the order
- `arguments` object will have length property as well which gives count of arguments passed

```js
function func(){
    for(let key in arguments){
        console.log(arguments[key]);
    }
}

// driver code
func(1, "Hello", true);
```

```js
function func(){
    for(let value of arguments){
        console.log(value);
    }
}

// driver code
func(1, "Hello", true);
```

###### Notes
Though the keys of arguments object look like numbers, "arguments" is not an array. Arrow functions will not have arguments object

###### References
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments

<br />

#### Q4
### Write a function which executes only if the number of arguments match the number of parameters the function is expecting

- The number of parameters declared in a function can be obtained by accessing the length property of the function

```js
function func(a, b, c){
    if(func.length === arguments.length){
        console.log("Number of arguments passed match the expected arguments");
    }
    else {
        throw new Error("Number of arguments passed do not match the expected arguments");
    }
}
```

###### References
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/length

<br />

#### Q5
### Design a function which can recieve variable number of arguments in parameters and print them

```js
function varArgsFunc(...params){
    params.forEach(function(value, index){
        console.log(index, ": ", value);
    })
}

// driver code
varArgsFunc("Hello", ",", "World", "!!!");
```

###### References
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

<br />

#### Q6
### Show the most common ways of creating functions in JavaScript

- The functions are most commonly created as function statements, function expression and arrow functions
- Function statements get hoisted unlike function expressions

```js
// Regular function as a function statement
function functionName(params) {
    //code block
}
```

```js
// Regular function as a function expression
const functionName = function (params) {
    //code block
}
```

```js
// Arrow function as a function expression
const arrowFunctionName = (params) => {
    //code block
}
```

###### Notes
As the arrow functions are not verbose, majority of developers prefer to create arrow functions for quick coding

###### References
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions

<br />

#### Q7
### Code the different forms of arrow functions for varying number of parameters

- Arrow functions provide simpler syntax over `function` keyword functions
- Arrow functions with single parameter, round brackets are optional
- Arrow functions with single statement with return, flower brackets and return keywords are optional

```js
const noArgsFunc = () => { 
    return "No args passed"
};
```

```js
const singleArgFunc = (arg1) => "Argument is " + arg1;
```

```js
const singleArgFunc = arg1 => {
    console.log("Argument is " + arg1);
    return arg1;
};
```

```js
const twoArgsFunc = (arg1, arg2) => {
    return arg1 + arg2;
}
```

```js
const threeArgsFunc = (arg1, arg2, arg3) => {
    console.log("Sum is " + (arg1 + arg2 + arg3));
    return true;
}
```

###### Notes
Arrow functions are also called fat arrow functions

###### References
- https://developer.mozilla.org/en-US/docs/web/JavaScript/Reference/Operators/function

<br />

#### Q8
### Write a program where hoisting can be visualized

- The function statement and variable declared with `var` are accessible before it appears in the code
- Declarations are put into memory before it executes any code segment that allows us to use a function before you declare it in your code
- In hoisting the hoisted items are accessible in the scope it is declared
- Function expressions do not get hoisted

```js
num1 = 10;
printHello();

var num1;
function printHello(){
    console.log("Hello");
}

var nonHoistedFunc = function(){
    console.log("Hello");
}
```

###### Notes
Hoisting was thought up as a general way of thinking about how execution contexts work in JavaScript. In reality, code does not get hoisted, but affect is seen due to compilation and execution phases followed by JavaScript compiler

###### References
- https://developer.mozilla.org/en-US/docs/Glossary/Hoisting

<br />

#### Q9
### Code an Immediately Invoked Function Expression (IIFE) and show the different ways of executing it

- IIFE is a JavaScript function that runs as soon as it is defined
- IIFE prevents polluting the global scope

```js
(function IIFE(){
    console.log("I am an Immediately invoked function");
})();
```

```js
(function IIFE(){
    console.log("I am an Immediately invoked function");
}());
```

```js
+function IIFE(){
    console.log("I am an Immediately invoked function");
}();
```

###### References
- https://developer.mozilla.org/en-US/docs/Glossary/IIFE

<br />

#### Q10
### Create an IIFE which receives arguments and executes

- Arguments can be passed normally to an IIFE like we pass to while calling regular functions
- Multiple arguments can be passed similar to function invokation with arguments

```js
(function IIFE(param1, param2){
    console.log("I am an Immediately invoked function");
    console.log("Parameter 1: " + param1);
    console.log("Parameter 2: " + typeof param2);
    console.log("Parameter 2 output: " + param2());
})("hello", function(){ return "I am a string from a function passed to IIFE"; });
```

###### Notes
A string and a function is passed as arguments to the IIFE

<br />

#### Q11
### Show the usage of IIFE to set a value of a variable

- IIFE can be directly executed when it is used as an expression against assignment to a variable

```js
var randomNumber = function (){
    return Math.floor(Math.random() * 100);
}();
```

<br />

#### Q12
### Design a Calulator interface for 2 number inputs which can perform sum, difference, product and dividend whenever invoked on the same interface
```js
// Example
const calc12And5 = Calculator(12, 5);
calc12And5.sum();                       // 17
calc12And5.difference();                // 7
calc12And5.product();                   // 60
calc12And5.dividend();                  // 2
```

- Simple revealing module pattern can be used which receives inputs and executes different operations exposed through functions

```js
function Calulator(num1, num2){

    function sum(){ 
        return num1 + num2; 
    }
    
    function difference(){ 
        return num1 - num2; 
    }
    
    function product(){ 
        return num1 * num2; 
    }
    
    function dividend(){ 
        return Math.floor(num1 / num2); 
    }

    return { sum, difference, product, dividend };
}
```

###### Notes
The solution provided is one of the way to achieve the interface. The design and solution can vary 

###### References
- https://eloquentjavascript.net/10_modules.html

<br />

#### Q13
### Write a function which can return multiple values from a function

- Function in general is designed to return a single value.
- Generators are special type of functions which returns iterator which in turn can be used to send & receive values.

```js
function multipleValueReturnFunc(){
    const a = 5, b = 10;
    return [a, b];
}

// driver code
const [x, y] = multipleValueReturnFunc();
```

```js
function multipleValueReturnFunc(){
    const a = 'Java', b = 'Script';
    return {
        a, b
    };
}

// driver code
const {x, y} = multipleValueReturnFunc();
```

```js
function* multipleValueReturnFunc(){
    const a = 5, b = 10;
    yield a;
    yield b;
}

// driver code
const iterator = multipleValueReturnFunc();
const x = iterator.next().value;
const y = iterator.next().value;
```

###### Notes
Array and object are used in the programs to contain multiple values

<br />

#### Q14
### Write a function which can set default value to the parameters of function when an argument is not passed. Also show how to use exisiting parameters to set the value of another parameter

- Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed

```js
function defaultValueFunc(num = 10, num2 = 20, string = "Hello", bool = false, sum = num1 + num2 ){
    console.log(num, string, bool, sum);
}

// driver code
defaultValueFunc();                                 //  10, 20, false, 30
defaultValueFunc(4, 8);                             //  4, 8, false, 12
defaultValueFunc(10, 4, true);                      //  10, 4, true, 14
defaultValueFunc(5, 6, false, 11);                  //  5, 6, false, 11
defaultValueFunc(undefined, undefined, false);      //  10, 20, false, 30
```

###### Notes
The default values are set only for missing or `undefined`. `null` and other falsy values are considered as valid arguments and default will not be set

###### References
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters

<br />

#### Q15
### Design a private counter function which exposes increment and retrive functionalities

```js
function privateCounter(){
    var count = 0;
    return {
        increment: function(val = 1){
            count += val;
        }
        retrieve: function(){
            return count;
        }
    }
}

// driver code
const counter = privateCounter();
counter.increment();
counter.increment();
counter.retrieve();             // 2
counter.increment(5);
counter.increment();
counter.retrieve();             // 8
```

###### Notes
'increment' function takes an argument to increment if passed else which is set to 1 (increments by 1)

###### References
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

<br />

#### Q16
### Show the usage of call, apply and bind with practical example

- 'call' is a method on function prototype and is used to set the context of the function by passing it as 1st argument followed by the arguments
- 'apply' is a method on function prototype and is used to set the context of the function by passing it as 1st argument followed by the array of arguments
- 'bind' is a method on function prototype and is used to create a new function with the context as the 1st argument followed by the arguments

```js
function displayThisValue(param1, param2) {
    console.log(this.value, param1, param2);
}

const obj = {
    value: 10
}
const valueArr = [20, 30];

// No context set
displayThisValue(20, 30);                                       // undefined, 20, 30

// 'obj' is set as the context using 'call'
displayThisValue.call(obj, ...valueArr);                        // 10, 20, 30

// 'obj' is set as the context using 'apply'
displayThisValue.apply(obj, valueArr);                          // 10, 20, 30

// No context set
setTimeout(displayThisValue, 1000, ...valueArr);                // undefined, 20, 30

// 'obj' is set as the context using 'bind'
setTimeout(displayThisValue.bind(obj), 1000, ...valueArr);      // 10, 20, 30
setTimeout(displayThisValue.bind(obj, ...valueArr), 1000);      // 10, 20, 30
```

###### Notes
The context inside the function can be accessed using `this` keyword

###### References
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
- https://javascript.info/bind

<br />

#### Q17
### Show the usage of function which can used as a constructor

- Function can be used to like a constructor by calling it with a `new` keyword
- Constructor function is a normal function but generally used to create object and may also have functions in its prototype
- Constructor function is generally preferred to start with Uppercase letter which is not mandatory
- The return from the constructor function is new object created which is accessed with `this` inside the function
- Constructor function can return an explicit object as well

```js
function Employee(id){
    this.id = id;
}

Employee.prototype.setSalary = function(salary){
    this.salary = salary;
}

Employee.prototype.getSalary = function(){
    return this.salary;
}

// driver code
const emp = new Employee(1);
emp.setSalary(10000);
console.log(emp.getSalary());
```

###### Notes
Constructor function can be called without new keyword as well, which executes the function normally which is of not much use in most of the cases.

###### References
- https://javascript.info/constructor-new

<br />

#### Q18
### Show the procedure of creating object using a factory function

- Any function which is not a class or constructor that returns an object without a new keyword is known as factory function
- A normal function which can be modified to return an object which can be called by passing arguments

```js
function factoryFunc(username, password, isActive = false, isAdmin = false) {
    if (typeof username !== 'string' && typeof password !== 'string') throw new Error('Invalid username or password');

    return {
        username,
        password,
        isActive,
        isAdmin,
        created: new Date(),
    };
}

// driver code
const user = factoryFunc('admin', 'password');
```

###### References
- https://medium.com/javascript-scene/javascript-factory-functions-with-es6-4d224591a8b1

<br />

#### Q19
### Achieve prototypal inheritance using functions to create objects in JavaScript

- 2 functions can be used create objects with constructor call to the functions
- The prototype of child function is connected with parent function to achieve the inheritance behavior

```js
function parent(name){
    this.name = name;
}

parent.prototype.getName = function (){ 
    return this.name; 
}

function child(name){
    parent.call(this, name);
}

child.prototype = Object.create(parent.prototype);
child.prototype.getMyName = function(){ 
    return this.name; 
}

// driver code
var fk = new child("FK");
console.log(fk.getName());
console.log(fk.getMyName());

var pk = new parent("PK");
console.log(pk.getName());
```

###### Notes
Solution is one of the known way of achieving prototypal inheritance, but is not the only way to achieve it.

###### References
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain

<br />

#### Q20
### Write a polyfill for bind function

- The `bind` method creates a new function that, when called, has its this keyword set to the provided context

```js
if(!Function.prototype.bind){
    Function.prototype.bind = function(context){
        var fn = this;
        var fnArgs = Array.prototype.slice.call(arguments, 1);

        return function(){
            var allArgs = funcArgs.concat(Array.prototype.slice.call(arguments))
            fn.apply(context, allArgs);
        };
    }
}
```

###### Notes
This is a simple polyfill for bind without handling corner cases. It does not work when using the new operator

###### References
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind

<br />

#### Q21
### Write a function which will create a function bounded to the context like `bind`, but can be overridden when the context is set explicitly

- The functionality is similar to `bind` with exception that if there is a context set during the execution it will override

```js
function softBind(fn, context) {
    var fnArgs = Array.prototype.slice.call(arguments, 2);

    return function() {
        var allArgs = fnArgs.concat(Array.prototype.slice.call(arguments));
        
        // override the context to incoming context if it is not undefined, null or window
        var context = (!this || this === window) ? obj : this;
        fn.apply(context, allArgs);
    };
}
```

###### Notes
This functionality is also known as 'Soft Binding'

###### References
- https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/this%20%26%20object%20prototypes/ch2.md#softening-binding
- https://gist.github.com/getify/9043478

<br />

#### Q22
### Write a function which helps to achieve multiply(a)(b) and returns product of a and b
```js
// Example
multiply(2)(4);                 // 8
multiply(5)(3);                 // 15
```

- The implementation of this can be achieved by calling a function which returns a function

```js
function multiply(num1){
    return function (num2){
        return num1 * num2;
    }
}
```

###### References
- https://medium.com/javascript-scene/curry-and-function-composition-2c208d774983

<br />

#### Q23
### Write a code to show the differences between the techniques, currying and partial application

- A function returning another function that might return another function, but every returned function must take only one parameter at a time is __currying__
- A function returning another function that might return another function, but each returned function can take several parameters is __partial application__

```js
// currying
function multiply(num1){
    return function (num2){
        return function (num3){
            return num1 * num2 * num3;
        }
    }
}
```

```js
// partial application
function multiply(num1){
    return function (num2, num3){
        return function (num4){
            return num1 * num2 * num3 * num4;
        }
    }
}
```

###### References
- https://towardsdatascience.com/javascript-currying-vs-partial-application-4db5b2442be8
- https://medium.com/better-programming/functional-programming-currying-vs-partial-application-53b8b05c73e3

<br />

#### Q24
### Create a function which takes another function as an argument and makes it eligible for currying or partial application

- Function can take another function as argument and accept the arguments on the returned functions till the expected arguments are reached
- The arguments can be 1 or multiple, and the actual function will be called once the count of expected arguments are reached

```js
function curryFunc(fn) {
    return function curry(...args) {
        if (fn.length <= args.length) {
            return fn.apply(this, args);
        } else {
            return function (...args2) {
                return curry.apply(this, args.concat(args2));
            };
        }
    };
}

// driver code
let sum = curryFunc(function (a, b, c, d) {
    return a + b + c + d;
});

sum(1)(2)(3)(4);                    // called like curried function
sum(1,2)(3,4);                      // called like partial application
```

###### References
- https://javascript.info/currying-partials#advanced-curry-implementation

<br />

#### Q25
### Design a function which helps to do debouncing

- The `debounce` function forces a function to wait a certain amount of time before running again
- The function is built to limit the number of function calls to improve the performance
- Debounce function design can take function (to be debounced), delay and the optional context

```js
function debounce(fn, delay, context){
    let timer;

    return function(...args){
        if(timer) clearTimeout(timer);
        
        context = this ?? context;
        timer = setTimeout(()=>{
            fn.apply(context, args);
        }
        , delay);
    }
}
```

###### Notes
Context is replaced while debounce function call in presence of a context. If not, context set during the `debounce` function call is used.

###### References
- https://www.youtube.com/watch?v=Zo-6_qx8uxg

<br />

#### Q26
### Design a function which helps to do throttling

- The `throttling` function forces a function to run once in an amount of time for one or multiple calls
- The function is built to limit the number of function calls to improve the performance
- Throttling function design can take function (to be throttled), delay and the optional context

```js
function throttle(fn, delay, context){
    let timer;
    let lastArgs;

    return function(...args){
        lastArgs = args;
        context = this ?? context;
        
        if(timer) return;
        
        timer = setTimeout(()=>{
            fn.apply(context, lastArgs);
            clearTimeout(timer);
        }
        , delay);
    };
}
```

###### Notes
Last arguments to the throttled function is saved so that most recent arguments will be used for throttled function execution (unlike debouncing where it is taken care due to its way of execution)

###### References
- https://www.youtube.com/watch?v=81NGEXAaa3Y

<br />

#### Q27
### Design an interface which limits the number of function calls by executing the function once for a given count of calls

- function forces a function run to for specific number of times in a given number of execution calls
- The function is built to limit the number of times a function is called
- Throttling function design can take function (to be throttled), delay and the optional context

```js
function sampler(fn, count, context){
    let counter = 0;

    return function(...args){
        lastArgs = args;
        context = this ?? context;
        
        if(++counter !== count) return;
        
        fn.apply(context, args);
        counter = 0;
    };
}
```

###### Notes
Sampling is different from throttling in the way that sampling limits the execution by executing function once in a given number of calls where as throttling limits the execution by executing function once in a given amount of time

###### References
- https://rxjs.dev/api/operators/sample

<br />

#### Q28
### Write a singleton function to create an object only once

- Singleton is a design pattern which restricts the creation of only one object from a given interface
- When requested multiple times, same object is returned

```js
var Singleton = (function () {
    var instance;
 
    function createInstance() {
        var object = new Object("I am the instance");
        return object;
    }
 
    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

// driver code
const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();
```

###### Notes
Here both 'instance1' and 'instace2' are referencing to the same object

###### References
- https://www.dofactory.com/javascript/design-patterns/singleton

<br />

#### Q29
### Design a function with toggle functionality for given list of inputs where toggle function accepts list of values to be toggled upon
```js
// Example
var hello = toggle("hello");
var onOff = toggle("on","off");
var speed = toggle("slow","medium","fast");

hello();      // "hello"
hello();      // "hello"

onOff();      // "on"
onOff();      // "off"
onOff();      // "on"

speed();      // "slow"
speed();      // "medium"
speed();      // "fast"
speed();      // "slow"
```

- Toggle functionality can be obtained by returning the next value cyclically on each call to the function
- The toggle function will return another function which maintains the closure over the values with which it was initialized

```js
function toggle(...values){
    let state = -1;
    const length = values.length;
    return function(){
        state = (state + 1) % length;
        return values[state];
    }
}
```

###### References
- https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/apB.md#closure-part-2

<br />

#### Q30
### Create a range function which returns an array for the provided inputs as start and end
```js
// Example
range(3, 6)     // [3, 4, 5, 6]
range(3)(5)     // [3, 4, 5]
range(3)(0)     // []
```

- Range functionality can be obtained by returning the an array from start to end both inclusive
- In case if 2nd argument is not passed, function will return another function which calls itself with once both the values are obtained

```js
function range(start, end) {
    if (end === undefined) {
        return function (end) {
            return range(start, end);
        };
    }

    const arr = [];
    for (let i = start; i <= end; i++) {
        arr.push(i);
    }
    return arr;
}
```

###### References
- https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/get-started/apB.md#appendix-b-practice-practice-practice

<br />

#### Q31
### Write a function which takes a function as an argument to achieve memoization

- Memoization is an optimization technique used primarily to speed up the programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again
- Function can be designed to use a cache storage (using `map` or `object`) which stores the values of function output against the input

```js
function memoize(fn) {
    const cache = new Map();
    return function () {
        const key = JSON.stringify(arguments);
        
        // if the caculations have already been done for inputs, return the value from cache
        if (cache.has(key)) {
            return cache.get(key);
        } else {
            // call the function with arguments and store the result in cache before returning
            cache.set(key, fn(...arguments));
            return cache.get(key);
        }
    };
}

// driver code
let factorial = memoize(function fact(value) {
    return value > 1 ? value * fact(value - 1) : 1;
});

factorial(5);                   // 120 (output is calculated by calling the function)
factorial(5);                   // 120 (output is returned from the cache which was stored from previous calculations)
```

###### Notes
Stringification of arguments done in order for the function to work for multiple arguments

###### References
- https://codeburst.io/understanding-memoization-in-3-minutes-2e58daf33a19

<br />

#### Q32
### Write a function to copy functions of an object to another object (mixin)

- Mixins are a form of object composition, where component features get mixed into a composite object
- In JavaScript we can only inherit from a single object. Mixins allow copying properties of other function prototype or objects to the target object

```js
// mixin using Object.assign

function mixin(sourceObj, targetObj) {
    // copy properties of source object to target object
    return Object.assign(targetObj, sourceObj);
}

// driver code
const obj1 = {
    task1() {
        console.log('Task1');
    },
};

const obj2 = {
    task2() {
        console.log('Task2');
    },
};

let mixinObj = mixin(obj1, {});
mixinObj = mixin(obj2, mixinObj);
mixinObj.task1();                               // Task1
mixinObj.task2();                               // Task2
```

```js
// mixin using property copy through loops (pre ES6)

function mixin(sourceObj, targetObj) {
    for (var key in sourceObj) {
        // only copy if not already present
        if (!(key in targetObj)) {
            targetObj[key] = sourceObj[key];
        }
    }
    return targetObj;
}

// driver code
var obj1 = {
    task1() {
        console.log('Task1');
    },
};

var obj2 = {
    task2() {
        console.log('Task2');
    },
};

var mixinObj = mixin(obj1, {});
mixinObj = mixin(obj2, mixinObj);
mixinObj.task1();                               // Task1
mixinObj.task2();                               // Task2
```

###### Notes
'task1' and 'task2' from 'obj1' and 'obj2' are copied to 'mixinObj'

###### References
- https://javascript.info/mixins

<br />

#### Q33
### Create a single function which can perform sum(a, b, c), sum(a, b)(c), sum(a)(b, c) and sum(a)(b)(c) and returns sum of a, b and c
```js
// Example
sum(2)(4)(6);            // 12
sum(3, 2)(5);            // 10
sum(4)(-10, -6);         // -12
sum(6, -3, 1);           // 4
```

- Sum functionality can be obtained by returning the sum when all the arguments are present
- The cases when only 1 or 2 arguments are passed need to be managed and handled

```js
function sum(a, b, c){
    if(a !== undefined && b !== undefined && c !== undefined){
        return a + b + c;
    }
    if(a !== undefined && b !== undefined){
        return function(c){
            return sum(a, b, c);
        }
    }
    return function(b, c){
        if(b !== undefined && c !== undefined){
            return sum(a, b, c);
        }
        return function(c){
            return sum(a, b, c);
        }
    }
}
```

```js
const countOfValues = 3;

function sum() {
    const args = arguments;

    if (args.length === countOfValues) {
        return Array.prototype.reduce.call(args, (a, b) => a + b);
    }

    return function () {
        return sum(...args, ...arguments);
    };
}
```

###### Notes
2nd approach is generic technique and can be used customized for any number of values

<br />

#### Q34
### Design a function which can keep recieving the arguments on each function call and returns the sum when no argument is passed

- The function can be designed to return another function which maintains the closure over the previous sum value
- The check for breaking condition can be added using the argument check for `undefined`
- 3rd solution uses the property on function to store the total which will be updated on each call hence the same function can be returned

```js
// Example
sum(2)(4)(6)(1)();          // 13
sum(2)(4)();                // 6
sum(3)();                   // 3
```

- Sum functionality can be obtained by returning the recursively calling till the 2nd parameter value is undefined

```js
function sum(a) {
    return function (b) {
        if (b === undefined) {
            return a;
        }
        return sum(a + b);
    };
}
```

```js
const sum = a => b => b === undefined ? a : sum(a + b);
```

```js
function sum(a) {
    if (typeof a === 'undefined') {
        return sum.total;
    }
    sum.total = (sum.total ?? 0) + a;
    return sum;
}
```

###### Notes
In the code value is checked if it is undefined reason being 0 is a falsy value and `b ? a : sum(a + b)` code fails when one of the argument is 0. Example: `sum(4)(3)(0)(2)()`

###### References
- https://www.youtube.com/watch?v=D5ENjfSkHY4

<br />

#### Q35
### Show the usage Proxy for function

- The Proxy object enables create a proxy for a function, which can intercept the function calls
- Proxy takes 1st argument as an function and 2nd argument as a object with different function traps

```js
const proxy = new Proxy(function () { console.log(arguments); }, {
    apply(target, context, args){
        console.log("Proxy apply is invoked on target with context: " + context + ", arguments: " + args);
        return target.apply(context, args);
    }
});

// driver code
proxy(1, 2, 3);                 // Proxy apply is invoked on target with context: undefined, arguments: 1,2,3
proxy.call({}, 1, 2);           // Proxy apply is invoked on target with context: undefined, arguments: 1,2,3
proxy.apply({}, [5, 10]);       // Proxy apply is invoked on target with context: [object Object], arguments: 5,10
```

###### References
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy

<br />

#### Q36
### Create an interface for a function such that whenever a function is triggered the system should log the time. Do not modify the function code

- Function call can be handled using Proxy in JavaScript
- `apply` keyword in proxy can be used to achieve the functionality without modifying the existing function code

```js
function generateSecretObject(key, value) {
    return { [key]: value };
}

generateSecretObject = new Proxy(generateSecretObject, {
    apply(target, context, args) {
        console.log(`${target.name} function is accessed at ${new Date()}`);
        return target.apply(context, args);
    },
});

// driver code
const user = {
    username: "0001",
    generateSecretObject
};
generateSecretObject("username", "Password");               // "generateSecretObject function is accessed at {time}"
```

###### Notes
This technique is helpful in logging or managing the data being passed to & returned from function without modifying the actual function code especially when function is a part of library or framework

<br />

#### Q37
### Create an interface exposing subscribe and publish functionality, which allows publishing data which in turn invokes all the subscribers with the data

- A simple module with publish and subscribe function can be exposed to achieve such functionality
- List of subscribers can be maintained in an array and can be invoked in loop on each publish

```js
function pubSub() {
    const subscribers = [];

    function publish(data) {
        subscribers.forEach(subscriber => subscriber(data));
    }

    function subscribe(fn) {
        subscribers.push(fn);
    }

    return {
        publish,
        subscribe,
    };
}

// driver code
const pubSubObj = pubSub();
pubSubObj.subscribe(data => {
    console.log('Subscriber 1: ' + data);
});
pubSubObj.subscribe(data => {
    console.log('Subscriber 2: ' + data);
});

// all subscribers will be called with the data on publish
pubSubObj.publish('Value is 10');
```

###### Notes
This is a well known JavaScript pattern called as __Publish/Subscribe Pattern__

###### References
- https://jsmanifest.com/the-publish-subscribe-pattern-in-javascript/

<br />

[[↑] Back to top](#home)
