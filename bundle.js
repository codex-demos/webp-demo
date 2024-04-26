(() => {
  var r = {
      456: (r) => {
        r.exports = function (r, t) {
          return r + t;
        };
      },
    },
    t = {};
  function o(e) {
    var n = t[e];
    if (void 0 !== n) return n.exports;
    var s = (t[e] = { exports: {} });
    return r[e](s, s.exports, o), s.exports;
  }
  (() => {
    'use strict';
    const r = o(456)(5, 5);
    console.log(r);
  })();
})();
