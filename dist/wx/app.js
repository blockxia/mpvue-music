require("common/manifest.js");
require("common/vendor.js");
global.webpackJsonp([2],{

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store__ = __webpack_require__(54);



__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */].mpType = 'app';

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$store = __WEBPACK_IMPORTED_MODULE_2__store__["a" /* default */];
var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(53);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(51)
}
var normalizeComponent = __webpack_require__(4)
/* script */

/* template */
var __vue_template__ = null
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8af6d1f8", Component.options)
  } else {
    hotAPI.reload("data-v-8af6d1f8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 51:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/* harmony default export */ __webpack_exports__["a"] = ({
  created: function created() {
    // 调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || [];
    logs.unshift(Date.now());
    wx.setStorageSync('logs', logs);

    console.log('app created and cache logs by setStorageSync');
  }
});

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__actions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__getters__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__state__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mutations__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vuex_dist_logger__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vuex_dist_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_vuex_dist_logger__);
/**
 * Created by xiaoqiang on 12/11/2018.
 */






// 用于检测组件状态(打印日志信息)


__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);

// 控制严格模式和plugins只在开发模式下生效
var debug = "development" !== 'production';

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
  actions: __WEBPACK_IMPORTED_MODULE_2__actions__,
  getters: __WEBPACK_IMPORTED_MODULE_3__getters__,
  state: __WEBPACK_IMPORTED_MODULE_4__state__["a" /* default */],
  mutations: __WEBPACK_IMPORTED_MODULE_5__mutations__["a" /* default */],
  strict: debug,
  plugins: debug ? [__WEBPACK_IMPORTED_MODULE_6_vuex_dist_logger___default()()] : []
}));

/***/ }),

/***/ 55:
/***/ (function(module, exports) {

/**
 * Created by xiaoqiang on 12/11/2018.
 */

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singer", function() { return singer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentSong", function() { return currentSong; });
/**
 * Created by xiaoqiang on 12/11/2018.
 */
var singer = function singer(state) {
  return state.singer;
};

var currentSong = function currentSong(state) {
  return state.currentSong;
};

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Created by xiaoqiang on 12/11/2018.
 */
var state = {
  // 歌手信息
  singer: {},
  currentSong: {}
};
/* harmony default export */ __webpack_exports__["a"] = (state);

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mutation_types__ = __webpack_require__(64);


var _mutations;

/**
 * Created by xiaoqiang on 12/11/2018.
 */


var mutations = (_mutations = {}, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_mutations, __WEBPACK_IMPORTED_MODULE_1__mutation_types__["b" /* SET_SINGER */], function (state, singer) {
  state.singer = singer;
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_mutations, __WEBPACK_IMPORTED_MODULE_1__mutation_types__["a" /* SET_CURRENTSONG */], function (state, song) {
  state.currentSong = song;
}), _mutations);
/* harmony default export */ __webpack_exports__["a"] = (mutations);

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SET_SINGER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SET_CURRENTSONG; });
/**
 * Created by xiaoqiang on 12/11/2018.
 */
var SET_SINGER = 'SET_SINGER';

var SET_CURRENTSONG = 'SET_CURRENTSONG';

/***/ })

},[48]);
//# sourceMappingURL=app.js.map