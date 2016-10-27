/*
eslint
padded-blocks: ["error", {"classes": "always"}]
max-len: ["error", 80]
*/
'use strict'

module.exports = omit

function omit (obj, ...args) {

  if (isNotObject(obj)) {
    return null
  }

  if (!Array.isArray(args) || !args.length) {
    return obj
  }

  return procList(obj, getList(args))
}

function procList (obj, list, context) {
  let result = {}

  for (let key in obj) {
    if (list.indexOf(key) === -1) {
      result[key] = obj[key]
    }
  }

  return result
}

function getList (arr) {
  return arr.length === 1 ? Array.isArray(arr[0]) && arr[0] || arr : arr
}

function isNotObject (obj) {
  return Object.prototype.toString.call(obj) !== '[object Object]'
}
