var assert = require('assert');
var f = require('./factorization.js');

for (var n = 1; n <= 1000; ++n) {
    var xs = f.factorize(n);
    assert.equal(n, xs.reduce(function(p, x) { return p * x; }, 1));
}

assert.equal(true,  f.is_prime(2));
assert.equal(true,  f.is_prime(3));
assert.equal(false, f.is_prime(4));
assert.equal(true,  f.is_prime(5));
assert.equal(false, f.is_prime(6));
assert.equal(true,  f.is_prime(7));
assert.equal(false, f.is_prime(8));
