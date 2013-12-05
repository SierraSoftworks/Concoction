# Concoction
**A flexible preprocessing framework for Node.js**

[![Build Status](https://travis-ci.org/SierraSoftworks/Concoction.png?branch=master)](https://travis-ci.org/SierraSoftworks/Concoction)
[![](https://badge.fury.io/js/concoction.png)](https://npmjs.org/package/concoction)

Concoction was designed to simplify preprocessing and transformation of objects within Node.js. Originally designed to be used with [Iridium][iridium_github], it has been designed to be extremely flexible, easy to use and powerful. Along with the basic framework, a number of common application cases have been packaged, including the ability to rename an object's properties and convert an object's values from one form to another.

## Features
- **Simple To Use** 
  Concoction has been desinged from the start to make it as easy to use as possible. Simply instantiate a recipie, add some ingredients and apply it to an object - all operations are completely reversible.
- **Reversible Operations** 
  Concoction was designed for systems which need two-way conversion support, the framework and all default operations have been designed to fully support reversible operations, and makes them as simple as possible - even applying the reversal operations in the correct order.
- **Flexible Framework** 
  The framework has been designed to make implementing your own ingredients as simple as possible, only requiring that an ingredient provides *apply* and *reverse* methods.

## Example
```javascript
var Concoction = require('concoction');

var recipie = new Concoction([
	new Concoction.Rename({ _id: 'username', yearOfBirth: 'age' }),
	new Concoction.Convert({ 
		age: {
			apply: function(value) { return new Date().getYear() - value; },
			reverse: function(value) { return new Date().getYear() - value; }
		}
	})
]);

var person = {
	_id: 'spartan563',
	yearOfBirth: 1993
}

recipie.apply(person);
// person <- { username: 'spartan563', age: 20 }

recipie.reverse(person);
// person <- { _id: 'spartan563', yearOfBirth: 1993 }
```

[iridium_github]: https://github.com/SierraSoftworks/Iridium