(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(2083)}])},8045:function(t,e,n){"use strict";function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],i=!0,r=!1,o=void 0;try{for(var a,c=t[Symbol.iterator]();!(i=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);i=!0);}catch(u){r=!0,o=u}finally{try{i||null==c.return||c.return()}finally{if(r)throw o}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function r(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}e.default=function(t){var e=t.src,n=t.sizes,r=t.unoptimized,u=void 0!==r&&r,l=t.priority,d=void 0!==l&&l,h=t.loading,y=t.lazyBoundary,b=void 0===y?"200px":y,v=t.className,w=t.quality,A=t.width,x=t.height,z=t.objectFit,O=t.objectPosition,_=t.onLoadingComplete,E=t.loader,I=void 0===E?k:E,P=t.placeholder,N=void 0===P?"empty":P,R=t.blurDataURL,q=function(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n,i,r={},o=Object.keys(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}(t,["src","sizes","unoptimized","priority","loading","lazyBoundary","className","quality","width","height","objectFit","objectPosition","onLoadingComplete","loader","placeholder","blurDataURL"]),D=n?"responsive":"intrinsic";"layout"in q&&(q.layout&&(D=q.layout),delete q.layout);var L="";if(function(t){return"object"===typeof t&&(p(t)||function(t){return void 0!==t.src}(t))}(e)){var C=p(e)?e.default:e;if(!C.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(C)));if(R=R||C.blurDataURL,L=C.src,(!D||"fill"!==D)&&(x=x||C.height,A=A||C.width,!C.height||!C.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(C)))}e="string"===typeof e?e:L;var M=S(A),W=S(x),B=S(w),T=!d&&("lazy"===h||"undefined"===typeof h);(e.startsWith("data:")||e.startsWith("blob:"))&&(u=!0,T=!1);m.has(e)&&(T=!1);0;var U,H=i(s.useIntersection({rootMargin:b,disabled:!T}),2),F=H[0],G=H[1],V=!T||G,J={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},X={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},Q=!1,K={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:z,objectPosition:O},Y="blur"===N?{filter:"blur(20px)",backgroundSize:z||"cover",backgroundImage:'url("'.concat(R,'")'),backgroundPosition:O||"0% 0%"}:{};if("fill"===D)J.display="block",J.position="absolute",J.top=0,J.left=0,J.bottom=0,J.right=0;else if("undefined"!==typeof M&&"undefined"!==typeof W){var Z=W/M,$=isNaN(Z)?"100%":"".concat(100*Z,"%");"responsive"===D?(J.display="block",J.position="relative",Q=!0,X.paddingTop=$):"intrinsic"===D?(J.display="inline-block",J.position="relative",J.maxWidth="100%",Q=!0,X.maxWidth="100%",U='<svg width="'.concat(M,'" height="').concat(W,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===D&&(J.display="inline-block",J.position="relative",J.width=M,J.height=W)}else 0;var tt={src:g,srcSet:void 0,sizes:void 0};V&&(tt=j({src:e,unoptimized:u,layout:D,width:M,quality:B,sizes:n,loader:I}));var et=e;0;return o.default.createElement("span",{style:J},Q?o.default.createElement("span",{style:X},U?o.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:"data:image/svg+xml;base64,".concat(c.toBase64(U))}):null):null,o.default.createElement("img",Object.assign({},q,tt,{decoding:"async","data-nimg":D,className:v,ref:function(t){F(t),function(t,e,n,i,r){if(!t)return;var o=function(){t.src!==g&&("decode"in t?t.decode():Promise.resolve()).catch((function(){})).then((function(){if("blur"===i&&(t.style.filter="none",t.style.backgroundSize="none",t.style.backgroundImage="none"),m.add(e),r){var n=t.naturalWidth,o=t.naturalHeight;r({naturalWidth:n,naturalHeight:o})}}))};t.complete?o():t.onload=o}(t,et,0,N,_)},style:f({},K,Y)})),o.default.createElement("noscript",null,o.default.createElement("img",Object.assign({},q,j({src:e,unoptimized:u,layout:D,width:M,quality:B,sizes:n,loader:I}),{decoding:"async","data-nimg":D,style:K,className:v,loading:h||"lazy"}))),d?o.default.createElement(a.default,null,o.default.createElement("link",{key:"__nimg-"+tt.src+tt.srcSet+tt.sizes,rel:"preload",as:"image",href:tt.srcSet?void 0:tt.src,imagesrcset:tt.srcSet,imagesizes:tt.sizes})):null)};var o=d(n(7294)),a=d(n(5443)),c=n(6978),u=n(5809),s=n(7190);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function d(t){return t&&t.__esModule?t:{default:t}}function f(t){for(var e=arguments,n=function(n){var i=null!=e[n]?e[n]:{},r=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(i).filter((function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable})))),r.forEach((function(e){l(t,e,i[e])}))},i=1;i<arguments.length;i++)n(i);return t}var m=new Set,g=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var h=new Map([["default",function(t){var e=t.root,n=t.src,i=t.width,r=t.quality;0;return"".concat(e,"?url=").concat(encodeURIComponent(n),"&w=").concat(i,"&q=").concat(r||75)}],["imgix",function(t){var e=t.root,n=t.src,i=t.width,r=t.quality,o=new URL("".concat(e).concat(z(n))),a=o.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||i.toString()),r&&a.set("q",r.toString());return o.href}],["cloudinary",function(t){var e=t.root,n=t.src,i=t.width,r=t.quality,o=["f_auto","c_limit","w_"+i,"q_"+(r||"auto")].join(",")+"/";return"".concat(e).concat(o).concat(z(n))}],["akamai",function(t){var e=t.root,n=t.src,i=t.width;return"".concat(e).concat(z(n),"?imwidth=").concat(i)}],["custom",function(t){var e=t.src;throw new Error('Image with src "'.concat(e,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function p(t){return void 0!==t.default}var y={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/",loader:"custom"}||u.imageConfigDefault,b=y.deviceSizes,v=y.imageSizes,w=y.loader,A=y.path,x=(y.domains,r(b).concat(r(v)));function j(t){var e=t.src,n=t.unoptimized,i=t.layout,o=t.width,a=t.quality,c=t.sizes,u=t.loader;if(n)return{src:e,srcSet:void 0,sizes:void 0};var s=function(t,e,n){if(n&&("fill"===e||"responsive"===e)){for(var i,o=/(^|\s)(1?\d?\d)vw/g,a=[];i=o.exec(n);i)a.push(parseInt(i[2]));if(a.length){var c,u=.01*(c=Math).min.apply(c,r(a));return{widths:x.filter((function(t){return t>=b[0]*u})),kind:"w"}}return{widths:x,kind:"w"}}return"number"!==typeof t||"fill"===e||"responsive"===e?{widths:b,kind:"w"}:{widths:r(new Set([t,2*t].map((function(t){return x.find((function(e){return e>=t}))||x[x.length-1]})))),kind:"x"}}(o,i,c),l=s.widths,d=s.kind,f=l.length-1;return{sizes:c||"w"!==d?c:"100vw",srcSet:l.map((function(t,n){return"".concat(u({src:e,quality:a,width:t})," ").concat("w"===d?t:n+1).concat(d)})).join(", "),src:u({src:e,quality:a,width:l[f]})}}function S(t){return"number"===typeof t?t:"string"===typeof t?parseInt(t,10):void 0}function k(t){var e=h.get(w);if(e)return e(f({root:A},t));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(u.VALID_LOADERS.join(", "),". Received: ").concat(w))}function z(t){return"/"===t[0]?t.slice(1):t}b.sort((function(t,e){return t-e})),x.sort((function(t,e){return t-e}))},7190:function(t,e,n){"use strict";function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],i=!0,r=!1,o=void 0;try{for(var a,c=t[Symbol.iterator]();!(i=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);i=!0);}catch(u){r=!0,o=u}finally{try{i||null==c.return||c.return()}finally{if(r)throw o}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(e,"__esModule",{value:!0}),e.useIntersection=function(t){var e=t.rootMargin,n=t.disabled||!a,u=r.useRef(),s=i(r.useState(!1),2),l=s[0],d=s[1],f=r.useCallback((function(t){u.current&&(u.current(),u.current=void 0),n||l||t&&t.tagName&&(u.current=function(t,e,n){var i=function(t){var e=t.rootMargin||"",n=c.get(e);if(n)return n;var i=new Map,r=new IntersectionObserver((function(t){t.forEach((function(t){var e=i.get(t.target),n=t.isIntersecting||t.intersectionRatio>0;e&&n&&e(n)}))}),t);return c.set(e,n={id:e,observer:r,elements:i}),n}(n),r=i.id,o=i.observer,a=i.elements;return a.set(t,e),o.observe(t),function(){a.delete(t),o.unobserve(t),0===a.size&&(o.disconnect(),c.delete(r))}}(t,(function(t){return t&&d(t)}),{rootMargin:e}))}),[n,e,l]);return r.useEffect((function(){if(!a&&!l){var t=o.requestIdleCallback((function(){return d(!0)}));return function(){return o.cancelIdleCallback(t)}}}),[l]),[f,l]};var r=n(7294),o=n(9311),a="undefined"!==typeof IntersectionObserver;var c=new Map},6978:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.toBase64=function(t){return window.btoa(t)}},2083:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return c},default:function(){return u}});var i=n(5893),r=n(9008),o=n(5675),a=function(t){return t.src},c=!0,u=function(t){var e=t.characters;return(0,i.jsxs)("div",{children:[(0,i.jsxs)(r.default,{children:[(0,i.jsx)("title",{className:"w-100 mx-auto",children:"Create Next App"}),(0,i.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),e.map((function(t){return(0,i.jsxs)("div",{children:[t.name,(0,i.jsx)(o.default,{loader:a,unoptimized:!0,src:t.image,alt:t.name,width:"200",height:"200"})]},t.id)}))]})}},5809:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.imageConfigDefault=e.VALID_LOADERS=void 0;e.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom"];e.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"]}},9008:function(t,e,n){t.exports=n(5443)},5675:function(t,e,n){t.exports=n(8045)}},function(t){t.O(0,[774,888,179],(function(){return e=5301,t(t.s=e);var e}));var e=t.O();_N_E=e}]);