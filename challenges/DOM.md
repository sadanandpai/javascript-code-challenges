<div align="right">
  <a href="/README.md#collection-of-modern-interview-code-challenges-on-javascript-suitable-for" id="home">Home</a>
</div>

## JavaScript interview code challenges on Document Object Model

1. [Show the different ways of selecting an element from DOM](#Q1)
1. [Show the ways to loop over the Nodelist obtained after querying for the elements](#Q2)
3. [Design and Implement a Node Store, which supports DOM element as key](#Q3)
4. [Implement a function to find the closest ancestor with the provided selector](#Q4)
5. [Write a function to find the corresponding node in two identical DOM trees](#Q5)
6. [Write a function to get depth of a given DOM tree](#Q6)
7. [Implement a function to get the root node of a given DOM fragment](#Q7)
8. [Implement a function to get unique tag names in a given DOM tree](#Q8)
9. [Implement a function to check if a given DOM tree has duplicate IDs](#Q9)
 
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


#### Q4
### Implement a function to find the closest ancestor with the provided selector (Element.closest() method)

- The closest() method traverses the Element and its parents (heading toward the document root) until it finds a node that matches the provided selector string. Will return itself or the matching ancestor. If no such element exists, it returns null.

```js
Element.prototype.closest = function(selector) {
  var el = this;
  while (el) {
    if (el.matches(selector)) {
      return el;
    }
    el = el.parentElement;
  }
  return null;
};
```

###### References
- https://developer.mozilla.org/en-US/docs/Web/API/Element/closest

<br />

#### Q5
### Write a function to find the corresponding node in two identical DOM trees

- Given two same DOM tree A, B, and an Element a in A, find the corresponding Element b in B. By corresponding, we mean a and b have the same relative position to their DOM tree root.

```js
const A = document.createElement('div')
A.innerHTML = `
<div>
<div>
  <div>
    <div id="node1"></div>
  </div>
  <div>
  </div>
  <div>
    <div>
      <p id="node2"></p>
    </div>
  </div>
<div>
</div>`


const B = A.cloneNode(true)
const node1 = A.querySelector('#node1')
const node2 = A.querySelector('#node2')
const node1Target = B.querySelector('#node1')
const node2Target = B.querySelector('#node2')

findCorrespondingNode(A, B, node1) // node1Target
findCorrespondingNode(A, B, node2) // node2Target
```

```js
const findCorrespondingNode = (rootA, rootB, target) => {
  if(rootA === target) return rootB;

  if(rootA.childElementCount) {
    for(let i = 0; i < rootA.childElementCount; i++) {
      let result = findCorrespondingNode(rootA.children[i], rootB.children[i], target);
      if(result) {
        return result
      }
    } 
  }
}
```

###### References
- https://bigfrontend.dev/problem/find-corresponding-node-in-two-identical-DOM-tree

<br />


#### Q6
### Write a function to get depth of a given DOM tree

- A depth of a given DOM tree is the max depth till which DOM nodes are nested


```js
/**
 * @param {HTMLElement | null} tree
 * @return {number}
 */
function getHeight (root) {
  if(!root) return 0;

  let maxDepth = 0;

  const helper = (current, depth = 1) =>  {
    if(current.hasChildNodes()) {
      for(let child of current.children) {
        helper(child, depth + 1);
      }
    }
    maxDepth = Math.max(maxDepth, depth)
  }

  helper(root)
  return maxDepth
}
```


#### Q7
### Implement a function to get the root node of a given DOM fragment (document.getRootNode() method)

- Root node is the topmost parent node of any given DOM fragment


```js
/**
 * @param {HTMLElement | null} tree
 * @return {HTMLElement | null}
 */
function getRootNode (tree) {
  if(!tree) return null;

  while(tree.parentElement) {
    tree = tree.parentElement;
  }

  return tree;
}
```

###### References
- https://javascript.info/dom-navigation


#### Q8
### Implement a function to get unique tag names in a given DOM tree

```js
/**
 * @param {HTMLElement | null} tree
 * @return {Array}
 */
function getUniqueTags(root, result = new Set()) {
  if(!root) return [];

  if(!result.has(root.tagName)) {
    result.add(root.tagName);
  }

  if(root.hasChildNodes()) {
    for(let child of root.children) {
      getUniqueTags(child, result)
    }
  }

  return [...result];
}
```

###### References
- https://bigfrontend.dev/problem/get-DOM-tags


<br />


#### Q8
### Implement a function to get elements by tag name (document.getElementsByTagName() method)

- The getElementsByTagName method of Document interface returns an HTMLCollection of elements with the given tag name.
- For example, document.getElementsByTagName('div') returns a collection of all div elements in the document.

```js
/**
 * @param {HTMLElement | null} tree
 * @return {Array}
 */
function getElementsByTagName(root, tagName) {
  if(!root) return [];

  let result = [];

  if(root.tagName.toLowerCase() === tagName.toLowerCase()) {
    result.push(root);
  }

  if(root.hasChildNodes()) {
    for(let child of root.children) {
      result = result.concat(getElementsByTagName(child, tagName))
    }
  }

  return result;
}
```

###### References
- https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByTagName


#### Q9
### Implement a function to check if a given DOM tree has duplicate IDs

- In a given DOM tree, the id on each node has be unique
- Although HTML is very forgiving, but we should avoid duplicate identifiers

```js
/**
 * @param {HTMLElement | null} tree
 * @return {Boolean}
 */
function hasDuplicateId(tree, idSet = new Set()) {
  if(!tree) return false;

  if(idSet.has(tree.id)) return true;

  tree.id && idSet.add(tree.id);

  if(tree.hasChildNodes()) {
    for(let child of tree.children) {
       const result = hasDuplicateId(child, idSet);
       if(result) return true;
    }
  }

  return false;
}
```


[[↑] Back to top](#home)
