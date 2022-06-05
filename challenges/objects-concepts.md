<div align="right">
  <a href="/README.md#this-is-a-collection-of-modern-interview-code-challenges-on-javascript-suitable-for" id="home">Home</a>
</div>

<h2 align="center">JavaScript challenges on Objects - concepts</h2>

<br>

### Q. Show the different ways of creating an object

- Object can be created using Object constuctor
- Object can also be created using Object literal form
- Object can be created using `new` keyword to constructor function
- Object can be created using Class

```js
const object = Object.create({ key: value });
```

```js
const object = {
    key: value
}
```

```js
function getObject(key, value){
    this[key] = value;
}

const object = new getObject('key', 'value');
```

```js
class Obj {
    constructor(key, value){
        this[key] = value;
    }
}

const object = new Obj('key', 'value');
```

###### References
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects

<br />

### Q. Display all the keys of an object

- The keys of an object can be obtained using `Object.keys`

```js
for(let key in obj){
    if (obj.hasOwnProperty(key)) {
        console.log(key);
    }
}
```

```js
for(let key of Object.keys(obj)){
    if (obj.hasOwnProperty(key)) {
        console.log(key);
    }
}
```

```js
Object.keys(obj).forEach((key) => {
    if (obj.hasOwnProperty(key)) {
        console.log(key);
    }
});
```

###### Notes
`obj.hasOwnProperty(key)` is used to only display the properties present on the object and not inherited ones.

###### References
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in

<br />

### Q. Display all the values of an object

- The values of an object can be obtained using `Object.values` which returns an array of values

```js
console.log(Object.values(obj));
```

```js
for(let value of Object.values(obj)){
    console.log(value);
}
```

```js
Object.values(obj).forEach((value) => console.log(value));
```

```js
for(let key in obj){
    if (obj.hasOwnProperty(key)) {
        console.log(obj[key]);
    }
}
```

###### Notes
`Object.values` will only fetch the values of the object and not inherited ones

###### References
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

<br />

### Q. Write a function which can check if a given object is empty or not

- Object is empty if it has no keys
- Few objects such as `Date` object does not have any keys but still are not empty. Hence additional check can be implemented to verify the stringification of the object is also empty

```js
function isObjectEmpty(obj){
    if(obj !== null && typeof obj !== "undefined" && typeof obj === "object")
        return Object.keys(obj).length === 0 && JSON.stringify(obj) === "{}";
    else
        return false;
}
```

###### Notes
`obj.constructor === Object` is also used to verify along with the length of keys to check if object is empty which works for objects created with literal form

###### References
- https://www.samanthaming.com/tidbits/94-how-to-check-if-object-is-empty/

<br />

### Q. Create an empty object which has no prototype attached to it

- Objects created in JavaScript will have a prototype object on it connected to other object or `Object`
- Object constructor can be used to create such an empty object

```js
const obj = Object.create(null);
```

###### References
- https://davidwalsh.name/object-create-null

<br />

### Q. Show the usage of 'Object.entries' to create an object from key value pairs

- The key value pairs can be directly converted to object using `entries` method of Object

```js
const arr = [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ];
const obj = Object.fromEntries(arr);
```

```js
const map = new Map([ ['foo', 'bar'], ['baz', 42] ]);
const obj = Object.fromEntries(map);
```

###### References
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries

<br />

### Q. Connect 2 objects so that one object is prototypically connected to the other

- Objects in JavaScript are connected its prototype and is accessible for objects getPrototypeOf or `__proto__`
- `setPrototypeOf` is used to set the prototype of the object

```js
const obj1 = { a: 1 };
const obj2 = { b: 2 };
obj2.setPrototypeOf(obj1);
```

```js
const obj1 = { a: "Object 1 value" };
const obj2 = { b: "Object 2 value" };
obj2.__proto__ = obj1;
```

###### Notes
The lookup happens at the object level initially and if the key is not found, prototype chain lookup happens

###### References
- https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes

<br />

### Q. Create an object with getter and setter for property

- `getter` and `setter` on the properties of object can be used to control the read and write behavior

```js
const obj = {};

Object.defineProperty(obj, 'data', {
    _data: 0,                           // closure variable to hold the data
    get() {
        return this._data;
    },
    set(value) {
        this._data = value;
    }
});
```

###### Notes
If the `this.data` is accessed directly, the function will call itself infinitely. Hence, we would require one more variable to store the data

###### References
- https://javascript.info/property-accessors

<br />

### Q. Show the different types of accessor properties available for object property and write a code defining them

- `value` accessor is used to set the value of the property
- `writable` accessor is used to set if the property can be modified or not
- `configurable` accessor is used to set the property to be configurable or not
- `enumerable` accessor is to set the property to be considered in enumeration

```js
var obj = { };

Object.defineProperty(obj, 'prop', {
    value: 1,
    writable: true,
    configurable: true,
    enumerable: true
});
```

###### Notes
Except `value`, other accessort mentioned accept true or false

###### References
- https://javascript.info/property-accessors

<br />

### Q. Show the different options available to prevent the modifications to the object

- `preventExtensions` is an Object method which prevents addition of any new property to an object
- `seal` is an Object method which prevents addition and deletion of any property in an object
- `freeze` is an Object method which prevents addition, deletion and update of any property of an object
- There are also methods `isExtensible`, `isSealed` and `isFrozen` on Object to check

```js
Object.preventExtensions(obj);
Object.isExtensible(obj);       // false
```

```js
Object.seal(obj);
Object.isSealed(obj);            // true
```

```js
Object.freeze(obj);
Object.isFrozen(obj);           // true
```

###### References
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/seal
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze

<br />

### Q. Modify the given object so that it can be used inside a for...of loop

- Symbol iterator can be used to define the iterator on the object
- The values of the object can accessed with `for..of` the way we can do it for array

```js
const obj = {
    [Symbol.iterator](){
        const keys = Object.keys(this);
        let idx = 0;
        return {
            next: () => {
                if(idx >= keys.length)
                    return { value: this[keys[idx++]], done: true };
                else
                    return { value: this[keys[idx++]], done: false };
            }
        }
    },

    key1: "value1",
    key2: "value2",
    key3: "value3"
}
```

```js
const obj = {
    *[Symbol.iterator]() {
        for (let key in obj) {
            yield obj[key];
        }
    },

    key1: "value1",
    key2: "value2",
    key3: "value3"
}
```

###### References
- https://javascript.info/generators#using-generators-for-iterables

<br />

### Q. Show the creation of Regular Expression in JavaScript

- Regular expressions are patterns used to match character combinations in strings
- Regular expressions can be created using literal form or constructor form
- Constructor form accepts regular expression as the first argument and flags as the 2nd argument
- Literal form is simple which takes regular expression and flags in a single expression

```js
// literal form
let re = /ab+c/g;
```

```js
// constructor form
let re = new RegExp('ab+c', 'g');
```

###### Notes
In JavaScript, regular expressions are objects

###### References
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

<br />

### Q. Write a polyfill for Object.create

- The creating of object can happen by making constructor call to the function

```js
if (typeof Object.create !== 'function') {
    Object.create = function (proto, propertiesObject) {
        if ((typeof proto === 'object' || typeof proto === 'function') &&typeof propertiesObject !== 'undefined') {
            // F is a dummy empty function
            function F() {}
            F.prototype = proto;
            return new F();
        } else {
            throw new TypeError('Invalid proto or properties object');
        }
    };
}
```

###### References
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create

<br />

### Q. Write a code show Optional chaining for objects and functions

- The optional chaining operator (?.) permits reading the value of a property located deep within a chain of connected objects
- The expression short-circuits with a return value of undefined in the absence of property

```js
// object property access
obj.val?.prop;

// object property access through bracket notation
obj.val?.[expr]

// array index access
obj.arr?.[index]

// object property access for function call
obj.func?.(args)
```

###### References
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining

<br />

### Q. Show the usage of static variable & function in a class and accessing it from the code

- Static members of the class are class level variables and not created for each instances of the class
- Static members can be accessed directly using class name

```js
class Browser {

  static className = "Browser";

  constructor(os, browserName){
      this.os = os;
      this.browserName = browserName;
  }

  static areTheySameBrowsers(browser1, browser2) {
    return browser1.browserName === browser2.browserName;
  }
}

// driver code
const browser1 = new Browser("Linux", "Chrome");
const browser2 = new Browser("Windows", "Firefox");

Browser.className;                                      // Browser
Browser.areTheySameBrowsers(browser1, browser2);        // false
```

###### References
- https://javascript.info/static-properties-methods

<br />

### Q. Write a class which uses private variable and function

- Private members of the class are only accessible within the class and instances of the class do not have access to it
- Private members can be created with the prefix '#' before the name of the class member

```js
class ClassWithPrivateFields {
    #privateVar;
    publicVar;

    #privatFunc() {
        this.#privateVar = 7;
        this.publicVar = 10;
    }

    publicFunc() {
        this.#privatFunc();
        return [this.#privateVar, this.publicVar];
    }
}

// driver code
const instance = new ClassWithPrivateFields();

// can't access private variable
instance.privateVar;                     // undefined

// can't access private function
instance.privatFunc();                  // Error
instance.publicFunc();                  // 7, 10
```

<br />

### Q. Show how inheritance works in Class and the use of super keyword with working example

- Class level inheritance can happen when a class inherits from another class using the keyword `extends`
- The child class can access parent class members using the keyword `super`
- The non private members of parent class become available to child class when inherited

```js
class BaseComponent {
    constructor(componentName) {
        this.componentName = componentName;
    }

    setState(obj) {
        this.state = obj;
        this.render();
    }

    addValues(props) {
        return props.reduce((a, b) => a + b);
    }
}

class Component extends BaseComponent {
    constructor(name = '', props) {
        super(name);                            // super() is used to call parent class consturctor
        this.state = { ...props };
    }

    addValues(...props) {
        const sum = super.addValues(props);     // super.property is used to access parent class property
        this.setState({ sum, props });
    }

    render() {
        console.log(`Sum of ${this.state.props} is ${this.state.sum}`);
    }
}

// driver code
let component = new Component('UI Component');
component.componentName;                        // UI Component
component.addValues(3, 5);                      // Sum of 3,5 is 8
component.addValues(9, -4, 6, 2);               // Sum of 9,-4,6,2 is 13
```

###### Notes
`super` call to constructor within constructor of child class must be the first statement

###### References
- https://javascript.info/class-inheritance

<br />

### Q. Show the way of using Proxy for object

- The Proxy object enables create a proxy for another object, which can intercept and redefine fundamental operations for that object
- Proxy can be set for objects (including functions and arrays) to intercept the values which gives us the control on access and modification of the real object
- Proxy takes 1st argument as an object / function and 2nd argument as a object with different function traps

```js
let obj = {
    key: "value"
};

let proxy = new Proxy(obj, {
    get(target, handler){
        console.log("Proxy get is invoked on target with property: " + handler);
        return target[handler];
    },
    set(target, handler, value){
        console.log("Proxy set is invoked on target object with property: " + handler + " and value: " + value);
        target[handler] = value;
    }
});

// driver code
proxy.key2 = "value2";      // Proxy set is invoked on target object with property: key2 and value: value2
proxy.key1;                 // Proxy get is invoked on target with property: key1
```

###### Notes
There are lot of other traps used in Proxy apart from `get`, `set`, `apply`

###### References
- https://javascript.info/proxy
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy

<br />

### Q. Show how can we use for..of loop to iterate on a range with given start and end values in an object
```js
// Example
let range = {
    start: 1,
    end: 10
};

for (let i of range) console.log(i);        // 1 2 3 4 5 6 7 8 9 10
```

- For..of loop uses iterator of an object to fetch the values one at a time
- Defining an iterator Symbol on the object to iterate from start to end will fetch the values of the range

```js
Object.defineProperty(range, Symbol.iterator, {
    value: function () {
        let i = this.start;
        return {
            next: () => (i <= this.end ? { value: i++, done: false } : { value: undefined, done: true }),
        };
    },
});
```

<br />

### Q. Prove that private looking variable in a function is not really private specific to that object

- Private looking variables can be created in a function and can given access by providing function interfaces
- The functions maintain a closure over function variables and hence the function variables persist inside the function interfaces
- Though the variable is private within the function and cannot be accessed, these variables are not private to the created object

```js
function ObjectCreator() {
    var privateVar = 0;
    
    // function interfaces get, set
    this.getPrivateVar = function () {
        return privateVar;
    };
    this.setPrivateVar = function (value) {
        privateVar = value;
    };
}

// driver code
var obj = new ObjectCreator();
obj.setPrivateVar(10);
obj.getPrivateVar();                            // 10

var privateVarAccessor = { 
    get: obj.getPrivateVar, 
    set: obj.setPrivateVar 
};

// obj private variable is accessible by other external entities
privateVarAccessor.set(5);
privateVarAccessor.get();                       // 5
obj.getPrivateVar();                            // 10
```

<br />

[[↑] Back to top](#home)
