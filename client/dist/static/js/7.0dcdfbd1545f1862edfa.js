webpackJsonp([7,19],{62:function(e,t){"use strict";function o(e){var t=e.toString(),o=a();return n(t,"蠢")||n(t,"呆")?o=t:"",n(t,"天气")?o="嗯！今天天气不错，心情也超棒！":"",n(t,"镜子")?o="不是镜子，是镜子(zi)，第四声，蛤，念错了吧":"",n(t,"笑话")?o="哈哈哈，好好笑，唔？你问我笑什么？不告诉你":"",n(t,"不好")?o="朕意已决(•̀ᴗ•́)و ̑̑  ，爱卿不用多说了":"",n(t,"你好")?o="哈，我很好，你呢":"",n(t,"是谁")?o="啊啊啊？不是我":"",n(t,"好")?o="是吧，哈哈，我也觉得挺好(｡◕ˇ∀ˇ◕）":"",n(t,"yo")?o="yo yo 切克闹ʅ（´◔౪◔）ʃ ":"",n(t,"?")||n(t,"?")?o="???啥":"",n(t,"歌")?o='我不唱歌，但是我喜欢听歌，我最近一直听 Justin Timberlake 的 <a href="http://122.228.24.213/m10.music.126.net/20161209204519/c435515c9899ca90b26a2885af685ad1/ymusic/83a3/c84a/ba48/693a7c7598b6ee3204be6d47a7f3d452.mp3?wshc_tag=0&wsts_tag=584aa183&wsid_tag=7d78e05e&wsiphost=ipdbm" target="_Blank">Mirrors</a>，':"",o}function n(e,t){return e.indexOf(t)!==-1}function a(){var e=["啊呃。。。智商有限。。。听不懂你在说什么","我在听,有话快说","说说你的路途见闻吧","你想被变成青蛙吗?","天哪!你真高!","祝你好运。","你有什么事吗?","来喝杯啤酒吗?","你好，旅行者","每一天，都是一个祝福","哈哈哈哈..."],t=parseInt(10*Math.random());return e[t]}Object.defineProperty(t,"__esModule",{value:!0}),t.default={AI:o,RandomWord:a}},104:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=o(411),i=n(a),A=o(61),r=n(A);t.default={data:function(){return{showMask:!1,showDeny:!1,showForm:!0,showLoading:!1,showAgree:!1,showCreateAccount:!1,where:{user_name:"",user_password:""},labelClass:"label-dark",headerClass:"header-upper",bottomText:""}},computed:{},mounted:function(){},methods:{blurInput:function(){this.showMask=!1,this.labelClass="label-dark"},focusInput:function(){this.showMask=!0,this.labelClass="label-light"},submitInput:function(e){13===e.keyCode&&this.beforePost()},beforePost:function(){return this.where.user_name?(this.showForm=!1,this.showLoading=!0,this.headerClass="header-lower",void this.login()):void window.alert("请输入名字")},createAccount:function(e){return 13===e.keyCode&&this.showCreateAccount?void this.register():13!==e.keyCode||this.showCreateAccount?void 0:void this.login()},register:function(){var e=this,t=this.where;this.$http.post("/api/users/registerUser",t).then(function(t){10002===t.code&&(window.alert("创建成功，登陆一下吧"),e.tryAgain()),console.log(t)}).catch(function(e){console.log(e)})},login:function(){var e=this;setTimeout(function(){e.tryAgain()},2e3)},tryAgain:function(){this.showDeny=!1,this.showDeny=!1,this.showForm=!0,this.where.user_password="",this.headerClass="header-upper"},reDirect:function(){var e=this.$route.query;console.log(e),e.redirect&&this.$router.replace({path:e.redirect})}},watch:{showForm:function(e){this.showMask=e}},components:{loading:r.default,bottomText:i.default}}},109:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=o(62),i=n(a);t.default={name:"bottomText",componentName:"bottomText",props:{color:String,size:Number},mounted:function(){this.initBottomText()},methods:{initBottomText:function(){this.bottomText=i.default.RandomWord()}},data:function(){return{bottomText:""}}}},136:function(e,t,o){t=e.exports=o(2)(),t.push([e.id,".bottom-bar[data-v-195af426]{position:absolute;bottom:5px;left:50%;color:#999;font-size:14px;transform:translateX(-50%)}","",{version:3,sources:["/./src/packages/bottomText.vue"],names:[],mappings:"AACA,6BACE,kBAAmB,AACnB,WAAY,AACZ,SAAU,AACV,WAAY,AACZ,eAAgB,AAChB,0BAA4B,CAC7B",file:"bottomText.vue",sourcesContent:["\n.bottom-bar[data-v-195af426] {\n  position: absolute;\n  bottom: 5px;\n  left: 50%;\n  color: #999;\n  font-size: 14px;\n  transform: translateX(-50%);\n}\n"],sourceRoot:"webpack://"}])},144:function(e,t,o){t=e.exports=o(2)(),t.push([e.id,".header[data-v-3560992e]{transition:all 1s;position:relative;top:0}.header-upper[data-v-3560992e]{filter:blur(3px)}.header-lower[data-v-3560992e],.header-upper[data-v-3560992e]{font-size:80px;text-align:center;padding-top:50px;color:#f3f3f3;cursor:default}.header-lower[data-v-3560992e]{filter:blur(1px);top:50px}.login-form[data-v-3560992e]{width:400px;margin:40px auto;height:300px;text-align:center;position:relative}.form-group[data-v-3560992e]{position:absolute;width:100%;padding-top:20px;font-size:30px}.form-group input[data-v-3560992e]{width:100%;border:0;padding:15px;border-radius:30px;font-size:30px;font-weight:100;outline:none;color:#444;z-index:10;position:relative;box-shadow:0 0 8px rgba(0,0,0,.1);box-sizing:border-box}.form-group input[data-v-3560992e]::-webkit-input-placeholder{font-size:30px;font-weight:100}.moodsLogin-layout[data-v-3560992e]{background-color:#e6e6e6;height:100%}.input-mask[data-v-3560992e]{width:100%;height:100%;background-color:rgba(0,0,0,.6);position:fixed;top:0;left:0;z-index:0}.input-bottom[data-v-3560992e]{font-size:20px;text-align:left;position:relative;z-index:10}.input-label[data-v-3560992e]{position:relative;font-size:20px;display:inline-block;left:30px}.submitBtn[data-v-3560992e]{position:absolute;font-size:15px;display:inline-block;right:30px;cursor:pointer}.container[data-v-3560992e]{padding:50px}.label-dark[data-v-3560992e]{color:#555}.label-light[data-v-3560992e]{color:#fff}.password-container input[data-v-3560992e]{width:100%;border:0;padding:15px;border-radius:30px;font-size:30px;font-weight:100;outline:none;color:#444;z-index:10;position:relative;box-shadow:0 0 8px rgba(0,0,0,.1);box-sizing:border-box}.password-container[data-v-3560992e]{position:absolute;width:400px;font-size:20px;top:0;left:50%;color:#888;transform:translateX(-50%)}.password-container a[data-v-3560992e]{font-size:15px}.moodsLogin-enter-active[data-v-3560992e],.moodsLogin-leave-active[data-v-3560992e]{transition:all .3s;position:absolute;transform:translateY(0);opacity:1}.moodsLogin-enter[data-v-3560992e],.moodsLogin-leave-active[data-v-3560992e]{transform:translateY(-40px);opacity:0}.moods-fade-enter-active[data-v-3560992e],.moods-fade-leave-active[data-v-3560992e]{transition:all .3s;opacity:1}.moods-fade-enter[data-v-3560992e],.moods-fade-leave-active[data-v-3560992e]{opacity:0}.loading-enter-active[data-v-3560992e],.loading-leave-active[data-v-3560992e]{transition:all .5s;opacity:1}.loading-enter[data-v-3560992e],.loading-leave-active[data-v-3560992e]{opacity:0}.password-enter-active[data-v-3560992e],.password-leave-active[data-v-3560992e]{transition:all .5s;position:absolute;top:0;opacity:1}.password-enter[data-v-3560992e],.password-leave-active[data-v-3560992e]{top:45%;opacity:0}","",{version:3,sources:["/./src/demos/moodsLogin.vue"],names:[],mappings:"AACA,yBACE,kBAAmB,AACnB,kBAAmB,AACnB,KAAO,CACR,AACD,+BAME,gBAAkB,CACnB,AACD,8DAPE,eAAgB,AAChB,kBAAmB,AACnB,iBAAkB,AAClB,cAAe,AACf,cAAgB,CAWjB,AARD,+BAME,iBAAkB,AAClB,QAAU,CACX,AACD,6BACE,YAAa,AACb,iBAAkB,AAClB,aAAc,AACd,kBAAmB,AACnB,iBAAmB,CAEpB,AACD,6BACE,kBAAmB,AACnB,WAAY,AACZ,iBAAkB,AAClB,cAAgB,CACjB,AACD,mCACE,WAAY,AAGZ,SAAe,AAEf,aAAc,AACd,mBAAoB,AACpB,eAAgB,AAChB,gBAAiB,AACjB,aAAc,AACd,WAAY,AACZ,WAAY,AACZ,kBAAmB,AACnB,kCAAoC,AACpC,qBAAuB,CACxB,AACD,8DACE,eAAgB,AAChB,eAAiB,CAClB,AAWD,oCACE,yBAA0B,AAC1B,WAAa,CACd,AACD,6BACE,WAAY,AACZ,YAAa,AACb,gCAAiC,AACjC,eAAgB,AAChB,MAAO,AACP,OAAQ,AACR,SAAW,CACZ,AACD,+BACE,eAAgB,AAChB,gBAAiB,AACjB,kBAAmB,AACnB,UAAY,CACb,AACD,8BACE,kBAAmB,AACnB,eAAgB,AAChB,qBAAsB,AACtB,SAAW,CACZ,AACD,4BACE,kBAAmB,AAEnB,eAAgB,AAChB,qBAAsB,AACtB,WAAY,AACZ,cAAgB,CACjB,AACD,4BACE,YAAc,CACf,AACD,6BACE,UAAY,CACb,AACD,8BACE,UAAY,CACb,AACD,2CACE,WAAY,AAGZ,SAAe,AAEf,aAAc,AACd,mBAAoB,AACpB,eAAgB,AAChB,gBAAiB,AACjB,aAAc,AACd,WAAY,AACZ,WAAY,AACZ,kBAAmB,AACnB,kCAAoC,AACpC,qBAAuB,CACxB,AACD,qCACE,kBAAmB,AACnB,YAAa,AACb,eAAgB,AAChB,MAAO,AACP,SAAU,AACV,WAAe,AACf,0BAA4B,CAE7B,AACD,uCACE,cAAgB,CACjB,AAED,oFACE,mBAAoB,AACpB,kBAAmB,AACnB,wBAAyB,AACzB,SAAW,CACZ,AACD,6EACE,4BAA6B,AAC7B,SAAW,CACZ,AACD,oFACE,mBAAoB,AACpB,SAAW,CACZ,AACD,6EACE,SAAW,CACZ,AACD,8EACE,mBAAoB,AACpB,SAAW,CACZ,AACD,uEACE,SAAW,CACZ,AACD,gFACE,mBAAoB,AACpB,kBAAmB,AACnB,MAAO,AACP,SAAW,CACZ,AACD,yEACE,QAAS,AACT,SAAW,CACZ",file:"moodsLogin.vue",sourcesContent:["\n.header[data-v-3560992e] {\n  transition: all 1s;\n  position: relative;\n  top: 0;\n}\n.header-upper[data-v-3560992e] {\n  font-size: 80px;\n  text-align: center;\n  padding-top: 50px;\n  color: #f3f3f3;\n  cursor: default;\n  filter: blur(3px);\n}\n.header-lower[data-v-3560992e] {\n  font-size: 80px;\n  text-align: center;\n  padding-top: 50px;\n  color: #f3f3f3;\n  cursor: default;\n  filter: blur(1px);\n  top: 50px;\n}\n.login-form[data-v-3560992e] {\n  width: 400px;\n  margin: 40px auto;\n  height: 300px;\n  text-align: center;\n  position: relative;\n  /*box-shadow: 1px 1px 3px rgba(0,0,0,.2);*/\n}\n.form-group[data-v-3560992e] {\n  position: absolute;\n  width: 100%;\n  padding-top: 20px;\n  font-size: 30px;\n}\n.form-group input[data-v-3560992e] {\n  width: 100%;\n  border-top: 0;\n  border-right: 0;\n  border-left: 0;\n  border-bottom: 0;\n  padding: 15px;\n  border-radius: 30px;\n  font-size: 30px;\n  font-weight: 100;\n  outline: none;\n  color: #444;\n  z-index: 10;\n  position: relative;\n  box-shadow: 0 0 8px rgba(0,0,0,0.1);\n  box-sizing: border-box;\n}\n.form-group input[data-v-3560992e]::-webkit-input-placeholder{\n  font-size: 30px;\n  font-weight: 100;\n}\n/*.form-group:hover::after {\n  content: '';\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  background-color: #000;\n  position: absolute;\n}*/\n.moodsLogin-layout[data-v-3560992e] {\n  background-color: #e6e6e6;\n  height: 100%;\n}\n.input-mask[data-v-3560992e] {\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0,0,0,.6);\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 0;\n}\n.input-bottom[data-v-3560992e] {\n  font-size: 20px;\n  text-align: left;\n  position: relative;\n  z-index: 10;\n}\n.input-label[data-v-3560992e] {\n  position: relative;\n  font-size: 20px;\n  display: inline-block;\n  left: 30px;\n}\n.submitBtn[data-v-3560992e] {\n  position: absolute;\n  /*right: 30px;*/\n  font-size: 15px;\n  display: inline-block;\n  right: 30px;\n  cursor: pointer;\n}\n.container[data-v-3560992e] {\n  padding: 50px;\n}\n.label-dark[data-v-3560992e] {\n  color: #555;\n}\n.label-light[data-v-3560992e] {\n  color: #fff;\n}\n.password-container input[data-v-3560992e] {\n  width: 100%;\n  border-top: 0;\n  border-right: 0;\n  border-left: 0;\n  border-bottom: 0;\n  padding: 15px;\n  border-radius: 30px;\n  font-size: 30px;\n  font-weight: 100;\n  outline: none;\n  color: #444;\n  z-index: 10;\n  position: relative;\n  box-shadow: 0 0 8px rgba(0,0,0,0.1);\n  box-sizing: border-box;\n}\n.password-container[data-v-3560992e] {\n  position: absolute;\n  width: 400px;\n  font-size: 20px;\n  top: 0;\n  left: 50%;\n  color: #888888;\n  transform: translateX(-50%);\n  /*top: 0;*/\n}\n.password-container a[data-v-3560992e] {\n  font-size: 15px;\n}\n/*动画*/\n.moodsLogin-enter-active[data-v-3560992e], .moodsLogin-leave-active[data-v-3560992e] {\n  transition: all .3s;\n  position: absolute;\n  transform: translateY(0);\n  opacity: 1;\n}\n.moodsLogin-enter[data-v-3560992e], .moodsLogin-leave-active[data-v-3560992e] {\n  transform: translateY(-40px);\n  opacity: 0;\n}\n.moods-fade-enter-active[data-v-3560992e], .moods-fade-leave-active[data-v-3560992e] {\n  transition: all .3s;\n  opacity: 1;\n}\n.moods-fade-enter[data-v-3560992e], .moods-fade-leave-active[data-v-3560992e] {\n  opacity: 0;\n}\n.loading-enter-active[data-v-3560992e], .loading-leave-active[data-v-3560992e] {\n  transition: all .5s;\n  opacity: 1;\n}\n.loading-enter[data-v-3560992e], .loading-leave-active[data-v-3560992e] {\n  opacity: 0;\n}\n.password-enter-active[data-v-3560992e], .password-leave-active[data-v-3560992e] {\n  transition: all .5s;\n  position: absolute;\n  top: 0;\n  opacity: 1;\n}\n.password-enter[data-v-3560992e], .password-leave-active[data-v-3560992e] {\n  top: 45%;\n  opacity: 0;\n}\n"],sourceRoot:"webpack://"}])},166:function(e,t,o){var n=o(136);"string"==typeof n&&(n=[[e.id,n,""]]);o(3)(n,{});n.locals&&(e.exports=n.locals)},175:function(e,t,o){var n=o(144);"string"==typeof n&&(n=[[e.id,n,""]]);o(3)(n,{});n.locals&&(e.exports=n.locals)},406:function(e,t,o){var n,a;o(175),n=o(104);var i=o(432);a=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(a=n=n.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,a._scopeId="data-v-3560992e",e.exports=n},411:function(e,t,o){var n,a;o(166),n=o(109);var i=o(423);a=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(a=n=n.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,a._scopeId="data-v-195af426",e.exports=n},423:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"bottom-bar",style:{color:e.color,fontSize:e.size+"px"}},[e._v(e._s(e.bottomText))])},staticRenderFns:[]}},432:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("transition",{attrs:{name:"fade"}},[o("div",{staticClass:"moodsLogin-layout"},[o("div",{staticClass:"container"},[o("header",{staticClass:"header",class:e.headerClass},[e._v("\n        With You\n      ")]),e._v(" "),o("div",{staticClass:"login-form"},[o("div",{staticClass:"form-group"},[o("transition",{attrs:{name:"moodsLogin"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.where.user_name,expression:"where.user_name"},{name:"show",rawName:"v-show",value:e.showForm,expression:"showForm"}],attrs:{autocomplete:"off",type:"text",name:"name",placeholder:"你的名字"},domProps:{value:e._s(e.where.user_name)},on:{blur:e.blurInput,focus:e.focusInput,keypress:e.submitInput,input:function(t){t.target.composing||(e.where.user_name=t.target.value)}}})])],1),e._v(" "),o("transition",{attrs:{name:"moods-fade"}},[o("div",{directives:[{name:"show",rawName:"v-show",value:e.showMask,expression:"showMask"}],staticClass:"input-mask",on:{click:e.blurInput}})]),e._v(" "),o("transition",{attrs:{name:"password"}},[o("div",{directives:[{name:"show",rawName:"v-show",value:e.showDeny,expression:"showDeny"}],staticClass:"password-container"},[o("p",{directives:[{name:"show",rawName:"v-show",value:!e.showCreateAccount,expression:"!showCreateAccount"}]},[e._v("\n              输入 "+e._s(e.where.user_name)+" 的密码\n            ")]),e._v(" "),o("p",{directives:[{name:"show",rawName:"v-show",value:e.showCreateAccount,expression:"showCreateAccount"}]},[e._v("用户 "+e._s(e.where.user_name)+" 不存在"),o("br"),e._v("输入一个密码以创建一个新用户")]),e._v(" "),o("p",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.where.user_password,expression:"where.user_password"}],attrs:{type:"text",placeholder:"输入密码"},domProps:{value:e._s(e.where.user_password)},on:{keypress:e.createAccount,input:function(t){t.target.composing||(e.where.user_password=t.target.value)}}})]),e._v(" "),o("a",{attrs:{href:"javascript:;"},on:{click:e.tryAgain}},[e._v("返回")])])]),e._v(" "),o("transition",{attrs:{name:"loading"}},[o("loading",{directives:[{name:"show",rawName:"v-show",value:e.showLoading,expression:"showLoading"}],attrs:{top:"60px"}})],1)],1),e._v(" "),o("bottom-text")],1)])])},staticRenderFns:[]}}});
//# sourceMappingURL=7.0dcdfbd1545f1862edfa.js.map