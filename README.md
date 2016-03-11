# bindmethods
A cleaner way to bind methods. Written for React ES6

## Installation
```
npm install bindmethods
```
## Signature

```js
function ([arrayOfStrings],this)
```

## API 
bindMethods is a function that accepts 2 parameters.

First Parameter - An array of strings that you wish to bind

Second Parameter - The 'this' keyword

## Examples

When you are creating a new React ES6 Component, Why do this : 
```js
class ExampleComponent extends React.Component {
 constructor() {
  super();
  this.handleClick = this.handleClick.bind(this);
  this.handleUpdate = this.handleUpdate.bind(this);
  this.handleDelete = this.handleDelete.bind(this);
 }
 render() { 
  return <div onClick={this._handleClick}>Hello, world.</div>;
 }
 
 handleClick() {
  console.log("handleClick")
 }

 handleUpdate() {
  console.log("handleUpdate")
 }

 handleDelete() {
  console.log("handleDelete")
 }
}
```

When you can do this :

```js
var bindMethods = require("bindmethods");
class ExampleComponent extends React.Component {
 constructor() {
  super();
  bindMethods([
    'handleClick',
    'handleUpdate',
    'handleDelete'
  ],this)
 }
 render() { 
  return <div onClick={this._handleClick}>Hello, world.</div>;
 }
 
 handleClick() {
  console.log("handleClick")
 }

 handleUpdate() {
  console.log("handleUpdate")
 }

 handleDelete() {
  console.log("handleDelete")
 }
}
```
To acheive the same result. Stop spending time writing boilerplate. Use bindmethods :)
