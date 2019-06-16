const EventEmitter = require('event-emitter-object/source')
const utility = require('my-little-lodash/source')

function StateManager() {}

StateManager.prototype.utility = utility
StateManager.prototype.state = null
StateManager.prototype.prevState = null

StateManager.prototype.updateState = function updateState(value) {
  if (!this.utility.isObject(value)) {
    return;
  }

  if (this.utility.isNull(this.getState())) {
    throw new Error('Please call setInitialState first.')
  }

  const currentState = Object.assign({}, this.getState())
  const nextState = Object.assign({}, currentState, value)

  if (this.utility.isEqual(currentState, nextState)) {
    return;
  }

  this.emit('beforeUpdate', [currentState, nextState])

  this.prevState = currentState
  this.state = nextState

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
  return this.state
}

StateManager.prototype.getPrevState = function getPrevState() {
  return this.prevState
}

StateManager.prototype.setInitialState = function setInitialState(obj) {
  if (this.utility.isObject(obj) && this.utility.isNull(this.getState())) {
    this.state = obj
  }
}

StateManager.prototype = Object.assign(
  {}, StateManager.prototype, EventEmitter.prototype
)

module.exports = StateManager
