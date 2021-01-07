const {typekit, objectkit, validationkit} = require('basekits')
const EventEmitterObject = require('event-emitter-object')

function StateManagerObject() {
  function StateManager(initialState=undefined) {
    if (!typekit.isObject(initialState)) {
      throw new Error('Invalid initial state.')
    }
    const eventEmitter = EventEmitterObject.create()
    const _state = {
      state: initialState,
      prevState: null
    }

    function updateState(payload) {
      if (!typekit.isObject(payload)) {
        throw new Error('Invalid payload.')
      }

      const currentState = getState()
      const nextState = Object.assign({}, currentState, payload)

      if (validationkit.isEqual(currentState, nextState)) return;

      _state.state = nextState
      _state.prevState = currentState

      eventEmitter.emit('update', [_state.state, _state.prevState])
    }

    function subscribe(arg1, arg2=undefined) {
      const path = typeof arg1 == 'string' ? arg1 : undefined
      const fn = typeof path == 'undefined' ? arg1 : arg2
      if (typeof fn != 'function') {
        throw new Error('Subscriber function should be a type of function.')
      }

      eventEmitter.on('update', function(currentState, prevState) {
        const currentValue = path ? objectkit.getProp(currentState, path) : currentState
        const prevValue = path ? objectkit.getProp(prevState, path) : prevState

        if (!validationkit.isEqual(currentValue, prevValue)) {
          fn(currentValue, prevValue)
        }
      })
    }

    function getState() {
      return _state.state
    }

    function getPrevState() {
      return _state.prevState
    }

    return {
      getState: getState,
      getPrevState: getPrevState,
      updateState: updateState,
      subscribe: subscribe
    }
  }

  return {
    create: StateManager
  }
}

module.exports = StateManagerObject()
