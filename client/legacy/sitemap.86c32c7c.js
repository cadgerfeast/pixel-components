import{a as t,b as n,c as r,d as e,i as a,s,e as c,S as i,x as o,I as u,A as f,B as h,J as l,k as p,C as m,h as v,D as d,K as g,w as y,y as x,z as b,n as j,j as R}from"./index.5000990b.js";import{_ as E,a as S,b as k}from"./asyncToGenerator.8200d3ef.js";function w(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var a,s=n(t);if(e){var c=n(this).constructor;a=Reflect.construct(s,arguments,c)}else a=s.apply(this,arguments);return r(this,a)}}function D(t,n,r){var e=t.slice();return e[1]=n[r],e}function A(t){var n,r,e,a=t[1]+"";return{c:function(){n=o("a"),r=u(a),this.h()},l:function(t){n=f(t,"A",{href:!0});var e=h(n);r=l(e,a),e.forEach(p),this.h()},h:function(){m(n,"href",e=t[1])},m:function(t,e){v(t,n,e),d(n,r)},p:function(t,s){1&s&&a!==(a=t[1]+"")&&g(r,a),1&s&&e!==(e=t[1])&&m(n,"href",e)},d:function(t){t&&p(n)}}}function C(t){for(var n,r,e=t[0],a=[],s=0;s<e.length;s+=1)a[s]=A(D(t,e,s));return{c:function(){n=y(),r=o("section");for(var t=0;t<a.length;t+=1)a[t].c();this.h()},l:function(t){x('[data-svelte="svelte-b4aj7p"]',document.head).forEach(p),n=b(t),r=f(t,"SECTION",{class:!0});for(var e=h(r),s=0;s<a.length;s+=1)a[s].l(e);e.forEach(p),this.h()},h:function(){document.title="Sitemap",m(r,"class","map")},m:function(t,e){v(t,n,e),v(t,r,e);for(var s=0;s<a.length;s+=1)a[s].m(r,null)},p:function(t,n){var s=k(n,1)[0];if(1&s){var c;for(e=t[0],c=0;c<e.length;c+=1){var i=D(t,e,c);a[c]?a[c].p(i,s):(a[c]=A(i),a[c].c(),a[c].m(r,null))}for(;c<a.length;c+=1)a[c].d(1);a.length=e.length}},i:j,o:j,d:function(t){t&&p(n),t&&p(r),R(a,t)}}}function I(){return T.apply(this,arguments)}function T(){return(T=E(S.mark(function t(){var n,r;return S.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.fetch("sitemap.json");case 2:return n=t.sent,t.next=5,n.json();case 5:if(r=t.sent,200!==n.status){t.next=10;break}return t.abrupt("return",{sitemap:r});case 10:this.error(n.status,r.message);case 11:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function z(t,n,r){var e=n.sitemap,a=void 0===e?[]:e;return t.$set=function(t){"sitemap"in t&&r(0,a=t.sitemap)},[a]}export default(function(n){t(o,i);var r=w(o);function o(t){var n;return e(this,o),n=r.call(this),a(c(n),t,z,C,s,{sitemap:0}),n}return o}());export{I as preload};
