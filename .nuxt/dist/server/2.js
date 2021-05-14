exports.ids = [2];
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

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=template&id=02ac1e10&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-page"},[_vm._ssrNode("<div class=\"banner\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<h1>"+_vm._ssrEscape(_vm._s(_vm.detailData.title))+"</h1> "),_c('articleView',{attrs:{"articleData":_vm.detailData}})],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container page\">","</div>",[_vm._ssrNode("<div class=\"row article-content\"><div class=\"col-md-12\">"+(_vm._s(_vm.detailData.body))+"</div></div> <hr> "),_c('articleView',{attrs:{"articleData":_vm.detailData}}),_vm._ssrNode(" "),_c('artcomment',{attrs:{"articleObj":_vm.detailData}})],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=template&id=02ac1e10&

// EXTERNAL MODULE: ./api/home.js
var home = __webpack_require__(26);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article.vue?vue&type=template&id=990d3900&
var articlevue_type_template_id_990d3900_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-page"},[_vm._ssrNode("<div class=\"banner\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"article-meta\">","</div>",[_c('nuxt-link',{attrs:{"to":{
             name:'profile',
             params:{username:_vm.articleData.author.username}
         }}},[_c('img',{attrs:{"src":_vm.articleData.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\">","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":{
             name:'profile',
             
             params:{username:_vm.articleData.author.username}
         }}},[_vm._v(_vm._s(_vm.articleData.author.othername))]),_vm._ssrNode(" <span class=\"date\">"+_vm._ssrEscape(_vm._s(_vm._f("date")(_vm.articleData.createdAt,'MMM DD,YYYY' )))+"</span>")],2),_vm._ssrNode(" <button"+(_vm._ssrClass("btn btn-sm btn-outline-secondary",{active:_vm.articleData.author.following }))+"><i class=\"ion-plus-round\"></i>"+_vm._ssrEscape("\n           \n          Follow "+_vm._s(_vm.articleData.author.othername)+" ")+"<span class=\"counter\">(10)</span></button>\n          \n        <button"+(_vm._ssrClass("btn btn-sm btn-outline-primary",{active:_vm.articleData.author.favorited }))+"><i class=\"ion-heart\"></i>\n           \n          Favorite Post <span class=\"counter\">(29)</span></button>")],2)])])])}
var articlevue_type_template_id_990d3900_staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/components/article.vue?vue&type=template&id=990d3900&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article.vue?vue&type=script&lang=js&
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
/* harmony default export */ var articlevue_type_script_lang_js_ = ({
  middleware: 'authtic',
  props: {
    articleData: {
      type: Object,
      required: true,
      default: {}
    }
  },
  name: "ArticleIndex",

  async asyncData({
    route,
    store,
    env,
    params,
    query,
    req,
    res,
    redirect,
    error
  }) {}

});
// CONCATENATED MODULE: ./pages/article/components/article.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_articlevue_type_script_lang_js_ = (articlevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/article/components/article.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_articlevue_type_script_lang_js_,
  articlevue_type_template_id_990d3900_render,
  articlevue_type_template_id_990d3900_staticRenderFns,
  false,
  null,
  null,
  "35067cda"
  
)

/* harmony default export */ var article = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/articlecomment.vue?vue&type=template&id=59d543f2&
var articlecommentvue_type_template_id_59d543f2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row"},[_vm._ssrNode("<div class=\"col-xs-12 col-md-8 offset-md-2\">","</div>",[_vm._ssrNode("<form class=\"card comment-form\"><div class=\"card-block\"><textarea placeholder=\"Write a comment...\" rows=\"3\" class=\"form-control\">"+_vm._ssrEscape(_vm._s(_vm.value))+"</textarea></div> <div class=\"card-footer\"><img src=\"http://i.imgur.com/Qr71crq.jpg\" class=\"comment-author-img\"> <button class=\"btn btn-sm btn-primary\">\n         Post Comment\n        </button></div></form> "),(_vm.comment.length)?_vm._l((_vm.comment.data.comments),function(i,index){return _vm._ssrNode("<div class=\"card\">","</div>",[_vm._ssrNode("<div class=\"card-block\"><p class=\"card-text\">"+_vm._ssrEscape(_vm._s(i.body))+"</p></div> "),_vm._ssrNode("<div class=\"card-footer\">","</div>",[_c('nuxt-link',{attrs:{"to":{
         name:'profile',
         params:{username:i.username}
     }}},[_c('img',{attrs:{"src":i.image}})]),_vm._ssrNode("\n         \n         "),_c('nuxt-link',{attrs:{"to":{
         name:'profile',
         params:{username:i.username}
     }}},[_vm._v(_vm._s(i.username))]),_vm._ssrNode(" <span class=\"date-posted\">"+_vm._ssrEscape(_vm._s(_vm._f("date")(i.createdAt,'MMM DD,YYYY' )))+"</span>")],2)],2)}):_vm._e(),_vm._ssrNode(" <div class=\"card\"><div class=\"card-block\"><p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p></div> <div class=\"card-footer\"><a href class=\"comment-author\"><img src=\"http://i.imgur.com/Qr71crq.jpg\" class=\"comment-author-img\"></a>\n         \n        <a href class=\"comment-author\">Jacob Schmidt</a> <span class=\"date-posted\">Dec 29th</span> <span class=\"mod-options\"><i class=\"ion-edit\"></i> <i class=\"ion-trash-a\"></i></span></div></div>")],2)])}
var articlecommentvue_type_template_id_59d543f2_staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/components/articlecomment.vue?vue&type=template&id=59d543f2&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/articlecomment.vue?vue&type=script&lang=js&
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

/* harmony default export */ var articlecommentvue_type_script_lang_js_ = ({
  middleware: 'authtic',
  props: {
    articleObj: {
      type: Object,
      required: true,
      default: {}
    }
  },

  data() {
    return {
      comment: [],
      value: ''
    };
  },

  name: "ArticleComment",

  async mounted() {
    this.comment = await Object(home["d" /* getComments */])(this.articleObj.slug);
  },

  methods: {
    async post() {
      await Object(home["g" /* postComments */])(this.articleObj.slug, {
        comment: {
          body: this.value
        }
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/article/components/articlecomment.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_articlecommentvue_type_script_lang_js_ = (articlecommentvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/article/components/articlecomment.vue





/* normalize component */

var articlecomment_component = Object(componentNormalizer["a" /* default */])(
  components_articlecommentvue_type_script_lang_js_,
  articlecommentvue_type_template_id_59d543f2_render,
  articlecommentvue_type_template_id_59d543f2_staticRenderFns,
  false,
  null,
  null,
  "22f6e0f5"
  
)

/* harmony default export */ var articlecomment = (articlecomment_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=script&lang=js&
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



/* harmony default export */ var lib_vue_loader_options_pages_articlevue_type_script_lang_js_ = ({
  components: {
    articleView: article,
    artcomment: articlecomment
  },
  middleware: 'authtic',
  name: "ArticleIndex",

  async asyncData({
    route,
    store,
    env,
    params,
    query,
    req,
    res,
    redirect,
    error
  }) {
    console.log(params);
    const data = await Object(home["e" /* getDetail */])(params.slug);
    return {
      detailData: data.data.article
    };
  },

  head() {
    return {
      title: this.detailData.title,
      meta: [{
        vmid: 'description',
        name: 'description',
        content: this.detailData
      }]
    };
  }

});
// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_articlevue_type_script_lang_js_ = (lib_vue_loader_options_pages_articlevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/article/index.vue





/* normalize component */

var article_component = Object(componentNormalizer["a" /* default */])(
  pages_articlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "faf1a6f6"
  
)

/* harmony default export */ var pages_article = __webpack_exports__["default"] = (article_component.exports);

/***/ })

};;
//# sourceMappingURL=2.js.map