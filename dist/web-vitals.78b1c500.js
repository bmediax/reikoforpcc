// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/web-vitals/dist/web-vitals.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTTFB = exports.getLCP = exports.getFID = exports.getFCP = exports.getCLS = void 0;

var t,
    e,
    n,
    i,
    a = function (t, e) {
  return {
    name: t,
    value: void 0 === e ? -1 : e,
    delta: 0,
    entries: [],
    id: "v1-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12)
  };
},
    r = function (t, e) {
  try {
    if (PerformanceObserver.supportedEntryTypes.includes(t)) {
      var n = new PerformanceObserver(function (t) {
        return t.getEntries().map(e);
      });
      return n.observe({
        type: t,
        buffered: !0
      }), n;
    }
  } catch (t) {}
},
    o = !1,
    c = function (t, e) {
  o || "undefined" != typeof InstallTrigger || (addEventListener("beforeunload", function () {}), o = !0);
  addEventListener("visibilitychange", function n(i) {
    "hidden" === document.visibilityState && (t(i), e && removeEventListener("visibilitychange", n, !0));
  }, !0);
},
    u = function (t) {
  addEventListener("pageshow", function (e) {
    e.persisted && t(e);
  }, !0);
},
    f = "function" == typeof WeakSet ? new WeakSet() : new Set(),
    s = function (t, e, n) {
  var i;
  return function () {
    e.value >= 0 && (n || f.has(e) || "hidden" === document.visibilityState) && (e.delta = e.value - (i || 0), (e.delta || void 0 === i) && (i = e.value, t(e)));
  };
},
    m = function (t, e) {
  var n,
      i = a("CLS", 0),
      o = function (t) {
    t.hadRecentInput || (i.value += t.value, i.entries.push(t), n());
  },
      f = r("layout-shift", o);

  f && (n = s(t, i, e), c(function () {
    f.takeRecords().map(o), n();
  }), u(function () {
    i = a("CLS", 0), n = s(t, i, e);
  }));
},
    d = -1,
    v = function () {
  return "hidden" === document.visibilityState ? 0 : 1 / 0;
},
    p = function () {
  c(function (t) {
    var e = t.timeStamp;
    d = e;
  }, !0);
},
    l = function () {
  return d < 0 && (d = v(), p(), u(function () {
    setTimeout(function () {
      d = v(), p();
    }, 0);
  })), {
    get timeStamp() {
      return d;
    }

  };
},
    S = function (t, e) {
  var n,
      i = l(),
      o = a("FCP"),
      c = r("paint", function (t) {
    "first-contentful-paint" === t.name && (c && c.disconnect(), t.startTime < i.timeStamp && (o.value = t.startTime, o.entries.push(t), f.add(o), n()));
  });
  c && (n = s(t, o, e), u(function (i) {
    o = a("FCP"), n = s(t, o, e), requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        o.value = performance.now() - i.timeStamp, f.add(o), n();
      });
    });
  }));
},
    h = {
  passive: !0,
  capture: !0
},
    y = new Date(),
    g = function (i, a) {
  t || (t = a, e = i, n = new Date(), L(removeEventListener), E());
},
    E = function () {
  if (e >= 0 && e < n - y) {
    var a = {
      entryType: "first-input",
      name: t.type,
      target: t.target,
      cancelable: t.cancelable,
      startTime: t.timeStamp,
      processingStart: t.timeStamp + e
    };
    i.forEach(function (t) {
      t(a);
    }), i = [];
  }
},
    w = function (t) {
  if (t.cancelable) {
    var e = (t.timeStamp > 1e12 ? new Date() : performance.now()) - t.timeStamp;
    "pointerdown" == t.type ? function (t, e) {
      var n = function () {
        g(t, e), a();
      },
          i = function () {
        a();
      },
          a = function () {
        removeEventListener("pointerup", n, h), removeEventListener("pointercancel", i, h);
      };

      addEventListener("pointerup", n, h), addEventListener("pointercancel", i, h);
    }(e, t) : g(e, t);
  }
},
    L = function (t) {
  ["mousedown", "keydown", "touchstart", "pointerdown"].forEach(function (e) {
    return t(e, w, h);
  });
},
    T = function (n, o) {
  var m,
      d = l(),
      v = a("FID"),
      p = function (t) {
    t.startTime < d.timeStamp && (v.value = t.processingStart - t.startTime, v.entries.push(t), f.add(v), m());
  },
      S = r("first-input", p);

  m = s(n, v, o), S && c(function () {
    S.takeRecords().map(p), S.disconnect();
  }, !0), S && u(function () {
    var r;
    v = a("FID"), m = s(n, v, o), i = [], e = -1, t = null, L(addEventListener), r = p, i.push(r), E();
  });
},
    b = function (t, e) {
  var n,
      i = l(),
      o = a("LCP"),
      m = function (t) {
    var e = t.startTime;
    e < i.timeStamp && (o.value = e, o.entries.push(t)), n();
  },
      d = r("largest-contentful-paint", m);

  if (d) {
    n = s(t, o, e);

    var v = function () {
      f.has(o) || (d.takeRecords().map(m), d.disconnect(), f.add(o), n());
    };

    ["keydown", "click"].forEach(function (t) {
      addEventListener(t, v, {
        once: !0,
        capture: !0
      });
    }), c(v, !0), u(function (i) {
      o = a("LCP"), n = s(t, o, e), requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          o.value = performance.now() - i.timeStamp, f.add(o), n();
        });
      });
    });
  }
},
    F = function (t) {
  var e,
      n = a("TTFB");
  e = function () {
    try {
      var e = performance.getEntriesByType("navigation")[0] || function () {
        var t = performance.timing,
            e = {
          entryType: "navigation",
          startTime: 0
        };

        for (var n in t) "navigationStart" !== n && "toJSON" !== n && (e[n] = Math.max(t[n] - t.navigationStart, 0));

        return e;
      }();

      n.value = n.delta = e.responseStart, n.entries = [e], t(n);
    } catch (t) {}
  }, "complete" === document.readyState ? setTimeout(e, 0) : addEventListener("pageshow", e);
};

exports.getTTFB = F;
exports.getLCP = b;
exports.getFID = T;
exports.getFCP = S;
exports.getCLS = m;
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56374" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","../node_modules/web-vitals/dist/web-vitals.js"], null)
//# sourceMappingURL=/web-vitals.78b1c500.js.map