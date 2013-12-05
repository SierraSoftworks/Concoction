var Concoction = require('../index');
var should = require('should');

describe('api', function() {
	it('should make the Concoction constructor available', function() {
		should.exist(Concoction);
		Concoction.should.be.type('function');
	});

	it('should make the Ingredient constructor available', function() {
		Concoction.should.have.ownProperty('Ingredient').with.type('function');
	});

	describe('ingredients', function() {
		it('should make the Rename ingredient accessible', function() {
			Concoction.should.have.ownProperty('Rename').with.type('function');
		});

		it('should make the Convert ingredient accessible', function() {
			Concoction.should.have.ownProperty('Convert').with.type('function');
		});
	});
});