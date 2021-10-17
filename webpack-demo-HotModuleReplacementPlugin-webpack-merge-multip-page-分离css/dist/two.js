/*! For license information please see two.js.LICENSE.txt */
(()=>{"use strict";var e,r,n,t,o,i,c,d={131:()=>{var e;document.getElementById("root").appendChild(((e=document.createElement("div")).innerHTML="我是第二个入口文件",e))}},a={};function l(e){var r=a[e];if(void 0!==r){if(void 0!==r.error)throw r.error;return r.exports}var n=a[e]={exports:{}};try{var t={id:e,module:n,factory:d[e],require:l};l.i.forEach((function(e){e(t)})),n=t.module,t.factory.call(n.exports,n,n.exports,t.require)}catch(e){throw n.error=e,e}return n.exports}l.m=d,l.c=a,l.i=[],l.hu=e=>e+"."+l.h()+".hot-update.js",l.miniCssF=e=>{},l.hmrF=()=>"two."+l.h()+".hot-update.json",l.h=()=>"72b50c3c920aa3b9d8d8",l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="myWebpack:",l.l=(n,t,o,i)=>{if(e[n])e[n].push(t);else{var c,d;if(void 0!==o)for(var a=document.getElementsByTagName("script"),u=0;u<a.length;u++){var s=a[u];if(s.getAttribute("src")==n||s.getAttribute("data-webpack")==r+o){c=s;break}}c||(d=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.setAttribute("data-webpack",r+o),c.src=n),e[n]=[t];var p=(r,t)=>{c.onerror=c.onload=null,clearTimeout(f);var o=e[n];if(delete e[n],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((e=>e(t))),r)return r(t)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=p.bind(null,c.onerror),c.onload=p.bind(null,c.onload),d&&document.head.appendChild(c)}},(()=>{var e,r,n,t,o={},i=l.c,c=[],d=[],a="idle";function u(e){a=e;for(var r=[],n=0;n<d.length;n++)r[n]=d[n].call(null,e);return Promise.all(r)}function s(e){if(0===r.length)return e();var n=r;return r=[],Promise.all(n).then((function(){return s(e)}))}function p(e){if("idle"!==a)throw new Error("check() is only allowed in idle status");return u("check").then(l.hmrM).then((function(t){return t?u("prepare").then((function(){var o=[];return r=[],n=[],Promise.all(Object.keys(l.hmrC).reduce((function(e,r){return l.hmrC[r](t.c,t.r,t.m,e,n,o),e}),[])).then((function(){return s((function(){return e?h(e):u("ready").then((function(){return o}))}))}))})):u(m()?"ready":"idle").then((function(){return null}))}))}function f(e){return"ready"!==a?Promise.resolve().then((function(){throw new Error("apply() is only allowed in ready status")})):h(e)}function h(e){e=e||{},m();var r=n.map((function(r){return r(e)}));n=void 0;var o=r.map((function(e){return e.error})).filter(Boolean);if(o.length>0)return u("abort").then((function(){throw o[0]}));var i=u("dispose");r.forEach((function(e){e.dispose&&e.dispose()}));var c,d=u("apply"),a=function(e){c||(c=e)},l=[];return r.forEach((function(e){if(e.apply){var r=e.apply(a);if(r)for(var n=0;n<r.length;n++)l.push(r[n])}})),Promise.all([i,d]).then((function(){return c?u("fail").then((function(){throw c})):t?h(e).then((function(e){return l.forEach((function(r){e.indexOf(r)<0&&e.push(r)})),e})):u("idle").then((function(){return l}))}))}function m(){if(t)return n||(n=[]),Object.keys(l.hmrI).forEach((function(e){t.forEach((function(r){l.hmrI[e](r,n)}))})),t=void 0,!0}l.hmrD=o,l.i.push((function(h){var m,v,y,g,E=h.module,b=function(n,t){var o=i[t];if(!o)return n;var d=function(r){if(o.hot.active){if(i[r]){var d=i[r].parents;-1===d.indexOf(t)&&d.push(t)}else c=[t],e=r;-1===o.children.indexOf(r)&&o.children.push(r)}else console.warn("[HMR] unexpected require("+r+") from disposed module "+t),c=[];return n(r)},l=function(e){return{configurable:!0,enumerable:!0,get:function(){return n[e]},set:function(r){n[e]=r}}};for(var p in n)Object.prototype.hasOwnProperty.call(n,p)&&"e"!==p&&Object.defineProperty(d,p,l(p));return d.e=function(e){return function(e){switch(a){case"ready":return u("prepare"),r.push(e),s((function(){return u("ready")})),e;case"prepare":return r.push(e),e;default:return e}}(n.e(e))},d}(h.require,h.id);E.hot=(m=h.id,v=E,g={_acceptedDependencies:{},_acceptedErrorHandlers:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:y=e!==m,_requireSelf:function(){c=v.parents.slice(),e=y?void 0:m,l(m)},active:!0,accept:function(e,r,n){if(void 0===e)g._selfAccepted=!0;else if("function"==typeof e)g._selfAccepted=e;else if("object"==typeof e&&null!==e)for(var t=0;t<e.length;t++)g._acceptedDependencies[e[t]]=r||function(){},g._acceptedErrorHandlers[e[t]]=n;else g._acceptedDependencies[e]=r||function(){},g._acceptedErrorHandlers[e]=n},decline:function(e){if(void 0===e)g._selfDeclined=!0;else if("object"==typeof e&&null!==e)for(var r=0;r<e.length;r++)g._declinedDependencies[e[r]]=!0;else g._declinedDependencies[e]=!0},dispose:function(e){g._disposeHandlers.push(e)},addDisposeHandler:function(e){g._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=g._disposeHandlers.indexOf(e);r>=0&&g._disposeHandlers.splice(r,1)},invalidate:function(){switch(this._selfInvalidated=!0,a){case"idle":n=[],Object.keys(l.hmrI).forEach((function(e){l.hmrI[e](m,n)})),u("ready");break;case"ready":Object.keys(l.hmrI).forEach((function(e){l.hmrI[e](m,n)}));break;case"prepare":case"check":case"dispose":case"apply":(t=t||[]).push(m)}},check:p,apply:f,status:function(e){if(!e)return a;d.push(e)},addStatusHandler:function(e){d.push(e)},removeStatusHandler:function(e){var r=d.indexOf(e);r>=0&&d.splice(r,1)},data:o[m]},e=void 0,g),E.parents=c,E.children=[],c=[],h.require=b})),l.hmrC={},l.hmrI={}})(),(()=>{var e;l.g.importScripts&&(e=l.g.location+"");var r=l.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var n=r.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),l.p=e})(),n=(e,r,n,t)=>{var o=document.createElement("link");return o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=i=>{if(o.onerror=o.onload=null,"load"===i.type)n();else{var c=i&&("load"===i.type?"missing":i.type),d=i&&i.target&&i.target.href||r,a=new Error("Loading CSS chunk "+e+" failed.\n("+d+")");a.code="CSS_CHUNK_LOAD_FAILED",a.type=c,a.request=d,o.parentNode.removeChild(o),t(a)}},o.href=r,document.head.appendChild(o),o},t=(e,r)=>{for(var n=document.getElementsByTagName("link"),t=0;t<n.length;t++){var o=(c=n[t]).getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(o===e||o===r))return c}var i=document.getElementsByTagName("style");for(t=0;t<i.length;t++){var c;if((o=(c=i[t]).getAttribute("data-href"))===e||o===r)return c}},o=[],i=[],c=e=>({dispose:()=>{for(var e=0;e<o.length;e++){var r=o[e];r.parentNode&&r.parentNode.removeChild(r)}o.length=0},apply:()=>{for(var e=0;e<i.length;e++)i[e].rel="stylesheet";i.length=0}}),l.hmrC.miniCss=(e,r,d,a,u,s)=>{u.push(c),e.forEach((e=>{var r=l.miniCssF(e),c=l.p+r,d=t(r,c);d&&a.push(new Promise(((r,t)=>{var a=n(e,c,(()=>{a.as="style",a.rel="preload",r()}),t);o.push(d),i.push(a)})))}))},(()=>{var e,r,n,t,o=l.hmrS_jsonp=l.hmrS_jsonp||{804:0},i={};function c(e){return new Promise(((r,n)=>{i[e]=r;var t=l.p+l.hu(e),o=new Error;l.l(t,(r=>{if(i[e]){i[e]=void 0;var t=r&&("load"===r.type?"missing":r.type),c=r&&r.target&&r.target.src;o.message="Loading hot update chunk "+e+" failed.\n("+t+": "+c+")",o.name="ChunkLoadError",o.type=t,o.request=c,n(o)}}))}))}function d(i){function c(e){for(var r=[e],n={},t=r.map((function(e){return{chain:[e],id:e}}));t.length>0;){var o=t.pop(),i=o.id,c=o.chain,a=l.c[i];if(a&&(!a.hot._selfAccepted||a.hot._selfInvalidated)){if(a.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:i};if(a.hot._main)return{type:"unaccepted",chain:c,moduleId:i};for(var u=0;u<a.parents.length;u++){var s=a.parents[u],p=l.c[s];if(p){if(p.hot._declinedDependencies[i])return{type:"declined",chain:c.concat([s]),moduleId:i,parentId:s};-1===r.indexOf(s)&&(p.hot._acceptedDependencies[i]?(n[s]||(n[s]=[]),d(n[s],[i])):(delete n[s],r.push(s),t.push({chain:c.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:r,outdatedDependencies:n}}function d(e,r){for(var n=0;n<r.length;n++){var t=r[n];-1===e.indexOf(t)&&e.push(t)}}l.f&&delete l.f.jsonpHmr,e=void 0;var a={},u=[],s={},p=function(e){console.warn("[HMR] unexpected require("+e.id+") to disposed module")};for(var f in r)if(l.o(r,f)){var h,m=r[f],v=!1,y=!1,g=!1,E="";switch((h=m?c(f):{type:"disposed",moduleId:f}).chain&&(E="\nUpdate propagation: "+h.chain.join(" -> ")),h.type){case"self-declined":i.onDeclined&&i.onDeclined(h),i.ignoreDeclined||(v=new Error("Aborted because of self decline: "+h.moduleId+E));break;case"declined":i.onDeclined&&i.onDeclined(h),i.ignoreDeclined||(v=new Error("Aborted because of declined dependency: "+h.moduleId+" in "+h.parentId+E));break;case"unaccepted":i.onUnaccepted&&i.onUnaccepted(h),i.ignoreUnaccepted||(v=new Error("Aborted because "+f+" is not accepted"+E));break;case"accepted":i.onAccepted&&i.onAccepted(h),y=!0;break;case"disposed":i.onDisposed&&i.onDisposed(h),g=!0;break;default:throw new Error("Unexception type "+h.type)}if(v)return{error:v};if(y)for(f in s[f]=m,d(u,h.outdatedModules),h.outdatedDependencies)l.o(h.outdatedDependencies,f)&&(a[f]||(a[f]=[]),d(a[f],h.outdatedDependencies[f]));g&&(d(u,[h.moduleId]),s[f]=p)}r=void 0;for(var b,w=[],_=0;_<u.length;_++){var I=u[_],D=l.c[I];D&&(D.hot._selfAccepted||D.hot._main)&&s[I]!==p&&!D.hot._selfInvalidated&&w.push({module:I,require:D.hot._requireSelf,errorHandler:D.hot._selfAccepted})}return{dispose:function(){var e;n.forEach((function(e){delete o[e]})),n=void 0;for(var r,t=u.slice();t.length>0;){var i=t.pop(),c=l.c[i];if(c){var d={},s=c.hot._disposeHandlers;for(_=0;_<s.length;_++)s[_].call(null,d);for(l.hmrD[i]=d,c.hot.active=!1,delete l.c[i],delete a[i],_=0;_<c.children.length;_++){var p=l.c[c.children[_]];p&&(e=p.parents.indexOf(i))>=0&&p.parents.splice(e,1)}}}for(var f in a)if(l.o(a,f)&&(c=l.c[f]))for(b=a[f],_=0;_<b.length;_++)r=b[_],(e=c.children.indexOf(r))>=0&&c.children.splice(e,1)},apply:function(e){for(var r in s)l.o(s,r)&&(l.m[r]=s[r]);for(var n=0;n<t.length;n++)t[n](l);for(var o in a)if(l.o(a,o)){var c=l.c[o];if(c){b=a[o];for(var d=[],p=[],f=[],h=0;h<b.length;h++){var m=b[h],v=c.hot._acceptedDependencies[m],y=c.hot._acceptedErrorHandlers[m];if(v){if(-1!==d.indexOf(v))continue;d.push(v),p.push(y),f.push(m)}}for(var g=0;g<d.length;g++)try{d[g].call(null,b)}catch(r){if("function"==typeof p[g])try{p[g](r,{moduleId:o,dependencyId:f[g]})}catch(n){i.onErrored&&i.onErrored({type:"accept-error-handler-errored",moduleId:o,dependencyId:f[g],error:n,originalError:r}),i.ignoreErrored||(e(n),e(r))}else i.onErrored&&i.onErrored({type:"accept-errored",moduleId:o,dependencyId:f[g],error:r}),i.ignoreErrored||e(r)}}}for(var E=0;E<w.length;E++){var _=w[E],I=_.module;try{_.require(I)}catch(r){if("function"==typeof _.errorHandler)try{_.errorHandler(r,{moduleId:I,module:l.c[I]})}catch(n){i.onErrored&&i.onErrored({type:"self-accept-error-handler-errored",moduleId:I,error:n,originalError:r}),i.ignoreErrored||(e(n),e(r))}else i.onErrored&&i.onErrored({type:"self-accept-errored",moduleId:I,error:r}),i.ignoreErrored||e(r)}}return u}}}self.webpackHotUpdatemyWebpack=(e,n,o)=>{for(var c in n)l.o(n,c)&&(r[c]=n[c]);o&&t.push(o),i[e]&&(i[e](),i[e]=void 0)},l.hmrI.jsonp=function(e,o){r||(r={},t=[],n=[],o.push(d)),l.o(r,e)||(r[e]=l.m[e])},l.hmrC.jsonp=function(i,a,u,s,p,f){p.push(d),e={},n=a,r=u.reduce((function(e,r){return e[r]=!1,e}),{}),t=[],i.forEach((function(r){l.o(o,r)&&void 0!==o[r]&&(s.push(c(r)),e[r]=!0)})),l.f&&(l.f.jsonpHmr=function(r,n){e&&!l.o(e,r)&&l.o(o,r)&&void 0!==o[r]&&(n.push(c(r)),e[r]=!0)})},l.hmrM=()=>{if("undefined"==typeof fetch)throw new Error("No browser support: need fetch API");return fetch(l.p+l.hmrF()).then((e=>{if(404!==e.status){if(!e.ok)throw new Error("Failed to fetch update manifest "+e.statusText);return e.json()}}))}})(),l(131)})();
//# sourceMappingURL=two.js.map