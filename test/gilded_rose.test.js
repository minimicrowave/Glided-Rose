const { Shop, Item, Legendary, BackStagePass} = require('../src/gilded_rose');

describe('Gilded Rose', function() {
	// describe('- Miscellaneous Items', function() {
	// 	it('should return "foo", quality: 0, sellIn: -1', function() {
	// 		const gildedRose = new Shop([ new Item('foo', 0, 0) ]);
	// 		const items = gildedRose.updateQuality();
	// 		expect(items[0].name).toBe('foo');
	// 		expect(items[0].quality).toBe(0);
	// 		expect(items[0].sellIn).toBe(-1);
	// 	});
	// });

	describe('-BackStagePass', function(){
		it('should return "Aged Brie", quality: 4, sellIn: 2', function() {
			const gildedRose = new Shop([ new BackStagePass('Aged Brie', 3, 1) ]);
			const items = gildedRose.updateQuality();
			expect(items[0].name).toBe('Aged Brie');
			expect(items[0].quality).toBe(4);
			expect(items[0].sellIn).toBe(2);
		});
	})

	describe('-BackStagePass', function(){
		it('should return "Sulfuras", quality: 20, sellIn: null', function() {
			const gildedRose = new Shop([ new Legendary('Sulfuras', 3, 20) ]);
			const items = gildedRose.updateQuality();
			expect(items[0].name).toBe('Sulfuras');
			expect(items[0].quality).toBe(20);
			expect(items[0].sellIn).toBe(null);
		});
	})
});
