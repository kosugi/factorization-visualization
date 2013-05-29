var assert = require('assert');
var color = require('./color.js');

assert.equal(color.fromRGB(0,0,0), 'rgb(0,0,0)');
assert.equal(color.fromRGB(0,0,0,0), 'rgba(0,0,0,0)');
assert.equal(color.fromRGB(255.0,255.0,255.0,0.9), 'rgba(255,255,255,0.9)');

assert.equal(color.fromHSV(0,0,0), 'rgb(0,0,0)');
assert.equal(color.fromHSV(0,0,1), 'rgb(255,255,255)');
assert.equal(color.fromHSV(0,0,0.5), 'rgb(127,127,127)');
assert.equal(color.fromHSV(0,0,0.5,0.5), 'rgba(127,127,127,0.5)');

for (var n = 0; n <= 360; ++n) {
    console.log(n + ': ' + color.fromHSV(n, 1, 1));
}
