require("common/manifest.js");
require("common/vendor.js");
global.webpackJsonp([1],{

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__(63);




__WEBPACK_IMPORTED_MODULE_1_vue___default.a.config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_2__App__["a" /* default */].mpType = 'app';

var app = new __WEBPACK_IMPORTED_MODULE_1_vue___default.a(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __WEBPACK_IMPORTED_MODULE_2__App__["a" /* default */], {
  store: __WEBPACK_IMPORTED_MODULE_3__store__["a" /* default */]
}));
app.$mount();

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(62);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(60)
}
var normalizeComponent = __webpack_require__(10)
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

/***/ 60:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 62:
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

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__actions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__getters__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__state__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mutations__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vuex_dist_logger__ = __webpack_require__(73);
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

/***/ 65:
/***/ (function(module, exports) {

/**
 * Created by xiaoqiang on 12/11/2018.
 */

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singer", function() { return singer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playList", function() { return playList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentIndex", function() { return currentIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playing", function() { return playing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentSong", function() { return currentSong; });
/**
 * Created by xiaoqiang on 12/11/2018.
 */
var singer = function singer(state) {
  return state.singer;
};

var playList = function playList(state) {
  return state.playList;
};

var currentIndex = function currentIndex(state) {
  return state.currentIndex;
};

var playing = function playing(state) {
  return state.playing;
};

var currentSong = function currentSong(state) {
  return state.playList[state.currentIndex] || {};
};

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Created by xiaoqiang on 12/11/2018.
 */
var state = {
  // 歌手信息
  singer: {},
  // 当前播放列表
  playList: [],
  // 当前歌曲索引
  currentIndex: -1,
  // 播放状态
  playing: false
};
/* harmony default export */ __webpack_exports__["a"] = (state);

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mutation_types__ = __webpack_require__(72);


var _mutations;

/**
 * Created by xiaoqiang on 12/11/2018.
 */


var mutations = (_mutations = {}, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_mutations, __WEBPACK_IMPORTED_MODULE_1__mutation_types__["d" /* SET_SINGER */], function (state, singer) {
  state.singer = singer;
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_mutations, __WEBPACK_IMPORTED_MODULE_1__mutation_types__["c" /* SET_PLAYLIST */], function (state, list) {
  state.playList = list;
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_mutations, __WEBPACK_IMPORTED_MODULE_1__mutation_types__["a" /* SET_CURRENT_INDEX */], function (state, index) {
  state.currentIndex = index;
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_mutations, __WEBPACK_IMPORTED_MODULE_1__mutation_types__["b" /* SET_PLAYING_STATE */], function (state, flag) {
  state.playing = flag;
}), _mutations);
/* harmony default export */ __webpack_exports__["a"] = (mutations);

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SET_SINGER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SET_PLAYING_STATE; });
/* unused harmony export SET_FULL_SCREEN */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SET_PLAYLIST; });
/* unused harmony export SET_SEQUENCE_LIST */
/* unused harmony export SET_PLAY_MODE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SET_CURRENT_INDEX; });
/**
 * Created by xiaoqiang on 12/11/2018.
 */
var SET_SINGER = 'SET_SINGER';

var SET_PLAYING_STATE = 'SET_PLAYING_STATE';

var SET_FULL_SCREEN = 'SET_FULL_SCREEN';

var SET_PLAYLIST = 'SET_PLAYLIST';

var SET_SEQUENCE_LIST = 'SET_SEQUENCE_LIST';

var SET_PLAY_MODE = 'SET_PLAY_MODE';

var SET_CURRENT_INDEX = 'SET_CURRENT_INDEX';

/***/ })

},[46]);
//# sourceMappingURL=app.js.map