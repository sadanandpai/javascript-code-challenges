<div align="right">
  <a href="/README.md#this-is-a-collection-of-modern-interview-code-challenges-on-javascript-suitable-for" id="home">Home</a>
</div>

## JavaScript interview code challenges on Asynchronous programming

1. [Print "Hello, world" with a delay of 3 seconds](#Q1)
2. [Create a function which receives a function as argument and executes it after 2 seconds](#Q2)
3. [Print numbers from 1 to 10 with delay of 1 second between each value being printed](#Q3)
4. [Print numbers from 1 to 10 with delay of 1 second between each value being printed using setInterval](#Q4)
5. [Print numbers from 10 to 1 with delay of 1 second between each value being printed using setTimeout using pre ES6 features only](#Q5)
6. [Show the execution of 3 asynchronous block of code, one after the other in sequence](#Q6)
7. [Write a utility which prints numbers starting from an initial value and increment in steps which can be started and stopped by the user, any number of times](#Q7)
8. [Execute an array of asynchronous functions one after the other in sequence using callbacks](#Q8)
9. [Execute the given list of asynchronous functions in parallel and return the results as an array to the callback](#39)
10. [Write a code to make xmlHTTPRequest to get data from the server asynchronously](#Q10)
11. [Show the working of promise along with resolve & reject code](#Q11)
12. [Wrap the setTimeout function to convert to a promise](#Q12)
13. [Convert the xmlHTTPRequest to promise based function to get the data from the server asynchronously (fetch)](#Q13)
14. [Make a fetch request to retrieve and store JSON data from server](#Q14)
15. [Cancel a fetch request](#Q15)
16. [Execute 3 asynchronous functions one after the other in sequence using promise chaining](#Q16)
17. [Show the working of async await work with promises](#Q17)
18. [Execute 3 asynchronous functions one after the other in sequence using async await](#Q18)
19. [Execute 3 asynchronous functions one after the other in sequence using promise chaining and do not terminate on failure](#Q19)
20. [Execute 3 asynchronous functions one after the other in sequence using async await and do not terminate on failure](#Q20)
21. [Execute an array of asynchronous functions which returns a promise, one after the other in sequence](#Q21)
22. [Execute an array of asynchronous functions simultaneously but print the output in the ordered sequence. Do not wait for printing the data if it already available after promise is settled](#Q22)
23. [Write a code to resolve all the list of asynchronous executions of promises and stop if any of them is rejected. Print the output accordingly](#Q23)
24. [Write a code to resolve all the list of asynchronous executions of promises no matter if each execution succeeds or fails. Print the output of each](#Q24)
25. [Explain the working of Promise.race with few asynchronous function example](#Q25)
26. [Design a utility which takes array of asynchronous functions and returns the 1st successful or non successful result with max waiting time set by the user](#Q26)
27. [Design a utility which takes URL and a value for attempts which will attempt to make a fetch request. If on failure it tries again with increasing delay for number of times which user has requested](#Q27)
28. [Show me the working of a generator function](#Q28)
29. [Create a generator to return a random number on every request](#Q29)
30. [Write a generator function which uses another generator function internally to fetch the values. Use for..of loop to consume the values](#Q30)
31. [Search for the presence of a given value in the nested object using generator](#Q31)
32. [Write an interface to mock Promise in JavaScript which can be called to create a promise with resolve and reject. Also implement then functionality](#Q32)
33. [Write a function which helps to achieve the `Promise.all` functionality using promises](#Q33)
34. [Show the working generator function with promises](#Q34)

---

#### Q1
### Print "Hello, world" with a delay of 3 seconds

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

#### Q2
### Create a function which receives a function as argument and executes it after 2 seconds

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

#### Q3
### Print numbers from 1 to 10 with delay of 1 second between each value being printed

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

#### Q4
### Print numbers from 1 to 10 with delay of 1 second between each value being printed using setInterval

- `setInterval` function repeats a block of code at every given timing event
- `clearInterval` is used to stop the setInterval execution

```js
const num1 = 1, num2 = 10;
let i = num1;
const intervalId = setInterval(() => {
    console.log(++i);
    if (i === num2)
        clearInterval(intervalId);
}, 1000);
```

<br />

#### Q5
### Print numbers from 10 to 1 with delay of 1 second between each value being printed using setTimeout using pre ES6 features only

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
        setTimeout(() => console.log(i), (num1 - i) * 1000);
    })(i);
}
```

###### References
- https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/scope%20%26%20closures/ch5.md

<br />

#### Q6
### Show the execution of 3 asynchronous block of code, one after the other in sequence

- The asynchronous block of code can be a function which executes asynchronously
- The execution of such function can be simulated using setTimeout to with delay and execute different blocks of code inside each

```js
function asyncFunc() {
    console.log('Started asyncFunc1');
    //Async1 code
    setTimeout(() => {
        console.log('Completed asyncFunc1');

        console.log('Started asyncFunc2');
        //Async2 code
        setTimeout(() => {
            console.log('Completed asyncFunc2');

            console.log('Started asyncFunc3');
            //Async3 function code
            setTimeout(() => {
                console.log('Completed asyncFunc3');
            }, 1000);
        }, 2000);
    }, 3000);
}

asyncFunc();
```

###### Notes
The nested blocks of statements shown in the comments which get executed one after the other in sequence

<br />

#### Q7
### Write a utility which prints numbers starting from an initial value and increment in steps which can be started and stopped by the user, any number of times

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

#### Q8
### Execute an array of asynchronous functions one after the other in sequence using callbacks

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

#### Q9
### Execute the given list of asynchronous functions in parallel and return the results as an array to the callback
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

#### Q10
### Write a code to make xmlHTTPRequest to get data from the server asynchronously

- XMLHttpRequest (XHR) objects are used to interact with server to retrieve data from a URL without having to do a full page refresh
- XHR requests can be initiated by creating the object and providing the arguments such as 'method', url etc
- The success and failure of the request can be managed by callbacks

```js
const xhr = new XMLHttpRequest();
xhr.open("GET", url);

xhr.onload = function() {
    console.log(this.response);
};

xhr.onerror = function() {
    console.log(this.statusText);
};

xhr.send();
```

###### Notes
XHR is used mainly in AJAX programming

###### References
- https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest

<br />

#### Q11
### Show the working of promise along with resolve & reject code

- The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value
- Promise returns an object which ramains in pending state until it is resolved or rejected
- Promise takes a function as an argument called as 'resolver' which can have resolve and reject as parameters
- Resolve call will resolve the promise and reject will reject the promise (passing data is optional)
- `then` method on promise object is used to execute the user code after promise settles, which takes functions where 1st one is for success and 2nd for failure
- Functions with success and failure of the promises are used to illustrate the basics of promise code

```js
function asyncResolveFunc() {
    function resolver(resolve, reject) {
        resolve('Success');
    }
    return new Promise(resolver);
}

function asyncRejectFunc() {
    function resolver(resolve, reject) {
        reject('Failure');
    }
    return new Promise(resolver);
}

// driver code
const promiseSuccess = asyncResolveFunc();
const promiseFailure = asyncRejectFunc();

// Succeeded promise .then executes first function passed as argument
promiseSuccess.then((successData) => { console.log(successData); }, (failureData) => { console.log(failureData); });

// Failed promise .then executes second function passed as argument
promiseFailure.then((successData) => { console.log(successData); }, (failureData) => { console.log(failureData); });
```

###### Notes
Once the promise is resolved or rejected, status will not change

###### References
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

<br />

#### Q12
### Wrap the setTimeout function to convert to a promise

- Promise can be used to wrap the `setTimeout` to make the code more readable
- Function can take delay as argument and return a promise which gets resolved after timeout is complete

```js
function setTimeoutPromise(delay) {
    function resolver(resolve) {
        setTimeout(resolve(), delay);
    }
    return new Promise(resolver);
}

// driver code
console.log('Task started');
const timeoutPromise = setTimeoutPromise(3000);
timeoutPromise.then(() => {
    console.log('Task completed');
});
```


###### References
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises

<br />

#### Q13
### Convert the xmlHTTPRequest to promise based function to get the data from the server asynchronously (fetch)

- The Promise can be used to wrap the XHR request and provide cleaner interface to user for AJAX requests
- Success and failure of the XHR request can be handled to resolve or reject the promise respectively

```js
function fetchData(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);

        xhr.onload = function() {
            try {
                if(this.status === 200 ){
                    resolve(this);
                } else{
                    reject(this);
                }
            } catch(e){
                reject(e);
            }
        };

        xhr.onerror = function() {
            reject(this);
        };

        xhr.send();
    });
}

// driver code
fetchData("https://reqbin.com/echo/get/json")
.then(data => {
    console.log(data);
})
.catch(err => console.log(err));
```

###### Notes
XHR reuqest is no more in use and all the modern browsers use `fetch` API which is based on promise

###### References
- https://medium.com/@RistaSB/create-ajax-function-with-xmlhttprequest-and-promise-fe7422e38b50

<br />

#### Q14
### Make a fetch request to retrieve and store JSON data from server

- Fetch API is provided by the browser which returns a promise
- Fetch takes url as the 1st argument and an object with request details as 2nd optional argument
- Response is a streamable object and hence we will have to invoke JSON / text method on it which returns promise which settles to the data

```js
const response = fetch('https://reqbin.com/echo/get/json', {
    method: 'GET',                                  // *GET, POST, PUT, DELETE, etc
    headers: {
        'Content-Type': 'application/json',         // header
    },
});

// driver code
response.then(response => {
    const responseData = response.json();
    responseData.then(data => {
        console.log(data);
    });
})
.catch(err => {
    console.log(err);
});

```

###### References
- https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

<br />

#### Q15
### Cancel a fetch request

- `AbortController` is an interface which can be used to abort a fetch request
- `signal` object of the AbortController object can be used as the part of the argument to `fetch` and abort on controller object can be used to stop the request

```js
const controller = new AbortController();
var signal = controller.signal;

fetch(url, { signal }).then(response => {
    console.log(response);
}).catch(err => {
    console.warn(err);
});

controller.abort();
```

###### References
- https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort
- https://davidwalsh.name/cancel-fetch

<br />

#### Q16
### Execute 3 asynchronous functions one after the other in sequence using promise chaining

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

#### Q17
### Show the working of async await work with promises

- `async` functions are asynchronous functions in which the asynchrous code can be executed in synchronous looking manner using `await`
- `await` expects a promise and the execution will stop until the promise is resolved
- If promise gets rejected, error is thrown with failure reason which can be handled using simple try-catch block

```js
async function asyncAwaitFunc() {
    try {
        console.log('Executes normally when invoked');
        await promiseReturningFunc();
        console.log('Continues the execution after promise resolution');
    } catch (err) {
        console.log('Error occured: ' + err);
    }
}
```

###### Notes
`await` keyword can only be used in a `async` function

###### References
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
- https://javascript.info/async-await

<br />

#### Q18
### Execute 3 asynchronous functions one after the other in sequence using async await

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

#### Q19
### Execute 3 asynchronous functions one after the other in sequence using promise chaining and do not terminate on failure

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

#### Q20
### Execute 3 asynchronous functions one after the other in sequence using async await and do not terminate on failure

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

#### Q21
### Execute an array of asynchronous functions which returns a promise, one after the other in sequence

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

#### Q22
### Execute an array of asynchronous functions simultaneously but print the output in the ordered sequence. Do not wait for printing the data if it already available after promise is settled

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

#### Q23
### Write a code to resolve all the list of asynchronous executions of promises and stop if any of them is rejected. Print the output accordingly

- `Promise.all` is the method which helps to achieve the functionality which settles if all the promises are resolved or any of them are rejected
- It receives array of promises as an argument to it
- Array of results will be the success data if all the promises resolves or the error data on failure of the first one

```js
const asyncArr = [async1, async2, async3];
const promiseArr = asyncArr.map(async => async());

finalResolution = Promise.all(promiseArr);
finalResolution.then((output) =>{
    for(let data of output) {
        console.log(data);
    }
})
.catch(err =>
    console.log(err)
);
```

```js
const asyncArr = [async1, async2, async3];
const promiseArr = asyncArr.map(async => async());

(async function () {
    try {
        output = await Promise.all(promiseArr);
        for (let data of output) {
            console.log(data);
        }
    } catch (err) {
        console.log(err);
    }
})();
```

###### Notes
On failure of one of the promise, rest of the pending promises will be cancelled

###### References
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all

<br />

#### Q24
### Write a code to resolve all the list of asynchronous executions of promises no matter if each execution succeeds or fails. Print the output of each

- `Promise.allSettled` is the method which helps to achieve the functionality which completes after all promises settle no matter of failures
- It receives array of promises as an argument to it
- Array of results will be the output after completion of all promises with status as 'fulfilled' or 'rejected'

```js
const asyncArr = [async1, async2, async3];
const promiseArr = asyncArr.map(async => async());
finalResolution = Promise.allSettled(promiseArr);
finalResolution
    .then(output => {
        for (let data of output) {
            if (data.status === 'fulfilled') console.log(data.status + ': ' + data.value);
            else if (data.status === 'rejected') console.log(data.status + ': ' + data.reason);
        }
    })
    .catch(err => {
        console.log(err);
    });
```

```js
const asyncArr = [async1, async2, async3];
const promiseArr = asyncArr.map(async => async());
(async function () {
    try {
        output = await Promise.allSettled(promiseArr);
        for (let data of output) {
            if (data.status === 'fulfilled') console.log(data.status + ': ' + data.value);
            else if (data.status === 'rejected') console.log(data.status + ': ' + data.reason);
        }
    } catch (err) {
        console.log(err);
    }
})();
```

###### References
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled
- https://davidwalsh.name/promise-allsettled

<br />

#### Q25
### Explain the working of Promise.race with few asynchronous function example

- The `Promise.race` method returns a promise that fulfills or rejects as soon as one of the promises fulfills or rejects, with the success or failure

```js
function asyncFunc1() {
    return new Promise(resolve =>
        setTimeout(() => {
            resolve('Resolved async1');
        }, 2000)
    );
}

function asyncFunc2() {
    return new Promise(resolve =>
        setTimeout(() => {
            resolve('Resolved async2');
        }, 3000)
    );
}

function asyncFunc3() {
    return new Promise((resolve, reject) =>
        setTimeout(() => {
            reject('Rejected async3');
        }, 1000)
    );
}

// driver code
const asyncArr = [asyncFunc1, asyncFunc2, asyncFunc3];
const promiseArr = asyncArr.map(async => async());
Promise.race(promiseArr).then(console.log).catch(console.log);    // Rejected async3 (catch block)
```

###### References
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race

<br />

#### Q26
### Design a utility which takes array of asynchronous functions and returns the 1st successful or non successful result with max waiting time set by the user

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

#### Q27
### Design a utility which takes URL and a value for attempts which will attempt to make a fetch request. If on failure it tries again with increasing delay for number of times which user has requested

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

#### Q28
### Show me the working of a generator function

- Generators are functions that can be exited and later re-entered
- Generator function will have `*` after the keyword `function`
- Generator when called returns an `iterator` which can be used to call `next` on it
- `yield` keyword can be used inside such a function and stops the execution

```js
function* generatorFunc(param){
    const num1 = yield;
    const num2 = yield;
    return num1 + num2;
}

// driver code
const it = generatorFunc();
it.next();                      // { value: undefined, done: false}
it.next(3);                     // { value: undefined, done: false}
const sum = it.next(5);         // { value: 8, done: true }
sum.value;                      // 8
```

###### Notes
Data between generator and iterator can be passed in both direction

###### References
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*

<br />

#### Q29
### Create a generator to return a random number on every request

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

#### Q30
### Write a generator function which uses another generator function internally to fetch the values. Use for..of loop to consume the values

- Generator with the generator can be used to fetch the values using `yield*`
- The code consuming the parent generator need to be aware of it and can be used directly
- As the generator return iterator, for..of loop can be used on generator

```js
function* gen1() {
    yield 1;
    yield* gen2();
    yield 4;
}

function* gen2() {
    yield 2;
    yield 3;
}

// driver code
for (let value of gen1()) {
    console.log(value);
}
```

###### References
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators

<br />

#### Q31
### Search for the presence of a given value in the nested object using generator

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

#### Q32
### Write an interface to mock Promise in JavaScript which can be called to create a promise with resolve and reject. Also implement then functionality

- Basic promise interface will allow creation of promise by passing resolver as the argument
- `resolve` and `reject` methods will have to be passed to the resolver which the user code will ivoke with data once settled
- `setTimeout` with zero delay can be used to not immediately execute the resolver
- List of callbacks to `then` to be invoked can be stores in the array of success and failure list
- Once resolved or rejected, promise cannot change the state

```js
function MyPromise(resolver) {
    let successList = [];
    let failureList = [];
    let resolution = 'pending';
    let data;

    function resolve(value) {
        if (resolution === 'pending') {
            for (let successCb of successList) {
                successCb(value);
            }
            resolution = 'resolved';
            data = value;
        }
    }

    function reject(value) {
        if (resolution === 'pending') {
            for (let failureCb of failureList) {
                failureCb(value);
            }
            resolution = 'rejected';
            data = value;
        }
    }

    setTimeout(() => {
        try {
            resolver(resolve, reject);
        } catch (err) {
            reject(err);
        }
    }, 0);

    return {
        status: resolution,
        then: function (onSuccess, onFailure) {
            if (resolution === 'pending') {
                successList.push(onSuccess);
                failureList.push(onFailure);
            } else {
                resolution === 'resolved' ? onSuccess(data) : onFailure(data);
            }
        },
    };
}

// driver code
let p = new MyPromise((resolve, reject) => {
    resolve(10);
});

p.then(data => console.log(data), console.log);
```

###### Notes
ES6 Promise is much more complex and sophesticated than the above shown implementation.

<br />

#### Q33
### Write a function which helps to achieve the `Promise.all` functionality using promises

- `Promise.all` method is fail fast procedure to return all the promise resolved data in array or failed reason

```js
function PromiseAll(promiseArr) {
    return new Promise((resolve, reject) => {
        const dataArr = new Array(promiseArr.length);
        let resolution = 'pending';

        for (let index in promiseArr) {
            promiseArr[index].then(
                data => {
                    if (resolution === 'pending') {
                        dataArr[index] = {
                            value: data,
                            status: 'fulfilled',
                        };
                        if (!dataArr.includes(undefined)) {
                            resolution = 'fulfilled';

                            resolve(dataArr);
                        }
                    }
                },
                err => {
                    if (resolution === 'pending') {
                        resolution = 'rejected';
                        reject({
                            reason: err,
                            status: 'rejected',
                        });
                    }
                }
            );
        }
    });
}

// driver code
PromiseAll([
    new Promise(resolve => setTimeout(resolve, 1000)),
    new Promise((resolve, reject) => setTimeout(reject, 2000)),
]).then(console.log, console.log);
```

<br />

#### Q34
### Show the working generator function with promises

- Generator can be used with promises where yield will return a promise and promise resolution can trigger continuation
- Helper function is used to manage this flow which takes generator function as an argument and executes it

```js
// asynchronous helper function returning a promise which gets resolved after the specified delay with data
function asyncFunc(data, delay){
    return new Promise(resolve => setTimeout(resolve, delay, data));
}

function* gen() {
    // async function calls to yield promise
    const num1 = yield asyncFunc(2, 1000);
    const num2 = yield asyncFunc(1, 2000);
    console.log(num1 + num2);                         // 3 (2 + 1)
}

function executeGeneratorWithPromise(gen) {
    const it = gen();

    // takes input as promise from generator
    function handle(promise) {
        if (!promise.done)
            promise.value
                .then(data => {
                    // continue the execution of generator after promise is resolved
                    handle(it.next(data));
                })
                .catch(err => iterator.throw(err));
    }

    handle(it.next());
}

// call generator executor function and pass generator function reference
executeGeneratorWithPromise(gen);
```

###### Notes
The generator and the helper function 'executeGeneratorWithPromise' executes hand in hand, where the generator pauses returning a promise and the helper function starts generator on that promise resolution

###### References
- https://www.promisejs.org/generators/

<br />

[[↑] Back to top](#home)
