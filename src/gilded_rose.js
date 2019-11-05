class Item {
	constructor(name, sellIn, quality) {
		this.name = name;
		this.sellIn = sellIn;
		this.quality = quality;
	}
}

class BackStagePass extends Item {
	updateQuality() {
		if (this.sellIn < 0) {
			this.quality = 0;
		} else if (this.sellIn <= 5) {
			this.quality += 3;
		} else if (this.sellIn <= 10) {
			this.quality += 2;
		}

		this.reduceSellIn();
	}

	reduceSellIn() {
		this.sellIn -= 1;
	}
}

class Legendary extends Item {
	constructor(name, sellIn, quality) {
		super(name, null, quality);
	}
	updateQuality() {
		console.log('Legendary does not decrease in quality.');
	}

	reduceSellIn() {
		console.log('Lengendary Item never has to be sold.');
	}
}

class Shop {
	constructor(items = []) {
		this.items = items;
	}

	updateQuality() {
		this.items = this.items.map((item) => {
			if (item.quality) {
				item.updateQuality();
			} else {
				if (item.name != 'Aged Brie' && item.name != 'Backstage passes to a TAFKAL80ETC concert') {
					if (item.quality > 0) {
						if (item.name != 'Sulfuras, Hand of Ragnaros') {
							item.quality -= 1;
						}
					}
				} else {
					if (item.quality < 50) {
						item.quality += 1;
						if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
							if (item.sellIn < 11) {
								if (item.quality < 50) {
									item.quality += 1;
								}
							}
							if (item.sellIn < 6) {
								if (item.quality < 50) {
									item.quality += 1;
								}
							}
						}
					}
				}
				if (item.name != 'Sulfuras, Hand of Ragnaros') {
					item.sellIn = item.sellIn - 1;
				}
				if (item.sellIn < 0) {
					if (item.name != 'Aged Brie') {
						if (item.name != 'Backstage passes to a TAFKAL80ETC concert') {
							if (item.quality > 0) {
								if (item.name != 'Sulfuras, Hand of Ragnaros') {
									item.quality -= 1;
								}
							}
						} else {
							item.quality = item.quality - item.quality;
						}
					} else {
						if (item.quality < 50) {
							item.quality += 1;
						}
					}
				}
			}
			return item;
		});

		return this.items;
	}
}

function isWithinQualityRange(quality) {
	return quality > 0 && quality < 50;
}

function isAfterConcert(day) {
	day < 0;
}

module.exports = {
	Item,
	Shop,
	Legendary,
	BackStagePass
};
