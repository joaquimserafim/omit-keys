/*
eslint
no-multi-spaces: ["error", {exceptions: {"VariableDeclarator": true}}]
padded-blocks: ["error", {"classes": "always"}]
max-len: ["error", 80]
*/
'use strict'

const isObject = require('is.object')

module.exports = omit

function omit (obj, ...keys) {
  if (!isObject(obj)) {
    return {}
  }

  if (!Array.isArray(keys) || !keys.length) {
    return obj
  }

  const res = {}

  for (let key in obj) {
    keys.indexOf(key) === -1 && (res[key] = obj[key])
  }

  return res
}
