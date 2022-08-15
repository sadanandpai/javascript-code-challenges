<div align="right">
  <a href="/README.md#this-is-a-collection-of-modern-interview-code-challenges-on-javascript-suitable-for" id="home">Home</a>
</div>

<h2 align="center">JavaScript challenges on Functions - concepts</h2>

<br>

### Q. Write a function which returns another function and execute it after calling

- Functions can be declared, executed or returned inside another function

```js
function higherOrderFunction() {
  function displayHello() {
    console.log("Hello");
  }
  return displayHello;
}

// driver code
var func = higherOrderFunction();
func(); // Hello
```

###### Notes

Functions can also be stored in variables like other values in JavaScript

###### References

- https://eloquentjavascript.net/05_higher_order.html
- https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function

<br />

### Q. Write a function which executes another function received as an argument

- Functions can be passed as arguments to another function
- Passing the function as an argument will pass its reference hence no parenthesis

```js
function callbackExecutor(callback) {
  if (typeof callback === "function") {
    callback();
  }
}

// driver code
function callbackFunc() {
  console.log("Callback function executed");
}

callbackExecutor(callbackFunc); // Callback function executed
```

###### References

- https://developer.mozilla.org/en-US/docs/Glossary/Callback_function

<br />

### Q. Create a function having no parameters declared and print all the arguments passed to it

- When a function is invoked the arguments passed to it are accessible using the default object called "arguments"
- Numbers starting from 0 are set as keys of the object "arguments" corresponding to each argument in the order
- The `arguments` object will have a length property as well which gives count of arguments passed

```js
function func() {
  for (let key in arguments) {
    console.log(arguments[key]);
  }
}

// driver code
func(1, "Hello", true);
```

```js
function func() {
  for (let value of arguments) {
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

### Q. Write a function which executes only if the number of arguments match the number of parameters the function is expecting

- The number of parameters declared in a function can be obtained by accessing the length property of the function

```js
function func(a, b, c) {
  if (func.length === arguments.length) {
    console.log("Number of arguments passed match the expected arguments");
  } else {
    throw new Error(
      "Number of arguments passed do not match the expected arguments"
    );
  }
}
```

###### References

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/length

<br />

### Q. Design a function which can receive a variable number of arguments in parameters and print them

```js
function varArgsFunc(...params) {
  params.forEach(function (value, index) {
    console.log(index, ": ", value);
  });
}

// driver code
varArgsFunc("Hello", ",", "World", "!!!");
```

###### References

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters

<br />

### Q. Show the most common ways of creating functions in JavaScript

- Functions are most commonly created using function statements, function expressions and arrow functions
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
};
```

```js
// Arrow function as a function expression
const arrowFunctionName = (params) => {
  //code block
};
```

###### Notes

As the arrow functions are not verbose, majority of developers prefer to create arrow functions for quick coding

###### References

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions

<br />

### Q. Code the different forms of arrow functions for varying number of parameters

- Arrow functions provide simpler syntax over `function` keyword functions
- Arrow functions with single parameter, round brackets are optional
- Arrow functions with single statement with return, flower brackets and return keywords are optional

```js
const noArgsFunc = () => {
  return "No args passed";
};
```

```js
const singleArgFunc = (arg1) => "Argument is " + arg1;
```

```js
const singleArgFunc = (arg1) => {
  console.log("Argument is " + arg1);
  return arg1;
};
```

```js
const twoArgsFunc = (arg1, arg2) => {
  return arg1 + arg2;
};
```

```js
const threeArgsFunc = (arg1, arg2, arg3) => {
  console.log("Sum is " + (arg1 + arg2 + arg3));
  return true;
};
```

###### Notes

Arrow functions are also called fat arrow functions

###### References

- https://developer.mozilla.org/en-US/docs/web/JavaScript/Reference/Operators/function

<br />

### Q. Write a program where hoisting can be visualized

- The function statement and variable declared with `var` are accessible before they appear in the code
- Declarations are put into memory before it executes any code segment that allows us to use a function before you declare it in your code
- In hoisting the hoisted items are accessible in the scope they are declared in
- Function expressions do not get hoisted

```js
num1 = 10;
printHello();

var num1;
function printHello() {
  console.log("Hello");
}

var nonHoistedFunc = function () {
  console.log("Hello");
};
```

###### Notes

Hoisting was thought up as a general way of thinking about how execution contexts work in JavaScript. In reality, the code does not get hoisted, but the effect is seen due to compilation and execution phases followed by JavaScript compiler

###### References

- https://developer.mozilla.org/en-US/docs/Glossary/Hoisting

<br />

### Q. Code an Immediately Invoked Function Expression (IIFE) and show the different ways of executing it

- IIFE is a JavaScript function that runs as soon as it is defined
- IIFE prevents polluting the global scope

```js
(function IIFE() {
  console.log("I am an Immediately invoked function");
})();
```

```js
(function IIFE() {
  console.log("I am an Immediately invoked function");
})();
```

```js
+(function IIFE() {
  console.log("I am an Immediately invoked function");
})();
```

###### References

- https://developer.mozilla.org/en-US/docs/Glossary/IIFE

<br />

### Q. Create an IIFE which receives arguments and executes

- Arguments can be passed in the same way as when calling a regular functions
- Multiple arguments can be passed similar to function invocation with arguments

```js
(function IIFE(param1, param2) {
  console.log("I am an Immediately invoked function");
  console.log("Parameter 1: " + param1);
  console.log("Parameter 2: " + typeof param2);
  console.log("Parameter 2 output: " + param2());
})("hello", function () {
  return "I am a string from a function passed to IIFE";
});
```

###### Notes

A string and a function is passed as arguments to the IIFE

<br />

### Q. Show the usage of IIFE to set a value of a variable

- IIFE can be directly executed when it is used as an expression against assignment to a variable

```js
var randomNumber = (function () {
  return Math.floor(Math.random() * 100);
})();
```

<br />

### Q. Write a function which can return multiple values from a function

- In general functions are designed to return a single value.
- Generators are a special type of functions which return an iterator which in turn can be used to send & receive values.

```js
function multipleValueReturnFunc() {
  const a = 5,
    b = 10;
  return [a, b];
}

// driver code
const [x, y] = multipleValueReturnFunc();
```

```js
function multipleValueReturnFunc() {
  const a = "Java",
    b = "Script";
  return {
    a,
    b,
  };
}

// driver code
const { a: x, b: y } = multipleValueReturnFunc(); // x will have 'Java' and y will have 'Script'
const { a, b } = multipleValueReturnFunc(); // a and b will have respective values
```

```js
function* multipleValueReturnFunc() {
  const a = 5,
    b = 10;
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

### Q. Write a function which can set default values to the parameters of function when an argument is not passed. Also show how to use exisiting parameters to set the value of another parameter

- Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed

```js
function defaultValueFunc(
  num = 10,
  num2 = 20,
  bool = false,
  sum = num + num2,
  string = "Hello"
) {
  console.log(num, string, bool, sum);
}

// driver code
defaultValueFunc(); //  10, 'Hello', false, 30
defaultValueFunc(4, 8); //  4, 'Hello', false, 12
defaultValueFunc(10, 4, true); //  10, 'Hello', true, 14
defaultValueFunc(5, 6, false, 11); //  5, 'Hello', false, 11
defaultValueFunc(undefined, undefined, false); //  10, 'Hello', false, 30
```

###### Notes

The default values are set only for missing or `undefined`. `null` and other falsy values are considered as valid arguments and default will not be set

###### References

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters

<br />

### Q. Show the usage of call, apply and bind with practical example

- 'call' is a method on function prototype and is used to set the context of the function by passing it as 1st argument followed by the arguments
- 'apply' is a method on function prototype and is used to set the context of the function by passing it as 1st argument followed by the array of arguments
- 'bind' is a method on function prototype and is used to create a new function with the context as the 1st argument followed by the arguments

```js
function displayThisValue(param1, param2) {
  console.log(this.value, param1, param2);
}

const obj = {
  value: 10,
};
const valueArr = [20, 30];

// No context set
displayThisValue(20, 30); // undefined, 20, 30

// 'obj' is set as the context using 'call'
displayThisValue.call(obj, ...valueArr); // 10, 20, 30

// 'obj' is set as the context using 'apply'
displayThisValue.apply(obj, valueArr); // 10, 20, 30

// No context set
setTimeout(displayThisValue, 1000, ...valueArr); // undefined, 20, 30

// 'obj' is set as the context using 'bind'
setTimeout(displayThisValue.bind(obj), 1000, ...valueArr); // 10, 20, 30
setTimeout(displayThisValue.bind(obj, ...valueArr), 1000); // 10, 20, 30
```

###### Notes

The context inside the function can be accessed using `this` keyword

###### References

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
- https://javascript.info/bind

<br />

### Q. Show the usage of a function which can be used as a constructor

- A function can be used like a constructor by calling it with the `new` keyword
- A constructor function is a normal function but generally used to create an object and may also have functions in its prototype
- A constructor function is generally preferred to start with a Uppercase letter which is not mandatory
- The return from the constructor function is a new object created which is accessed with `this` inside the function
- Constructor function can return an explicit object as well

```js
function Employee(id) {
  this.id = id;
}

Employee.prototype.setSalary = function (salary) {
  this.salary = salary;
};

Employee.prototype.getSalary = function () {
  return this.salary;
};

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

### Q. Show the procedure of creating an object using a factory function

- Any function which is not a class or constructor that returns an object without a new keyword is known as a factory function
- A normal function which can be modified to return an object which can be called by passing arguments

```js
function factoryFunc(username, password, isActive = false, isAdmin = false) {
  if (typeof username !== "string" && typeof password !== "string")
    throw new Error("Invalid username or password");

  return {
    username,
    password,
    isActive,
    isAdmin,
    created: new Date(),
  };
}

// driver code
const user = factoryFunc("admin", "password");
```

###### References

- https://medium.com/javascript-scene/javascript-factory-functions-with-es6-4d224591a8b1

<br />

### Q. Achieve prototypal inheritance using functions to create objects in JavaScript

- 2 functions can be used to create objects with constructor call to the functions
- The prototype of the child function is connected with the parent function to achieve the inheritance behavior

```js
function parent(name) {
  this.name = name;
}

parent.prototype.getName = function () {
  return this.name;
};

function child(name) {
  parent.call(this, name);
}

child.prototype = Object.create(parent.prototype);
child.prototype.getMyName = function () {
  return this.name;
};

// driver code
var fk = new child("FK");
console.log(fk.getName());
console.log(fk.getMyName());

var pk = new parent("PK");
console.log(pk.getName());
```

###### Notes

The solution is one of the known ways of achieving prototypal inheritance, but it is not the only way to achieve it.

###### References

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain

<br />

### Q. Write a code to show the differences between the techniques, currying and partial application

- A function returning another function that might return another function, but every returned function must take only one parameter at a time is **currying**
- A function returning another function that might return another function, but each returned function can take several parameters is **partial application**

```js
// currying
function multiply(num1) {
  return function (num2) {
    return function (num3) {
      return num1 * num2 * num3;
    };
  };
}
```

```js
// partial application
function multiply(num1) {
  return function (num2, num3) {
    return function (num4) {
      return num1 * num2 * num3 * num4;
    };
  };
}
```

###### References

- https://towardsdatascience.com/javascript-currying-vs-partial-application-4db5b2442be8
- https://medium.com/better-programming/functional-programming-currying-vs-partial-application-53b8b05c73e3

<br />

### Q. Write a function to copy functions of an object to another object (mixin)

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
    console.log("Task1");
  },
};

const obj2 = {
  task2() {
    console.log("Task2");
  },
};

let mixinObj = mixin(obj1, {});
mixinObj = mixin(obj2, mixinObj);
mixinObj.task1(); // Task1
mixinObj.task2(); // Task2
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
    console.log("Task1");
  },
};

var obj2 = {
  task2() {
    console.log("Task2");
  },
};

var mixinObj = mixin(obj1, {});
mixinObj = mixin(obj2, mixinObj);
mixinObj.task1(); // Task1
mixinObj.task2(); // Task2
```

###### Notes

'task1' and 'task2' from 'obj1' and 'obj2' are copied to 'mixinObj'

###### References

- https://javascript.info/mixins

<br />

### Q. Show the usage Proxy for function

- The Proxy object enables create a proxy for a function, which can intercept the function calls
- Proxy takes 1st argument as an function and 2nd argument as a object with different function traps

```js
const proxy = new Proxy(
  function () {
    console.log(arguments);
  },
  {
    apply(target, context, args) {
      console.log(
        "Proxy apply is invoked on target with context: " +
          context +
          ", arguments: " +
          args
      );
      return target.apply(context, args);
    },
  }
);

// driver code
proxy(1, 2, 3); // Proxy apply is invoked on target with context: undefined, arguments: 1,2,3
proxy.call({}, 1, 2); // Proxy apply is invoked on target with context: [object Object], arguments: 1,2,3
proxy.apply({}, [5, 10]); // Proxy apply is invoked on target with context: [object Object], arguments: 5,10
```

###### References

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy

<br />

[[↑] Back to top](#home)
