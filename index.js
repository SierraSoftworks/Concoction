var Concoction = require('./lib/Recipie');
var Ingredient = require('./lib/Ingredient');

(require.modules || {}).concoction = module.exports = Concoction;

Concoction.Ingredient = Ingredient;

// List ingredients on this object
var ingredients = [
	'Convert',
	'Rename'
];

for(var i = 0; i < ingredients.length; i++) {
	Object.defineProperty(Concoction, ingredients[i], {
		value: require('./lib/ingredients/' + ingredients[i]),
		enumerable: true
	});
}