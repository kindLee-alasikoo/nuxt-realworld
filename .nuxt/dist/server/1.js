exports.ids = [1];
exports.modules = {

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getFeedArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addFavo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return cancelFavo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return postComments; });
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
 // 获取文章列表

const getArticles = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: '/api/articles',
    params
  });
};
const getFeedArticles = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: '/api/articles/feed',
    params
  });
};
const addFavo = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: `/api/articles/${params}/favorite`,
    params
  });
};
const cancelFavo = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'DELETE',
    url: `/api/articles/${params}/favorite`,
    params
  });
};
const getDetail = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: `/api/articles/${params}`
  });
};
const getComments = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: `/api/articles/${params}/comments`
  });
};
const postComments = (params, data) => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: `/api/articles/${params}/comments`,
    data
  });
};

/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(29);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("a44df956", content, true, context)
};

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".activeNav{text-decoration:underline}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/home/index.vue?vue&type=template&id=7e23f19f&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home-page"},[_vm._ssrNode("<div class=\"banner\"><div class=\"container\"><h1 class=\"logo-font\">conduit</h1> <p>A place to share your knowledge.</p></div></div> "),_vm._ssrNode("<div class=\"container page\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-md-9\">","</div>",[_vm._ssrNode("<div class=\"feed-toggle\">","</div>",[_vm._ssrNode("<ul class=\"nav nav-pills outline-active\">","</ul>",[(_vm.user)?_vm._ssrNode("<li"+(_vm._ssrClass("nav-item",{ activeNav: _vm.tab === 'your_feed' }))+">","</li>",[_c('nuxt-link',{attrs:{"to":{
                  name: 'home',
                  query: {
                    tab: 'your_feed',
                  },
                }}},[_vm._v("my Feed")])],1):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<li"+(_vm._ssrClass("nav-item",{ activeNav: _vm.tab === 'global_feed' }))+">","</li>",[_c('nuxt-link',{attrs:{"to":{
                  name: 'home',
                  query: {
                    tab: 'global_feed',
                  },
                }}},[_vm._v("Global Feed")])],1),_vm._ssrNode(" "),(_vm.tag)?_vm._ssrNode("<li"+(_vm._ssrClass("nav-item",{ activeNav: _vm.tab === 'tag' }))+">","</li>",[_c('nuxt-link',{attrs:{"to":{
                  name: 'home',
                  query: {
                    tab: 'tag',
                    tag: _vm.tag,
                  },
                }}},[_vm._v(_vm._s(_vm.tag))])],1):_vm._e()],2)]),_vm._ssrNode(" "+((!_vm.articles.length)?("<div class=\"article-preview\">\n          No articles are here... yet.\n        </div>"):"<!---->")+" "),_vm._l((_vm.articles),function(v,i){return [_vm._ssrNode("<div class=\"article-preview\">","</div>",[_vm._ssrNode("<div class=\"article-meta\">","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":("/profile/" + (v.author.username))}},[_c('img',{attrs:{"src":v.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\">","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":("/profile/" + (v.author.username))}},[_vm._v("\n                  "+_vm._s(v.author.username)+"\n                ")]),_vm._ssrNode(" <span class=\"date\">"+_vm._ssrEscape(_vm._s(_vm._f("date")(v.createdAt,'MMM DD, YYYY')))+"</span>")],2),_vm._ssrNode(" <button"+(_vm._ssrAttr("disabled",v.articleFavoDis))+(_vm._ssrClass("btn btn-outline-primary btn-sm pull-xs-right",{ active: v.favorited }))+"><i class=\"ion-heart\"></i>"+_vm._ssrEscape(" "+_vm._s(v.favoritesCount)+"\n              ")+"</button>")],2),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"preview-link",attrs:{"to":{ name: 'article', params: { slug: v.slug } }}},[_c('h1',[_vm._v(_vm._s(v.title))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(v.description))]),_vm._v(" "),_c('span',{on:{"click":function($event){return _vm.$router.push({ name: 'article', params: { slug: v.slug } })}}},[_vm._v("Read more...")])])],2)]}),_vm._ssrNode(" "),_vm._ssrNode("<nav>","</nav>",[_vm._ssrNode("<ul class=\"pagination\">","</ul>",[_vm._l((_vm.totalPage),function(item,index){return [_vm._ssrNode("<li"+(_vm._ssrClass("page-item",{ active: item === _vm.page }))+">","</li>",[_c('nuxt-link',{staticClass:"page-link",attrs:{"to":{
                    name: 'home',
                    query: {
                      page: item,
                      tag: _vm.$route.query.tag,
                      tab: _vm.tab,
                    },
                  }}},[_vm._v(_vm._s(item))])],1)]})],2)])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-md-3\">","</div>",[_vm._ssrNode("<div class=\"sidebar\">","</div>",[_vm._ssrNode("<p>Popular Tags</p> "),_vm._ssrNode("<div class=\"tag-list\">","</div>",[_vm._l((_vm.tags),function(i,index){return [(i !== '')?_vm._ssrNode("<li class=\"tag-pill tag-default\">","</li>",[_c('nuxt-link',{attrs:{"to":{
                    name: 'home',
                    query: {
                      tab: 'tag',
                      tag: i,
                    },
                  }}},[_vm._v(_vm._s(i))])],1):_vm._e()]})],2)],2)])],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/home/index.vue?vue&type=template&id=7e23f19f&

// EXTERNAL MODULE: ./api/home.js
var home = __webpack_require__(26);

// EXTERNAL MODULE: ./plugins/request.js
var request = __webpack_require__(5);

// CONCATENATED MODULE: ./api/tag.js
 // 获取文章列表

const getTags = params => {
  return Object(request["b" /* request */])({
    method: 'GET',
    url: '/api/tags'
  });
};
// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/home/index.vue?vue&type=script&lang=js&
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



/* harmony default export */ var homevue_type_script_lang_js_ = ({
  name: 'HomeIndex',
  watchQuery: ['page', 'tag', 'tab'],
  computed: { ...Object(external_vuex_["mapState"])(['user']),

    isLogin() {
      return this.$store.state.user !== {};
    },

    totalPage() {
      return Math.ceil(this.articlesCount / this.limit);
    }

  },
  methods: {
    async onFavo(article) {
      article.articleFavoDis = true;

      if (article.favorited) {
        await Object(home["b" /* cancelFavo */])(article.slug);
        article.favorited = false;
        article.favoritesCount += -1;
      } else {
        await Object(home["a" /* addFavo */])(article.slug);
        article.favorited = true;
        article.favoritesCount += 1;
      }

      article.articleFavoDis = false;
    }

  },

  async asyncData({
    query,
    store
  }) {
    const page = Number.parseInt(query.page || 1);
    const limit = 5;
    const tag = query.tag;
    const tab = query.tab || 'global_feed';
    const localArticle = store.state.user && tab === 'your_feed' ? home["f" /* getFeedArticles */] : home["c" /* getArticles */];
    const [articleRes, tagRes] = await Promise.all([localArticle({
      limit,
      offset: (page - 1) * limit,
      tag,
      tab: query.tab
    }), getTags()]);
    const {
      articles,
      articlesCount
    } = articleRes.data;
    articles.forEach(i => {
      i.articleFavoDis = false;
    });
    const {
      tags
    } = tagRes.data;
    return {
      articles,
      articlesCount,
      limit: limit,
      page: page,
      tags,
      tag,
      tab: query.tab || 'global_feed'
    };
  }

});
// CONCATENATED MODULE: ./pages/home/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_homevue_type_script_lang_js_ = (homevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/home/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(28)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_homevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "f28cfc74"
  
)

/* harmony default export */ var pages_home = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=1.js.map