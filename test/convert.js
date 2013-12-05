var Concoction = require('../index');
var should = require('should');

describe('ingredients', function() {
	describe('convert', function() {
		var convert = new Concoction.Convert({
			p1: {
				apply: function(value) { return value + value; },
				reverse: function(value) { return value / 2; }
			},
			p2: {
				apply: function(value) { return value || 'default'; },
				reverse: function(value) { return value == 'default' ? undefined : value; }
			}
		});

		it('should run conversions for all properties', function() {
			var original = {
				p1: 10
			};

			var expected = {
				p1: 20,
				p2: 'default'
			};

			convert.apply(original);
			original.should.eql(expected, 'application failed');

			expected = {
				p1: 10
			};

			convert.reverse(original);
			original.should.eql(expected, 'reversal failed');
		});

		it("should ignore values which aren't of consequence", function() {
			var original = {
				p1: 10,
				p3: 'value'
			};

			var expected = {
				p1: 20,
				p2: 'default',
				p3: 'value'
			};

			convert.apply(original);
			original.should.eql(expected, 'application failed');

			expected = {
				p1: 10,
				p3: 'value'
			};

			convert.reverse(original);
			original.should.eql(expected, 'reversal failed');
		});
	});
});