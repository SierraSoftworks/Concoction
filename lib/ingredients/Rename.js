(require.modules || {}).Rename = module.exports = Rename;

function Rename(mapping) {
	/// <summary>Creates an ingredient which renames an object's properties</summary>
	/// <param name="mapping" type="Object">The mapping of original property names to their new values</param>

	Object.defineProperty(this, 'mapping', {
		get: function() { return mapping; }
	});
}

Rename.prototype.apply = function(object) {
	/// <summary>Applies the ingredient's transformation to the given object</summary>
	/// <param name="object" type="Object">The object to apply the transformation to</param>

	for(var k in this.mapping) {
		if(!object.hasOwnProperty(k)) continue;
		object[this.mapping[k]] = object[k];
		delete object[k];
	}
};

Rename.prototype.reverse = function(object) {
	/// <summary>Reverses the application of ingredient's transformation to the given object</summary>
	/// <param name="object" type="Object">The object to apply the transformation to</param>

	for(var k in this.mapping) {
		if(!object.hasOwnProperty(this.mapping[k])) continue;
		object[k] = object[this.mapping[k]];
		delete object[this.mapping[k]];
	}
};