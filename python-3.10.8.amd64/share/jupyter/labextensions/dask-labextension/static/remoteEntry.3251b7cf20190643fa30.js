var _JUPYTERLAB;(()=>{"use strict";var e,r,t,n,o,a,i,l,u,f,s,d,c,p,h,v,b,m,g={429:(e,r,t)=>{var n={"./index":()=>Promise.all([t.e(60),t.e(319)]).then((()=>()=>t(319))),"./extension":()=>Promise.all([t.e(60),t.e(319)]).then((()=>()=>t(319)))},o=(e,r)=>(t.R=r,r=t.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),a=(e,r)=>{if(t.S){var n="default",o=t.S[n];if(o&&o!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[n]=e,t.I(n,r)}};t.d(r,{get:()=>o,init:()=>a})}},y={};function w(e){var r=y[e];if(void 0!==r)return r.exports;var t=y[e]={id:e,exports:{}};return g[e](t,t.exports,w),t.exports}w.m=g,w.c=y,w.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return w.d(r,{a:r}),r},w.d=(e,r)=>{for(var t in r)w.o(r,t)&&!w.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},w.f={},w.e=e=>Promise.all(Object.keys(w.f).reduce(((r,t)=>(w.f[t](e,r),r)),[])),w.u=e=>e+"."+{60:"096f3a5d6e88ad80084c",114:"6d8f6f4a88afc2816496",319:"8149e81abe096892ceee"}[e]+".js?v="+{60:"096f3a5d6e88ad80084c",114:"6d8f6f4a88afc2816496",319:"8149e81abe096892ceee"}[e],w.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),w.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="dask-labextension:",w.l=(t,n,o,a)=>{if(e[t])e[t].push(n);else{var i,l;if(void 0!==o)for(var u=document.getElementsByTagName("script"),f=0;f<u.length;f++){var s=u[f];if(s.getAttribute("src")==t||s.getAttribute("data-webpack")==r+o){i=s;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,w.nc&&i.setAttribute("nonce",w.nc),i.setAttribute("data-webpack",r+o),i.src=t),e[t]=[n];var d=(r,n)=>{i.onerror=i.onload=null,clearTimeout(c);var o=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(n))),r)return r(n)},c=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),l&&document.head.appendChild(i)}},w.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{w.S={};var e={},r={};w.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];w.o(w.S,t)||(w.S[t]={});var a=w.S[t],i="dask-labextension",l=(e,r,t,n)=>{var o=a[e]=a[e]||{},l=o[r];(!l||!l.loaded&&(!n!=!l.eager?n:i>l.from))&&(o[r]={get:t,from:i,eager:!!n})},u=[];return"default"===t&&(l("@lumino/polling","1.10.0",(()=>Promise.all([w.e(114),w.e(60)]).then((()=>()=>w(114))))),l("dask-labextension","5.3.0",(()=>Promise.all([w.e(60),w.e(319)]).then((()=>()=>w(319)))))),e[t]=u.length?Promise.all(u).then((()=>e[t]=1)):1}}})(),(()=>{var e;w.g.importScripts&&(e=w.g.location+"");var r=w.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),w.p=e})(),t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},n=(e,r)=>{e=t(e),r=t(r);for(var n=0;;){if(n>=e.length)return n<r.length&&"u"!=(typeof r[n])[0];var o=e[n],a=(typeof o)[0];if(n>=r.length)return"u"==a;var i=r[n],l=(typeof i)[0];if(a!=l)return"o"==a&&"n"==l||"s"==l||"u"==a;if("o"!=a&&"u"!=a&&o!=i)return o<i;n++}},o=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var n=1,a=1;a<e.length;a++)n--,t+="u"==(typeof(l=e[a]))[0]?"-":(n>0?".":"")+(n=2,l);return t}var i=[];for(a=1;a<e.length;a++){var l=e[a];i.push(0===l?"not("+u()+")":1===l?"("+u()+" || "+u()+")":2===l?i.pop()+" "+i.pop():o(l))}return u();function u(){return i.pop().replace(/^\((.+)\)$/,"$1")}},a=(e,r)=>{if(0 in e){r=t(r);var n=e[0],o=n<0;o&&(n=-n-1);for(var i=0,l=1,u=!0;;l++,i++){var f,s,d=l<e.length?(typeof e[l])[0]:"";if(i>=r.length||"o"==(s=(typeof(f=r[i]))[0]))return!u||("u"==d?l>n&&!o:""==d!=o);if("u"==s){if(!u||"u"!=d)return!1}else if(u)if(d==s)if(l<=n){if(f!=e[l])return!1}else{if(o?f>e[l]:f<e[l])return!1;f!=e[l]&&(u=!1)}else if("s"!=d&&"n"!=d){if(o||l<=n)return!1;u=!1,l--}else{if(l<=n||s<d!=o)return!1;u=!1}else"s"!=d&&"n"!=d&&(u=!1,l--)}}var c=[],p=c.pop.bind(c);for(i=1;i<e.length;i++){var h=e[i];c.push(1==h?p()|p():2==h?p()&p():h?a(h,r):!p())}return!!p()},i=(e,r)=>{var t=w.S[e];if(!t||!w.o(t,r))throw new Error("Shared module "+r+" doesn't exist in shared scope "+e);return t},l=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&n(e,r)?r:e),0)},u=(e,r,t,n)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+o(n)+")",f=(e,r,t,n)=>{var o=l(e,t);return a(n,o)||"undefined"!=typeof console&&console.warn&&console.warn(u(e,t,o,n)),d(e[t][o])},s=(e,r,t)=>{var o=e[r];return(r=Object.keys(o).reduce(((e,r)=>!a(t,r)||e&&!n(e,r)?e:r),0))&&o[r]},d=e=>(e.loaded=1,e.get()),p=(c=e=>function(r,t,n,o){var a=w.I(r);return a&&a.then?a.then(e.bind(e,r,w.S[r],t,n,o)):e(r,w.S[r],t,n,o)})(((e,r,t,n)=>(i(e,t),f(r,0,t,n)))),h=c(((e,r,t,n,o)=>{var a=r&&w.o(r,t)&&s(r,t,n);return a?d(a):o()})),v={},b={526:()=>p("default","@lumino/coreutils",[1,1,11,0]),840:()=>p("default","@lumino/signaling",[1,1,10,0]),16:()=>p("default","@jupyterlab/statedb",[1,3,4,3]),118:()=>p("default","@jupyterlab/apputils",[1,3,4,3]),238:()=>p("default","@jupyterlab/services",[1,6,4,3]),271:()=>p("default","react",[1,17,0,1]),345:()=>p("default","@jupyterlab/settingregistry",[1,3,4,3]),358:()=>h("default","@lumino/polling",[1,1,0,4],(()=>w.e(114).then((()=>()=>w(114))))),398:()=>p("default","@jupyterlab/coreutils",[1,5,4,3]),424:()=>p("default","@jupyterlab/application",[1,3,4,3]),433:()=>p("default","@lumino/widgets",[1,1,30,0]),456:()=>p("default","react-dom",[1,17,0,1]),520:()=>p("default","@lumino/domutils",[1,1,8,0]),571:()=>p("default","@jupyterlab/mainmenu",[1,3,4,3]),694:()=>p("default","@lumino/dragdrop",[1,1,13,0]),723:()=>p("default","@jupyterlab/ui-components",[1,3,4,3]),897:()=>p("default","@jupyterlab/notebook",[1,3,4,3]),914:()=>p("default","@jupyterlab/console",[1,3,4,3]),918:()=>p("default","@lumino/algorithm",[1,1,9,0])},m={60:[526,840],319:[16,118,238,271,345,358,398,424,433,456,520,571,694,723,897,914,918]},w.f.consumes=(e,r)=>{w.o(m,e)&&m[e].forEach((e=>{if(w.o(v,e))return r.push(v[e]);var t=r=>{v[e]=0,w.m[e]=t=>{delete w.c[e],t.exports=r()}},n=r=>{delete v[e],w.m[e]=t=>{throw delete w.c[e],r}};try{var o=b[e]();o.then?r.push(v[e]=o.then(t).catch(n)):t(o)}catch(e){n(e)}}))},(()=>{var e={754:0};w.f.j=(r,t)=>{var n=w.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(60!=r){var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var a=w.p+w.u(r),i=new Error;w.l(a,(t=>{if(w.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}}),"chunk-"+r,r)}else e[r]=0};var r=(r,t)=>{var n,o,[a,i,l]=t,u=0;if(a.some((r=>0!==e[r]))){for(n in i)w.o(i,n)&&(w.m[n]=i[n]);l&&l(w)}for(r&&r(t);u<a.length;u++)o=a[u],w.o(e,o)&&e[o]&&e[o][0](),e[o]=0},t=self.webpackChunkdask_labextension=self.webpackChunkdask_labextension||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),w.nc=void 0;var j=w(429);(_JUPYTERLAB=void 0===_JUPYTERLAB?{}:_JUPYTERLAB)["dask-labextension"]=j})();