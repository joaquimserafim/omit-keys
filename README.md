# omit.keys

Returns a copy of the object without the blacklisted properties

<a href="https://nodei.co/npm/omit.keys/"><img src="https://nodei.co/npm/omit.keys.png?downloads=true"></a>

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg?style=flat-square)](https://travis-ci.org/joaquimserafim/omit-keys)![Code Coverage 100%](https://img.shields.io/badge/code%20coverage-100%25-green.svg?style=flat-square)[![ISC License](https://img.shields.io/badge/license-ISC-blue.svg?style=flat-square)](https://github.com/joaquimserafim/omit-keys/blob/master/LICENSE)[![NodeJS](https://img.shields.io/badge/node-6.1.x-brightgreen.svg?style=flat-square)](https://github.com/joaquimserafim/omit-keys/blob/master/package.json#L49)

[![JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

### api

omit(object:*JSObject*, list_of_keys:*array || string*[, context:*this*])

### example

```js
var omit = require('omit.keys')

// example 1
var package = require('./package.json')
var filter = omit(package, ['version', 'name'])
// filter should have all the properties from the package.json file
// without the properties "version" & "name"

// example 2
var value = omit({desc: 'hey', value: 'Hello World'}, 'desc')
// should return {value: 'Hello World'}
```
