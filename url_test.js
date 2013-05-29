var assert = require('assert');
var URL = require('./url.js');

assert.deepEqual({}, URL.parseQuery(null));
assert.deepEqual({}, URL.parseQuery(undefined));
assert.deepEqual({}, URL.parseQuery(''));
assert.deepEqual({}, URL.parseQuery('?'));
assert.deepEqual({}, URL.parseQuery('a'));
assert.deepEqual({}, URL.parseQuery('?a'));
assert.deepEqual({}, URL.parseQuery('?='));
assert.deepEqual({}, URL.parseQuery('?=b'));
assert.deepEqual({a: 'b'}, URL.parseQuery('a=b'));
assert.deepEqual({a: ''}, URL.parseQuery('a='));
assert.deepEqual({a: 'b'}, URL.parseQuery('?a=b'));
assert.deepEqual({' ': '!'}, URL.parseQuery('?%20=%21'));
assert.deepEqual({a: 'b'}, URL.parseQuery('?a=b&'));
assert.deepEqual({a: 'b'}, URL.parseQuery('?a=b&='));
assert.deepEqual({a: 'b'}, URL.parseQuery('?a=b&=d'));
assert.deepEqual({a: 'b', c: 'd'}, URL.parseQuery('a=b&c=d'));
assert.deepEqual({c: 'd', a: 'b'}, URL.parseQuery('a=b&c=d'));

assert.equal('%E3%81%82=%E3%81%84', URL.buildQuery({'あ': 'い'}));
assert.equal('%E3%81%82=%E3%81%84&%E3%81%86=%E3%81%88', URL.buildQuery({'あ': 'い', 'う': 'え'})); // 順序どうなの
assert.equal('%E3%81%86=%E3%81%88&%E3%81%82=%E3%81%84', URL.buildQuery({'う': 'え', 'あ': 'い'})); // 順序どうなの
