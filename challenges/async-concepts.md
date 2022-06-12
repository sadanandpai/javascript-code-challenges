<div align="right">
  <a href="/README.md#this-is-a-collection-of-modern-interview-code-challenges-on-javascript-suitable-for" id="home">Home</a>
</div>

<h2 align="center">JavaScript challenges on Asynchronous programming - concepts</h2>

<br>

### Q. Show the execution of 3 asynchronous block of code, one after the other in sequence

- The asynchronous block of code can be a function which executes asynchronously
- The execution of such function can be simulated using setTimeout to with delay and execute different blocks of code inside each

```js
function asyncFunc() {
  console.log("Started asyncFunc1");
  //Async1 code
  setTimeout(() => {
    console.log("Completed asyncFunc1");
    console.log("Started asyncFunc2");
    //Async2 code
    setTimeout(() => {
      console.log("Completed asyncFunc2");
      console.log("Started asyncFunc3");
      //Async3 function code
      setTimeout(() => {
        console.log("Completed asyncFunc3");
      }, 1000);
    }, 2000);
  }, 3000);
}
asyncFunc();
```

###### Notes

The nested blocks of statements shown in the comments which get executed one after the other in sequence

<br />

### Q. Write a code to make xmlHTTPRequest to get data from the server asynchronously

- XMLHttpRequest (XHR) objects are used to interact with server to retrieve data from a URL without having to do a full page refresh
- XHR requests can be initiated by creating the object and providing the arguments such as 'method', url etc
- The success and failure of the request can be managed by callbacks

```js
const xhr = new XMLHttpRequest();
xhr.open("GET", url);
xhr.onload = function () {
  console.log(this.response);
};
xhr.onerror = function () {
  console.log(this.statusText);
};
xhr.send();
```

###### Notes

XHR is used mainly in AJAX programming

###### References

- https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest

<br />

### Q. Show the working of promise along with resolve & reject code

- The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value
- Promise returns an object which ramains in pending state until it is resolved or rejected
- Promise takes a function as an argument called as 'resolver' which can have resolve and reject as parameters
- Resolve call will resolve the promise and reject will reject the promise (passing data is optional)
- `then` method on promise object is used to execute the user code after promise settles, which takes functions where 1st one is for success and 2nd for failure
- Functions with success and failure of the promises are used to illustrate the basics of promise code

```js
function asyncResolveFunc() {
  function resolver(resolve, reject) {
    resolve("Success");
  }
  return new Promise(resolver);
}
function asyncRejectFunc() {
  function resolver(resolve, reject) {
    reject("Failure");
  }
  return new Promise(resolver);
}
// driver code
const promiseSuccess = asyncResolveFunc();
const promiseFailure = asyncRejectFunc();
// Succeeded promise .then executes first function passed as argument
promiseSuccess.then(
  (successData) => {
    console.log(successData);
  },
  (failureData) => {
    console.log(failureData);
  }
);
// Failed promise .then executes second function passed as argument
promiseFailure.then(
  (successData) => {
    console.log(successData);
  },
  (failureData) => {
    console.log(failureData);
  }
);
```

###### Notes

Once the promise is resolved or rejected, status will not change

###### References

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

<br />

### Q. Wrap the setTimeout function to convert to a promise

- Promise can be used to wrap the `setTimeout` to make the code more readable
- Function can take delay as argument and return a promise which gets resolved after timeout is complete

```js
function setTimeoutPromise(delay) {
  function resolver(resolve) {
    setTimeout(resolve, delay);
  }
  return new Promise(resolver);
}
// driver code
console.log("Task started");
const timeoutPromise = setTimeoutPromise(3000);
timeoutPromise.then(() => {
  console.log("Task completed");
});
```

###### References

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises

<br />

### Q. Convert the xmlHTTPRequest to promise based function to get the data from the server asynchronously (fetch)

- The Promise can be used to wrap the XHR request and provide cleaner interface to user for AJAX requests
- Success and failure of the XHR request can be handled to resolve or reject the promise respectively

```js
function fetchData(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = function () {
      try {
        if (this.status === 200) {
          resolve(this);
        } else {
          reject(this);
        }
      } catch (e) {
        reject(e);
      }
    };
    xhr.onerror = function () {
      reject(this);
    };
    xhr.send();
  });
}
// driver code
fetchData("https://reqbin.com/echo/get/json")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));
```

###### Notes

XHR reuqest is no more in use and all the modern browsers use `fetch` API which is based on promise

###### References

- https://medium.com/@RistaSB/create-ajax-function-with-xmlhttprequest-and-promise-fe7422e38b50

<br />

### Q. Make a fetch request to retrieve and store JSON data from server

- Fetch API is provided by the browser which returns a promise
- Fetch takes url as the 1st argument and an object with request details as 2nd optional argument
- Response is a streamable object and hence we will have to invoke JSON / text method on it which returns promise which settles to the data

```js
const response = fetch("https://reqbin.com/echo/get/json", {
  method: "GET", // *GET, POST, PUT, DELETE, etc
  headers: {
    "Content-Type": "application/json", // header
  },
});
// driver code
response
  .then((response) => {
    const responseData = response.json();
    responseData.then((data) => {
      console.log(data);
    });
  })
  .catch((err) => {
    console.log(err);
  });
```

###### References

- https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

<br />

### Q. Cancel a fetch request

- `AbortController` is an interface which can be used to abort a fetch request
- `signal` object of the AbortController object can be used as the part of the argument to `fetch` and abort on controller object can be used to stop the request

```js
const controller = new AbortController();
var signal = controller.signal;
fetch(url, { signal })
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.warn(err);
  });
controller.abort();
```

###### References

- https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort
- https://davidwalsh.name/cancel-fetch

<br />

### Q. Show the working of async await work with promises

- `async` functions are asynchronous functions in which the asynchrous code can be executed in synchronous looking manner using `await`
- `await` expects a promise and the execution will stop until the promise is resolved
- If promise gets rejected, error is thrown with failure reason which can be handled using simple try-catch block

```js
async function asyncAwaitFunc() {
  try {
    console.log("Executes normally when invoked");
    await promiseReturningFunc();
    console.log("Continues the execution after promise resolution");
  } catch (err) {
    console.log("Error occured: " + err);
  }
}
```

###### Notes

`await` keyword can only be used in a `async` function

###### References

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
- https://javascript.info/async-await

<br />

### Q. Write a code to resolve all the list of asynchronous executions of promises and stop if any of them is rejected. Print the output accordingly

- `Promise.all` is the method which helps to achieve the functionality which settles if all the promises are resolved or any of them are rejected
- It receives array of promises as an argument to it
- Array of results will be the success data if all the promises resolves or the error data on failure of the first one

```js
const asyncArr = [async1, async2, async3];
const promiseArr = asyncArr.map((async) => async());
finalResolution = Promise.all(promiseArr);
finalResolution
  .then((output) => {
    for (let data of output) {
      console.log(data);
    }
  })
  .catch((err) => console.log(err));
```

```js
const asyncArr = [async1, async2, async3];
const promiseArr = asyncArr.map((async) => async());
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

### Q. Write a code to resolve all the list of asynchronous executions of promises no matter if each execution succeeds or fails. Print the output of each

- `Promise.allSettled` is the method which helps to achieve the functionality which completes after all promises settle no matter of failures
- It receives array of promises as an argument to it
- Array of results will be the output after completion of all promises with status as 'fulfilled' or 'rejected'

```js
const asyncArr = [async1, async2, async3];
const promiseArr = asyncArr.map((async) => async());
finalResolution = Promise.allSettled(promiseArr);
finalResolution
  .then((output) => {
    for (let data of output) {
      if (data.status === "fulfilled")
        console.log(data.status + ": " + data.value);
      else if (data.status === "rejected")
        console.log(data.status + ": " + data.reason);
    }
  })
  .catch((err) => {
    console.log(err);
  });
```

```js
const asyncArr = [async1, async2, async3];
const promiseArr = asyncArr.map((async) => async());
(async function () {
  try {
    output = await Promise.allSettled(promiseArr);
    for (let data of output) {
      if (data.status === "fulfilled")
        console.log(data.status + ": " + data.value);
      else if (data.status === "rejected")
        console.log(data.status + ": " + data.reason);
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

### Q. Explain the working of Promise.race with few asynchronous function example

- The `Promise.race` method returns a promise that fulfills or rejects as soon as one of the promises fulfills or rejects, with the success or failure

```js
function asyncFunc1() {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve("Resolved async1");
    }, 2000)
  );
}
function asyncFunc2() {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve("Resolved async2");
    }, 3000)
  );
}
function asyncFunc3() {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      reject("Rejected async3");
    }, 1000)
  );
}
// driver code
const asyncArr = [asyncFunc1, asyncFunc2, asyncFunc3];
const promiseArr = asyncArr.map((async) => async());
Promise.race(promiseArr).then(console.log).catch(console.log); // Rejected async3 (catch block)
```

###### References

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race

<br />

### Q. Show me the working of a generator function

- Generators are functions that can be exited and later re-entered
- Generator function will have `*` after the keyword `function`
- Generator when called returns an `iterator` which can be used to call `next` on it
- `yield` keyword can be used inside such a function and stops the execution

```js
function* generatorFunc(param) {
  const num1 = yield;
  const num2 = yield;
  return num1 + num2;
}
// driver code
const it = generatorFunc();
it.next(); // { value: undefined, done: false}
it.next(3); // { value: undefined, done: false}
const sum = it.next(5); // { value: 8, done: true }
sum.value; // 8
```

###### Notes

Data between generator and iterator can be passed in both direction

###### References

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*

<br />

### Q. Write a generator function which uses another generator function internally to fetch the values. Use for..of loop to consume the values

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

### Q. Write an interface to mock Promise in JavaScript which can be called to create a promise with resolve and reject. Also implement then functionality

- Basic promise interface will allow creation of promise by passing resolver as the argument
- `resolve` and `reject` methods will have to be passed to the resolver which the user code will ivoke with data once settled
- `setTimeout` with zero delay can be used to not immediately execute the resolver
- List of callbacks to `then` to be invoked can be stores in the array of success and failure list
- Once resolved or rejected, promise cannot change the state

```js
function MyPromise(resolver) {
  let successList = [];
  let failureList = [];
  let resolution = "pending";
  let data;
  function resolve(value) {
    if (resolution === "pending") {
      for (let successCb of successList) {
        successCb(value);
      }
      resolution = "resolved";
      data = value;
    }
  }
  function reject(value) {
    if (resolution === "pending") {
      for (let failureCb of failureList) {
        failureCb(value);
      }
      resolution = "rejected";
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
      if (resolution === "pending") {
        successList.push(onSuccess);
        failureList.push(onFailure);
      } else {
        resolution === "resolved" ? onSuccess(data) : onFailure(data);
      }
    },
  };
}
// driver code
let p = new MyPromise((resolve, reject) => {
  resolve(10);
});
p.then((data) => console.log(data), console.log);
```

###### Notes

ES6 Promise is much more complex and sophesticated than the above shown implementation.

<br />

### Q. Write a function which helps to achieve the `Promise.all` functionality using promises

- `Promise.all` method is fail fast procedure to return all the promise resolved data in array or failed reason

```js
function PromiseAll(promiseArr) {
  return new Promise((resolve, reject) => {
    const dataArr = new Array(promiseArr.length);
    let resolution = "pending";
    for (let index in promiseArr) {
      promiseArr[index].then(
        (data) => {
          if (resolution === "pending") {
            dataArr[index] = {
              value: data,
              status: "fulfilled",
            };
            if (!dataArr.includes(undefined)) {
              resolution = "fulfilled";
              resolve(dataArr);
            }
          }
        },
        (err) => {
          if (resolution === "pending") {
            resolution = "rejected";
            reject({
              reason: err,
              status: "rejected",
            });
          }
        }
      );
    }
  });
}
// driver code
PromiseAll([
  new Promise((resolve) => setTimeout(resolve, 1000)),
  new Promise((resolve, reject) => setTimeout(reject, 2000)),
]).then(console.log, console.log);
```

<br />

### Q. Show the working generator function with promises

- Generator can be used with promises where yield will return a promise and promise resolution can trigger continuation
- Helper function is used to manage this flow which takes generator function as an argument and executes it

```js
// asynchronous helper function returning a promise which gets resolved after the specified delay with data
function asyncFunc(data, delay) {
  return new Promise((resolve) => setTimeout(resolve, delay, data));
}
function* gen() {
  // async function calls to yield promise
  const num1 = yield asyncFunc(2, 1000);
  const num2 = yield asyncFunc(1, 2000);
  console.log(num1 + num2); // 3 (2 + 1)
}
function executeGeneratorWithPromise(gen) {
  const it = gen();
  // takes input as promise from generator
  function handle(promise) {
    if (!promise.done)
      promise.value
        .then((data) => {
          // continue the execution of generator after promise is resolved
          handle(it.next(data));
        })
        .catch((err) => iterator.throw(err));
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
