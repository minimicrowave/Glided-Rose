const { CONCERT_DAY } = require('../../consts');

function isAfterConcertDay(day) {
	return day < CONCERT_DAY;
}

function isBeforeOrOnConcertDay(day) {
	return day >= CONCERT_DAY;
}

module.exports = { isAfterConcertDay, isBeforeOrOnConcertDay };
