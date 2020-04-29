const Object = require('../dist/state-manager-object.cjs.js')

test('api.', () => {
  const obj = new Object()
  expect(obj.getState()).toStrictEqual({})
  expect(obj.getPrevState()).toBe(null)

  obj.updateState({a: '1'})
  expect(obj.getState()).toStrictEqual({a: '1'})
  expect(obj.getPrevState()).toStrictEqual({})

  const obj2 = new Object({a: '2'})
  expect(obj2.getState()).toStrictEqual({a: '2'})
  expect(obj.getState()).toStrictEqual({a: '1'})

  obj.subscribe('b', function() {
    expect(obj.getState().b).toBe('3')
  })
  obj.updateState({b: '3'})
})
