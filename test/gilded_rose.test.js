const { Shop, Item } = require('../src/gilded_rose');

describe('Gilded Rose', function() {
	describe('- Miscellaneous Items', function() {
		it('should return "foo", quality: 0, sellIn: -1', function() {
			const gildedRose = new Shop([ new Item('foo', 0, 0) ]);
			const items = gildedRose.updateQuality();
			expect(items[0].name).toBe('foo');
			expect(items[0].quality).toBe(0);
			expect(items[0].sellIn).toBe(-1);
		});
	});
});
