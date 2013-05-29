;
var Color = {

    /**
     * RGB 値から色スタイル文字列を得る
     *
     * @param r Red (0〜255)
     * @param g Green (0〜255)
     * @param b Blue (0〜255)
     * @param a Alpha (0.0〜1.0) (optional)
     *
     * @return rgb(r,g,b) もしくは rgba(r,g,b,a) 形式文字列
     */
    fromRGB: function(r, g, b, a) {

        if (typeof a === 'undefined') {
            return 'rgb(' + (r|0) + ',' + (g|0) + ',' + (b|0) + ')';
        }
        else {
            return 'rgba(' + (r|0) + ',' + (g|0) + ',' + (b|0) + ',' + a + ')';
        }
    },

    /**
     * HSV 値から色スタイル文字列を得る
     *
     * @param h Hue (0.0〜360.0)
     * @param s Saturation (0.0〜1.0)
     * @param v Value/Brightness (0.0〜1.0)
     * @param a Alpha (0.0〜1.0) (optional)
     *
     * @return rgb(r,g,b) もしくは rgba(r,g,b,a) 形式文字列
     */
    fromHSV: function(h, s, v, a) {

        if (s == 0) {
            return this.fromRGB(v * 255, v * 255, v * 255, a);
        }

        var h0 = (h % 360) / 60;
        var h1 = (h0|0) % 6
        var f = h0 - h1;
        var p = v * (1 - s);
        var q = v * (1 - s * f);
        var t = v * (1 - s * (1 - f));
        var rgb = [[v, t, p], [q, v, p], [p, v, t], [p, q, v], [t, p, v], [v, p, q]][h1];
        return this.fromRGB(rgb[0] * 255, rgb[1] * 255, rgb[2] * 255, a);
    }
}

if (typeof module !== 'undefined') {
    module.exports = Color;
}
