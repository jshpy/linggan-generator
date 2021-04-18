(()=>{"use strict";var t={192:(t,e,n)=>{n.d(e,{Z:()=>o}),e=n(645),(e=n.n(e)()((function(t){return t[1]}))).push([t.id,"body{margin:0;padding:0;box-sizing:border-box}html{font-size:16px;font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:#333}.text-content{padding-left:50px;padding-top:20px;user-select:none}.text-content p{margin:0;margin-top:5px;margin-bottom:5px;user-select:unset}.text-content p>span{color:#27ae60}.text-content .en{margin-top:20px}#content{display:grid;grid-template-columns:1fr minmax(800px, 1440px) 1fr;height:100vh;align-items:center}#content #left{grid-column:1/2}#content #center{grid-column:2/3;height:600px;position:relative}#content #right{grid-column:3/4}#human-img{position:absolute;right:100px;bottom:0px}#shanghai-img{position:absolute;left:50px;bottom:0px;z-index:-1}#sun-img{position:absolute;right:300px;top:50px;filter:saturate(500%);cursor:pointer}#sun-img:hover{filter:saturate(800%)}#bird-img{position:absolute;right:200px;top:50px}#plane-img{position:absolute;left:200px;bottom:50px}#social-icon{position:absolute;right:100px;bottom:20px}#social-icon div{margin-top:10px;cursor:pointer;transition:all .25s ease}#social-icon div:hover{transition:all .25s ease;transform:scale(1.2)}#social-icon #wchat{position:relative;right:2px;top:3px}#wchat-qr{position:absolute;right:68px;bottom:130px}#wchat-qr img{height:100px}",""]);const o=e},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,o){"string"==typeof t&&(t=[[null,t,""]]);var i={};if(o)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(i[a]=!0)}for(var c=0;c<t.length;c++){var s=[].concat(t[c]);o&&i[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),e.push(s))}},e}},379:(t,e,n)=>{var o,i,r=(i={},function(t){if(void 0===i[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}i[t]=e}return i[t]}),a=[];function c(t){for(var e=-1,n=0;n<a.length;n++)if(a[n].identifier===t){e=n;break}return e}function s(t,e){for(var n={},o=[],i=0;i<t.length;i++){var r=t[i],s=e.base?r[0]+e.base:r[0],p=n[s]||0,u="".concat(s," ").concat(p);n[s]=p+1,p=c(u),r={css:r[1],media:r[2],sourceMap:r[3]},-1!==p?(a[p].references++,a[p].updater(r)):a.push({identifier:u,updater:function(t,e){var n,o,i,r;return i=e.singleton?(r=m++,n=f=f||l(e),o=d.bind(null,n,r,!1),d.bind(null,n,r,!0)):(n=l(e),o=function(t,e,n){var o=n.css,i=n.media;if(n=n.sourceMap,i?t.setAttribute("media",i):t.removeAttribute("media"),n&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(n))))," */")),t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}.bind(null,n,e),function(){!function(t){null!==t.parentNode&&t.parentNode.removeChild(t)}(n)}),o(t),function(e){e?e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap||o(t=e):i()}}(r,e),references:1}),o.push(u)}return o}function l(t){var e,o=document.createElement("style"),i=t.attributes||{};if(void 0!==i.nonce||(e=n.nc)&&(i.nonce=e),Object.keys(i).forEach((function(t){o.setAttribute(t,i[t])})),"function"==typeof t.insert)t.insert(o);else{if(!(t=r(t.insert||"head")))throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(o)}return o}var p,u=(p=[],function(t,e){return p[t]=e,p.filter(Boolean).join("\n")});function d(t,e,n,o){n=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css,t.styleSheet?t.styleSheet.cssText=u(e,n):(o=document.createTextNode(n),(n=t.childNodes)[e]&&t.removeChild(n[e]),n.length?t.insertBefore(o,n[e]):t.appendChild(o))}var f=null,m=0;t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o=void 0===o?Boolean(window&&document&&document.all&&!window.atob):o);var n=s(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var o=0;o<n.length;o++){var i=c(n[o]);a[i].references--}t=s(t,e);for(var r=0;r<n.length;r++){var l=c(n[r]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}n=t}}}}},e={};function n(o){var i=e[o];return void 0!==i||(i=e[o]={id:o,exports:{}},t[o](i,i.exports,n)),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&((t=e.currentScript?e.currentScript.src:t)||(e=e.getElementsByTagName("script")).length&&(t=e[e.length-1].src)),!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),(()=>{var t=n(379),e=n.n(t),o=n(192);t={insert:"head",singleton:!1},e()(o.Z,t),o.Z.locals;const i=n.p+"5b911bacd4931e183dd6cec378df28a9.jpg";!function(){var t=document.getElementById("wchat-qr"),e=document.createElement("img");e.src=i,t.style.visibility="hidden",t.appendChild(e),(e=document.getElementById("wchat")).onmouseover=function(e){t.style.visibility="visible"},e.onmouseleave=function(e){t.style.visibility="hidden"}}()})()})();