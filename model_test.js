var assert = require('assert');
var model = require('./model.js');

var round = function(v, n) {
    return Math.round(v * Math.pow(10, n)) / Math.pow(10, n);
};

var points;

points = model.points([1], 1);
assert.equal(+0.0, round(points[0].x, 2));
assert.equal(+0.0, round(points[0].y, 2));
assert.equal(+0.9, round(points[0].r, 2));

points = model.points([2], 1);
/*
assert.equal(+0.50, round(points[0].x, 2));
assert.equal(+0.00, round(points[0].y, 2));
assert.equal(+0.45, round(points[0].r, 2));
assert.equal(-0.50, round(points[1].x, 2));
assert.equal(+0.00, round(points[1].y, 2));
assert.equal(+0.45, round(points[1].r, 2));
*/
assert.equal(+0.60, round(points[0].x, 2));
assert.equal(+0.00, round(points[0].y, 2));
assert.equal(+0.54, round(points[0].r, 2));
assert.equal(-0.60, round(points[1].x, 2));
assert.equal(+0.00, round(points[1].y, 2));
assert.equal(+0.54, round(points[1].r, 2));

points = model.points([3], 1);
console.log(points);
console.log(Math.acos(points[0].x) * 180 / Math.PI);
console.log(Math.asin(points[0].y) * 180 / Math.PI);
