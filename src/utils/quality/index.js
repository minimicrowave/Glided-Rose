const { MIN_QUALITY, MAX_QUALITY } = require('../../consts');

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

module.exports = { computeQuality, isWithinQualityRange };
