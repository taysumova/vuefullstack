webpackJsonp([1],{"1uuo":function(t,e){},"36YQ":function(t,e){},"4Z76":function(t,e){},"7zck":function(t,e){},B534:function(t,e){},N9dI:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-toolbar",{staticClass:"cyan",attrs:{fixed:"",dark:""}},[n("v-toolbar-title",{staticClass:"mr-4"},[n("span",{staticClass:"home",on:{click:function(e){return t.navigateTo({name:"root"})}}},[t._v("\n          TabTracker\n      ")])]),t._v(" "),n("v-toolbar-items",[n("v-btn",{attrs:{flat:"",dark:""},on:{click:function(e){return t.navigateTo({name:"songs"})}}},[t._v("\n            Browse\n        ")])],1),t._v(" "),n("v-spacer"),t._v(" "),n("v-toolbar-items",[t.$store.state.isUserLoggedIn?t._e():n("v-btn",{attrs:{flat:"",dark:""},on:{click:function(e){return t.navigateTo({name:"login"})}}},[t._v("\n      Login\n    ")]),t._v(" "),t.$store.state.isUserLoggedIn?t._e():n("v-btn",{attrs:{flat:"",dark:""},on:{click:function(e){return t.navigateTo({name:"register"})}}},[t._v("\n      Sign Up\n    ")]),t._v(" "),t.$store.state.isUserLoggedIn?n("v-btn",{attrs:{flat:"",dark:""},on:{click:t.logout}},[t._v("\n      Log Out\n    ")]):t._e()],1)],1)},staticRenderFns:[]};var s={name:"App",components:{PageHeader:n("VU/8")({methods:{navigateTo:function(t){this.$router.push(t)},logout:function(){this.$store.dispatch("setToken",null),this.$store.dispatch("setUser",null),this.$router.push({name:"root"})}}},r,!1,function(t){n("tRuW")},"data-v-65f05122",null).exports}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("v-app",[e("main",[e("page-header"),this._v(" "),e("v-container",{attrs:{fluid:""}}),this._v(" "),e("router-view")],1)])],1)},staticRenderFns:[]};var l=n("VU/8")(s,o,!1,function(t){n("slAi")},null,null).exports,i=n("/ocq"),u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),t._v(" "),n("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),n("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),n("br"),t._v(" "),n("li",[n("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var c=n("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},u,!1,function(t){n("1uuo")},"data-v-d8ec41bc",null).exports,v=n("Xxa5"),d=n.n(v),g=n("exGp"),m=n.n(g),p=n("mtWM"),f=n.n(p),b=function(){return f.a.create({baseURL:"https://songs-library.herokuapp.com"})},_=function(t){return b().post("register",t)},h=function(t){return b().post("login",t)},x={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{"align-center":"","justify-center":"",row:"","fill-height":""}},[n("v-flex",{attrs:{xs5:""}},[n("div",{staticClass:"white elevation-2"},[n("v-toolbar",{staticClass:"cyan",attrs:{flat:"",dense:"",dark:""}},[n("v-toolbar-title",[t._v(t._s(t.title))]),t._v(" "),t._t("action")],2),t._v(" "),n("div",{staticClass:"pl-4 pr-4 pt-2 pb-2"},[t._t("default",[t._v("No slot content defined")])],2)],1)])],1)},staticRenderFns:[]};var k=n("VU/8")({props:["title"]},x,!1,function(t){n("Wp1V")},"data-v-49c13456",null).exports,y={name:"Register",data:function(){return{email:"",password:"",error:null}},components:{Panel:k},methods:{register:function(){var t=this;return m()(d.a.mark(function e(){var n;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_({email:t.email,password:t.password});case 3:n=e.sent,t.$store.dispatch("setToken",n.data.token),t.$store.dispatch("setUser",n.data.user),t.$router.push({name:"root"}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t.error=e.t0.response.data.error;case 12:case"end":return e.stop()}},e,t,[[0,9]])}))()}}},w={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("panel",{attrs:{title:"Register"}},[n("v-text-field",{attrs:{type:"email",name:"email",label:"Email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),n("v-text-field",{attrs:{type:"password",name:"password",label:"Password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),n("div",{staticClass:"error",domProps:{innerHTML:t._s(t.error)}}),t._v(" "),n("v-btn",{staticClass:"cyan",attrs:{dark:""},on:{click:t.register}},[t._v("Register")])],1)},staticRenderFns:[]};var $=n("VU/8")(y,w,!1,function(t){n("4Z76")},"data-v-32990b0a",null).exports,I={name:"Login",data:function(){return{email:"",password:"",error:null}},components:{Panel:k},methods:{login:function(){var t=this;return m()(d.a.mark(function e(){var n;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h({email:t.email,password:t.password});case 3:n=e.sent,t.$store.dispatch("setToken",n.data.token),t.$store.dispatch("setUser",n.data.user),t.$router.push({name:"root"}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t.error=e.t0.response.data.error;case 12:case"end":return e.stop()}},e,t,[[0,9]])}))()}}},U={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("panel",{attrs:{title:"Login"}},[n("v-text-field",{attrs:{type:"email",name:"email",label:"Email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),n("v-text-field",{attrs:{type:"password",name:"password",label:"Password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),n("div",{staticClass:"error",domProps:{innerHTML:t._s(t.error)}}),t._v(" "),n("v-btn",{staticClass:"cyan",attrs:{dark:""},on:{click:t.login}},[t._v("\n    login\n  ")])],1)},staticRenderFns:[]};var T=n("VU/8")(I,U,!1,function(t){n("B534")},"data-v-19bf8b34",null).exports,C=function(){return b().get("songs")},E=function(t){return b().get("songs/"+t)},R=function(t){return b().post("songs",t)},S=function(t){return b().put("songs/"+t.id,t)},A={name:"Songs",components:{Panel:k},data:function(){return{songs:[]}},mounted:function(){var t=this;return m()(d.a.mark(function e(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C();case 2:t.songs=e.sent.data;case 3:case"end":return e.stop()}},e,t)}))()},methods:{navigateTo:function(t){this.$router.push(t)}}},P={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("panel",{attrs:{title:"Songs"}},[n("v-btn",{staticClass:"cyan accent-2",attrs:{slot:"action",fab:"",absolute:"",right:"",light:""},slot:"action"},[n("router-link",{attrs:{to:{name:"songs-create"}}},[n("v-icon",[t._v("add")])],1)],1),t._v(" "),t._l(t.songs,function(e){return n("div",{key:e.id,staticClass:"song"},[n("v-layout",[n("v-flex",{attrs:{xs6:""}},[n("img",{staticClass:"album-image",attrs:{src:e.albumImageUrl,alt:"Album cover"}})]),t._v(" "),n("v-flex",{attrs:{xs6:""}},[n("div",{staticClass:"song-title"},[t._v("\n          "+t._s(e.title)+"\n        ")]),t._v(" "),n("div",{staticClass:"song-artist"},[t._v("\n          "+t._s(e.artist)+"\n        ")]),t._v(" "),n("div",{staticClass:"song-genre"},[t._v("\n          "+t._s(e.genre)+"\n        ")]),t._v(" "),n("v-btn",{staticClass:"cyan",attrs:{dark:""},on:{click:function(n){return t.navigateTo({name:"song",params:{songId:e.id}})}}},[t._v("\n          view\n        ")])],1)],1)],1)})],2)},staticRenderFns:[]};var L=n("VU/8")(A,P,!1,function(t){n("UjAi")},null,null).exports,V=n("fZjL"),q=n.n(V),j={data:function(){return{song:{title:null,artist:null,genre:null,album:null,albumImageUrl:null,youtubeId:null,lyrics:null,tab:null},error:null,required:function(t){return!!t||"Required"}}},components:{Panel:k},methods:{add:function(){var t=this;return m()(d.a.mark(function e(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.error=null,q()(t.song).every(function(e){return!!t.song[e]})){e.next=5;break}return t.error="Please fill in all the required fileds.",e.abrupt("return");case 5:return e.prev=5,e.next=8,R(t.song);case 8:t.$router.push({name:"songs"}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(5),console.log(e.t0);case 14:case"end":return e.stop()}},e,t,[[5,11]])}))()}}},F={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-flex",{attrs:{row:""}},[n("panel",{attrs:{title:"Song Metadata"}},[n("v-text-field",{attrs:{required:"",rules:[t.required],name:"title",label:"Title"},model:{value:t.song.title,callback:function(e){t.$set(t.song,"title",e)},expression:"song.title"}}),t._v(" "),n("v-text-field",{attrs:{required:"",rules:[t.required],name:"artist",label:"Artist"},model:{value:t.song.artist,callback:function(e){t.$set(t.song,"artist",e)},expression:"song.artist"}}),t._v(" "),n("v-text-field",{attrs:{name:"genre",label:"Genre"},model:{value:t.song.genre,callback:function(e){t.$set(t.song,"genre",e)},expression:"song.genre"}}),t._v(" "),n("v-text-field",{attrs:{name:"album",label:"Album"},model:{value:t.song.album,callback:function(e){t.$set(t.song,"album",e)},expression:"song.album"}}),t._v(" "),n("v-text-field",{attrs:{name:"albumImageUrl",label:"Album image url"},model:{value:t.song.albumImageUrl,callback:function(e){t.$set(t.song,"albumImageUrl",e)},expression:"song.albumImageUrl"}}),t._v(" "),n("v-text-field",{attrs:{name:"youtubeId",label:"Youtube Id"},model:{value:t.song.youtubeId,callback:function(e){t.$set(t.song,"youtubeId",e)},expression:"song.youtubeId"}})],1),t._v(" "),n("panel",{attrs:{title:"Song Structure"}},[n("v-textarea",{attrs:{name:"lyrics",label:"Lyrics"},model:{value:t.song.lyrics,callback:function(e){t.$set(t.song,"lyrics",e)},expression:"song.lyrics"}}),t._v(" "),n("v-textarea",{attrs:{name:"tab",label:"Tab"},model:{value:t.song.tab,callback:function(e){t.$set(t.song,"tab",e)},expression:"song.tab"}})],1),t._v(" "),t.error?n("div",{staticClass:"error"},[t._v("\n  "+t._s(t.error)+"\n")]):t._e(),t._v(" "),n("v-btn",{staticClass:"cyan",attrs:{dark:""},on:{click:t.add}},[t._v("Add Song")])],1)},staticRenderFns:[]};var M=n("VU/8")(j,F,!1,function(t){n("q2iS")},"data-v-63caa9dd",null).exports,N={props:["song"],methods:{navigateTo:function(t){this.$router.push(t)}},components:{Panel:k}},W={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("panel",{attrs:{title:"Song Metadata"}},[n("v-layout",[n("v-flex",{attrs:{xs6:""}},[n("img",{staticClass:"album-image",attrs:{src:t.song.albumImageUrl,alt:"Album cover"}}),t._v(" "),n("div",{staticClass:"song-album"},[t._v("\n        "+t._s(t.song.album)+"\n      ")])]),t._v(" "),n("v-flex",{attrs:{xs6:""}},[n("div",{staticClass:"song-title"},[t._v("\n        "+t._s(t.song.title)+"\n      ")]),t._v(" "),n("div",{staticClass:"song-artist"},[t._v("\n        "+t._s(t.song.artist)+"\n      ")]),t._v(" "),n("div",{staticClass:"song-genre"},[t._v("\n        "+t._s(t.song.genre)+"\n      ")]),t._v(" "),n("v-btn",{attrs:{dark:"",cyan:""},on:{click:function(e){return t.navigateTo({name:"songs-edit",params:{songId:t.song.id}})}}},[t._v("\n        Edit Song\n      ")])],1)],1)],1)},staticRenderFns:[]};var Y={props:["youtubeId"],components:{Panel:k}},H={render:function(){var t=this.$createElement,e=this._self._c||t;return e("panel",{attrs:{title:"YouTube video"}},[e("youtube",{attrs:{"video-id":this.youtubeId,"player-width":"280","player-height":"200"}})],1)},staticRenderFns:[]};var z={props:["lyrics"],components:{Panel:k}},D={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("panel",{attrs:{title:"Lyrics"}},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.lyrics,expression:"lyrics"}],attrs:{readonly:"",cols:"40",rows:"30"},domProps:{value:t.lyrics},on:{input:function(e){e.target.composing||(t.lyrics=e.target.value)}}})])},staticRenderFns:[]};var O={props:["translation"],components:{Panel:k}},B={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("panel",{attrs:{title:"Translation"}},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.translation,expression:"translation"}],attrs:{readonly:"",cols:"40",rows:"30"},domProps:{value:t.translation},on:{input:function(e){e.target.composing||(t.translation=e.target.value)}}})])},staticRenderFns:[]},G={data:function(){return{song:{}}},mounted:function(){var t=this;return m()(d.a.mark(function e(){var n;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$store.state.route.params.songId,e.next=3,E(n);case 3:t.song=e.sent.data[0];case 4:case"end":return e.stop()}},e,t)}))()},components:{SongMetadata:n("VU/8")(N,W,!1,function(t){n("pr7D")},null,null).exports,YouTube:n("VU/8")(Y,H,!1,function(t){n("rMi3")},null,null).exports,Lyrics:n("VU/8")(z,D,!1,function(t){n("N9dI")},null,null).exports,Translation:n("VU/8")(O,B,!1,null,null,null).exports}},Z={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("v-flex",{attrs:{"xs-6":""}},[e("song-metadata",{attrs:{song:this.song}})],1),this._v(" "),e("v-flex",{attrs:{"xs-6":""}},[e("you-tube",{attrs:{youtubeId:this.song.youtubeId}})],1),this._v(" "),e("v-flex",{attrs:{"xs-6":""}},[e("lyrics",{attrs:{lyrics:this.song.lyrics}})],1),this._v(" "),e("v-flex",{attrs:{"xs-6":""}},[e("translation",{attrs:{translation:this.song.tab}})],1)],1)},staticRenderFns:[]};var J=n("VU/8")(G,Z,!1,function(t){n("36YQ")},null,null).exports,Q={data:function(){return{song:{title:null,artist:null,genre:null,album:null,albumImageUrl:null,youtubeId:null,lyrics:null,tab:null},error:null,required:function(t){return!!t||"Required"}}},components:{Panel:k},methods:{saveSong:function(){var t=this;return m()(d.a.mark(function e(){var n;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.error=null,q()(t.song).every(function(e){return!!t.song[e]})){e.next=5;break}return t.error="Please fill in all the required fileds.",e.abrupt("return");case 5:return n=t.$store.state.route.params.songId,e.prev=6,e.next=9,S(t.song);case 9:t.$router.push({name:"song",params:{songId:n}}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(6),console.log(e.t0);case 15:case"end":return e.stop()}},e,t,[[6,12]])}))()}},mounted:function(){var t=this;return m()(d.a.mark(function e(){var n;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=t.$store.state.route.params.songId,e.next=4,E(n);case 4:t.song=e.sent.data[0],e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}},e,t,[[0,7]])}))()}},X={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-flex",{attrs:{row:""}},[n("panel",{attrs:{title:"Song Metadata"}},[n("v-text-field",{attrs:{required:"",rules:[t.required],name:"title",label:"Title"},model:{value:t.song.title,callback:function(e){t.$set(t.song,"title",e)},expression:"song.title"}}),t._v(" "),n("v-text-field",{attrs:{required:"",rules:[t.required],name:"artist",label:"Artist"},model:{value:t.song.artist,callback:function(e){t.$set(t.song,"artist",e)},expression:"song.artist"}}),t._v(" "),n("v-text-field",{attrs:{name:"genre",label:"Genre"},model:{value:t.song.genre,callback:function(e){t.$set(t.song,"genre",e)},expression:"song.genre"}}),t._v(" "),n("v-text-field",{attrs:{name:"album",label:"Album"},model:{value:t.song.album,callback:function(e){t.$set(t.song,"album",e)},expression:"song.album"}}),t._v(" "),n("v-text-field",{attrs:{name:"albumImageUrl",label:"Album image url"},model:{value:t.song.albumImageUrl,callback:function(e){t.$set(t.song,"albumImageUrl",e)},expression:"song.albumImageUrl"}}),t._v(" "),n("v-text-field",{attrs:{name:"youtubeId",label:"Youtube Id"},model:{value:t.song.youtubeId,callback:function(e){t.$set(t.song,"youtubeId",e)},expression:"song.youtubeId"}})],1),t._v(" "),n("panel",{attrs:{title:"Song Structure"}},[n("v-textarea",{attrs:{name:"lyrics",label:"Lyrics"},model:{value:t.song.lyrics,callback:function(e){t.$set(t.song,"lyrics",e)},expression:"song.lyrics"}}),t._v(" "),n("v-textarea",{attrs:{name:"tab",label:"Tab"},model:{value:t.song.tab,callback:function(e){t.$set(t.song,"tab",e)},expression:"song.tab"}})],1),t._v(" "),t.error?n("div",{staticClass:"error"},[t._v("\n  "+t._s(t.error)+"\n")]):t._e(),t._v(" "),n("v-btn",{staticClass:"cyan",attrs:{dark:""},on:{click:t.saveSong}},[t._v("Save Song")])],1)},staticRenderFns:[]};var K=n("VU/8")(Q,X,!1,function(t){n("szAm")},"data-v-756db15d",null).exports;a.default.use(i.a);var tt=new i.a({routes:[{path:"/",name:"root",component:c},{path:"/register",name:"register",component:$},{path:"/login",name:"login",component:T},{path:"/songs",name:"songs",component:L},{path:"/songs/create",name:"songs-create",component:M},{path:"/songs/:songId",name:"song",component:J},{path:"/songs/:songId/edit",name:"songs-edit",component:K}]}),et=n("3EgV"),nt=n.n(et),at=n("9JMe"),rt=(n("7zck"),n("NYxO"));a.default.use(rt.a);var st=new rt.a.Store({strict:!0,state:{user:"",token:null,isUserLoggedIn:!1},mutations:{setToken:function(t,e){t.token=e,t.isUserLoggedIn=!!e},setUser:function(t,e){t.user=e}},actions:{setToken:function(t,e){(0,t.commit)("setToken",e)},setUser:function(t,e){(0,t.commit)("setUser",e)}}}),ot=n("5/be");a.default.config.productionTip=!1,a.default.use(nt.a),a.default.use(ot.a),Object(at.sync)(st,tt),new a.default({el:"#app",router:tt,store:st,components:{App:l},template:"<App/>"})},UjAi:function(t,e){},Wp1V:function(t,e){},pr7D:function(t,e){},q2iS:function(t,e){},rMi3:function(t,e){},slAi:function(t,e){},szAm:function(t,e){},tRuW:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.e8c1d088244792f1b32d.js.map