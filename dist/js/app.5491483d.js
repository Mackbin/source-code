(function(e){function n(n){for(var r,o,i=n[0],u=n[1],f=n[2],s=0,d=[];s<i.length;s++)o=i[s],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(n);while(d.length)d.shift()();return c.push.apply(c,f||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],r=!0,o=1;o<t.length;o++){var i=t[o];0!==a[i]&&(r=!1)}r&&(c.splice(n--,1),e=u(u.s=t[0]))}return e}var r={},o={app:0},a={app:0},c=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-2d360c72":"bd066259","chunk-5a5b2d07":"00f683aa","chunk-253a751f":"0bdcc7eb","chunk-25fa863a":"8e24041b","chunk-284a4ef1":"3bb65e62","chunk-3aea7f93":"05c3af78","chunk-4288171a":"b5f13629","chunk-7dc4c540":"c47bbaee","chunk-bf743ece":"5aa1a572","chunk-c2c47044":"83f14b39"}[e]+".js"}function u(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.e=function(e){var n=[],t={"chunk-2d360c72":1,"chunk-4288171a":1,"chunk-7dc4c540":1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d360c72":"5cac861d","chunk-5a5b2d07":"31d6cfe0","chunk-253a751f":"31d6cfe0","chunk-25fa863a":"31d6cfe0","chunk-284a4ef1":"31d6cfe0","chunk-3aea7f93":"31d6cfe0","chunk-4288171a":"92796b6c","chunk-7dc4c540":"e4c7bc92","chunk-bf743ece":"31d6cfe0","chunk-c2c47044":"31d6cfe0"}[e]+".css",a=u.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var f=c[i],s=f.getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(s===r||s===a))return n()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){f=d[i],s=f.getAttribute("data-href");if(s===r||s===a)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var r=n&&n.target&&n.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],l.parentNode.removeChild(l),t(c)},l.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(l)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)n.push(r[2]);else{var c=new Promise((function(n,t){r=a[e]=[n,t]}));n.push(r[2]=c);var f,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=i(e);var d=new Error;f=function(n){s.onerror=s.onload=null,clearTimeout(l);var t=a[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,t[1](d)}a[e]=void 0}};var l=setTimeout((function(){f({type:"timeout",target:s})}),12e4);s.onerror=s.onload=f,document.head.appendChild(s)}return Promise.all(n)},u.m=e,u.c=r,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)u.d(t,r,function(n){return e[n]}.bind(null,r));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="/",u.oe=function(e){throw console.error(e),e};var f=window["webpackJsonp"]=window["webpackJsonp"]||[],s=f.push.bind(f);f.push=n,f=f.slice();for(var d=0;d<f.length;d++)n(f[d]);var l=s;c.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("cd49")},3125:function(e,n,t){"use strict";t.r(n);t("4917"),t("6b54"),t("a481");var r=t("7618"),o=(t("ac4d"),t("8a81"),"function"===typeof Symbol&&"symbol"===Object(r["a"])(Symbol.iterator)?function(e){return Object(r["a"])(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":Object(r["a"])(e)});Date.now=Date.now||function(){return(new Date).getTime()};var a=function(){},c={noop:a,win:"object"==("undefined"===typeof window?"undefined":o(window))&&window.document?window:void 0,createObject:function(e){if(Object.create)return Object.create(e);var n=function(){};return n.prototype=e,new n},safetyCall:function(e,n,t){if("function"!=typeof e)return t;try{return e.apply(this,n)}catch(r){return t}},each:function(e,n){var t=0,r=e.length;if(this.T(e,"Array"))for(;t<r&&!1!==n.call(e[t],e[t],t);t++);else for(t in e)if(!1===n.call(e[t],e[t],t))break;return e},T:function(e,n){var t=Object.prototype.toString.call(e).substring(8).replace("]","");return n?t===n:t},J:function(e){if(!e||"string"!=typeof e)return e;var n=null;try{n=JSON.parse(e)}catch(t){}return n},on:function(e,n,t,r){return e.addEventListener?e.addEventListener(n,(function o(a){r&&e.removeEventListener(n,o,!1),t.call(this,a)}),!1):e.attachEvent&&e.attachEvent("on"+n,(function o(a){r&&e.detachEvent("on"+n,o),t.call(this,a)})),this},off:function(e,n,t){return t?(e.removeEventListener?e.removeEventListener(n,t):e.detachEvent&&e.detachEvent(n,t),this):this},ext:function(e){for(var n=1,t=arguments.length;n<t;n++){var r=arguments[n];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},delay:function(e,n){return-1===n?(e(),null):setTimeout(e,n||0)},supportsPushState:function(){var e=window.navigator.userAgent;return(-1===e.indexOf("Android 2.")&&-1===e.indexOf("Android 4.0")||-1===e.indexOf("Mobile Safari")||-1!==e.indexOf("Chrome")||-1!==e.indexOf("Windows Phone"))&&(window.history&&"pushState"in window.history)}(),_getImgSrcFromBgImg:function(e){var n,t=e.match(/url\(.*?\)/g);if(t&&t.length){var r=t[t.length-1],o=r.replace(/^url\([\'\"]?/,"").replace(/[\'\"]?\)$/,"");(/^http/.test(o)||/^\/\//.test(o))&&(n=o)}return n},getImgSrcFromDom:function(e,n){if(!(e.getBoundingClientRect&&e.getBoundingClientRect().top<window.innerHeight))return!1;var t;if(n=[/(\.)(png|jpg|jpeg|gif|webp|ico|bmp|tiff|svg)/i],"IMG"==e.nodeName.toUpperCase())t=e.getAttribute("src");else{var r=window.getComputedStyle(e),o=r.getPropertyValue("background-image")||r.getPropertyValue("background"),a=this._getImgSrcFromBgImg(o,n);a&&this._isImg(a,n)&&(t=a)}return t},_isImg:function(e,n){for(var t=0,r=n.length;t<r;t++)if(n[t].test(e))return!0;return!1}};n["default"]=c},6681:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var r=function(){return Promise.all([t.e("chunk-5a5b2d07"),t.e("chunk-25fa863a")]).then(t.bind(null,"2735"))},o=function(){return Promise.all([t.e("chunk-5a5b2d07"),t.e("chunk-4288171a")]).then(t.bind(null,"bb51"))},a=function(){return t.e("chunk-2d360c72").then(t.bind(null,"cfdb"))},c=function(){return Promise.all([t.e("chunk-5a5b2d07"),t.e("chunk-7dc4c540")]).then(t.bind(null,"cefb"))},i=function(){return Promise.all([t.e("chunk-5a5b2d07"),t.e("chunk-3aea7f93")]).then(t.bind(null,"6814"))},u=function(){return Promise.all([t.e("chunk-5a5b2d07"),t.e("chunk-c2c47044")]).then(t.bind(null,"c7f4"))},f=function(){return Promise.all([t.e("chunk-5a5b2d07"),t.e("chunk-284a4ef1")]).then(t.bind(null,"4399"))},s=function(){return Promise.all([t.e("chunk-5a5b2d07"),t.e("chunk-253a751f")]).then(t.bind(null,"923d"))},d=function(){return Promise.all([t.e("chunk-5a5b2d07"),t.e("chunk-bf743ece")]).then(t.bind(null,"2139"))},l=[{name:"coCo",path:"/coCo",component:r,disc:"coCo"},{name:"Home",path:"/Home",component:o,disc:"Home"},{name:"monacoEditorMonacoEditor",path:"/monacoEditorMonacoEditor",component:a,disc:"monacoEditorMonacoEditor"},{name:"performanceApp",path:"/performanceApp",component:c,disc:"performanceApp"},{name:"vue-App",path:"/vue-App",component:i,disc:"vue-App"},{name:"vue3BindBind",path:"/vue3BindBind",component:s,disc:"vue3BindBind"},{name:"vue3ProxyProxy",path:"/vue3ProxyProxy",component:d,disc:"vue3ProxyProxy"},{name:"vueRenderComponents",path:"/vueRenderComponents",component:u,disc:"vueRenderComponents"},{name:"vueRenderRender",path:"/vueRenderRender",component:f,disc:"vueRenderRender"}]},"6f83":function(e,n,t){"use strict";t.r(n);var r=t("75fc"),o=t("3125"),a=500;n["default"]=function(e,n,t){function c(e,n,t){var r=0,o=e.tagName;if("SCRIPT"!==o&&"STYLE"!==o&&"META"!==o&&"HEAD"!==o){var a=e.children?e.children.length:0;if(a>0)for(var i=e.children,u=a-1;u>=0;u--)r+=c(i[u],n+1,r>0);if(r<=0&&!t&&!(e.getBoundingClientRect&&e.getBoundingClientRect().top<f))return 1;r+=1+.5*n}return r}var i=[];function u(e){for(var n=1;n<e.length;n++)if(e[n].score<e[n-1].score)return e.splice(n,1),u(e);return e}var f=n.innerHeight||0,s=[],d=null,l=0;o["default"].ext(e.prototype,{initFmpObserver:function(e){var r=this;if(!n.MutationObserver)return o["default"].warn("[retcode] first meaningful paint can not be retrieved"),r.setPerformance({}),null;function a(){performance&&performance.now()>2e3&&(r.endObserving(0,!0),o["default"].off(n,"touchstart",a))}o["default"].on(n,"touchstart",a);var i=n.MutationObserver;return(d=new i((function(){!function(e){var n=Date.now()-e,r=t.querySelector("body");if(r){var o=0;o+=c(r,1,!1),s.push({score:o,t:n})}else s.push({score:0,t:n})}(r._startTime)}))).observe(document.body,{childList:!0,subtree:!0}),l=1,r.onReady((function(){r.endObserving(e)})),d},endObserving:function(e,n){var t=this;if(d&&l)if(n||!function(e,n){var t=Date.now()-e;return!(t>n||t-(s&&s.length&&s[s.length-1].t||0)>2*a)}(t._startTime,e)){d.disconnect(),l=0,s=u(s);for(var c=null,f=1;f<s.length;f++)if(s[f].t>=s[f-1].t){var h=s[f].score-s[f-1].score;(!c||c.rate<=h)&&(c={t:s[f].t,rate:h})}this.fmp=c&&c.t||0;try{t.f(document.body);var p=Math.max.apply(Math,Object(r["a"])(i.map((function(e){/^(\/\/)/.test(e)&&(e="https:"+e);try{return performance.getEntriesByName(e)[0].responseEnd||0}catch(n){return 0}}))));c&&c.t>0&&c.t<36e5?t.setPerformance({fmp:parseInt(Math.max(c.t,p))}):t.setPerformance({}),window.eventHub.$emit("fmp",parseInt(Math.max(c.t,p)))}catch(m){t.setPerformance({})}}else o["default"].delay((function(){t.endObserving(e)}),a)},f:function(e){var n=this,t=e.tagName;if("SCRIPT"!==t&&"STYLE"!==t&&"META"!==t&&"HEAD"!==t){var r=o["default"].getImgSrcFromDom(e);r&&i.push(r);var a=e.children?e.children.length:0;if(a>0)for(var c=e.children,u=a-1;u>=0;u--)n.f(c[u])}}})}},"9cfa":function(e,n,t){"use strict";t.r(n),n["default"]=function(e,n){var r=t("3125").default||t("3125"),o=null;return r.ext(e.prototype,{activeErrHandler:function(e){return o&&!e?this:(o=this,this)},setPerformance:function(e){var n=this;n.onReady((function(){}))},sendPerformance:function(e){var n=this;n.onReady((function(){}))},handleUnload:function(e){var n=Date.now(),t=this;if(n-this._lastUnload<200)return this;this._lastUnload=n,function(){performance.now()>1e3&&t.sendPerformance()}()},bindHashChange:function(e){var t=this;e?(t.hashChangeHandler=function(e){performance.now()>1e3&&t.sendPerformance()},t.stateChangeHandler=function(e){performance.now()>1e3&&t.sendPerformance()},r.on(n,r.supportsPushState?"popstate":"hashchange",t.hashChangeHandler),r.on(n,"historystatechange",t.stateChangeHandler),t.hashChangeHandler(!1)):(r.off(n,"hashchange",t.hashChangeHandler),r.off(n,"historystatechange",t.stateChangeHandler),t.hashChangeHandler=null,t.stateChangeHandler=null)},initHandler:function(){var e=this;return e.hasInitHandler?e:(r.on(n,"beforeunload",(function(n){e.handleUnload(0)})),e.bindHashChange(!0),e.activeErrHandler(!1),e.hasInitHandler=!0,e)}}),e}},cd49:function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("f751"),t("097d");var r=t("a026"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},a=[],c=t("2877"),i={},u=Object(c["a"])(i,o,a,!1,null,null,null),f=u.exports,s=t("75fc"),d=t("8c4f"),l=t("6681");r["a"].use(d["a"]);var h=[{path:"/",redirect:"/Home"}].concat(Object(s["a"])(l["a"])),p=new d["a"]({routes:h}),m=t("2f62");r["a"].use(m["a"]);var v=new m["a"].Store({state:{},mutations:{},actions:{}}),g=t("7212"),b=t.n(g),y=t("9483");Object(y["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});t("dcad"),t("a7a3");var w=t("7618"),k=t("3125"),P=k["default"].win,O=P.document,E=function(e,n){this.vue=e;var t,r=this;try{t="object"==("undefined"===typeof performance?"undefined":Object(w["a"])(performance))?performance.timing.fetchStart:Date.now()}catch(r){t=Date.now()}this._startTime=t,r.initHandler(),r.initFmpObserver(1e4)};E.prototype=k["default"].ext(E.prototype,{constructor:E,onReady:function(e){var n=this;if(n.hasReady)return e();"complete"===O.readyState?(n.hasReady=!0,e()):k["default"].on(P,"load",(function(){n.hasReady=!0,e()}),!0)}});var C=t("6f83"),S=t("9cfa");"function"===typeof S?S(E,P,O):S.default(E,P,O),"function"===typeof C?C(E,P,O):C.default(E,P,O);var j=E;r["a"].config.productionTip=!1,r["a"].config.performance=!0,window.eventHub=new r["a"],r["a"].use(b.a),new j,new r["a"]({router:p,store:v,render:function(e){return e(f)}}).$mount("#app")}});
//# sourceMappingURL=app.5491483d.js.map