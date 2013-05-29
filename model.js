// -*- coding: utf-8 -*-
;
if (typeof require !== 'undefined') {
    var Factorization = require('./factorization');
}

var Model = new function()
{
    var Point = function(x, y, r) {
        return {x: x, y: y, r: r};
    }

    var PI = Math.PI;
    var sin = Math.sin;
    var cos = Math.cos;

    var step = 0;
    var points = [];

    var f = function(r0, th)
    {
        var A = 1 - cos(th);
        return (r0 * (A - Math.sqrt(2 * A))) / (A - 2);
    };

    var doit = function(points, xs, t0, x0, y0, r0)
    {
        if (!xs.length) return;
        var shouldDraw = 1 == xs.length;

        var m = xs.slice(-1)[0];
        if (m === 1) {
            points.push(new Point(x0, y0, r0 * 0.9));
        }
        else {
            var r = (m == 2)? (r0 * 0.6): f(r0, (2 * PI) / m);
            //console.log('r = ' + (r|0));
            for (var n = 0; n < m; ++n) {
                var th = 2 * PI * n / m;
                var ofs = (m == 2)? r0 * 0.2: 0; // 2 は間延びしがちなので補正する
                if (m == 4) th += PI / 4; // 4 の時はこの方が見栄えが良いので補正する
                var c = cos(th + t0);
                var s = sin(th + t0);
                //console.log('shift (' + (((r0 - r) * c)|0) + ', ' + (((r0 - r) * s)|0) + ')');
                if (shouldDraw) {
                    points.push(new Point(x0 + (r0 - r + ofs) * c, y0 + (r0 - r + ofs) * s, r * 0.9));
                }
                else {
                    doit(points, xs.slice(0, -1), th + t0, x0 + (r0 - r + ofs) * c, y0 + (r0 - r + ofs) * s, r * 0.85);
                }
            }
        }
    };

    return {
        Point: Point,
        points: function(xs, r0)
        {
            var points = [];
            doit(points, xs, 0, 0, 0, r0);
            return points;
        },
    };
};

if (typeof module !== 'undefined') {
    module.exports = Model;
}
