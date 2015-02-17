'use strict';

module.exports = omit;

function omit(obj, list, context) {
  var result = {};

  if (typeof list === 'string') {
    list = [list];
  }

  Object.keys(obj)
    .filter(function(key) {
      return list.indexOf(key) === -1;
    }, context)
    .forEach(function(key) {
      result[key] = obj[key];
    }, context);

  return result;
}
