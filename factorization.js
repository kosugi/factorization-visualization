;
var Factorization = new function()
{
    var max_known_prime = 3;
    var known_primes = [2, 3];

    var fermat_test = function(q, a)
    {
        return Math.pow(a, q - 1) % q == 1;
    };

    var is_prime_from = function(q, s)
    {
        if (q < 2) return false;
        for (var n = s & ~1, m = Math.sqrt(q)|0; n <= m; n += 2) {
            if (q % n == 0) return false;
        }
        return true;
    };

    var is_prime = function(q)
    {
        if (q == 2) return true;
        if (!(q & 1)) return false;
        if (!fermat_test(q, 2) || !fermat_test(q, 3)) return false;
        if (q <= max_known_prime) {
            for (var n = 0, len = known_primes.length; n < len; ++n) {
                if (q == known_primes[n]) return true;
            }
            return false;
        }
        if (!is_prime_from(q, max_known_prime + 2)) {
            return false;
        }
        known_primes.push(q);
        max_known_prime = q;
        return true;
    };

    var dividable_prime = function(q)
    {
        for (var n = 0, len = known_primes.length; n < len; ++n) {
            var p = known_primes[n];
            if (q % p == 0) {
                return p;
            }
        }
        for (var n = max_known_prime + 2; n <= q; n += 2) {
            if (is_prime(n) && q % n == 0) {
                return n;
            }
        }
        return 0;
    }

    return {
        is_prime: function(q)
        {
            return is_prime_from(q, 2);
        },
        factorize: function(q)
        {
            if (q == 1) return [1];
            var xs = [];
            while (1 < q) {
                var p = dividable_prime(q);
                if (!p) {
                    xs.push(q);
                    return xs;
                }
                xs.push(p);
                q /= p;
            }
            return xs;
        }
    };
};

if (typeof module !== 'undefined') {
    module.exports = Factorization;
}
