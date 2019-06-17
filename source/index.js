const EventEmitter = require('event-emitter-object/source')
const utility = require('my-little-lodash/source')

function StateManager(initialState, initialEvents) {
  EventEmitter.call(this, initialEvents || {})

  this._state = initialState || {}
}

StateManager.prototype = Object.create(EventEmitter.prototype)
StateManager.prototype.constructor = StateManager

StateManager.prototype.utility = utility
StateManager.prototype._prevState = null

StateManager.prototype.updateState = function updateState(value) {
  if (!this.utility.isObject(value)) {
    return;
  }

  if (!this.utility.isObject(this.getState())) {
    throw new Error('Current state is not an object and therefore canceled state update operation.')
  }

  const currentState = Object.assign({}, this.getState())
  const nextState = Object.assign({}, currentState, value)

  if (this.utility.isEqual(currentState, nextState)) {
    return;
  }

  this.emit('beforeUpdate', [currentState, nextState])

  this._prevState = currentState
  this._state = nextState

  this.emit('afterUpdate', [this.getState(), this.getPrevState()])
}

StateManager.prototype.subscribe = function subscribe(_path, cb) {
  const self = this

  if (!self.utility.isFunction(cb)) return;

  if (!self.utility.isString(_path) && !self.utility.isArray(_path)) return;

  self.on('afterUpdate', function(state, prevState) {
    const pv = self.utility.getProp(prevState, _path)
    const cv = self.utility.getProp(state, _path)

    if (!self.utility.isEqual(cv, pv)) {
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
