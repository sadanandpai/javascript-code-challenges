<div align="right">
  <a href="/README.md#collection-of-modern-interview-code-challenges-on-javascript-suitable-for" id="home">Home</a>
</div>

## JavaScript interview code challenges on Document Object Model

1. [Show the different ways of selecting an element from DOM](#Q1)
1. [Show the ways to loop over the Nodelist obtained after querying for the elements](#Q2)
3. [Design and Implement a Node Store, which supports DOM element as key](#Q3)
 
---

#### Q1
### Show the different ways of selecting an element from DOM

- The `typeof` operator returns a string indicating the type of the operand

```js
// querySelector, getElementById etc
```

###### Notes
Note goes here

###### References
- 

<br />

#### Q2
### Show the ways to loop over the Nodelist obtained after querying for the elements

- The `typeof` operator returns a string indicating the type of the operand

```js
// for..in
```

###### Notes
Note goes here

###### References
- 

<br />


#### Q3
### Design and Implement a Node Store, which supports DOM element as key

- Implement it without using inbuilt Map
- Can you do it in O(1) Time complexity?

```js
class NodeStore {

  constructor() {
    this.store = {};
  }
   /**
   * @param {Node} node
   * @param {any} value
   */
  set(node, value) {
   node.__nodeIdentifier__ = Symbol();
   this.store[node.__nodeIdentifier__] = value
  }
  /**
   * @param {Node} node
   * @return {any}
   */
  get(node) {
    return this.store[node.__nodeIdentifier__];
  }
  
  /**
   * @param {Node} node
   * @return {Boolean}
   */
  has(node) {
    return !!this.store[node.__nodeIdentifier__];
  }
}
```

###### References
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

<br />



[[↑] Back to top](#home)