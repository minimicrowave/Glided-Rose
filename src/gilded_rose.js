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
	constructor(name, _, quality) {
		super(name, null, quality);
	}

	updateQuality() {
		console.log('Legendary does not decrease in quality.');
	}

	reduceSellIn() {
		console.log('Lengendary Item never has to be sold.');
	}
}

class Regular extends Item {
	updateQuality() {
		if (this.sellIn > 0) {
			this.quality -= 1;
		} else {
			this.quality -= 2;
		}
		this.reduceSellIn();
	}

	reduceSellIn() {
		this.sellIn -= 1;
	}
}

class Shop {
	constructor(items = []) {
		this.items = items;
	}

	updateQuality() {
		this.items = this.items.map((item) => {
			item.updateQuality();
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
	BackStagePass,
	Regular
};
