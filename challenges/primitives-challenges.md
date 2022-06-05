<div align="right">
  <a href="/README.md#this-is-a-collection-of-modern-interview-code-challenges-on-javascript-suitable-for" id="home">Home</a>
</div>

<h2 align="center">JavaScript challenges on Primitives - challenges</h2>

<br>

### Q. Swap 2 integers present in variables num1 and num2 without using temporary variable

- The swapping of 2 variables is possible with simple Destructuring assignment using array
- Traditional approach of swapping by using the given variables is also achievable

```js
let num1 = 10, num2 = 20;
[num1, num2] = [num2, num1];
```

```js
let num1 = 10, num2 = 20;
num1 = num1 + num2;
num2 = num1 - num2;
num1 = num1 - num2;
```

###### Notes
2nd solution can fail due to overflow of number range if the numbers are very big

<br />

### Q. Write a function which returns true if given value of number is an integer without using any inbuilt functions
```js
// Example
isInt(4.0);        // true
isInt(12.2);       // false
isInt(0.3);        // false 
```
- Modulo operator can be used to check if there is a remainder left when divided by 1

```js
function isInt(value){
    return value % 1 === 0;
}
```

<br />

### Q. Create a function which returns a random number in the given range of values both inclusive

- `Math.random` function returns a floating-point, pseudo-random number between 0 (inclusive) and 1 (exclusive)

```js
function randomNumberGeneratorInRange(rangeStart, rangeEnd){
    return rangeStart + Math.round(Math.random() * (rangeEnd - rangeStart));
}

randomNumberGeneratorInRange(10, 50);           // 12
```

###### Notes
Usage of `Math.round` depends on the logic used to accomplish the requirement

###### References
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

<br />

### Q. Write a program to reverse a string

- String can be reversed by iterating it and storing it in reverse order
- String can also be reversed by converting it to array, then joining it after reversing

```js
const str = "JavaScript is awesome"
let reversedString = "";
for(let i = 0; i < str.length; i++){
    reversedString = str.charAt(i) + reversedString;
}

reversedString;                             // "emosewa si tpircSavaJ"
```

```js
const str = "JavaScript is awesome";
str.split("").reverse().join("");        // "emosewa si tpircSavaJ"
```

###### Notes
The string can be tested if it is __palindrome__, by comparing the actual string with the reversed string

###### References
- https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/

<br />


### Q. Write a program to reverse a string by words. Also show the reverse of each words in place

- The string can be reversed by words, by splitting the string with spaces and joining them back after reverse
- If the the letters in each word have to be reversed, the string reversal procedure has to be followed after breaking the string with spaces

```js
const str = "JavaScript is awesome";
str.split(" ").reverse().join(" ");                                             // "awesome is JavaScript"
```

```js
const str = "JavaScript is awesome";
str.split(" ").map(val => val.split("").reverse().join("")).join(" ");          // "tpircSavaJ si emosewa"
```

<br />

### Q. Write a program to reverse a given integer number

- The remainder of the number can be fetched and the number can be divided by 10 to remvoe the the digit in loop till number becomes 0
- A simple approach to reverse a number could also be to convert it in to a string and then reverse it

```js
let num = 3849;

let reversedNum = 0;
while(num !== 0){
    reversedNum = reversedNum * 10 + num % 10;
    num = Math.floor(num / 10);
}

reversedNum;                                        // 9483
```

```js
let num = 3849;

let numStr = String(num);
+numStr.split("").reverse().join("");               // 9483
```

<br />

### Q. Write a code to replace all the spaces of the string with underscores

- The string can be split using the space character and can be joined back with underscore to replace all the spaces with strings
- `replaceAll` is the inbuilt String function on prototype which can be used to replace a string with another string

```js
str.split(" ").join("_");
```

```js
str.replaceAll(" ", "_");
```

###### Notes
`replace` is also an inbuilt String function on prototype which can be used to replace the 1st occurence of the string with another string

###### References
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll

<br />

### Q. Write a function which can convert the time input given in 12 hours format to 24 hours format
```js
// Example
convertTo24HrsFormat("12:10AM");    // 00:10
convertTo24HrsFormat("5:00AM");     // 05:00
convertTo24HrsFormat("12:33PM");    // 12:33
convertTo24HrsFormat("01:59PM");    // 13:59
convertTo24HrsFormat("11:8PM");     // 23:08
convertTo24HrsFormat("10:02PM");    // 22:02
```

- The check for 'AM' and 'PM' can be verified using `endsWith` String method
- An extra 0 would be needed if the hours have single digit

```js
function convertTo24HrsFormat(timeText) {
  var timeTextLower = timeText.toLowerCase();
  let [hours, mins] = timeTextLower.split(":");

  // 12 o clock is the special case to be handled both for AM and PM
  if (timeTextLower.endsWith("am"))
        hours = hours == 12 ? "0" : hours;
  else if (timeTextLower.endsWith("pm"))
        hours = hours == 12 ? hours : String(+hours + 12);

  return hours.padStart(2, 0) + ":" + mins.slice(0, -2).padStart(2, 0);
}
```

###### Notes
Conversion of string to lowerCase helps in case insensitive comparision

###### References
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

<br />

### Q. Write a function which accepts a string argument and returns the count of characters between the first and last character 'X'
```js
// Example
getTheGapX('XeroX');                        // 4 
getTheGapX('Xamarin');                      // -1       (If there is only single character 'X')
getTheGapX('JavaScript');                   // -1       (If there is no character 'X')
getTheGapX("F(X) !== G(X) !== F(X)");       // 18
```

- `indexOf` and `lastIndexOf` are the methods on String which returns the position of the given string in the input string from start and end respectively
- If the match is not found, these methods return -1

```js
function getTheGapX(str) {
    if (!str.includes('X')) {
        return -1;
    }

    const firstIndex = str.indexOf('X');
    const lastIndex = str.lastIndexOf('X');
    return firstIndex === lastIndex ? -1 : lastIndex - firstIndex;
}
```

<br />

### Q. Write a function to truncate a string to a certain number of letters
```js
// Example
truncateString("JavaScript", 7)             // "Java..."
truncateString("JS is fun", 10)             // "JS is fun"
truncateString("JS is funny", 10)           // "JS is f..."
```

- Text can be truncated by fetching the substring from start till the count of characters
- `substr` methods of String can be used to fetch the part of the string

```js
function truncateString(str, charCount) {
    if (str.length > charCount) {
        return str.substr(0, charCount - 3) + '...';
    } else {
        return str;
    }
}
```

<br />

### Q. Write a code to truncate a string to a certain number of words

- The string can be broken in to words array and then `slice` method of array can be used to get the number of words which will then be joined back

```js
const str = 'JavaScript is simple but not easy to master';
const wordLimit = 3;

str.split(' ').slice(0, wordLimit).join(' ');               // "JavaScript is simple"
```

<br />

### Q. Create a regular expression to validate if the given input is valid Indian mobile number or not
```js
// Example 
validateMobile('+919876543210');                // true
validateMobile('+91 9876543210');               // true
validateMobile('09876543210');                  // true
validateMobile('9876543210');                   // true
validateMobile('99876543210');                  // false
```

- Regular expression check has to have an optional +91 or 0 in the beginning, then an optional space and 10 digits 
- `test` method of regular expression can be used to validate if the mobile number pattern matches or not

```js
function validateMobile(str) {
    const regexMobile = /^(\+91|0)?\s?\d{10}$/;
    return regexMobile.test(str);
}
```

```js
function validateMobile(str) {
    const regexMobile = /^(\+91|0)?\s?\d{10}$/;
    return str.match(regexMobile) !== null;
}
```

###### Notes
String has method `match` which returns array of matches or null

<br />

### Q. Write a function which returns a list of elements which contains at least one character as digit
```js
// Example 
numInStr(['1a', 'a', '2b', 'b']));              // ['1a', '2b']
numInStr(['abc', 'abc10']));                    // ['abc10']
numInStr(['abc', 'ab10c', 'a10bc', 'bcd']));    // ['ab10c', 'a10bc']
numInStr(['this is a test', 'test1']));         // ['test1']
```

- A test for digit after looping through the array would give the list of values having at least one digit string

```js
function numInStr(mixArray){
    return mixArray.filter((value) => {
        return /[0-9]/.test(value);
    });
}
```

<br />

### Q. Write a function which checks if a given search text is present either in the beginning of the first name or the second name
```js
// Example
validateName('Nedson PETER', "pet");            // true
validateName('Peter Parker', "pet");            // true
validateName('Speter parker', "pet");           // false
validateName('John Doe Peter', "pet");          // false
```

- The function can be designed to accept the name and the search text
- Regular expression can be designed to validate if the name has search text the beginning of first or second name

```js
function validateName(str, searchText) {
    const regex = new RegExp("^(\\w*\\s)?" + searchText + "\\w*?", "i");
    return regex.test(str);
}
```

###### Notes
Case insensitive match is happening for the search text in the string represented by the argument "i" for the regular expression

<br />

### Q. Write a function to chop a string into chunks of a given length and return it as array
```js
// Example
stringChop('JavaScript');               // ["JavaScript"]
stringChop('JavaScript', 2);            // ["Ja", "va", "Sc", "ri", "pt"]
stringChop('JavaScript', 3);            // ["Jav", "aSc", "rip", "t"]
```

- String can be chopped using `slice` method of String
- Regular expression can also be used effectively to this operation

```js
function stringChop(str, size = str.length) {
    const arr = [];
    let i = 0;
    while (i < str.length) {
        arr.push(str.slice(i, i + size));
        i = i + size;
    }
    return arr;
}
```

```js
function stringChop(str, size = str.length) {
    return str.match(new RegExp('.{1,' + size + '}', 'g'));
}
```

###### References
- https://www.tutorialspoint.com/how-to-split-large-string-in-to-n-size-chunks-in-javascript

<br />

### Q. Write a code to remove all the vowels from a given string

- `replace` method on String accepts a string or regex as the argument

```js
const str = "I love JavaScript";
str.replace(/[aeiou]/gi, '');            // _lv_JvScrpt
```

###### References
- https://medium.com/better-programming/how-to-remove-vowels-from-a-string-in-javascript-fbed6e3a438e

<br />

### Q. Create a function which returns random hex color code

- The color code is popularly represented in hexadecimal format for RGB colors
- The minimum value for the color is '#000000' and maximum is '#FFFFFF'

```js
function getGetHEXColorCode() {
    const rValue = Math.round(0xFF * Math.random()).toString(16).padStart(2, '0');
    const gValue = Math.round(0xFF * Math.random()).toString(16).padStart(2, '0');
    const bValue = Math.round(0xFF * Math.random()).toString(16).padStart(2, '0');
    return '#' +  rValue + gValue + bValue;
}
```

###### Notes
`toString` method on String takes optional parameter which converts converts to the specified base before converting to string

###### References
- https://css-tricks.com/snippets/javascript/random-hex-color/

<br />

### Q. Write a function which accepts two valid dates and returns the difference between them as number of days

- The difference between 2 dates in JavaScript will give the time difference in milliseconds
- Time difference can be converted in to days by dividing the 24Hrs time in milliseconds

```js
const DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;

function getDaysBetweenDates(dateText1, dateText2) {
    const date1 = new Date(dateText1);
    const date2 = new Date(dateText2);
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / DAY_IN_MILLISECONDS);
    return diffDays;
}

getDaysBetweenDates('10/15/2020', '12/1/2020');                 // 47
```

###### References
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

<br />

[[↑] Back to top](#home)
