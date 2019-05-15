(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/tki-barcode/tki-barcode"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!E:\\Xz\\work\\uni-app\\Test\\barcode\\components\\tki-barcode\\tki-barcode.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!E:/Xz/work/uni-app/Test/barcode/components/tki-barcode/tki-barcode.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;









var _barcode = _interopRequireDefault(__webpack_require__(/*! ./barcode.js */ "E:\\Xz\\work\\uni-app\\Test\\barcode\\components\\tki-barcode\\barcode.js"));var _methods;function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var _default2 =
{
  name: "tkiBarcode",
  props: {
    show: {
      type: Boolean,
      default: true },

    cid: {
      type: String,
      default: 'tki-barcode-canvas' },

    unit: {
      type: String,
      default: 'upx' },

    val: {
      type: String,
      default: '1234567890128' },

    format: {
      type: String,
      default: 'CODE128' },

    opations: {
      type: Object,
      default: function _default() {
        return {
          // format: "CODE128",//选择要使用的条形码类型 微信支持的条码类型有 code128\code39\ena13\ean8\upc\itf14\
          width: 4, //设置条之间的宽度
          height: 200, //高度
          displayValue: true, //是否在条形码下方显示文字
          // text: "1234567890",//覆盖显示的文本
          textAlign: "center", //设置文本的水平对齐方式
          textPosition: "bottom", //设置文本的垂直位置
          textMargin: 0, //设置条形码和文本之间的间距
          fontSize: 24, //设置文本的大小
          fontColor: "#000000", //设置文本的颜色
          lineColor: "#000000", //设置条形码的颜色
          background: "#FFFFFF", //设置条形码的背景色
          margin: 0, //设置条形码周围的空白边距
          marginTop: undefined, //设置条形码周围的上边距
          marginBottom: undefined, //设置条形码周围的下边距
          marginLeft: undefined, //设置条形码周围的左边距
          marginRight: undefined //设置条形码周围的右边距
        };
      } },

    onval: {
      type: Boolean,
      default: false },

    loadMake: {
      type: Boolean,
      default: true } },


  data: function data() {
    return {
      result: '',
      canvasWidth: 0,
      canvasHeight: 0 };

  },
  onUnload: function onUnload() {
  },
  methods: (_methods = {
    _makeCode: function _makeCode() {
      var that = this;
      if (that.unit == "upx") {
        if (that.opations.width) {
          that.opations.width = uni.upx2px(that.opations.width);
        }
        if (that.opations.height) {
          that.opations.height = uni.upx2px(that.opations.height);
        }
        if (that.opations.fontSize) {
          that.opations.fontSize = uni.upx2px(that.opations.fontSize);
        }
      }
      if (that._empty(that.opations.text)) {
        that.opations.text = that.val;
      }
      if (that._empty(that.opations.format)) {
        that.opations.format = that.format;
      }
      new _barcode.default(that, that.cid, that.opations,
      function (res) {// 生成条形码款高回调
        that.canvasWidth = res.width;
        that.canvasHeight = res.height;
      },
      function (res) {// 生成条形码的回调
        that._result(res);
      });

    },
    _clearCode: function _clearCode() {
      this._result('');
    },
    _saveCode: function _saveCode() {
      var that = this;
      if (this.result != "") {
        uni.saveImageToPhotosAlbum({
          filePath: that.result,
          success: function success() {
            uni.showToast({
              title: '条形码保存成功',
              icon: 'success',
              duration: 2000 });

          } });

      }
    },
    _result: function _result(res) {
      this.result = res;
      this.$emit('result', res);
    } }, _defineProperty(_methods, "_result", function _result(
  res) {
    this.result = res;
    this.$emit('result', res);
  }), _defineProperty(_methods, "_empty", function _empty(
  v) {
    var tp = typeof v,
    rt = false;
    if (tp == "number" && String(v) == "") {
      rt = true;
    } else if (tp == "undefined") {
      rt = true;
    } else if (tp == "object") {
      if (JSON.stringify(v) == "{}" || JSON.stringify(v) == "[]" || v == null) rt = true;
    } else if (tp == "string") {
      if (v == "" || v == "undefined" || v == "null" || v == "{}" || v == "[]") rt = true;
    } else if (tp == "function") {
      rt = false;
    }
    return rt;
  }), _methods),

  watch: {
    size: function size(n, o) {var _this = this;
      if (n != o && !this._empty(n)) {
        this.cSize = n;
        if (!this._empty(this.val)) {
          setTimeout(function () {
            _this._makeCode();
          }, 100);
        }
      }
    },
    val: function val(n, o) {var _this2 = this;
      if (this.onval) {
        if (n != o && !this._empty(n)) {
          setTimeout(function () {
            _this2._makeCode();
          }, 0);
        }
      }
    } },

  mounted: function mounted() {var _this3 = this;
    if (this.loadMake) {
      if (!this._empty(this.val)) {
        setTimeout(function () {
          _this3._makeCode();
        }, 0);
      }
    }
  } };exports.default = _default2;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["default"]))

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!E:\\Xz\\work\\uni-app\\Test\\barcode\\components\\tki-barcode\\tki-barcode.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!E:/Xz/work/uni-app/Test/barcode/components/tki-barcode/tki-barcode.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!E:\\Xz\\work\\uni-app\\Test\\barcode\\components\\tki-barcode\\tki-barcode.vue?vue&type=template&id=bf8cd2f4&xlang=wxml&minapp=mpvue&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!E:/Xz/work/uni-app/Test/barcode/components/tki-barcode/tki-barcode.vue?vue&type=template&id=bf8cd2f4&xlang=wxml&minapp=mpvue& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "E:\\Xz\\work\\uni-app\\Test\\barcode\\components\\tki-barcode\\tki-barcode.vue":
/*!******************************************************************************!*\
  !*** E:/Xz/work/uni-app/Test/barcode/components/tki-barcode/tki-barcode.vue ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tki_barcode_vue_vue_type_template_id_bf8cd2f4_xlang_wxml_minapp_mpvue___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tki-barcode.vue?vue&type=template&id=bf8cd2f4&xlang=wxml&minapp=mpvue& */ "E:\\Xz\\work\\uni-app\\Test\\barcode\\components\\tki-barcode\\tki-barcode.vue?vue&type=template&id=bf8cd2f4&xlang=wxml&minapp=mpvue&");
/* harmony import */ var _tki_barcode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tki-barcode.vue?vue&type=script&lang=js& */ "E:\\Xz\\work\\uni-app\\Test\\barcode\\components\\tki-barcode\\tki-barcode.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _tki_barcode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _tki_barcode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _tki_barcode_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tki-barcode.vue?vue&type=style&index=0&lang=css& */ "E:\\Xz\\work\\uni-app\\Test\\barcode\\components\\tki-barcode\\tki-barcode.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _D_dev_edit_HbuilderX_Alpha_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_D_dev_edit_HbuilderX_Alpha_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _tki_barcode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _tki_barcode_vue_vue_type_template_id_bf8cd2f4_xlang_wxml_minapp_mpvue___WEBPACK_IMPORTED_MODULE_0__["render"],
  _tki_barcode_vue_vue_type_template_id_bf8cd2f4_xlang_wxml_minapp_mpvue___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "E:/Xz/work/uni-app/Test/barcode/components/tki-barcode/tki-barcode.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "E:\\Xz\\work\\uni-app\\Test\\barcode\\components\\tki-barcode\\tki-barcode.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** E:/Xz/work/uni-app/Test/barcode/components/tki-barcode/tki-barcode.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_dev_edit_HbuilderX_Alpha_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_dev_edit_HbuilderX_Alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_dev_edit_HbuilderX_Alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_dev_edit_HbuilderX_Alpha_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_tki_barcode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./tki-barcode.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!E:\\Xz\\work\\uni-app\\Test\\barcode\\components\\tki-barcode\\tki-barcode.vue?vue&type=script&lang=js&");
/* harmony import */ var _D_dev_edit_HbuilderX_Alpha_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_dev_edit_HbuilderX_Alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_dev_edit_HbuilderX_Alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_dev_edit_HbuilderX_Alpha_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_tki_barcode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_dev_edit_HbuilderX_Alpha_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_dev_edit_HbuilderX_Alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_dev_edit_HbuilderX_Alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_dev_edit_HbuilderX_Alpha_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_tki_barcode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_dev_edit_HbuilderX_Alpha_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_dev_edit_HbuilderX_Alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_dev_edit_HbuilderX_Alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_dev_edit_HbuilderX_Alpha_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_tki_barcode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_dev_edit_HbuilderX_Alpha_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_dev_edit_HbuilderX_Alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_dev_edit_HbuilderX_Alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_dev_edit_HbuilderX_Alpha_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_tki_barcode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_dev_edit_HbuilderX_Alpha_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_dev_edit_HbuilderX_Alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_dev_edit_HbuilderX_Alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_dev_edit_HbuilderX_Alpha_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_tki_barcode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "E:\\Xz\\work\\uni-app\\Test\\barcode\\components\\tki-barcode\\tki-barcode.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************!*\
  !*** E:/Xz/work/uni-app/Test/barcode/components/tki-barcode/tki-barcode.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_dev_edit_HbuilderX_Alpha_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_dev_edit_HbuilderX_Alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_dev_edit_HbuilderX_Alpha_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_dev_edit_HbuilderX_Alpha_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_dev_edit_HbuilderX_Alpha_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_dev_edit_HbuilderX_Alpha_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_tki_barcode_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./tki-barcode.vue?vue&type=style&index=0&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!E:\\Xz\\work\\uni-app\\Test\\barcode\\components\\tki-barcode\\tki-barcode.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _D_dev_edit_HbuilderX_Alpha_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_dev_edit_HbuilderX_Alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_dev_edit_HbuilderX_Alpha_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_dev_edit_HbuilderX_Alpha_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_dev_edit_HbuilderX_Alpha_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_dev_edit_HbuilderX_Alpha_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_tki_barcode_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_dev_edit_HbuilderX_Alpha_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_dev_edit_HbuilderX_Alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_dev_edit_HbuilderX_Alpha_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_dev_edit_HbuilderX_Alpha_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_dev_edit_HbuilderX_Alpha_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_dev_edit_HbuilderX_Alpha_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_tki_barcode_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_dev_edit_HbuilderX_Alpha_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_dev_edit_HbuilderX_Alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_dev_edit_HbuilderX_Alpha_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_dev_edit_HbuilderX_Alpha_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_dev_edit_HbuilderX_Alpha_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_dev_edit_HbuilderX_Alpha_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_tki_barcode_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_dev_edit_HbuilderX_Alpha_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_dev_edit_HbuilderX_Alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_dev_edit_HbuilderX_Alpha_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_dev_edit_HbuilderX_Alpha_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_dev_edit_HbuilderX_Alpha_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_dev_edit_HbuilderX_Alpha_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_tki_barcode_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_dev_edit_HbuilderX_Alpha_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_dev_edit_HbuilderX_Alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_dev_edit_HbuilderX_Alpha_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_dev_edit_HbuilderX_Alpha_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_dev_edit_HbuilderX_Alpha_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_dev_edit_HbuilderX_Alpha_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_tki_barcode_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "E:\\Xz\\work\\uni-app\\Test\\barcode\\components\\tki-barcode\\tki-barcode.vue?vue&type=template&id=bf8cd2f4&xlang=wxml&minapp=mpvue&":
/*!*************************************************************************************************************************************!*\
  !*** E:/Xz/work/uni-app/Test/barcode/components/tki-barcode/tki-barcode.vue?vue&type=template&id=bf8cd2f4&xlang=wxml&minapp=mpvue& ***!
  \*************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_dev_edit_HbuilderX_Alpha_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_dev_edit_HbuilderX_Alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_dev_edit_HbuilderX_Alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_dev_edit_HbuilderX_Alpha_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_tki_barcode_vue_vue_type_template_id_bf8cd2f4_xlang_wxml_minapp_mpvue___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./tki-barcode.vue?vue&type=template&id=bf8cd2f4&xlang=wxml&minapp=mpvue& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!E:\\Xz\\work\\uni-app\\Test\\barcode\\components\\tki-barcode\\tki-barcode.vue?vue&type=template&id=bf8cd2f4&xlang=wxml&minapp=mpvue&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_dev_edit_HbuilderX_Alpha_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_dev_edit_HbuilderX_Alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_dev_edit_HbuilderX_Alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_dev_edit_HbuilderX_Alpha_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_tki_barcode_vue_vue_type_template_id_bf8cd2f4_xlang_wxml_minapp_mpvue___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_dev_edit_HbuilderX_Alpha_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_dev_edit_HbuilderX_Alpha_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_dev_edit_HbuilderX_Alpha_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_dev_edit_HbuilderX_Alpha_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_tki_barcode_vue_vue_type_template_id_bf8cd2f4_xlang_wxml_minapp_mpvue___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/tki-barcode/tki-barcode.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/tki-barcode/tki-barcode-create-component',
    {
        'components/tki-barcode/tki-barcode-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('./node_modules/@dcloudio/uni-mp-weixin/dist/index.js')['createComponent'](__webpack_require__("E:\\Xz\\work\\uni-app\\Test\\barcode\\components\\tki-barcode\\tki-barcode.vue"))
        })
    },
    [['components/tki-barcode/tki-barcode-create-component']]
]);                
