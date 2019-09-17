!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=15)}([,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);n(16);class r{constructor(){this.imageTemplate=document.querySelector("#imageTemplate"),this.imageContainer=document.querySelector("#imageContainer"),this.imageViewer=document.querySelector(".image-viewer"),this.mainImage=this.imageViewer.querySelector("img"),this.mainImageDownload=this.imageViewer.querySelector("#imageDownload"),this.emptyText=document.querySelector("#emptyText"),this.closeButton=document.querySelector("#closeButton"),this.prevButton=document.querySelector("#prevButton"),this.nextButton=document.querySelector("#nextButton"),this.mainBrowser=document.querySelector(".main-browser"),this.imageDescription=document.querySelector(".image-description"),this.filename="",this.images=[],this.currentIndex=-1,this.unhookNavigation=this.hookNavigation(),this.closeButton.addEventListener("click",this.close.bind(this)),this.prevButton.addEventListener("click",this.prevImage.bind(this)),this.nextButton.addEventListener("click",this.nextImage.bind(this))}hookNavigation(){const e=e=>{-1!==this.currentIndex&&(37===e.keyCode?this.prevImage():39===e.keyCode?this.nextImage():27===e.keyCode&&this.close())};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)}createImageURL(e){return URL.createObjectURL(new Blob([e],{type:"image/jpeg"}))}createImage(e){const t=this.imageTemplate.content.cloneNode(!0).childNodes[0],n=t.querySelector("img");return t.classList.add("image-thumbnail"),t.classList.remove("d-none"),n.addEventListener("error",()=>{console.error("Failed to load image"),URL.revokeObjectURL(e),this.images.splice(this.images.indexOf(e),1),requestAnimationFrame(()=>this.updateImages())}),n.src=e,t}update(e){this.images=e.map(e=>this.createImageURL(e)),this.updateImages()}clear(){this.clearImages(),this.images.forEach(e=>URL.revokeObjectURL(e)),this.images=[],this.emptyText.classList.remove("d-none")}clearImages(){const e=this.imageContainer.querySelectorAll(".image-thumbnail");for(const t of e)this.imageContainer.removeChild(t)}updateImages(){if(this.clearImages(),this.images.length){this.emptyText.classList.add("d-none");for(let e=0;e<this.images.length;e++){const t=this.createImage(this.images[e]);t.addEventListener("click",this.showImage.bind(this,e)),this.imageContainer.appendChild(t)}}else this.emptyText.classList.remove("d-none")}showImage(e){const t=this.images[e],n=this.filename+"_"+e+".jpg";this.mainImage.src=t,this.mainImageDownload.href=t,this.mainImageDownload.download=n,this.mainImageDownload.title="Download "+n,this.imageViewer.classList.remove("d-none"),this.mainBrowser.classList.add("d-none"),this.currentIndex=e,this.imageDescription.textContent=`Image ${e+1} of ${this.images.length}`,0===e?this.prevButton.setAttribute("disabled","true"):this.prevButton.removeAttribute("disabled"),e===this.images.length-1?this.nextButton.setAttribute("disabled","true"):this.nextButton.removeAttribute("disabled")}nextImage(){const e=this.currentIndex+1;e>=this.images.length||this.showImage(e)}prevImage(){const e=this.currentIndex-1;e<0||this.showImage(e)}close(){this.currentIndex=-1,this.imageViewer.classList.add("d-none"),this.mainBrowser.classList.remove("d-none")}}window.addEventListener("DOMContentLoaded",()=>{const e=new r,t={fileOpen:document.querySelector("#filePickerOpen"),filePicker:document.querySelector("#filePicker"),progressContainer:document.querySelector(".progress"),progress:document.querySelector(".progress-bar"),progressText:document.querySelector(".progress-text")};t.filePicker.addEventListener("change",n=>{const r=n.target;if(!r.files||!r.files.length)return;let o=r.files[0];t.progressText.classList.remove("d-none"),t.progressContainer.classList.remove("d-none"),t.progress.style.width="0%",t.progress.textContent="Parsing..",t.fileOpen.classList.add("d-none"),e.clear(),e.filename=o.name.replace(/\./,"_"),i({file:o})}),t.fileOpen.addEventListener("click",()=>{t.filePicker.click()});const[n,i]=(()=>{let e,t;try{if("file:"===location.protocol)throw"Nope";console.log("Thumbdata3Viewer: Loading thumbparser as Worker"),e=new Worker("worker.js"),t=t=>e.postMessage(t)}catch(n){console.log("Thumbdata3Viewer: Unable to load parser as worker, loading as script instead");let r=document.createElement("script");r.setAttribute("src","worker.js"),document.head.appendChild(r),e=window,t=t=>e.postMessage(t,"*")}return[e,t]})();n.addEventListener("message",n=>{const r=n.data;r.status?t.progress.textContent=r.status:r.progress?(t.progress.style.width=r.progress+"%",t.progressText.textContent=r.text):r.images&&(t.progressText.classList.add("d-none"),t.progressContainer.classList.add("d-none"),t.fileOpen.classList.remove("d-none"),t.filePicker.value="",e.update(r.images))})})},function(e,t,n){var r=n(17);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(19)(r,i);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(18)(!1)).push([e.i,"html {\n    width: calc(100vw);\n    overflow-x: hidden;\n}\n\nheader {\n    margin-bottom: 20px;\n}\n\n.image-viewer {\n    display: flex;\n    align-items: stretch;\n    flex-direction: column;\n    position: fixed;\n    top: 0px;\n    left: 0px;\n    width: 100vw;\n    height: 100vh;\n    background-color: #2c2f34;\n}\n\n.image-viewer .img-container {\n    display: flex;\n    flex-grow: 1;\n    justify-content: center;\n    align-items: center;\n}\n\n.image-viewer .img-container img {\n    object-fit: contain;\n    max-height: calc(90vh - 48px);\n    max-width: 90vw;\n}\n\n.image-viewer-options {\n    display: flex;\n\tpadding: 15px 15px 5px 15px;\n\talign-items: center;\n    justify-content: space-between;\n}\n\n.image-viewer .img-container img {\n    box-shadow: 0px 0px 94px -16px rgba(0, 0, 0, 0.75);\n}\n\n.image-description {\n    font-weight: bold;\n    color: whitesmoke;\n}\n\n.image-item {\n    cursor: pointer;\n}\n\n.jumbotron {\n    position: relative;\n    word-wrap: break-word;\n}\n\n.progress-text {\n    position: absolute;\n    bottom: 20px;\n    right: 20px;\n\n}\n\n.progress {\n    height: 3rem;\n    background-color: ghostwhite;\n    border: 1px solid #dee2e6;\n    font-size: 1.25rem;\n}\n\n.progress-bar {\n    text-shadow: black 1px 1px 4px;\n}\n\nbody {\n    margin-bottom: 40px;\n}",""])},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=(s=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),o=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(o).concat([i]).join("\n")}var s;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];null!=o&&(r[o]=!0)}for(i=0;i<e.length;i++){var s=e[i];null!=s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(e,t,n){var r,i,o={},s=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=r.apply(this,arguments)),i}),a=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var r=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),c=null,l=0,u=[],d=n(20);function p(e,t){for(var n=0;n<e.length;n++){var r=e[n],i=o[r.id];if(i){i.refs++;for(var s=0;s<i.parts.length;s++)i.parts[s](r.parts[s]);for(;s<r.parts.length;s++)i.parts.push(b(r.parts[s],t))}else{var a=[];for(s=0;s<r.parts.length;s++)a.push(b(r.parts[s],t));o[r.id]={id:r.id,refs:1,parts:a}}}}function f(e,t){for(var n=[],r={},i=0;i<e.length;i++){var o=e[i],s=t.base?o[0]+t.base:o[0],a={css:o[1],media:o[2],sourceMap:o[3]};r[s]?r[s].parts.push(a):n.push(r[s]={id:s,parts:[a]})}return n}function m(e,t){var n=a(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=u[u.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),u.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=a(e.insertAt.before,n);n.insertBefore(t,i)}}function h(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=u.indexOf(e);t>=0&&u.splice(t,1)}function g(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return n.nc}();r&&(e.attrs.nonce=r)}return v(t,e.attrs),m(e,t),t}function v(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function b(e,t){var n,r,i,o;if(t.transform&&e.css){if(!(o="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=o}if(t.singleton){var s=l++;n=c||(c=g(t)),r=x.bind(null,n,s,!1),i=x.bind(null,n,s,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",v(t,e.attrs),m(e,t),t}(t),r=function(e,t,n){var r=n.css,i=n.sourceMap,o=void 0===t.convertToAbsoluteUrls&&i;(t.convertToAbsoluteUrls||o)&&(r=d(r));i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var s=new Blob([r],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,n,t),i=function(){h(n),n.href&&URL.revokeObjectURL(n.href)}):(n=g(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),i=function(){h(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=s()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=f(e,t);return p(n,t),function(e){for(var r=[],i=0;i<n.length;i++){var s=n[i];(a=o[s.id]).refs--,r.push(a)}e&&p(f(e,t),t);for(i=0;i<r.length;i++){var a;if(0===(a=r[i]).refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete o[a.id]}}}};var y,w=(y=[],function(e,t){return y[e]=t,y.filter(Boolean).join("\n")});function x(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=w(t,i);else{var o=document.createTextNode(i),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var i,o=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?e:(i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}}]);