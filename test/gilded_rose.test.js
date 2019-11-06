const { Shop, Item, Legendary, BackStagePass, Regular } = require('../src/gilded_rose');

describe('Gilded Rose', function() {
	describe('- Regular Item', function() {
		it('should return "Foo", quality: -2, sellIn: -1', function() {
			const gildedRose = new Shop([ new Regular('Foo', 3, 4) ]);
			const items = gildedRose.updateQuality();
			expect(items[0].name).toBe('Foo');
			expect(items[0].quality).toBe(3);
			expect(items[0].sellIn).toBe(2);
		});

		it('should return "Bar", quality: 3, sellIn: 2', function() {
			const gildedRose = new Shop([ new Regular('Bar', 3, 4) ]);
			const items = gildedRose.updateQuality();
			expect(items[0].name).toBe('Bar');
			expect(items[0].quality).toBe(3);
			expect(items[0].sellIn).toBe(2);
		});
	});

	describe('- BackStagePass', function() {
		it('should return "Aged Brie", quality: 4, sellIn: 2', function() {
			const gildedRose = new Shop([ new BackStagePass('Aged Brie', 3, 1) ]);
			const items = gildedRose.updateQuality();
			expect(items[0].name).toBe('Aged Brie');
			expect(items[0].quality).toBe(4);
			expect(items[0].sellIn).toBe(2);
		});
	});

	describe('- Legendary', function() {
		it('should return "Sulfuras", quality: 20, sellIn: null', function() {
			const gildedRose = new Shop([ new Legendary('Sulfuras', 3, 20) ]);
			const items = gildedRose.updateQuality();
			expect(items[0].name).toBe('Sulfuras');
			expect(items[0].quality).toBe(20);
			expect(items[0].sellIn).toBe(null);
		});
	});
});
