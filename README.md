# State Manager Object
State management for javascript modules, libraries and apps.

![NPM](https://img.shields.io/npm/l/state-manager-object)
[![npm version](https://badge.fury.io/js/state-manager-object.svg)](https://badge.fury.io/js/state-manager-object)
![npm bundle size](https://img.shields.io/bundlephobia/min/state-manager-object)
![npm](https://img.shields.io/npm/dy/state-manager-object)

## Install
```sh
npm install state-manager-object
```

## Import
There are different types of distributions depending on your use case. Essentially, the package can be imported via require:

```js
const kit = require('state-manager-object')
```

or via script tag:

```html
<script src="https://unpkg.com/state-manager-object@1/dist/state-manager-object.iife.js" crossorigin type="text/javascript"></script>
```

but there are lots of other options. See distribution report below.

## Use
This is a pure javascript object which can be used as a super class of another objects or as a standalone.

### Using it as a standalone library
```js
const StateManagerObject = require('state-manager-object')

const initialState = {language: 'en'}
const appState = new StateManagerObject(initialState)

appState.subscribe('language', function(currentLang, prevLang) {
  // language changed!
})

appState.updateState({language: 'tr'})
```

### Using as a super class
```js
const StateManagerObject = require('state-manager-object')

// A Logger object which inherits the methods of EventEmitter
function Logger() {
  StateManagerObject.call(this, initialState)
}
Logger.prototype = Object.create(StateManagerObject.prototype)
Logger.prototype.constructor = Logger

Logger.prototype.propertyYouWant = function() {}

// Initiate a logger for a particular type of logs
const errorLogger = new Logger()
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
const state = new StateManagerObject({
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

### .updateState(obj)

Updates the state.

### .getState()

Returns the current state.

### .getPrevState()

Returns the previous state.

### .subscribe(path, cb)

Runs callback when a property in specified path changes.

### Event Emitter Methods

Please look at [here](https://github.com/muratgozel/event-emitter-object).

---

## Distributions Report
This is an auto-generated report that shows the type, name and size of the bundles available to use individually.

[comment]: # (DISTRIBUTIONS_REPORT_START)
```js
[
  "state-manager-object.amd.js (1.15 KB)",
  "state-manager-object.amd.polyfilled.js (7.36 KB)",
  "state-manager-object.cjs.js (1.15 KB)",
  "state-manager-object.cjs.polyfilled.js (7.37 KB)",
  "state-manager-object.es.js (0.95 KB)",
  "state-manager-object.es.polyfilled.js (7.17 KB)",
  "state-manager-object.iife.js (1.15 KB)",
  "state-manager-object.iife.polyfilled.js (7.37 KB)",
  "state-manager-object.umd.js (1.44 KB)",
  "state-manager-object.umd.polyfilled.js (7.65 KB)"
]
```
[comment]: # (DISTRIBUTIONS_REPORT_END)

## Babel Polyfills Report
This is an auto-generated report that shows the pollyfils added by core-js to the **pollyfilled** distributions based on the targets configuration described below.

[comment]: # (BABEL_POLYFILLS_REPORT_START)
```js
// polyfills:
[
  "es.symbol",
  "es.symbol.description",
  "es.symbol.iterator",
  "es.array.iterator",
  "es.object.get-prototype-of",
  "es.object.set-prototype-of",
  "es.object.to-string",
  "es.reflect.construct",
  "es.regexp.to-string",
  "es.string.iterator",
  "web.dom-collections.iterator",
  "es.object.assign"
]
// based on the targets:
{
  "android": "83",
  "chrome": "49",
  "edge": "18",
  "firefox": "68",
  "ie": "9",
  "ios": "9.3",
  "opera": "68",
  "safari": "5.1",
  "samsung": "4"
}
```
[comment]: # (BABEL_POLYFILLS_REPORT_END)

Thanks for watching 🐬

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/F1F1RFO7)
