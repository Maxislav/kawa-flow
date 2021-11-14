(()=>{"use strict";var n={673:(n,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Greeter=class{constructor(n){this.name=n}greet(){console.log(`Hssi, ${this.name}!`)}}},848:(n,e,t)=>{t.d(e,{Z:()=>A});var i=t(844),r=t.n(i),o=t(518),a=t.n(o)()(r());a.push([n.id,".d-flex {\n  display: flex;\n}\n.d-flex.justify-content-start {\n  justify-content: flex-start;\n}\n.d-flex.justify-content-center {\n  justify-content: center;\n}\n.d-flex.justify-content-end {\n  justify-content: flex-end;\n}\n.d-flex.justify-content-between {\n  justify-content: space-between;\n}\n.d-flex.align-items-flex-start {\n  align-items: flex-start;\n}\n.d-flex.align-items-center {\n  align-items: center;\n}\n.d-flex.align-items-flex-end {\n  align-items: flex-end;\n}\nbody {\n  background: black;\n  height: 100%;\n  position: relative;\n  margin: 0;\n  padding: 0;\n  color: #deffcd;\n  font-family: Geneva, Arial, Helvetica, sans-serif;\n}\n.main-image {\n  width: 90%;\n  height: auto;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n}\n.container {\n  position: absolute;\n  z-index: 2;\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  align-items: center;\n}\n.container > div {\n  width: 640px;\n  padding: 20px;\n  background: rgba(0, 0, 0, 0.4);\n  border-radius: 5px;\n}\n.title {\n  font-size: 40px;\n  text-align: center;\n}\n.row {\n  width: 80%;\n  margin: 10px auto;\n}\n.line {\n  height: 5px;\n  background: red;\n}\n.line-mm {\n  transition: width 0.01s linear;\n}\n.line-ms {\n  transition: opacity 0.1s linear;\n}\n.row > .d-flex > div {\n  font-size: 30px;\n}\n.row > .d-flex > div:first-child {\n  flex-basis: 40%;\n}\n.row > .d-flex > div:nth-child(2) {\n  flex-basis: 10%;\n}\n.row > .d-flex > div:nth-child(3) {\n  flex-basis: 50%;\n}\n","",{version:3,sources:["webpack://./style/flex.less","webpack://./style/main.less"],names:[],mappings:"AAAA;EACE,aAAA;ACCF;ADCE;EACE,2BAAA;ACCJ;ADCE;EACE,uBAAA;ACCJ;ADEE;EACE,yBAAA;ACAJ;ADGE;EACE,8BAAA;ACDJ;ADIE;EACE,uBAAA;ACFJ;ADKE;EACE,mBAAA;ACHJ;ADME;EACE,qBAAA;ACJJ;AAtBA;EACE,iBAAA;EACA,YAAA;EACA,kBAAA;EACA,SAAA;EACA,UAAA;EACA,cAAA;EACA,iDAAA;AAwBF;AAtBA;EACE,UAAA;EACA,YAAA;EACA,kBAAA;EACA,MAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;EACA,YAAA;AAwBF;AArBA;EACE,kBAAA;EACA,UAAA;EACA,aAAA;EACA,uBAAA;EACA,WAAA;EACA,YAAA;EACA,mBAAA;AAuBF;AArBE;EACE,YAAA;EACA,aAAA;EACA,8BAAA;EACA,kBAAA;AAuBJ;AAnBA;EACE,eAAA;EACA,kBAAA;AAqBF;AAnBA;EACE,UAAA;EACA,iBAAA;AAqBF;AAlBA;EACE,WAAA;EACA,eAAA;AAoBF;AAlBE;EACE,8BAAA;AAoBJ;AAnBG;EACE,+BAAA;AAqBL;AAlBA;EACE,eAAA;AAoBF;AAlBE;EACE,eAAA;AAoBJ;AAjBE;EACE,eAAA;AAmBJ;AAhBE;EACE,eAAA;AAkBJ",sourcesContent:[".d-flex {\n  display: flex;\n\n  &.justify-content-start {\n    justify-content: flex-start;\n  }\n  &.justify-content-center {\n    justify-content: center;\n  }\n\n  &.justify-content-end {\n    justify-content: flex-end;\n  }\n\n  &.justify-content-between {\n    justify-content: space-between;\n  }\n\n  &.align-items-flex-start {\n    align-items: flex-start;\n  }\n\n  &.align-items-center {\n    align-items: center;\n  }\n\n  &.align-items-flex-end {\n    align-items: flex-end;\n  }\n}\n",'@import "flex.less";\nbody{\n  background: black;\n  height: 100%;\n  position: relative;\n  margin: 0;\n  padding: 0;\n  color: #deffcd;\n  font-family: Geneva, Arial, Helvetica, sans-serif;\n}\n.main-image{\n  width: 90%;\n  height: auto;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n}\n\n.container {\n  position: absolute;\n  z-index: 2;\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  align-items: center;\n\n  & > div {\n    width: 640px;\n    padding: 20px;\n    background: rgba(black, 0.4);\n    border-radius: 5px;\n  }\n}\n\n.title {\n  font-size: 40px;\n  text-align: center;\n}\n.row{\n  width: 80%;\n  margin: 10px auto;\n\n}\n.line{\n  height: 5px;\n  background: red;\n\n  &-mm{\n    transition: width 0.01s linear;\n  }&-ms{\n     transition: opacity 0.1s linear;\n   }\n}\n.row > .d-flex > div {\n  font-size: 30px;\n\n  &:first-child {\n    flex-basis: 40%;\n  }\n\n  &:nth-child(2) {\n    flex-basis: 10%;\n  }\n\n  &:nth-child(3) {\n    flex-basis: 50%;\n  }\n}\n'],sourceRoot:""}]);const A=a},518:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,i){"string"==typeof n&&(n=[[null,n,""]]);var r={};if(i)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(r[a]=!0)}for(var A=0;A<n.length;A++){var s=[].concat(n[A]);i&&r[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),e.push(s))}},e}},844:n=>{function e(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}n.exports=function(n){var t,i,r=(i=4,function(n){if(Array.isArray(n))return n}(t=n)||function(n,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n)){var t=[],i=!0,r=!1,o=void 0;try{for(var a,A=n[Symbol.iterator]();!(i=(a=A.next()).done)&&(t.push(a.value),!e||t.length!==e);i=!0);}catch(n){r=!0,o=n}finally{try{i||null==A.return||A.return()}finally{if(r)throw o}}return t}}(t,i)||function(n,t){if(n){if("string"==typeof n)return e(n,t);var i=Object.prototype.toString.call(n).slice(8,-1);return"Object"===i&&n.constructor&&(i=n.constructor.name),"Map"===i||"Set"===i?Array.from(n):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?e(n,t):void 0}}(t,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[1],a=r[3];if("function"==typeof btoa){var A=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(A),c="/*# ".concat(s," */"),l=a.sources.map((function(n){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(n," */")}));return[o].concat(l).concat([c]).join("\n")}return[o].join("\n")}},106:(n,e,t)=>{var i,r=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),o=[];function a(n){for(var e=-1,t=0;t<o.length;t++)if(o[t].identifier===n){e=t;break}return e}function A(n,e){for(var t={},i=[],r=0;r<n.length;r++){var A=n[r],s=e.base?A[0]+e.base:A[0],c=t[s]||0,l="".concat(s," ").concat(c);t[s]=c+1;var d=a(l),u={css:A[1],media:A[2],sourceMap:A[3]};-1!==d?(o[d].references++,o[d].updater(u)):o.push({identifier:l,updater:h(u,e),references:1}),i.push(l)}return i}function s(n){var e=document.createElement("style"),i=n.attributes||{};if(void 0===i.nonce){var o=t.nc;o&&(i.nonce=o)}if(Object.keys(i).forEach((function(n){e.setAttribute(n,i[n])})),"function"==typeof n.insert)n.insert(e);else{var a=r(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var c,l=(c=[],function(n,e){return c[n]=e,c.filter(Boolean).join("\n")});function d(n,e,t,i){var r=t?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(n.styleSheet)n.styleSheet.cssText=l(e,r);else{var o=document.createTextNode(r),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(o,a[e]):n.appendChild(o)}}function u(n,e,t){var i=t.css,r=t.media,o=t.sourceMap;if(r?n.setAttribute("media",r):n.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleSheet)n.styleSheet.cssText=i;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(i))}}var f=null,m=0;function h(n,e){var t,i,r;if(e.singleton){var o=m++;t=f||(f=s(e)),i=d.bind(null,t,o,!1),r=d.bind(null,t,o,!0)}else t=s(e),i=u.bind(null,t,e),r=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return i(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;i(n=e)}else r()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i));var t=A(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var i=0;i<t.length;i++){var r=a(t[i]);o[r].references--}for(var s=A(n,e),c=0;c<t.length;c++){var l=a(t[c]);0===o[l].references&&(o[l].updater(),o.splice(l,1))}t=s}}}},968:(n,e,t)=>{t.r(e),t.d(e,{default:()=>a});var i=t(106),r=t.n(i),o=t(848);r()(o.Z,{insert:"head",singleton:!1});const a=o.Z.locals||{}}},e={};function t(i){var r=e[i];if(void 0!==r)return r.exports;var o=e[i]={id:i,exports:{}};return n[i](o,o.exports,t),o.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var i in e)t.o(e,i)&&!t.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:e[i]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.r=n=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},(()=>{t(968),new(t(673).Greeter)("Juri").greet();const n=document.querySelector(".container .ww>div:first-child"),e=document.querySelector(".container .dd>div:first-child"),i=document.querySelector(".container .hh>div:first-child"),r=document.querySelector(".container .mm>div:first-child"),o=document.querySelector(".container .ss>div:first-child"),a=document.querySelector(".container .ms>div:first-child"),A=document.querySelector(".container .line-ww"),s=document.querySelector(".container .line-dd"),c=document.querySelector(".container .line-hh"),l=document.querySelector(".container .line-mm"),d=document.querySelector(".container .line-ss"),u=document.querySelector(".container .line-ms"),f=new Date(2022,2,2).getTime(),m=()=>{(()=>{const t=f-(new Date).getTime(),m=(h=t,h=Number(h),{ww:Math.floor(h/1e3/604800),dd:Math.floor(h/1e3/86400),hh:Math.floor(h/1e3%86400/3600),mm:Math.floor(h/1e3%3600/60),ss:Math.floor(h/1e3%60),ms:Math.floor(h%1e3)});var h;n.innerHTML=m.ww.toString(),A.style.width=t/6048e5%1*100+"%",e.innerHTML=m.dd.toString(),i.innerHTML=m.hh.toString(),s.style.width=Math.round(100*m.hh/24)+"%",r.innerHTML=m.mm.toString(),c.style.width=Math.round(100*m.mm/60)+"%",o.innerHTML=m.ss.toString(),l.style.width=(100*(m.ss+m.ms/1e3)/60).toFixed(1)+"%",a.innerHTML=m.ms.toString(),d.style.width=(100*m.ms/1e3).toFixed(1)+"%",u.style.opacity=(m.ms%2?0:1).toString()})(),window.requestAnimationFrame(m)};m()})()})();
//# sourceMappingURL=main.bundle.js.map