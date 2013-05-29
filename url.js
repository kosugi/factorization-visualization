;
var URL = {
    /**
     * query string を受け取って連想配列を返す.
     * 先頭の '?' は無視される.
     * 同名パラメタが複数存在した場合は上書きされる (文字列右側の記述が優先される)
     */
    parseQuery: function(query) {
        var params = {}; // 同名パラメタ問題
        if (query == null) return params;
        if (query.match(/^\?/)) query = query.substring(1);
        query.split('&').forEach(function(e) {
            var fs = e.match(/^(.*?)=(.*)$/);
            if (fs && 0 < fs[1].length) {
                params[decodeURIComponent(fs[1])] = decodeURIComponent(fs[2]);
            }
        });
        return params;
    },
    /**
     * 連想配列を受け取って query string を返す.
     * 冒頭に '?' を付加するようなことはない.
     */
    buildQuery: function(params) {
        var query = '';
        for (var key in params) {
            if (0 < query.length) query += '&';
            query += encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
        }
        return query;
    }
};

if (typeof module !== 'undefined') {
    module.exports = URL;
}
