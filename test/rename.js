var Concoction = require('../index');
var should = require('should');

describe('ingredients', function() {
	describe('rename', function() {
		var rename = new Concoction.Rename({
			from1: 'to1',
			from2: 'to2'
		});

		it('should rename only values which are present', function() {
			var original = {
				from1: 'value'
			};

			var expected = {
				to1: 'value'
			};

			rename.apply(original);
			original.should.eql(expected, 'application failed');

			expected = {
				from1: 'value'
			};

			rename.reverse(original);
			original.should.eql(expected, 'reversal failed');
		});

		it("should not rename values which aren't mapped", function() {
			var original = {
				from3: 'value'
			};

			var expected = {
				from3: 'value'
			};

			rename.apply(original);
			original.should.eql(expected, 'application failed');

			expected = {
				from3: 'value'
			};

			rename.reverse(original);
			original.should.eql(expected, 'reversal failed');
		});

		it("should allow a combination of renamed and ignored values", function() {
			var original = {
				from1: 'value1',
				from3: 'value3'
			};

			var expected = {
				to1: 'value1',
				from3: 'value3'
			};

			rename.apply(original);
			original.should.eql(expected, 'application failed');

			expected = {
				from1: 'value1',
				from3: 'value3'
			};

			rename.reverse(original);
			original.should.eql(expected, 'reversal failed');
		});
	});
});