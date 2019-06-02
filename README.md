# State Manager Object

State management for javascript modules, libraries and apps.

## Install

```sh
npm install state-manager-object
```

## Import

This package exports multiple builds. Developer has the responsibility to choose the one that best fits to her/his needs.

1. **Minified (default)**

This is basically the source code itself but minified. There are no compilation and polyfills inside. Use it if you already have a compiler (like babel) and polyfills in your project. (which is mostly is the case.)

```js
// just 1230 bytes
const StateManagerObject = require('state-manager-object')
```

2. **UMD Bundle**

The source code bundled with `browserify` to generate a `UMD` bundle. This bundle can also be imported by html script tag. No compilation and polyfills. The variable attached to the browser's `window` object is `StateManagerObject`.

```js
const StateManagerObject = require('state-manager-object/dist/umd')
```

or

```html
<script src="https://unpkg.com/state-manager-object@0/dist/umd.js" crossorigin type="text/javascript"></script>
```

3. **Polyfilled UMD bundle**

The source code compiled with babel and bundled with `browserify` to generate a `UMD` bundle. This bundle can also be imported by html script tag. The variable attached to the browser's `window` object is `StateManagerObject`.

```html
<script src="https://unpkg.com/state-manager-object@0/dist/umd.polyfilled.js" crossorigin type="text/javascript"></script>
```

## Initiation

**Plug into your object**

```js
const StateManagerObject = require('state-manager-object')

function MyObject() {}
MyObject.prototype.someMethod = function someMethod() {}

MyObject.prototype = Object.assign(
  {}, MyObject.prototype, StateManagerObject.prototype
)

const my = new MyObject()

// all api methods of state manager is available in my.
my.setInitialState({})
my.updateState({})
```

**As Standalone**

```js
const StateManagerObject = require('state-manager-object')

const state = new StateManagerObject()
state.setInitialState({})
```

### Listening for changes

The object also has a built in [event emitter][18d9171b]. You can subscribe for changes in a certain property in a state or in any property.

  [18d9171b]: https://github.com/muratgozel/event-emitter-object "event emitter"

**Listening for all changes**

```js
const state = new StateManagerObject()

state.on('beforeUpdate', function(currentState, nextState) {})
state.on('afterUpdate', function(currentState, prevState) {})
```

**Subscribing to a property**

```js
const state = new StateManagerObject()

state.setInitialState({
  name: 'Murat',
  address: {
    country: 'TR'
  }
})

state.subscribe('name', function(value, prev) {
  console.log('name property changed from ' + prev + ' to ' + value)
})

state.subscribe(['address', 'country'], function(value, prev) {
  console.log('country property changed from ' + prev + ' to ' + value)
})
```

## API

### setInitialState(obj)

Any call to update state will be canceled unless you set initial state first.

### updateState(obj)

Updates the state.

### getState()

Returns the current state.

### getPrevState()

Returns the previous state.

### subscribe(path, cb)

Runs callback when a property in specified path changes.

### Event Emitter Methods

You can look at this methods at [here](https://github.com/muratgozel/event-emitter-object).

## Babel Polyfills Report

This module uses the following polyfills in its polyfilled builds.

1. `es.object.assign`
