/*
eslint
no-multi-spaces: ["error", {exceptions: {"VariableDeclarator": true}}]
padded-blocks: ["error", {"classes": "always"}]
max-len: ["error", 80]
*/
'use strict'

const test = require('tape')

const omit = require('.')

test('omit.keys', (assert) => {

  const testObj = {
    a: 1,
    b: 2,
    c: 3
  }

  assert.deepEqual(
    omit('not an object'),
    {},
    'should return `{}` when the object is not a valid JS object'
  )

  assert.deepEqual(
    omit(testObj),
    testObj,
    'should return the intact object when the omitting list is empty ' +
    'or not a valid one'
  )

  assert.deepEqual(
    omit(testObj, 'a', 'b'),
    {c: 3},
    'omitting `a, b` should return the prop `c`'
  )

  assert.deepEqual(
    omit(testObj, 'a'),
    {b: 2, c: 3},
    'omitting `a` should return the props `b` and `c`'
  )

  const fn = () => {}

  assert.deepEqual(
    omit({fn: fn, data: ''}, 'data'),
    {fn: fn},
    'should work with objects which has functions'
  )

  function Test () {
    this.a = 1
    this.b = 2
    this.c = 3
  }

  assert.deepEqual(
    omit(new Test(), 'a'),
    {b: 2, c: 3},
    'should work with Prototypes'
  )

  assert.end()
})
