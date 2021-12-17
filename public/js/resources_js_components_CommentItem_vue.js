"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_CommentItem_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CommentItem.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CommentItem.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CommentBox_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CommentBox.vue */ "./resources/js/components/CommentBox.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "CommentItem",
  components: {
    CommentBox: _CommentBox_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    CommentList: function CommentList() {
      return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./CommentList.vue */ "./resources/js/components/CommentList.vue"));
    }
  },
  props: {
    comment: {
      type: Object,
      "default": function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      showCommentBox: false,
      maxLevel: 2
    };
  },
  computed: {
    allowReply: function allowReply() {
      return this.comment.level < this.maxLevel;
    },
    marginStyle: function marginStyle() {
      return {
        marginLeft: "".concat((this.comment.level + 1) * 20, "px")
      };
    }
  },
  methods: {
    onSubmit: function onSubmit(comment) {
      this.$emit("reply", comment);
    },
    toggleCommentBox: function toggleCommentBox() {
      this.showCommentBox = !this.showCommentBox;
    }
  }
});

/***/ }),

/***/ "./resources/js/components/CommentItem.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/CommentItem.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CommentItem_vue_vue_type_template_id_c63b9012___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CommentItem.vue?vue&type=template&id=c63b9012& */ "./resources/js/components/CommentItem.vue?vue&type=template&id=c63b9012&");
/* harmony import */ var _CommentItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CommentItem.vue?vue&type=script&lang=js& */ "./resources/js/components/CommentItem.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CommentItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CommentItem_vue_vue_type_template_id_c63b9012___WEBPACK_IMPORTED_MODULE_0__.render,
  _CommentItem_vue_vue_type_template_id_c63b9012___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/CommentItem.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/CommentItem.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/CommentItem.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CommentItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CommentItem.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/CommentItem.vue?vue&type=template&id=c63b9012&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/CommentItem.vue?vue&type=template&id=c63b9012& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentItem_vue_vue_type_template_id_c63b9012___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentItem_vue_vue_type_template_id_c63b9012___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentItem_vue_vue_type_template_id_c63b9012___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CommentItem.vue?vue&type=template&id=c63b9012& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CommentItem.vue?vue&type=template&id=c63b9012&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CommentItem.vue?vue&type=template&id=c63b9012&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CommentItem.vue?vue&type=template&id=c63b9012& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "flex flex-col text-left" },
    [
      _c("h4", { staticClass: "text-emerald-500 font-bold" }, [
        _vm._v(" " + _vm._s(_vm.comment.user_name)),
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "mt-0" }, [
        _vm._v("\n        " + _vm._s(_vm.comment.text) + "\n    "),
      ]),
      _vm._v(" "),
      _vm.allowReply
        ? _c(
            "button",
            {
              staticClass: "text-emerald-500 px-5 py-1 rounded-md inline-block",
              on: { click: _vm.toggleCommentBox },
            },
            [_vm._v("\n        Reply\n    ")]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.showCommentBox
        ? _c("CommentBox", {
            attrs: { level: _vm.comment.level + 1, parentId: _vm.comment.id },
            on: { submit: _vm.onSubmit },
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.comment.replies
        ? _c("CommentList", {
            style: _vm.marginStyle,
            attrs: { comments: _vm.comment.replies },
            on: {
              reply: function ($event) {
                return _vm.$emit("reply", $event)
              },
            },
          })
        : _vm._e(),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);