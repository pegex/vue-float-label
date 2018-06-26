!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.vueFloatLabel=t():e.vueFloatLabel=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=2)}([function(e,t,n){n(7);var r=n(5)(n(1),n(6),null,null);e.exports=r.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"float-label",props:{on:{type:Boolean,default:!0},fixed:{type:Boolean,default:!1},label:{type:String,default:""},dispatch:{type:Boolean,default:!0},for:{type:String,default:null}},data:function(){return{formEl:void 0,labelEl:void 0,isActive:!1,isFocused:!1}},mounted:function(){var e=this;this.$nextTick(function(){e.formEl=e.$el.querySelector("input, textarea, select"),e.formEl&&(e.formEl.addEventListener("input",e.updateIsActive),e.formEl.addEventListener("input",e.updateIsFocused),e.formEl.addEventListener("blur",e.updateIsFocused),e.formEl.addEventListener("focus",e.updateIsFocused),e.for||(e.labelEl=e.$el.querySelector("label"),e.labelEl.addEventListener("click",e.focusFormEl)),e.dispatchInput())})},beforeDestroy:function(){this.formEl.removeEventListener("input",this.updateIsActive),this.formEl.removeEventListener("input",this.updateIsFocused),this.formEl.removeEventListener("blur",this.updateIsFocused),this.formEl.removeEventListener("focus",this.updateIsFocused)},methods:{dispatchInput:function(){if(this.dispatch){var e=document.createEvent("HTMLEvents");e.initEvent("input",!0,!1),this.formEl.dispatchEvent(e)}},focusFormEl:function(){this.formEl.focus()},updateIsActive:function(e){this.isActive=e.target.value.length>0},updateIsFocused:function(e){this.isFocused=e.target===document.activeElement&&this.isActive}},computed:{inputId:function(){return this.for},classObject:function(){return{"vfl-label-on-input":this.on&&(this.isActive||this.fixed),"vfl-label-on-focus":this.isFocused}},formElType:function(){return this.formEl?this.formEl.tagName.toLowerCase():""},floatLabel:function(){if(this.label)return this.label;switch(this.formElType){case"input":case"textarea":return this.formEl.placeholder;case"select":return this.formEl.querySelector("option[disabled][selected]").innerHTML;default:return""}}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=function(e){return e&&e.__esModule?e:{default:e}}(r),s={install:function(e,t){e.component(o.default.name,o.default)}};"undefined"!=typeof window&&window.Vue&&window.Vue.use(s),t.default=s},function(e,t,n){t=e.exports=n(4)(),t.push([e.i,".vfl-has-label{position:relative}.vfl-label{position:absolute;top:0;right:0;left:.1em;overflow:hidden;font-family:sans-serif;font-size:.8em;color:#aaa;text-overflow:ellipsis;white-space:nowrap;pointer-events:none;opacity:0;transition:all .2s ease-out}.vfl-label-on-input{top:-1.3em;pointer-events:all;opacity:1}.vfl-label-on-focus{color:#0074d9}.vfl-has-label input:focus,.vfl-has-label select:focus,.vfl-has-label textarea:focus{outline:0}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var s=this[o][0];"number"==typeof s&&(r[s]=!0)}for(o=0;o<t.length;o++){var i=t[o];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},function(e,t){e.exports=function(e,t,n,r){var o,s=e=e||{},i=typeof e.default;"object"!==i&&"function"!==i||(o=e,s=e.default);var a="function"==typeof s?s.options:s;if(t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),n&&(a._scopeId=n),r){var l=Object.create(a.computed||null);Object.keys(r).forEach(function(e){var t=r[e];l[e]=function(){return t}}),a.computed=l}return{esModule:o,exports:s,options:a}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vfl-has-label"},[n("label",{staticClass:"vfl-label",class:e.classObject,attrs:{for:e.inputId}},[e._v("\n    "+e._s(e.floatLabel)+"\n  ")]),e._v(" "),e._t("default")],2)},staticRenderFns:[]}},function(e,t,n){var r=n(3);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(8)("fd9616aa",r,!0)},function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=f[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(s(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var i=[],o=0;o<n.parts.length;o++)i.push(s(n.parts[o]));f[n.id]={id:n.id,refs:1,parts:i}}}}function o(){var e=document.createElement("style");return e.type="text/css",c.appendChild(e),e}function s(e){var t,n,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(v)return h;r.parentNode.removeChild(r)}if(m){var s=p++;r=d||(d=o()),t=i.bind(null,r,s,!1),n=i.bind(null,r,s,!0)}else r=o(),t=a.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function i(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=b(t,o);else{var s=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(s,i[t]):e.appendChild(s)}}function a(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var l="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!l)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var u=n(9),f={},c=l&&(document.head||document.getElementsByTagName("head")[0]),d=null,p=0,v=!1,h=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){v=n;var o=u(e,t);return r(o),function(t){for(var n=[],s=0;s<o.length;s++){var i=o[s],a=f[i.id];a.refs--,n.push(a)}t?(o=u(e,t),r(o)):o=[];for(var s=0;s<n.length;s++){var a=n[s];if(0===a.refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete f[a.id]}}}};var b=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var n=[],r={},o=0;o<t.length;o++){var s=t[o],i=s[0],a=s[1],l=s[2],u=s[3],f={id:e+":"+o,css:a,media:l,sourceMap:u};r[i]?r[i].parts.push(f):n.push(r[i]={id:i,parts:[f]})}return n}}])});