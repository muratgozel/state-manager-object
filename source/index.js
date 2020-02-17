const EventEmitter = require('event-emitter-object/source')
const kit = require('@basekits/core')

function StateManager(initialState = {}, initialEvents = {}) {
  EventEmitter.call(this, initialEvents || {})

  this._state = initialState || {}

  this.kit = kit
  this.kit.addKit(require('@basekits/kit-type'))
  this.kit.addKit(require('@basekits/kit-error'))
  this.kit.addKit(require('@basekits/kit-validator'))  
}

StateManager.prototype = Object.create(EventEmitter.prototype)
StateManager.prototype.constructor = StateManager

StateManager.prototype._prevState = null

StateManager.prototype.updateState = function updateState(value) {
  if (!this.kit.isObject(value)) {
    return;
  }

  if (!this.kit.isObject(this.getState())) {
    throw new Error('Current state is not an object and therefore canceled state update operation.')
  }

  const currentState = Object.assign({}, this.getState())
  const nextState = Object.assign({}, currentState, value)

  if (this.kit.isEqual(currentState, nextState)) {
    return;
  }

  this.emit('beforeUpdate', [currentState, nextState])

  this._prevState = currentState
  this._state = nextState

  this.emit('afterUpdate', [this.getState(), this.getPrevState()])
}

StateManager.prototype.subscribe = function subscribe(_path, cb) {
  const self = this

  if (!self.kit.isFunction(cb)) return;

  if (!self.kit.isString(_path) && !self.kit.isArray(_path)) return;

  self.on('afterUpdate', function(state, prevState) {
    const pv = self.kit.getProp(prevState, _path)
    const cv = self.kit.getProp(state, _path)

    if (!self.kit.isEqual(cv, pv)) {
      cb(cv, pv)
    }
  })
}

StateManager.prototype.getState = function getState() {
  return this._state
}

StateManager.prototype.getPrevState = function getPrevState() {
  return this._prevState
}

module.exports = StateManager
