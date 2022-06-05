<div align="right">
  <a href="/README.md#this-is-a-collection-of-modern-interview-code-challenges-on-javascript-suitable-for" id="home">Home</a>
</div>

<h2 align="center">JavaScript challenges on Primitives - concepts</h2>

<br>

### Q. Show the usage of `typeof` operator on different types of values

- The `typeof` operator returns a string indicating the type of the operand

```js
typeof 50                 //   "number"
typeof "text"             //   "string"
typeof true               //   "boolean"
typeof undefined          //   "undefined"
typeof function(){}       //   "function"
typeof 10n                //   "bigint"
typeof Symbol()           //   "symbol"
typeof [1, 2]             //   "object"
typeof {}                 //   "object"

typeof NaN                //   "number"        (NaN is Not a Number)
typeof undeclaredVar      //   "undefined"     (undeclaredVariable is never declared)
typeof Infinity           //   "number"        (Infinity, -Infinity, -0 are all valid numbers in JavaScript)
typeof null               //   "object"        (This stands since the beginning of JavaScript)
typeof /regex/            //   "object"        (regular expressions start and end with '/' in literal form)
```

###### Notes
Arrays and functions are sub type of objects

###### References
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof

<br />


### Q. Show the different ways of concatenating numbers and strings

- Concatenation of strings and numbers is a common practical use case

```js
// numbers and strings
1 + '2';                            // 12
1 + 2 + '3';                        // 33
1 + 2 + '3' + '4';                  // 334
1 + 'One';                          // 1One

// strings and numbers
'1' + 2;                            // 12
'1' + '2' + 3;                      // 123
'1' + '2' + 3 + 4;                  // 1234
'1' + '2' + (3 + 4);                // 127
'One' + 1;     // One1

// mix of string and numbers
1 + 2 + '3' + '4' + 5 + 6;          // 33456
1 + 2 + '3' + '4' + (5 + 6);        // 33411
'1' + '2' + (3 + 4) + 5 + '6';      // 12756
```

###### References
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators

<br />


### Q. Show the conversion from number to string and vice versa

- Conversion between numbers and strings is a common practical use case

```js
// number to string conversion
const num = 12;

String(num);              // "12"
num.toString()            // "12"
num + "";                 // "12"
```

```js
// string to number conversion
const str = "12";

Number(str);               // 12
+str                       // 12
parseInt(str)              // 12
```

###### Notes
If the number is floating, `parseFloat` can be used. `parseInt` and `parseFloat` are the methods present on the `Number` object also

###### References
- https://javascript.info/type-conversions

<br />


### Q. Write a code to operate on integer numbers outside the range of numbers in JavaScript

- `BigInt` is a datatype in JavaScript which facilitates the mathematical opertions on huge value of integer number
- It is represented by a suffix 'n' for number value

```js
// assignment of big integers
const bigNum1 = 1526688934595n, bigNum2 = 256489246848n, num3 = 1562365;

const bigSum = bigNum1 + bigNum2;
const bigDiff = bigNum1 - bigNum2;
const total = bigNum1 + bigNum2 + BigInt(num3);
```

###### Notes
The big integers cannot be operated directly with normal number datatype. `10n + 20` is not allowed

###### References
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt

<br />


### Q. Show the usage of `||`, `&&`, `??` and `!!` with code examples

- The __logical OR__ (||) operator for a set of operands is true if and only if one or more of its operands is true
- The __logical AND__ (&&) operator for a set of operands is true if and only if all of its operands are true
- The __nullish coalescing operator__ (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand
- The __double NOT__ (!!) operator used to explicitly force the conversion of any value to the corresponding boolean primitive

```js
const num1 = 10, num2 = 20;

true || false;                // true
false || false;               // false
false || num1;                // 10
0 || num2;                    // 20
"text" || true                // "text"
num1 > 0 || num2 < 0          // true
```

```js
const num1 = 10, num2 = 20;

true && true;                 // true
true && false;                // false
true && num1;                 // 10
num1 && num2;                 // 20
"text" && (num1 + num2)       // 30
num1 > 0 && num2 < 0          // false
```

```js
undefined ?? 10;              // 10
null ?? 20;                   // 20
false ?? num1;                // false
0 ?? num2;                    // 0
```

```js
!!10;                         // true
!!{};                         // true
!!"";                         // false
!!0;                          // false
```

###### Notes
It is not possible to combine both the AND (&&) and OR operators (||) directly with ??

###### References
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
- https://developer.cdn.mozilla.net/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT

<br />


### Q. Show the frequently and commonly used methods available on `Number` object with coding examples

- `isInteger` is used to check if the given number is integer or not
- `parseInt` is used to convert a given value in to integer
- `parseFloat` is used to convert a given value in to floating number
- `isNaN` is used to check if the given value is NaN or no
- `toFixed` is used to limit the number of digits after the decimal place
- `toPrecision` is used to limit the total number of digits to represent the number

```js
Number.isInteger(1.5);            // false
Number.isInteger(-15);            // true

Number.parseInt('5.8');           // 5
Number.parseInt('123x')           // 123

Number.parseFloat('5.86');        // 5.86
Number.parseFloat('-12.69x');     // -12.69

Number.isNaN(NaN);                // true
Number.isNaN("text" - 10);        // true
Number.isNaN("text");             // false
```

```js
56.369.toFixed(2);                // 56.37
59..toFixed(3);                   // 59.000

32.458.toPrecision('3');          // 32.5
98.1.toPrecision(1);              // 9e+1
```

###### Notes
`NaN` is special type of number and this value is results by the invalid mathematical operations such as substraction of number and text

###### References
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

<br />


### Q. Write the polyfill for `Number.isNaN`

- A polyfill is a piece of code used to provide modern functionality on older browsers that do not natively support it
- `NaN` is the only value which is not equal to itself and hence comparision operator cannot be used directly to check if a value is `NaN`

```js
Number.isNaN = Number.isNaN || function isNaN(input) {
    return typeof input === 'number' && input !== input;
}
```

###### Notes
Even though the name says _Not a Number_, it is of type "number"

###### References
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN

<br />


### Q. Show the frequently and commonly used methods available on `Math` object with coding examples

- `abs` is used to get the absolute value of the given number
- `floor` is used to get the greatest integer smaller than or equal to the given number
- `ceil` is used to get the smallest integer greater than or equal to the given number
- `round` is used to round the given number to the nearest integer.
- `max` is used to get the largest of zero or more numbers
- `min` is used to get the smallest of zero or more numbers
- `sqrt` is used to calculate the square root of the given number
- `pow` is used to calculate the power base on inputs
- `trunc` is used to limit the total number of digits to represent the number (method is present on prototype of `Number`)

```js
Math.abs(-5));                      // 5
Math.floor(1.6));                   // 1
Math.ceil(2.4));                    // 3
Math.round(3.8));                   // 4
Math.max(-4, 5, 6));                // 6
Math.min(-7, -2, 3));               // -7
Math.sqrt(64));                     // 8
Math.pow(5, 3));                    // 125
Math.trunc(-6.3));                  // -6
```

###### References
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

<br />


### Q. How can we solve the problem of comparision of 0.1 + 0.2 with 0.3 where `===` operator fails

- The addition of 0.1 and 0.2 will result in to 0.30000000000000004 and the comparision with 0.3 fails
- `Number.epsilon` is 2<sup>-52</sup>, which can be used to verify if this decimal values are matching

```js
0.1 + 0.2 - 0.3 < Number.EPSILON            // true
```

###### References
- https://www.programiz.com/javascript/library/number/epsilon

<br />


### Q. Write a code to iterate over a string

- String can be traversed using its string index or value as string can act like an iterable

```js
for(let i =0; i < str.length; i++){
    console.log(str.charAt(i));
}
```

```js
for(let index in str){
    console.log(str[index]);
}
```

```js
for(let value of str){
    console.log(value);
}
```

```js
[...str].forEach((value) => console.log(value));
```

###### References
- https://medium.com/better-programming/how-to-iterate-through-strings-in-javascript-65c51bb3ace5

<br />


### Q. Show the usage of template literals with expression interpolation and tagged templates

- Template literals are string literals allowing embedded expressions and support multi lines
- Template literals are enclosed by the backtick \`
- Tagged templates allow to parse template literals with a function which gets array of strings and expressions as arguments

```js
// Template literals with expression interpolation
const num1 = 10, num2 = 20;
`The sum of ${num1} and ${num2} is ${num1 + num2}`;         // The sum of 10 and 20 is 30 
```

```js
// Tagged templates
let person = 'John';
let membership = [1, 3];

function myTag(strings, person, membership) {
    let communities = ['Java', 'JavaScript', 'TypeScript', 'HTML', 'CSS']
    
    let str0 = strings[0]; // "Note:"
    let str1 = strings[1]; // "is a member of following communities:"

    let personCommunities = membership.map(index => communities[index])
    return `${str0}${person}${str1}${personCommunities}`;
}

myTag`Note: ${person} is a member of following communities: ${membership}`;     // Note: John is a member of following communities: JavaScript,HTML
```

###### References
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

<br />


### Q. Write a code to show the working of `try...catch...finally`

- The `try` statement consists of a try-block, which contains one or more statements. At least one catch-block, or a finally-block, must be present
- The exceptions and errors from try block are caught in catch block

```js
try {
    // Below statement will throw an Error
    callAPI();
} catch (error) {
    // Create a new error and throw
    throw new Error(error); 			// ReferenceError: callAPI is not defined
} finally {
    console.log('I will execute no matter what happened in try or catch');
}
```

###### Notes
- `try` can be chained with `catch` block or `finally` block
- `try..catch` only works synchronously and for runtime errors

###### References
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch

<br />


### Q. Show the creation and usage of `symbol` with code

- A "symbol" represents a unique identifier
- `Symbol.for` method searches for existing symbols in a runtime-wide symbol registry returns the same. If not found, creates a new Symbol
- `Symbol.keyFor` method retrieves the name of the symbol

```js
// new symbol
let symId = Symbol("id");

// global symbol
let symUsername = Symbol.for("username");

// get name by symbol
Symbol.keyFor(symUsername);                 // username
```

###### Notes
Symbols are skipped by for…in

###### References
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol
- https://javascript.info/symbol

<br />

[[↑] Back to top](#home)
