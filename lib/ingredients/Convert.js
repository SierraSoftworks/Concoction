var _ = require('lodash');

(require.modules || {}).Convert = module.exports = Convert;

function Convert(conversions) {
	/// <summary>Creates an ingredient which converts the values of an object's properties</summary>
	/// <param name="mapping" type="Object">The mapping of property names to their conversion functions</param>

	Object.defineProperty(this, 'conversions', {
		get: function() { return conversions; }
	});
}

Convert.prototype.apply = function(object) {
	/// <summary>Applies the ingredient's transformation to the given object</summary>
	/// <param name="object" type="Object">The object to apply the transformation to</param>

	convert(object, this.conversions, 'apply');
};

Convert.prototype.reverse = function(object) {
	/// <summary>Reverses the application of ingredient's transformation to the given object</summary>
	/// <param name="object" type="Object">The object to apply the transformation to</param>

	convert(object, this.conversions, 'reverse');
};

function convert(object, conversions, method) {
	/// <summary>Transforms properties according to a number of transformation functions</summary>
	/// <param name="object" type="Object">The object on which to apply the transformations</param>
	/// <param name="conversions" type="Object">Mapped transformation functions to apply</param>
	/// <param name="method" type="String">The transformation method to apply to the properties</param>

	if (!_.isPlainObject(object)) return; // Cannot transform strange objects

	for (var k in conversions) {
		if(typeof conversions[k] == 'function') continue; // Transform methods, not properties to transform

		if (conversions[k] && conversions[k][method]) {
			// Have a direct transform to apply
			var newValue = conversions[k][method](object[k]);
			if(newValue === undefined) delete object[k];
			else object[k] = newValue;
		} else if (conversions[k]) {
			// Have a nested transformation to apply
			convert(object[k], conversions[k], method);
		}
	}
}