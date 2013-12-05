(require.modules || {}).Ingredient = module.exports = Ingredient;

function Ingredient() {
	/// <summary>Creates a new ingredient</summary>
}

Ingredient.prototype.apply = function(object) {
	/// <summary>Applies the ingredient's transformation to the given object</summary>
	/// <param name="object" type="Object">The object to apply the transformation to</param>
};

Ingredient.prototype.reverse = function(object) {
	/// <summary>Reverses the application of ingredient's transformation to the given object</summary>
	/// <param name="object" type="Object">The object to apply the transformation to</param>
};