import EventEmitterObject from 'event-emitter-object'
import {objectkit, validationkit} from 'basekits'

function StateManager(initialState, initialEvents) {
  EventEmitterObject.call(this, initialEvents)

  this.checkInitialState(initialState)
}

StateManager.prototype = Object.create(EventEmitterObject.prototype)
StateManager.prototype.constructor = StateManager

StateManager.prototype._state = {}
StateManager.prototype._prevState = null

StateManager.prototype.checkInitialState = function checkInitialState(initialState = undefined) {
  if (validationkit.isObject(initialState)) {
    this._state = initialState
  }
}

StateManager.prototype.updateState = function updateState(value) {
  if (!validationkit.isObject(value)) return undefined;

  const currentState = Object.assign({}, this.getState())
  const nextState = Object.assign({}, currentState, value)

  if (validationkit.isEqual(currentState, nextState)) {
    return false;
  }

  this._prevState = currentState
  this._state = nextState

  this.emit('update', [this.getState(), this.getPrevState()])

  return true
}

StateManager.prototype.subscribe = function subscribe(_path, cb) {
  const self = this

  if (!validationkit.isFunction(cb)) return undefined;
  if (!validationkit.isString(_path) && !validationkit.isArray(_path)) return undefined;

  self.on('update', function(state, prevState) {
    const pv = objectkit.getProp(prevState, _path)
    const cv = objectkit.getProp(state, _path)

    if (!validationkit.isEqual(cv, pv)) {
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

export default StateManager
