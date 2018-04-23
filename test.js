const assert = require('assert');
const secToHours = require('./index.js');

describe('Tests for "secToHours" function', () => {
	it('testing seconds with zero', () => {
		assert.equal('00:00:08', secToHours(8));
	});
	it('testing seconds without zero', () => {
		assert.equal('00:00:59', secToHours(60-1));
	});
	it('testing minutes with zero', () => {
		assert.equal('00:08:00', secToHours(60*8));
	});
	it('testing minutes without zero', () => {
		assert.equal('00:59:00', secToHours(60*60-60));
	});
	it('testing hours (1)', () => {
		assert.equal('01:02:11', secToHours(60*60+60*2+11));
	});
	it('testing hours (2)', () => {
		assert.equal('61:02:11', secToHours(60*60*60+60*60+60*2+11));
	});


});
