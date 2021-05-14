(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{192:function(t,e,r){"use strict";r.d(e,"c",(function(){return c})),r.d(e,"f",(function(){return o})),r.d(e,"a",(function(){return l})),r.d(e,"b",(function(){return m})),r.d(e,"e",(function(){return d})),r.d(e,"d",(function(){return v})),r.d(e,"g",(function(){return f}));var n=r(62),c=function(t){return Object(n.b)({method:"GET",url:"/api/articles",params:t})},o=function(t){return Object(n.b)({method:"GET",url:"/api/articles/feed",params:t})},l=function(t){return Object(n.b)({method:"POST",url:"/api/articles/".concat(t,"/favorite"),params:t})},m=function(t){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t,"/favorite"),params:t})},d=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t)})},v=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t,"/comments")})},f=function(t,data){return Object(n.b)({method:"POST",url:"/api/articles/".concat(t,"/comments"),data:data})}},202:function(t,e,r){"use strict";r.r(e);var n=r(4),c=(r(37),r(192)),o={middleware:"authtic",props:{articleData:{type:Object,required:!0,default:{}}},name:"ArticleIndex",asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.route,t.store,t.env,t.params,t.query,t.req,t.res,t.redirect,t.error;case 1:case"end":return e.stop()}}),e)})))()}},l=r(31),article=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"article-page"},[r("div",{staticClass:"banner"},[r("div",{staticClass:"container"},[r("div",{staticClass:"article-meta"},[r("nuxt-link",{attrs:{to:{name:"profile",params:{username:t.articleData.author.username}}}},[r("img",{attrs:{src:t.articleData.author.image}})]),t._v(" "),r("div",{staticClass:"info"},[r("nuxt-link",{staticClass:"author",attrs:{to:{name:"profile",params:{username:t.articleData.author.username}}}},[t._v(t._s(t.articleData.author.othername))]),t._v(" "),r("span",{staticClass:"date"},[t._v(t._s(t._f("date")(t.articleData.createdAt,"MMM DD,YYYY")))])],1),t._v(" "),r("button",{staticClass:"btn btn-sm btn-outline-secondary",class:{active:t.articleData.author.following}},[r("i",{staticClass:"ion-plus-round"}),t._v("\n           \n          Follow "+t._s(t.articleData.author.othername)+" "),r("span",{staticClass:"counter"},[t._v("(10)")])]),t._v("\n          \n        "),r("button",{staticClass:"btn btn-sm btn-outline-primary",class:{active:t.articleData.author.favorited}},[r("i",{staticClass:"ion-heart"}),t._v("\n           \n          Favorite Post "),r("span",{staticClass:"counter"},[t._v("(29)")])])],1)])])])}),[],!1,null,null,null).exports,m={middleware:"authtic",props:{articleObj:{type:Object,required:!0,default:{}}},data:function(){return{comment:[],value:""}},name:"ArticleComment",mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(c.d)(t.articleObj.slug);case 2:t.comment=e.sent;case 3:case"end":return e.stop()}}),e)})))()},methods:{post:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(c.g)(t.articleObj.slug,{comment:{body:t.value}});case 2:case"end":return e.stop()}}),e)})))()}}},d={components:{articleView:article,artcomment:Object(l.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[r("div",{staticClass:"col-xs-12 col-md-8 offset-md-2"},[r("form",{staticClass:"card comment-form"},[r("div",{staticClass:"card-block"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],staticClass:"form-control",attrs:{placeholder:"Write a comment...",rows:"3"},domProps:{value:t.value},on:{input:function(e){e.target.composing||(t.value=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"card-footer"},[r("img",{staticClass:"comment-author-img",attrs:{src:"http://i.imgur.com/Qr71crq.jpg"}}),t._v(" "),r("button",{staticClass:"btn btn-sm btn-primary",on:{click:t.post}},[t._v("\n         Post Comment\n        ")])])]),t._v(" "),t.comment.length?t._l(t.comment.data.comments,(function(i,e){return r("div",{key:e,staticClass:"card"},[r("div",{staticClass:"card-block"},[r("p",{staticClass:"card-text"},[t._v(t._s(i.body))])]),t._v(" "),r("div",{staticClass:"card-footer"},[r("nuxt-link",{attrs:{to:{name:"profile",params:{username:i.username}}}},[r("img",{attrs:{src:i.image}})]),t._v("\n         \n         "),r("nuxt-link",{attrs:{to:{name:"profile",params:{username:i.username}}}},[t._v(t._s(i.username))]),t._v(" "),r("span",{staticClass:"date-posted"},[t._v(t._s(t._f("date")(i.createdAt,"MMM DD,YYYY")))])],1)])})):t._e(),t._v(" "),t._m(0)],2)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card"},[r("div",{staticClass:"card-block"},[r("p",{staticClass:"card-text"},[t._v("With supporting text below as a natural lead-in to additional content.")])]),t._v(" "),r("div",{staticClass:"card-footer"},[r("a",{staticClass:"comment-author",attrs:{href:""}},[r("img",{staticClass:"comment-author-img",attrs:{src:"http://i.imgur.com/Qr71crq.jpg"}})]),t._v("\n         \n        "),r("a",{staticClass:"comment-author",attrs:{href:""}},[t._v("Jacob Schmidt")]),t._v(" "),r("span",{staticClass:"date-posted"},[t._v("Dec 29th")]),t._v(" "),r("span",{staticClass:"mod-options"},[r("i",{staticClass:"ion-edit"}),t._v(" "),r("i",{staticClass:"ion-trash-a"})])])])}],!1,null,null,null).exports},middleware:"authtic",name:"ArticleIndex",asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.route,t.store,t.env,r=t.params,t.query,t.req,t.res,t.redirect,t.error,console.log(r),e.next=4,Object(c.e)(r.slug);case 4:return data=e.sent,e.abrupt("return",{detailData:data.data.article});case 6:case"end":return e.stop()}}),e)})))()},head:function(){return{title:this.detailData.title,meta:[{vmid:"description",name:"description",content:this.detailData}]}}},v=Object(l.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"article-page"},[r("div",{staticClass:"banner"},[r("div",{staticClass:"container"},[r("h1",[t._v(t._s(t.detailData.title))]),t._v(" "),r("articleView",{attrs:{articleData:t.detailData}})],1)]),t._v(" "),r("div",{staticClass:"container page"},[r("div",{staticClass:"row article-content"},[r("div",{staticClass:"col-md-12",domProps:{innerHTML:t._s(t.detailData.body)}},[r("h2",{attrs:{id:"introducing-ionic"}},[t._v("Introducing RealWorld.")]),t._v(" "),r("p",[t._v("It's a great solution for learning how other frameworks work.")])])]),t._v(" "),r("hr"),t._v(" "),r("articleView",{attrs:{articleData:t.detailData}}),t._v(" "),r("artcomment",{attrs:{articleObj:t.detailData}})],1)])}),[],!1,null,null,null);e.default=v.exports}}]);