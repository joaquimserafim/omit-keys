/*
eslint
padded-blocks: ["error", {"classes": "always"}]
max-len: ["error", 80]
*/
'use strict'

module.exports = omit

function omit (obj, list, context) {
  var result = {}

  if (typeof list === 'string') {
    list = [list]
  }

  Object
    .keys(obj)
    .forEach((key) => {
      if (list.indexOf(key) === -1) {
        result[key] = obj[key]
      }
    },
      context
    )

  return result
}
