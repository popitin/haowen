webpackJsonp([15,19],{95:function(t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"Dashboard",data:function(){return{nav:[{title:"Blog",url:"/blog",target:""},{title:"Github",url:"https://github.com/haowen737",target:"_blank"},{title:"微博",url:"http://weibo.com/311170900/",target:"_blank"},{title:"知乎",url:"https://zhuanlan.zhihu.com/fe-sketch",target:"_blank"},{title:"聊天室",url:"https://discord.gg/HcvpmuK",target:"_blank"}]}},methods:{draw:function(){}}}},139:function(t,n,a){n=t.exports=a(2)(),n.push([t.id,"#canvas[data-v-2bb7d190]{position:absolute;top:0;left:0;width:100%;height:100%;z-index:0}header[data-v-2bb7d190]{font-size:2rem;margin:2rem}header[data-v-2bb7d190],nav[data-v-2bb7d190],summary[data-v-2bb7d190]{animation:slide-down .7s ease}nav[data-v-2bb7d190]{margin:2rem 0}nav>span[data-v-2bb7d190]{padding:0 10px}.page[data-v-2bb7d190]{display:flex;justify-content:center;align-items:center;flex-direction:column}@keyframes slide-down{0%{display:none;opacity:0;transform:translateY(-30%)}to{display:block;opacity:1;transform:translateY(0)}}","",{version:3,sources:["/./src/components/Dashboard.vue"],names:[],mappings:"AACA,yBACE,kBAAmB,MAAO,OAAQ,WAAY,YAAa,SAAW,CACvE,AACD,wBACE,eAAgB,AAChB,WAAa,CAEd,AAID,sEALE,6BAA+B,CAQhC,AAHD,qBACE,aAAe,CAEhB,AACD,0BACE,cAAgB,CACjB,AACD,uBACE,aAAc,AACd,uBAAwB,AACxB,mBAAoB,AACpB,qBAAuB,CACxB,AACD,sBACA,GACI,aAAc,AACd,UAAW,AACX,0BAA4B,CAC/B,AACD,GACI,cAAe,AACf,UAAW,AACX,uBAAyB,CAC5B,CACA",file:"Dashboard.vue",sourcesContent:["\n#canvas[data-v-2bb7d190] {\n  position: absolute;top: 0;left: 0;width: 100%;height: 100%;z-index: 0;\n}\nheader[data-v-2bb7d190] {\n  font-size: 2rem;\n  margin: 2rem;\n  animation: slide-down .7s ease;\n}\nsummary[data-v-2bb7d190] {\n  animation: slide-down .7s ease;\n}\nnav[data-v-2bb7d190] {\n  margin: 2rem 0;\n  animation: slide-down .7s ease;\n}\nnav>span[data-v-2bb7d190] {\n  padding: 0 10px;\n}\n.page[data-v-2bb7d190] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n@keyframes slide-down {\n0% {\n    display: none;\n    opacity: 0;\n    transform: translateY(-30%);\n}\n100% {\n    display: block;\n    opacity: 1;\n    transform: translateY(0);\n}\n}\n"],sourceRoot:"webpack://"}])},170:function(t,n,a){var e=a(139);"string"==typeof e&&(e=[[t.id,e,""]]);a(3)(e,{});e.locals&&(t.exports=e.locals)},397:function(t,n,a){var e,s;a(170),e=a(95);var r=a(427);s=e=e||{},"object"!=typeof e.default&&"function"!=typeof e.default||(s=e=e.default),"function"==typeof s&&(s=s.options),s.render=r.render,s.staticRenderFns=r.staticRenderFns,s._scopeId="data-v-2bb7d190",t.exports=e},427:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"page"},[a("header",[t._v("Haowen")]),t._v(" "),a("summary",[t._v("Code · Design · Create · Capture · Inspire")]),t._v(" "),a("nav",t._l(t.nav,function(n){return a("span",[n.target?a("a",{attrs:{href:n.url,target:n.target}},[t._v(t._s(n.title))]):a("router-link",{attrs:{to:{path:n.url}}},[t._v(t._s(n.title))])],1)}))])},staticRenderFns:[]}}});
//# sourceMappingURL=15.beb268b877542b999e89.js.map