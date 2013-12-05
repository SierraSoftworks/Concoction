(require.modules || {}).Recipie = module.exports = Recipie;

function Recipie(ingredients) {
	/// <summary>Creates a new recipie with the given ingredients</summary>
	/// <param name="ingredients" type="Array" elementType="Ingredient">The ingredients which compose the recipie</param>

	Object.defineProperty(this, 'ingredients', {
		get: function() { 
			/// <summary>Gets the ingredients which make up this recipie</summary>
			return ingredients; 
		}
	});
}

Recipie.prototype.apply = function(object) {
	/// <summary>Applies the recipie to the given object</summary>
	/// <param name="object" type="Object">The object to apply the recipie to</param>

	for(var i = 0; i < this.ingredients.length; i++)
		this.ingredients[i].apply(object);
};

Recipie.prototype.reverse = function(object) {
	/// <summary>Reverses the application of a recipie on the given object</summary>
	/// <param name="object" type="Object">The object to apply the recipie to</param>

	for(var i = this.ingredients.length - 1; i >= 0; i--)
		this.ingredients[i].reverse(object);
};
