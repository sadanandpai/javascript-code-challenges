<div align="right">
  <a href="/README.md#this-is-a-collection-of-modern-interview-code-challenges-on-javascript-suitable-for" id="home">Home</a>
</div>

<h2 align="center">JavaScript challenges on Objects - challenges</h2>

<br>

### Q. Display all the keys and values of a nested object

- `typeof` operator on value gives the type of value
- Recursive solution can be used to iterate over all the nested objects

```js
function keyValuePrinter(obj) {
  for (let key in obj) {
    if (typeof obj[key] !== "object") {
      console.log("[" + key + " : " + obj[key] + "]");
    } else {
      keyValuePrinter(obj[key]);
    }
  }
}
```

<br />

### Q. Write a program which can empty a given object

- Object can be emptied by removing all the keys present on it
- Alternatively, a new object can be created and the prototype of the new object can be set as prototype of old object

```js
for (let key in obj) {
  if (obj.hasOwnProperty(key)) {
    delete obj[key];
  }
}
```

```js
const newObj = {};
Object.setPrototypeOf(newObj, obj);
```

###### Notes

'obj' is considered to be the object to be emptied

<br />

### Q. Show how a deep copy of an object can be done

- Deep copy is done by copying all the properties of the object to another object

```js
Object.assign({}, obj);
```

```js
{ ...obj};
```

```js
JSON.parse(JSON.stringify(obj));
```

```js
function deepCopy(obj) {
  if (!obj) return obj;

  const copyObj = {};
  for (const key in obj) {
    if (typeof obj[key] !== "object" || Array.isArray(obj[key]))
      copyObj[key] = obj[key];
    else copyObj[key] = deepCopy(obj[key]);
  }
  return copyObj;
}

deepCopy(obj);
```

###### Notes

3rd solution provided does deep copy of a nested object also but this technique results in loss of data

###### References

- https://www.digitalocean.com/community/tutorials/copying-objects-in-javascript

<br />

### Q. Create an array of pair of values (key, value) from an object and store it in a map. Consider the object is not nested

- As the object is not nested, the key-value pairs can be obtained directly by using Object.entries
- Map can be initialized with key-value pairs

```js
const map = new Map(Object.entries(obj));
```

###### References

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries

<br />

### Q. Create an object with a property 'marks' which cannot be set to a value less than 0

- `getter` and `setter` on the properties of object can be used to control the read and write behavior

```js
const obj = { marks: 0 };

Object.defineProperty(obj, "marks", {
  set(value) {
    if (value < 0) throw new Error("Marks cant be less than zero");
    marks = value;
  },
  get() {
    return marks;
  },
});
```

```js
const obj = {
  _marks: 0,

  set marks(value) {
    if (value < 0) throw new Error("Marks cant be less than zero");
    this._marks = value;
  },

  get marks() {
    return this._marks;
  },
};
```

###### Notes

2nd solution shown directly defines `getter` and `setter` for property marks, hence uses another variable to store the data

###### References

- https://javascript.info/property-accessors

<br />

### Q. Create an object which has a property 'userid' which can only be set once and will be a read only property

- Property accessor `writable` to `false` sets the property to be read only

```js
function userObjectCreator(id) {
  const obj = {};

  Object.defineProperty(obj, "userid", {
    value: id,
    writable: false,
  });

  return obj;
}

const obj = userObjectCreator(1);
```

###### Notes

`obj.id` is a ready only property and does not allow overwriting

<br />

### Q. Stringify an object by excluding the 'password' property

```js
// Example
const obj = {
  id: 1,
  username: "John",
  password: "secret",
  email: "john@email.com",
};
```

- `JSON.stringify` is the method which can be used for stringification of an object or any other value
- It accepts 2nd argument which can be a function or array

```js
JSON.stringify(obj, (key, value) => (key === "password" ? undefined : value)); // {"id":1,"username":"John","email":"john@email.com"}
```

```js
JSON.stringify(obj, ["id", "username", "email"]); // {"id":1,"username":"John","email":"john@email.com"}
```

###### References

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify

<br />

### Q. Design a function which takes an array as input and returns a function 'next', calling which fetches a value one by one

- The function returned `next` will return an object which contains value and done properties

```js
function makeIterator(array) {
  let nextIndex = 0;
  return {
    next: function () {
      return nextIndex < array.length
        ? {
            value: array[nextIndex++],
            done: false,
          }
        : {
            done: true,
          };
    },
  };
}

// driver code
let it = makeIterator(["yo", "ya"]);
it.next().value; // 'yo'
it.next().value; // 'ya'
it.next().done; // true
```

###### References

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator

<br />

### Q. Create an object 'obj' with functions assigned to keys. Show how can we achieve 'obj.func1().func2().func3()' considering func1, func2, func3 are object keys

- For achieving chaining functionality, each function can return the calling context itself so that context is retained

```js
var obj = {
  id: 1,
  username: "Jane",
  dept: "Computers",

  displayId() {
    console.log("Id: " + this.id);
    return this;
  },

  displayName() {
    console.log("Name: " + this.username);
    return this;
  },

  displayDept(dept) {
    if (typeof dept !== "undefined") {
      this.dept = dept;
    }
    console.log("Dept: " + this.dept);
    return this;
  },
};

// driver code
obj.displayId().displayName().displayDept("Info Tech");
```

###### Notes

Order of calling the functions does not matter as all the functions are returning object itself

###### References

- https://medium.com/technofunnel/javascript-function-chaining-8b2fbef76f7f

<br />

### Q. Create an object with property counter which keeps incrementing on every access

```js
const obj = counterObject();
obj.counter; // 1
obj.counter; // 2
obj.counter; // 3
```

- The access to the property of the object can be configured through property `getter`
- A separate private variable can be maintained track the value and getter on each access to increment and return the value

```js
function counterObject() {
  const symCounter = Symbol("counter");

  const obj = {
    [symCounter]: 0,

    get counter() {
      return ++this[symCounter];
    },

    set counter(value) {
      throw new Error("Cannot set the counter");
    },
  };
  return obj;
}
```

###### Notes

Symbol is used to maintain the private variable in the object. Using the private variable to store the data such as `_counter` is also a well known pattern before symbols

<br />

### Q. Create an object and make it behave like an array which allows push and pop operations on items

- Object does not have by default a property named 'length' and hence we can define it on object which helps to track the length
- 'push' and 'pop' functions can be added to the object which internally calls the Array methods `push` and `pop` by passing the object context

```js
const arrayLikeObject = {
  length: 0,
  push: function (item) {
    Array.prototype.push.call(this, item);
  },
  pop: function () {
    Array.prototype.pop.call(this);
  },
};

// driver code
arrayLikeObject.push("first");
arrayLikeObject.push("second");
arrayLikeObject.pop();
arrayLikeObject; // { length: 1, 0: first }
```

###### Notes

As the context for array methods is set object, length of the object changes whenever `push` and `pop` operations take place

<br />

### Q. Write a function which can be used to deeply compare 2 nested objects

```js
// Example
const obj1 = {
  name: "John",
  details: {
    x: 1,
    y: 2,
  },
};

const obj2 = {
  name: "John",
  details: {
    y: 2,
    x: 1,
  },
};

deepEqual(obj1, obj2); // true
```

- The objects can be deeply compared by checking the key value pairs recursively

```js
function deepEqual(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    const val1 = object1[key];
    const val2 = object2[key];
    const areObjects =
      val1 != null &&
      typeof val1 === "object" &&
      val2 != null &&
      typeof val2 === "object";
    if (
      (areObjects && !deepEqual(val1, val2)) ||
      (!areObjects && val1 !== val2)
    ) {
      return false;
    }
  }

  return true;
}
```

###### Notes

Stringification of both objects and comparision will also work, but fails on keys order mismatch

###### References

- https://dmitripavlutin.com/how-to-compare-objects-in-javascript/

<br />

### Q. Design a class for employee which takes id and name in during construction of object and has a salary property

- Classes are a template for creating objects. They encapsulate data with code to work on that data
- The constructor method is a special method for creating and initializing an object created with a class
- Objects of the class can be created using `new` keyword followed by classname

```js
class Employee {
  constructor(id, name) {
    if (typeof id !== "undefined" && typeof name !== "undefined") {
      this.id = id;
      this.name = name;
    } else
      throw new Error(
        "Employee id and name are mandatory for new employee creation"
      );
  }

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  setSalary(base, variable) {
    this.salary = base + variable;
  }

  getSalary() {
    return this.salary;
  }
}

// driver code
const emp = new Employee(1, "John Doe");
emp.setSalary(10000, 1000);
emp.getSalary(); // 11000
```

###### Notes

Class in JavaScript is functionality to achieve class based model on top of prototype based programming model of JavaScript

###### References

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

<br />

### Q. Write a program to make all the properties of an object ready only but allow the addition of new properties

- The exisiting properties of the object can be made read only with `set` keyword using Proxy

```js
const readOnlyObj = new Proxy(obj, {
  get: function (target, key) {
    return target[key];
  },

  set: function () {
    if (target.hasOwnProperty(key)) {
      throw new Error("Object properties are read only");
    }
    target[key] = value;
  },
});
```

###### Notes

If condition takes care whether the property is new or existing to handle the read only scenario

###### References

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries

<br />

### Q. Write a program which can return a boolean if value is present in the range with given start and end values in an object

```js
// Example
let range = {
  start: 10,
  end: 50,
};

5 in range; // false
25 in range; // true
```

- The object `in` can be trapped using Proxy trap `has`, to check if the value is in the range or not

```js
range = new Proxy(range, {
  has(target, value) {
    return value >= target.start && value <= target.end;
  },
});
```

<br />

### Q. Write a function which accepts a topic and a list of related tags to store the information. The same function should return all the topics when requested with a tagname

```js
// Example
const tagManager = TagManager();
tagManager.addTags("React", "Redux, JSX, JavaScript, VDOM");
tagManager.addTags("Angular", "RxJS, TypeScript, JavaScript");
tagManager.addTags("Vue", "VDOM, JavaScript");

tagManager.getTopics.getTopics("VDOM"); // React, Vue
tagManager.getTopics.getTopics("JavaScript"); // React, Angular, Vue
```

- The tags can be stored as keys and array of topics as values in a map
- Function module can be desgined to expose 'addTags' and 'getTopics' by tagname

```js
function TagManager() {
  const map = new Map();

  function addTags(topic, tagText) {
    const tagsArr = tagText.split(",").map((tag) => tag.trim());

    tagsArr.forEach((tag) => {
      if (map.has(tag)) {
        map.get(tag).push(topic);
      } else {
        map.set(tag, [topic]);
      }
    });
  }

  function getTopics(tag) {
    return map.get(tag);
  }

  return {
    addTags,
    getTopics,
  };
}
```

<br />

### Q. Write a function which accepts a collection of values & an iteratee as arguments and returns a grouped object

```js
// Example
groupBy([6.1, 4.2, 6.3], Math.floor); // { 6: [6.1, 6.3], 4: [4.2] }
groupBy(["one", "two", "three"], "length"); // { 3: ['one', 'two'], 5: ['three'] }
```

- As the 2nd argument is either a functin or property, the iteratee can be perfrom accordingly on the value of arrays
- An empty object can be created and used to push the values of array to respective property of the iteratee output

```js
function groupBy(values, iteratee) {
  const obj = {};
  for (let value of values) {
    const prop =
      typeof iteratee === "function" ? iteratee(value) : value[iteratee];
    prop in obj ? obj[prop].push(value) : (obj[prop] = [value]);
  }

  return obj;
}
```

###### References

- https://lodash.com/docs/4.17.15#groupBy

<br />

### Q. Create a constructor function which allows its functions present on prototype to be accessed only by the objects created by calling it

- The list of objects created by the function can be kept in track using a collection object inside function
- `Weakset` can be a prefered way to use as collection for objects created through it as the dereferencing the object helps in garbage collection
- A context validation within prototype method can be set if the object is created by the function itself or not

```js
function ProtectedFunction() {
  const objectCollection = new WeakSet();
  objectCollection.add(this);

  if (!ProtectedFunction.prototype.method) {
    ProtectedFunction.prototype.method = function () {
      if (!objectCollection.has(this))
        throw new TypeError("Incompatible object!");
      return "Access granted";
    };
  }
}

// driver code
const protectedObj = new ProtectedFunction();
protectedObj.method(); // Access granted

const obj = {};
ProtectedFunction.prototype.method.call(obj); // Incompatible object!
```

<br />

### Q. Design a utility on an array of objects where the access can be made to the object using index (as usual) and also from primary key of the object

```js
// Example
const employees = [
  { name: "John", id: "1" },
  { name: "Jane", id: "2" },
  { name: "Pai", id: "0" },
];

flexEmployees[0]; // { name: 'John', id: '1' }
flexEmployees["Pai"]; // { name: 'Pai', id: '0' }
flexEmployees["doe"]; // undefined
```

- The access to the index happens for arrays by default and the Proxy can be setup to enable the fetching of object using primary key (any other key can also be coded)

```js
const flexEmployees = new Proxy(employees, {
  get(target, handler) {
    if (handler in target) {
      return target[handler];
    } else if (typeof handler === "string") {
      return target.find((obj) => obj.name === handler);
    } else {
      return undefined;
    }
  },
});
```

<br />

### Q. Write a function which receives an object and returns a true if the object has circular reference

```js
// Example
var circularReferenceObj = { data: 123 };
circularReferenceObj.myself = circularReferenceObj;
```

- Stringification of an object having circular references will throw error

```js
function doesObjectHaveCircularRef(obj) {
  try {
    JSON.stringify(circularReference);
    return false;
  } catch {
    return true;
  }
}
```

###### References

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Cyclic_object_value

<br />

### Q. Write a code which can eliminate circular references in an object (Cyclic reference in an object)

- Circular / cyclic reference exists when the object property value forms a cycle
- The circular references can be eliminated by passing a function to take care of circular references during stringification
- The circular references can be also be eliminated by setting the such property value to null on the object itself

```js
const getCircularReplacer = () => {
  const seen = new WeakSet();
  return (key, value) => {
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) {
        return;
      }
      seen.add(value);
    }
    return value;
  };
};

JSON.stringify(circularReferenceObj, getCircularReplacer());
```

```js
function removeCircularRef(obj) {
  const set = new WeakSet([obj]);

  (function iterateObj(obj = circularReference) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] === "object")
          if (set.has(obj[key])) delete obj[key];
          else {
            set.add(obj[key]);
            iterateObj(obj[key]);
          }
      }
    }
  })();
}
```

###### Notes

`circularReferenceObj` is assumed to be an object with cyclic reference

<br />

### Q. Provide an object on which a value can be set to nested property even if it does not exist.

- The nested object can be accessed only if all the nested properties are defined on the object
- A proxy can designed to create such nested object properties on demand whenever such non existent property is requested and attempted to set with value
- `get` trap of proxy can be used to create the objects dynamically and set the value

```js
function ProxyObject(obj) {
  return new Proxy(obj, {
    get: (target, property) => {
      if (!(property in target)) {
        target[property] = new ProxyObject({});
      }
      return target[property];
    },
  });
}

// driver code
const obj = new ProxyObject({});
obj.x.y.z = "nested value";

obj.x.y.z; // nested value
```

<br />

[[↑] Back to top](#home)
