webpackJsonp([1],{"1/oy":function(t,e){},"9M+g":function(t,e){},GfHa:function(t,e){},Id91:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("7+uW"),o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var a=s("VU/8")({name:"App"},o,!1,function(t){s("YW73")},null,null).exports,i=s("/ocq"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",[this._v("인덱스 페이지 입니다.!!!! VUE+Express 그냥저냥 테스트")]),this._v(" "),e("hr"),this._v(" "),e("router-link",{staticClass:"btn btn-outline-success",attrs:{to:"/movie"}},[this._v("Movie Example")]),e("br"),e("br"),this._v(" "),e("router-link",{staticClass:"btn btn-outline-info",attrs:{to:"/mongoTest"}},[this._v("MongoDB API VUE")])],1)},staticRenderFns:[]};var l=s("VU/8")({},r,!1,function(t){s("fG7s")},null,null).exports,d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",[this._v("로그인 페이지입니다.")]),this._v(" "),e("hr"),this._v(" "),e("a",{attrs:{href:"/movie"}},[this._v("Movie Example")]),this._v(" "),e("router-link",{attrs:{to:"/movie"}},[this._v("Movie Example")])],1)},staticRenderFns:[]};var c=s("VU/8")({},d,!1,function(t){s("oXa+")},null,null).exports,u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"movies"},[s("h1",[t._v("영화 목록")]),t._v(" "),t._l(t.movies,function(e){return s("div",{staticClass:"movie"},[s("img",{staticClass:"poster",attrs:{src:e.poster}}),t._v(" "),s("div",[s("strong",[t._v("[ "+t._s(e.name)+"]")]),t._v(", "),s("i",[s("router-link",{attrs:{to:{name:"MovieShowPage",params:{id:e.id}}}},[t._v("더보기")])],1)])])})],2)},staticRenderFns:[]},v=s("VU/8")({created:function(){var t=this;this.$http.get("/api/movies").then(function(e){t.movies=e.data})},data:function(){return{movies:[]}}},u,!1,null,null,null).exports,p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",[this._v("상세 내용")]),this._v("\n    "+this._s(this.movie)+"\n")])},staticRenderFns:[]},h=s("VU/8")({created:function(){var t=this,e=this.$route.params.id;this.$http.get("/api/movies/"+e).then(function(e){t.movie=e.data})},data:function(){return{movie:{}}}},p,!1,null,null,null).exports,m={created:function(){this.getPosts()},data:function(){return{posts:[],addPost:{title:"",contents:""},alert:{isVisible:!1,variant:"",msg:""}}},methods:{getPosts:function(){var t=this;this.$http.get("/api/posts").then(function(e){t.posts=e.data})},insertPost:function(t){var e=this;this.$http({method:"post",url:"/api/posts/add",data:this.addPost}).then(function(t){e.addPost={title:"",contents:""},console.log("alert",e.$refs.alertMsg),void 0!=t.data&&200==t.data.code?(e.alert.msg=t.data.msg,e.getPosts(),e.alert.variant="success"):(e.alert.msg=t.data.msg,e.alert.variant="danger"),e.hideModal(),e.alert.isVisible=!0})},hideModal:function(){this.$refs.addPostModal.hide()}}},f={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h1",[t._v("몽고DB Rest API TEST(POSTS)")]),t._v(" "),s("hr"),t._v(" "),s("div",[s("button",{directives:[{name:"b-modal",rawName:"v-b-modal",value:"addPostModal",expression:"'addPostModal'"}],staticClass:"btn btn-secondary",attrs:{type:"button"}},[t._v("add")]),t._v(" "),s("hr"),t._v(" "),t._l(t.posts,function(e){return s("ul",{staticClass:"list-group post"},[s("li",{staticClass:"list-group-item"},[s("span",{staticClass:"badge badge-primary badge-pill"},[t._v("more")]),t._v(" "),s("span",[s("strong",[t._v("title")]),t._v(" : "+t._s(e.title))]),t._v(" "),s("br"),t._v(" "),s("span",[s("strong",[t._v("contents")]),t._v(" : "+t._s(e.contents))])])])})],2),t._v(" "),s("b-modal",{ref:"addPostModal",attrs:{id:"addPostModal","hide-footer":"",title:"Add Post"}},[s("div",{staticClass:"modal-body"},[t._t("body",[s("b-form",[s("b-form-group",{attrs:{id:"post_title_group",label:"Title.","label-for":"title",description:""}},[s("b-form-input",{attrs:{id:"title",type:"text",required:"",placeholder:"Enter title"},model:{value:t.addPost.title,callback:function(e){t.$set(t.addPost,"title",e)},expression:"addPost.title"}})],1),t._v(" "),s("b-form-group",{attrs:{id:"post_content_group",label:"Contents.","label-for":"content"}},[s("b-form-input",{attrs:{id:"content",type:"text",required:"",placeholder:"Enter Contents"},model:{value:t.addPost.contents,callback:function(e){t.$set(t.addPost,"contents",e)},expression:"addPost.contents"}})],1)],1)])],2),t._v(" "),s("div",{staticClass:"modal-footer"},[t._t("footer",[s("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.insertPost}},[t._v("등록")]),t._v(" "),s("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.hideModal}},[t._v("취소")])])],2)]),t._v(" "),s("b-alert",{ref:"alertMsg",attrs:{variant:t.alert.variant,dismissible:"",fade:"",show:t.alert.isVisible},on:{dismissed:function(e){t.alert.isVisible=!1}}},[t._v("\r\n      "+t._s(t.alert.msg)+"\r\n    ")])],1)},staticRenderFns:[]};var _=s("VU/8")(m,f,!1,function(t){s("qbUB")},null,null).exports;n.a.use(i.a);var b=new i.a({mode:"history",routes:[{path:"/",name:"IndexPage",component:l},{path:"/loginPage",name:"LoginPage",component:c},{path:"/movie",name:"MovieIndexPage",component:v},{path:"/movie/:id",name:"MovieShowPage",component:h},{path:"/mongoTest",name:"MongoTest",component:_}]}),g=s("mtWM"),x=s.n(g),P=s("e6fC");s("qb6w"),s("9M+g");n.a.config.productionTip=!1,n.a.prototype.$http=x.a,n.a.use(P.a);var M=["background: linear-gradient(#D33106, #571402)","border: 1px solid #3E0E02","color: white","display: block","text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3)","box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset","line-height: 40px","text-align: center","font-weight: bold","width : 100%"].join(";");console.log("%c[akswosn@gmail.com] forlks project vuejs + express + mongodb ",M),new n.a({el:"#app",router:b,components:{App:a},template:"<App/>"})},YW73:function(t,e){},fG7s:function(t,e){},"oXa+":function(t,e){},qb6w:function(t,e){},qbUB:function(t,e){},zj2Q:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.2a4d6dff321f16a8f79e.js.map