<div align="right">
  <a href="/README.md#this-is-a-collection-of-modern-interview-code-challenges-on-javascript-suitable-for" id="home">Home</a>
</div>

<h2 align="center">JavaScript challenges on Functions - challenges</h2>

<br>

### Q. Design a Calulator interface for 2 number inputs which can perform sum, difference, product and dividend whenever invoked on the same interface
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

### Q. Design a private counter function which exposes increment and retrive functionalities

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

### Q. Write a polyfill for bind function

- The `bind` method creates a new function that, when called, has its this keyword set to the provided context

```js
if(!Function.prototype.bind){
    Function.prototype.bind = function(context){
        var fn = this;
        var fnArgs = Array.prototype.slice.call(arguments, 1);

        return function(){
            var allArgs = fnArgs.concat(Array.prototype.slice.call(arguments))
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

### Q. Write a function which will create a function bounded to the context like `bind`, but can be overridden when the context is set explicitly

- The functionality is similar to `bind` with exception that if there is a context set during the execution it will override

```js
function softBind(fn, context) {
    var fnArgs = Array.prototype.slice.call(arguments, 2);

    return function() {
        var allArgs = fnArgs.concat(Array.prototype.slice.call(arguments));
        
        // override the context to incoming context if it is not undefined, null or window
        var finalContext = (!this || this === window) ? context : this;
        fn.apply(finalContext, allArgs);
    };
}
```

###### Notes
This functionality is also known as 'Soft Binding'

###### References
- https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/this%20%26%20object%20prototypes/ch2.md#softening-binding
- https://gist.github.com/getify/9043478

<br />

### Q. Write a function which helps to achieve multiply(a)(b) and returns product of a and b
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

### Q. Create a function which takes another function as an argument and makes it eligible for currying or partial application

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

### Q. Design a function which helps to do debouncing

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

### Q. Design a function which helps to do throttling

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

### Q. Design an interface which limits the number of function calls by executing the function once for a given count of calls

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

### Q. Write a singleton function to create an object only once

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

### Q. Design a function with toggle functionality for given list of inputs where toggle function accepts list of values to be toggled upon
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

### Q. Create a range function which returns an array for the provided inputs as start and end
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

### Q. Write a function which takes a function as an argument to achieve memoization

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

### Q. Create a single function which can perform sum(a, b, c), sum(a, b)(c), sum(a)(b, c) and sum(a)(b)(c) and returns sum of a, b and c
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

### Q. Design a function which can keep recieving the arguments on each function call and returns the sum when no argument is passed

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

### Q. Create an interface for a function such that whenever a function is triggered the system should log the time. Do not modify the function code

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

### Q. Create an interface exposing subscribe and publish functionality, which allows publishing data which in turn invokes all the subscribers with the data

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
