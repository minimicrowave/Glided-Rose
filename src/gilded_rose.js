const {
	CONCERT_DAY,
	MAX_QUALITY,
	MIN_QUALITY,
} = require('./consts');

class Item {
	constructor(name, sellIn, quality) {
		this.name = name;
		this.sellIn = sellIn;
		this.quality = quality;
	}
}

class BackStagePass extends Item {
	updateQuality() {
		let quality = this.quality;
		if (isAfterConcertDay(this.sellIn)) {
			quality = MIN_QUALITY;
		} else if (this.sellIn <= 5) {
			quality += 3;
		} else if (this.sellIn <= 10) {
			quality += 2;
		}
		this.quality = computeQuality(quality);
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
		console.log('Legendary Item does not decrease in quality.');
	}

	reduceSellIn() {
		console.log('Lengendary Item never has to be sold.');
	}
}

class Regular extends Item {
	updateQuality() {
		let quality = this.quality;
		if (isBeforeOrOnConcertDay(this.sellIn)) {
			quality -= 1;
		} else {
			quality -= 2;
		}
		this.quality = computeQuality(quality);

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
		this.items.forEach((item) => {
			item.updateQuality();
		});

		return this.items;
	}
}

function computeQuality(quality) {
	if (isWithinQualityRange(quality)) {
		return quality;
	} else {
		return quality < MIN_QUALITY ? MIN_QUALITY : MAX_QUALITY;
	}
}

function isWithinQualityRange(quality) {
	return quality >= MIN_QUALITY && quality <= MAX_QUALITY;
}

function isAfterConcertDay(day) {
	return day < CONCERT_DAY;
}

function isBeforeOrOnConcertDay(day) {
	return day >= CONCERT_DAY;
}

function isConcertDay(day) {
	return day === CONCERT_DAY;
}

module.exports = {
	Item,
	Shop,
	Legendary,
	BackStagePass,
	Regular
};
