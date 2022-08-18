<div align="right">
  <a href="/README.md#this-is-a-collection-of-modern-interview-code-challenges-on-javascript-suitable-for" id="home">Home</a>
</div>

<h2 align="center">JavaScript challenges on Asynchronous programming - challenges</h2>

<br>

### Q. Print "Hello, world" with a delay of 3 seconds

- setTimeout takes a function as the 1st argument and optional timeout delay & list of values as the function parameters
- setTimeout returns an id (number) which can be used to stop the setTimeout using clearTimeout function

```js
setTimeout(function (text) {
    console.log(text);
}, 3000, 'Hello, World');
```

```js
setTimeout(() => console.log('Hello, World'), 3000);
```

```js
setTimeout(console.log, 3000, 'Hello, World');
```

###### Notes
Zero or more values that represent any parameters you want to pass to the function when it is run.

###### References
- https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Timeouts_and_intervals

<br />

### Q. Create a function which receives a function as argument and executes it after 2 seconds

```js
function callbackExec(callback) {
  if (typeof callback === 'function') {
      setTimeout(() => {
          callback();
          console.log('Callback is executed after 2 seconds');
    }, 2000);
  }
}

function displayHello() {
    console.log('Hello');
}

callbackExec(displayHello);
```

<br />

### Q. Print numbers from 1 to 10 with delay of 1 second between each value being printed

```js
const num1 = 1, num2 = 10;
for (let i = num1; i <= num2; i++) {
    setTimeout(() => console.log(i), i * 1000);
}
```

```js
const num1 = 1, num2 = 10;
+function displayWithDelay(i){
    console.log(i);
    if(i !== num2)
        setTimeout(displayWithDelay, 1000, ++i);
}(1);
```

###### Notes
In the 2nd solution, recursive setTimeout is used.

###### References
- https://javascript.info/settimeout-setinterval

<br />

### Q. Print numbers from 1 to 10 with delay of 1 second between each value being printed using setInterval

- `setInterval` function repeats a block of code at every given timing event
- `clearInterval` is used to stop the setInterval execution

```js
const num1 = 1, num2 = 10;
let i = num1;
const intervalId = setInterval(() => {
    console.log(i++);
    if (i === num2 + 1)
        clearInterval(intervalId);
}, 1000);
```

<br />

### Q. Print numbers from 10 to 1 with delay of 1 second between each value being printed using setTimeout using pre ES6 features only

- We can use 3rd parameter of setTimeout to pass the value of iteration which creates a new scope each time loop iterates
- We can also use an inner function scope (IIFE) within the for loop for each iteration

```js
var num1 = 10, num2 = 1;
for (var i = num1; i >= num2; i--) {
    setTimeout(console.log, (num1 - i) * 1000, i);
}
```

```js
var num1 = 10, num2 = 1;
for (var i = num1; i >= num2; i--) {
    (function (i) {
        setTimeout(function() { console.log(i); }, (num1 - i) * 1000);
    })(i);
}
```

###### References
- https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/scope%20%26%20closures/ch5.md

<br />

### Q. Write a utility which prints numbers starting from an initial value and increment in steps which can be started and stopped by the user, any number of times

- The functionality to start and stop can be exposed from a function which internally takes care of incrementing and displaying data
- `setInterval` can be used to achieve the task and handle the start & stop of data display

```js
function timer(init = 0, step = 1) {
    var intervalId;
    var count = init;

    function startTimer() {
        if (!intervalId){
            intervalId = setInterval(() => {
                console.log(count);
                count += step;
            }, 1000);
        }
    }

    function stopTimer() {
        clearInterval(intervalId);
        intervalId = null;
    }

    return {
        startTimer,
        stopTimer,
    };
}

// driver code
const timerObj = timer(100, 10);
timerObj.startTimer();
setTimeout(() => {
    timerObj.stopTimer();
}, 5000);
```

###### Notes
The function can also be modified to have completion after which timer can not be started

<br />

### Q. Execute an array of asynchronous functions one after the other in sequence using callbacks

- The asynchronous function can be simulated using setTimeout which executes the callback
- The array of functions execution can be managed by having a function which takes care of execution of all the async functions
- Asynchronous functions need not be aware of the function to be executed and will take a callback as argument and execute it after completion

```js
function asyncFunc1(callback) {
    console.log('Started asyncFunc1');
    setTimeout(() => {
        console.log('Completed asyncFunc1');
        callback();
    }, 3000);
}

function asyncFunc2(callback) {
    console.log('Started asyncFunc2');
    setTimeout(() => {
        console.log('Completed asyncFunc2');
        callback();
    }, 2000);
}

function asyncFunc3(callback) {
    console.log('Started asyncFunc3');
    setTimeout(() => {
        console.log('Completed asyncFunc3');
        callback();
    }, 1000);
}

function callbackManager(asyncFuncs) {
    function nextFuncExecutor() {
        const nextAsyncFunc = asyncFuncs.shift();
        if (nextAsyncFunc && typeof nextAsyncFunc === 'function') {
            nextAsyncFunc(nextFuncExecutor, asyncFuncs);
        }
    }
    nextFuncExecutor();
}

// driver code
callbackManager([asyncFunc1, asyncFunc2, asyncFunc3]);
```

###### Notes
3 asynchrounous functions are considered here, but the program should work for any number

<br />

### Q. Execute the given list of asynchronous functions in parallel and return the results as an array to the callback
```js
// Example
function asyncFunc1(callback) {
    setTimeout(() => {
        callback(1);
    }, 3000);
}

function asyncFunc2(callback) {
    setTimeout(() => {
        callback(2);
    }, 2000);
}

function asyncFunc3(callback) {
    setTimeout(() => {
        callback(3);
    }, 1000);
}

asyncParallel([asyncFunc1, asyncFunc2, asyncFunc3], result => {
    console.log(result);                                            // 1, 2, 3 (prints results of each asynchronous function in order)
});
```

- The async functions can be executed in parallel using the loop and can be tracked for completion with a counter
- The callback function can be sent to the async functions and the results will be stored in the array which will be returned after the completion of all

```js
function asyncParallel(asyncFuncArr, callback) {
    const resultArr = new Array(asyncFuncArr.length);
    let resultCounter = 0;
    
    asyncFuncArr.forEach((async, index) => {
        async(value => {
            resultArr[index] = value;
            resultCounter++;
            if (resultCounter >= asyncFuncArr.length) {
                callback(resultArr);
            }
        });
    });
}
```

###### References
- https://jsvault.com/async-parallel

<br />

### Q. Execute 3 asynchronous functions one after the other in sequence using promise chaining

- The implementation of chaining is that the result is passed through the chain of `then` handlers for all the promises
- `then` method on Promise also returns a promise which can be used to perform `then` on the returned promise
- The errors in promise / promise chaining can be handled with the error callback for each promise when it settles or with a generic catch block

```js
asyncFunc1().then(
    () => {
        console.log('Completed async1');
        asyncFunc2().then(
            () => {
                console.log('Completed async2');
                asyncFunc3().then(
                    () => {
                        console.log('Completed async3');
                        console.log('All succeeded');
                    },
                    (err) => {
                        console.log('Failure in ' + err);
                    }
              );
          },
          (err) => {
              console.log('Failure in ' + err);
          }
        );
    },
    (err) => {
        console.log('Failure in ' + err);
    }
);
```

```js
asyncFunc1()
.then(asyncFunc2)
.then(asyncFunc3)
.catch(() => { console.log("Error occured in one of the async function"); });
```

###### Notes
If `then` method has a return statement which is a promise then it will be considered for the next promise chain until it settles

###### References
- https://javascript.info/promise-chaining

<br />

### Q. Execute 3 asynchronous functions one after the other in sequence using async await

- Async function with `await` for each promise can be used to execute in sequence

```js
+async function executor(){
    try{
        await asyncFunc1();
        await asyncFunc2();
        await asyncFunc3();
        console.log('All succeeded');
    }
    catch(){
        console.log("Error occured);
    }
}();
```

<br />

### Q. Execute 3 asynchronous functions one after the other in sequence using promise chaining and do not terminate on failure

- The promise which gets rejected will invoke the 2nd function argument to `then` handler
- The failure handler will receive the error and continue with next execution which will not propagate failures

```js
async1()
    .then(
        () => {
            console.log('Async1 success');
        },
        () => {
            console.log('Async1 failure');
        }
    )
    .then(async2)
    .then(
        () => {
            console.log('Async2 success');
        },
        () => {
            console.log('Async2 failure');
        }
    )
    .then(async3)
    .then(
        () => {
            console.log('Async3 success');
        },
        () => {
            console.log('Async3 failure');
        }
    );
```

<br />

### Q. Execute 3 asynchronous functions one after the other in sequence using async await and do not terminate on failure

- Unlike promises, `try-catch` block can be used on async functions
- `catch` block for each asynchronous function can be used to catch errors and continue with next execution which will not propagate failures

```js
+(async function executor() {
    try {
        await asyncFunc1();
        console.log('Async1 success');
    } catch {
        console.log('Async1 failure');
    }
    try {
        await asyncFunc2();
        console.log('Async2 success');
    } catch {
        console.log('Async2 failure');
    }
    try {
        await asyncFunc3();
        console.log('Async3 success');
    } catch {
        console.log('Async3 failure');
    }
    console.log('All succeeded');
})();
```

<br />

### Q. Execute an array of asynchronous functions which returns a promise, one after the other in sequence

- Asynchronous functions can be executed and promises can be captured in an array
- Array method `reduce` can be used to make the sequential execution on promise settlement

```js
const asyncFuncArr = [asyncFunc1, asyncFunc2, asyncFunc3];

asyncFuncArr.reduce((acc, async) => {
    return acc.then(() => async().then(console.log));
}, Promise.resolve());
```

```js
const asyncFuncArr = [asyncFunc1, asyncFunc2, asyncFunc3];

asyncFuncArr.reduce(async (acc, asyncFunc) => {
    await acc;
    console.log(await asyncFunc());
}, Promise.resolve());
```

###### Notes
`Promise.resolve()` is used as the initial value to `reduce`, which resolves the promise immediately,

<br />

### Q. Execute an array of asynchronous functions simultaneously but print the output in the ordered sequence. Do not wait for printing the data if it already available after promise is settled

- Array method `reduce` can be used to make the simultaneously execution on promise settlement
- Unlike sequential execution, the parallel execution of asynchronous functions happen but the output will executed in order of sequence

```js
const asyncFuncArr = [asyncFunc1, asyncFunc2, asyncFunc3];

asyncFuncArr
.map(async => async())
.reduce((acc, promise) => {
    return acc.then(() => promise).then(data => console.log(data));
}, Promise.resolve());
```

```js
const asyncFuncArr = [asyncFunc1, asyncFunc2, asyncFunc3];

asyncFuncArr
.map(async => async())
.reduce(async (acc, promise) => {
    console.log(await acc.then(() => promise));
}, Promise.resolve());
```

<br />

### Q. Design a utility which takes array of asynchronous functions and returns the 1st successful or non successful result with max waiting time set by the user

- `Promise.race` is an in built JavaScript method which helps us to return the first resolved or rejected promise data from promises array
- Timeout feature can be set by adding a function returning a promise which rejects after specified amount of time
- If any promise resolves before timeout the promise which settles first will be the output else timeout will cause rejection

```js
function timeoutFunc() {
    const delay = 500;
    return new Promise((resolve, reject) => {
        setTimeout(() => reject("Timeout"), delay));
    }
}

const asyncArr = [asyncFunc1, asyncFunc2, asyncFunc3, timeoutFunc];
const promiseArr = asyncArr.map(asyncFunc => asyncFunc());
Promise.race(promiseArr).then(console.log).catch(console.log);
```

<br />

### Q. Design a utility which takes URL and a value for attempts which will attempt to make a fetch request. If on failure it tries again with increasing delay for number of times which user has requested

- Utility can designed which returns a promise which attempts to make requests and return the data on success
- The `fetch` request attempts to make calls after increasing time delay on failure
- If all the attempts by to get response fails, promise gets rejected

```js
function requestManager(url, attempts = 3) {
    return new Promise(async (resolve, reject) => {
        for (let i = 0; i < attempts; i++) {
            try {
                const response = await fetch(url);
                resolve(response);
                break;
            } catch (err) {
                if (attempts - 1 === i) {
                    reject(err);
                    break;
                }
                await new Promise(resolve => setTimeout(resolve, 1000 + 1000 * i));
            }
        }
    });
}

// driver code
requestManager('https://reqbin.com/echo/get/json', 3).then(
    response => console.log(response),
    error => console.log(error)
);
```

###### Notes
`1000 + 1000 * i` is used for delay after 1st unsuccessful attempt to fetch, which increases the delay on every iteration

###### References
- https://dev.to/ycmjason/javascript-fetch-retry-upon-failure-3p6g

<br />

### Q. Create a generator to return a random number on every request

- The generation of random number can be implemented in the normal way in the function but will returned and function yields
- The function will again continue to execute in loop to return a new random number

```js
function* generatorFunc(param){
    while(true){
        yield Math.ceil(Math.random() * 100);
    }
}

// driver code
const it = generatorFunc();
const rand1 = it.next();
const rand2 = it.next();
```

###### Notes
Genertor function need not complete its execution

###### References
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*

<br />

### Q. Search for the presence of a given value in the nested object using generator

- With the help of generator Inversion of control is possible
- Instead of function seaching for the key by passing the callback or key, the logic can be implemented in the controlling code
- For..of loop calling the recursive generator function on object can be used to achieve this

```js
function* objectReader(obj){
    for(let key in obj){
        if(typeof obj[key] === "object"){
            yield *objectReader(obj[key]);
        }
        else{
            yield obj[key];
        }
    }
}

// driver code
const it = objectReader({a: 1, b: 2, c: 3, d: { x: 4, y: 5, z: {m: 6, b: 7}}});
const searchValue = 5;

for(let value of it){
    if(value === searchValue) {
        console.log(searchValue + " exists");
    }
}
```

<br />

[[↑] Back to top](#home)
