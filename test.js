/*
eslint
padded-blocks: ["error", {"classes": "always"}]
max-len: ["error", 80]
*/
'use strict'

var test = require('tape')
var pick = require('./')

test('return a copy of the object only containing the specified properties',
  (assert) => {
    var obj = require('./package.json')
    var newObj = pick(obj, ['version', 'name'])
    assert.deepEqual(typeof newObj, 'object')
    assert.deepEqual(newObj.version, undefined)
    assert.deepEqual(newObj.name, undefined)
    assert.equal(newObj.description, obj.description)
    assert.end()
  }
)

test('the same test but uses a string to filter with one key',
  (assert) => {
    var obj = require('./package.json')
    var newObj = pick(obj, 'description')
    assert.deepEqual(typeof newObj, 'object')
    assert.deepEqual(newObj.description, undefined)
    assert.equal(newObj.name, obj.name)
    assert.equal(newObj.version, obj.version)
    assert.end()
  }
)
