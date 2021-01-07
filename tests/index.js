const assert = require('assert')
const colors = require('colors')
const StateManagerObject = require('../src')

const stateManager = StateManagerObject.create({name: null})
assert.ok(stateManager.getState().name === null)

stateManager.updateState({name: 'something'})
assert.ok(stateManager.getState().name === 'something')
assert.ok(stateManager.getPrevState().name === null)

const stateManager2 = StateManagerObject.create({age: 17, service: {type: 'something'}})
let calls = 0
stateManager2.subscribe(function(currentState, prevState) {
  calls += 1
})
stateManager2.subscribe('service.type', function(currentValue, prevValue) {
  assert.ok(currentValue == 'another')
  calls += 1
})
stateManager2.updateState({age: 18})
stateManager2.updateState({service: {type: 'another'}})

stateManager2.subscribe('age', function(currentValue, prevValue) {
  assert.ok(currentValue == 19)
  calls += 1
})
stateManager2.updateState({age: 19})
assert.ok(calls === 5)

console.log('All tests pass.'.green)
