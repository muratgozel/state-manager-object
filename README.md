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
const StateManagerObject = require('state-manager-object')
```
or via script tag:
```html
<script src="https://cdn.jsdelivr.net/npm/basekits@1/dist/basekits.iife.js" crossorigin type="text/javascript"></script>
<script src="https://cdn.jsdelivr.net/npm/event-emitter-object@4/dist/event-emitter-object.iife.js" crossorigin type="text/javascript"></script>
<script src="https://cdn.jsdelivr.net/npm/state-manager-object@2/dist/state-manager-object.iife.js" crossorigin type="text/javascript"></script>
```
but there are lots of other options. See distribution report below.

## Use
A simple state:
```js
const StateManagerObject = require('state-manager-object')

const initialState = {doc: {head: {title: 'Test 1'}}}
const appState = StateManagerObject.create(initialState)
appState.getState() == initialState

appState.updateState({doc: {head: {title: 'Test 2'}}})
appState.getState() == {doc: {head: {title: 'Test 2'}}}
appState.getPrevState() == initialState
```
Adding subscribers:
```js
appState.subscribe('doc.head.title', function(currentValue, prevValue) {
  currentValue == 'Test 3'
  prevValue == 'Test 2'
})
appState.updateState({doc: {head: {title: 'Test 3'}}})

// subscribe to all state updates
appState.subscribe(function(currentState, prevState) {
  // do something with current and prev states
})
```
Events are managed by [event emitter][18d9171b].

  [18d9171b]: https://github.com/muratgozel/event-emitter-object "event emitter"

---

## Distributions Report
This is an auto-generated report that shows the type, name and size of the bundles available to use individually.

[comment]: # (DISTRIBUTIONS_REPORT_START)
```js
[
  "state-manager-object.amd.js (1.07 KB)",
  "state-manager-object.amd.polyfilled.js (7.35 KB)",
  "state-manager-object.cjs.js (1.08 KB)",
  "state-manager-object.cjs.polyfilled.js (7.38 KB)",
  "state-manager-object.es.js (0.95 KB)",
  "state-manager-object.es.polyfilled.js (7.24 KB)",
  "state-manager-object.iife.js (1.07 KB)",
  "state-manager-object.iife.polyfilled.js (7.36 KB)",
  "state-manager-object.umd.js (1.36 KB)",
  "state-manager-object.umd.polyfilled.js (7.64 KB)"
]
```
[comment]: # (DISTRIBUTIONS_REPORT_END)

## Babel Polyfills Report
This is an auto-generated report that shows the pollyfils added by core-js to the **pollyfilled** distributions based on the targets configuration described below.

[comment]: # (BABEL_POLYFILLS_REPORT_START)
```js
// polyfills:
[
  "es.object.get-prototype-of",
  "es.object.set-prototype-of",
  "es.object.assign"
]
// based on the targets:
{
  "chrome": "49",
  "edge": "18",
  "firefox": "78",
  "ie": "10",
  "ios": "9.3",
  "opera": "71",
  "safari": "5.1",
  "samsung": "4"
}
```
[comment]: # (BABEL_POLYFILLS_REPORT_END)

---

Thanks for watching 🐬

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/F1F1RFO7)
