montageDefine("467e288","observers",{dependencies:["collections/shim","collections/listen/property-changes","collections/listen/array-changes","collections/sorted-array","collections/sorted-set","collections/map","collections/set","collections/heap","./scope","./operators","./parse","./compile-observer","./merge"],factory:function(e,t){function n(e){return function(t){return t(e)}}function i(e,t){return e(t.value)}function r(e,t){return e(t.parameters)}function a(e){return function(t,n){return t(n.document.getElementById(e))}}function s(e){return function(t,n){var i=n.components,r=i.getObjectByLabel||i.getComponentByLabel,a=r.call(i,e);return t(a)}}function o(e,t,n,i){function r(e,t,i){a&&a(),a=n(e,t,i)}if(null==e)return n();var a;return xt.addOwnPropertyChangeListener(e,t,r,i.beforeChange),r(e[t],t,e),function(){a&&a(),xt.removeOwnPropertyChangeListener(e,t,r,i.beforeChange)}}function l(e,t){return function(n,i){return t(function(t){return"string"!=typeof t&&"number"!=typeof t?n():e(function(e){return null==e?n():e.observeProperty?e.observeProperty(t,n,i):Pt(e,t,n,i)},i)},i)}}function c(e,t,n,i){function r(e,i,r){s(t,i)&&(a&&a(),a=n(e,t,r))}var a,s=e.contentEquals||Object.equals;return r(e.get(t),t,e),e.addMapChangeListener(r,i.beforeChange),function(){a&&a(),e.removeMapChangeListener(r)}}function u(e,t){return function(n,i){return e(function(e){return e?t(function(t){return null==t?n():e.observeGet?e.observeGet(t,n,i):Ot(e,t,n,i)},i):n()},i)}}function h(e,t){return function(n,i){return n=_t(n),t(function(t){return e(function(e){return e?e.addRangeChangeListener?J(e,function(){return n((e.has||e.contains).call(e,t))},i):e.addMapChangeListener?st(e,function(){return n(e.has(t))},i):n():n()},i)},i)}}function d(e){return function(t,n){for(var i=[],r=[],a=0;e.length>a;a++)i[a]=void 0,r[a]=function(e,t){return e(function(e){i.set(t,e)},n)}(e[a],a);var s=t(i);return function(){s&&s();for(var e=0;r.length>e;e++)s=r[e],s&&s()}}}function p(e){return function(t,n){var i={},r={};for(var a in e)(function(e,t){r[e]=void 0,i[e]=t(function(t){r[e]=t},n)})(a,e[a]);var s=t(r);return function(){s&&s();for(var e in i)s=i[e],s&&s()}}}function f(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return d(e)}function g(e){return function(){for(var t=[],n=arguments.length;n--;)t[n]=arguments[n];var i=d(t),r=rt(i);return function(t,n){return r(function(n){return n.every(Tt.defined)?t(e.apply(void 0,n)):t()},n)}}}function m(e){var t=e.slice(0,1).toUpperCase()+e.slice(1),n="make"+t+"Observer",i="observe"+t;return function(){var t=arguments[0],r=Array.prototype.slice.call(arguments,1),a=d(r),s=rt(a);return function(a,o){return t(function(t){return t?t[n]?t[n].apply(t,r)(a,o):t[i]?t[i](a,o):s(function(n){return n.every(Tt.defined)?"function"==typeof t[e]?a(t[e].apply(t,n)):a():a()},o):a()},o)}}}function v(e){return function(t,n){return e(function(e){return t(!e)},n)}}function y(e,t){return function(n,i){return e(function(e){return e?t(n,i):n(e)},i)}}function b(e,t){return function(n,i){return e(function(e){return e?n(e):t(n,i)},i)}}function _(e,t,n){return function(i,r){return e(function(e){return null==e?i():e?t(i,r):n(i,r)},r)}}function C(e){return function(t,n){return e(function(e){return t(null!=e)},n)}}function w(e,t){return function(n,i){return e(function(e){return null==e?t(n,i):n(e)},i)}}function L(e,t){return function(n,i){return e(function(e){function r(t){for(;e.length>t;t++)o[t].index=t}function a(e,n,a){Lt(o,a,n.length,e.map(function(e,t){return{index:a+t}})),r(a+e.length);var c,u,h=[],d=a,p=a+n.length;for(d=a,p=a+n.length;p>d;d++)u=l[d],u&&u();Lt(l,a,n.length,e.map(function(e,n){var r=o[a+n];return t(function(e){c?s.set(r.index,e):h[n]=e},i.nest(e))})),c=!0,s.swap(a,n.length,h)}if(!e)return n();var s=[],o=[],l=[],c=J(e,a,i),u=n(s,e);return function(){u&&u();for(var e=0,t=l.length;t>e;e++)u=l[e],u&&u();c()}},i)}}function x(e,t){var n=L(e,t);return function(e,t){return n(function(n,i){function r(e){for(;n.length>e;e++)l[e+1]=l[e]+!!n[e]}function a(e,t,n){var a=i.slice(n,n+e.length),o=t.map(Boolean).sum(),c=a.filter(function(t,n){return e[n]}),u=l[n],h=s.slice(u,u+o);(h.length!==c.length||h.some(function(e,t){return e!==c[t]}))&&s.swap(u,o,c),r(u)}if(!i)return e();var s=[],o=[],l=[0],c=J(n,a,t),u=e(s);return function(){u&&u();for(var e=0,t=o.length;t>e;e++)u=o[e],u&&u();c()}},t)}}function M(e,t){var n=z(t),i=L(e,n),r=function(e,t){return i(function(n){function i(e,t){a.deleteEach(t),a.addEach(e)}if(!n)return e();var r=[],a=Mt(r,S,E),s=J(n,i,t),o=e(r);return function(){o&&o(),s()}},t)};return kt(r,ut)}function S(e,t){return Object.equals(e[1],t[1])}function E(e,t){return Object.compare(e[1],t[1])}function z(e){return function(t,n){return e(function(e){return t([n.value,e])},n)}}function T(e,t){var n=z(t),i=L(e,n),r=R(i,dt),a=L(r,Q(dt));return function(e,t){function n(e,t){return e=o.get(e),t=o.get(t),Object.compare(e,t)}function i(e,t){return e=o.get(e),t=o.get(t),Object.equals(e,t)}function r(e,t){t.forEach(function(e){l["delete"](e[0]),o["delete"](e[0])}),e.forEach(function(e){o.set(e[0],e[1]),l.add(e[0])})}function s(e){return l.clear(),J(e,r,t)}var o=new Et,l=new St(null,i,n),c=e(l),u=a(s,t);return function(){c&&c(),u()}}}function P(e){return function(t,n){return e(function(e){function i(e,t,n){var i=r.length-n-t.length;r.swap(i,t.length,e.reversed())}if(!e)return t();var r=[],a=J(e,i,n),s=t(r);return function(){s&&s(),a()}},n)}}function O(e){return function(t,n){return e(function(e){function i(t){for(var n=t;e.length>n;n++)l[n].index=n,o[n+1]=e[n]?o[n]+e[n].length:o[n]}function r(e,t,r){var c=o[r],u=o[r+t.length],h=u-c;a.swap(c,h,[]),Lt(l,r,t.length,e.map(function(){return{index:null}})),i(r);for(var d,p=r,u=r+t.length;u>p;p++)d=s[p],d&&d();Lt(s,r,t.length,e.map(function(e,t){function s(e,t,n){i(c.index);var r=o[c.index]+n,s=o[c.index]+n+t.length,l=s-r;a.swap(r,l,e)}var c=l[r+t];return J(e,s,n)}))}if(!e)return t();var a=[],s=[],o=[0],l=[],c=J(e,r,n),u=t(a);return function(){u&&u();for(var e=0,t=s.length;t>e;e++)u=s[e],u&&u();c()}},n)}}function k(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return At(d(e))}function D(e,t){var n=Dt(e,t),i=l(n,Rt);return gt(i,Boolean)}function A(e,t){var n=gt(t,Tt.not),i=Dt(e,n),r=l(i,Rt);return gt(r,Tt.not)}function R(e,t){var n=B(e,t);return Ft(n)}function B(e,t){var n=z(t),i=L(e,n);return function(e,t){return i(function(n,i){function r(e,t){t.forEach(function(e){var t=a.get(e[1]);1===t.length?a["delete"](e[1]):t["delete"](e[0])}),e.forEach(function(e){var t,n=!a.has(e[1]);t=n?i.constructClone():a.get(e[1]),t.add(e[0]),n&&a.set(e[1],t)})}if(!n)return e();var a=Et(),s=J(n,r,t),o=e(a);return function(){s(),o&&o()}},t)}}function j(e,t,n){function i(e,t){return Object.compare(e[1],t[1])*n}var r=z(t),a=L(e,r);return function(e,t){return a(function(n){function r(e,t){s.addEach(e),s.deleteEach(t)}function a(t,n){return 0===n?t?e(t[0]):e():void 0}if(!n)return e();var s=new zt(null,S,i),o=J(n,r,t),l=st(s,a,t);return function(){o(),l()}},t)}}function I(e,t){return j(e,t,1)}function F(e,t){return j(e,t,-1)}function N(e){return j(e,i,1)}function q(e){return j(e,i,-1)}function W(e){return function(t){return function(n,i){return n=_t(n),t(function(t){if(!t)return n();var r=e(t,n);return J(t,function(e,t,i){return n(r(e,t,i))},i)},i)}}}function V(e){return"number"==typeof e&&!isNaN(e)}function H(e,t,n){return n||(n=t,t=Bt),function(i,r){return e(function(e){function a(t,n,i){if(h){var r=t.length-n.length;o>=i?r>0?(u.swap(0,0,e.slice(o,o+r)),u.splice(s,u.length-s)):(u.splice(0,-r),u.swap(u.length,0,e.slice(o+u.length,o+s))):o+s>i&&(u.swap(i-o,n.length,t),r>0?u.splice(s,u.length-s):u.swap(u.length,0,e.slice(o+u.length,o+s)))}}if(!e)return i();var s,o,l,c,u=[],h=!1,d=J(e,a,r),p=n(function(t){t=+t,isNaN(t)&&(t=void 0);var n="number"==typeof t&&"number"==typeof o,i=Math.max(0,t);"number"==typeof c&&(i=Math.min(i,e.length-c)),h!==n?(n?u.swap(0,0,e.slice(c,c+i)):u.clear(),h=n):h&&l!==i&&(l>i?u.splice(t,l-i):u.swap(l,0,e.slice(c+l,c+i))),s=t,l=i},r),f=t(function(t){t=+t,isNaN(t)&&(t=void 0);var n="number"==typeof s&&"number"==typeof t,i=Math.max(0,t);"number"==typeof s&&(i=Math.min(i,e.length));var r=Math.max(0,s);if("number"==typeof i&&(r=Math.min(r,e.length-i)),h!==n)n?u.swap(0,u.length,e.slice(i,i+r)):u.clear(),h=n;else if(h&&c!==i){var a=Math.abs(i-c);l>a&&c>i?(u.swap(0,0,e.slice(i,c)),u.splice(r,u.length-r)):l>a&&i>c?(u.swap(u.length,0,e.slice(c+l,i+r)),u.splice(0,u.length-r)):u.swap(0,u.length,e.slice(i,i+r))}o=t,c=i,l=r},r),g=i(u);return function(){g&&g(),p(),f(),d()}},r)}}function U(e){return function(t,n){return e(function(e){function i(e){for(;a.length>e;e++)a[e].set(0,e)}function r(e,t,n){a.swap(n,t.length,e.map(function(e,t){return[n+t,e]})),i(n+e.length)}if(!e)return t();var a=[],s=J(e,r,n),o=t(a);return function(){o&&o(),s()}},n)}}function Y(e){return function(t,n){var i=[],r=t(i),a=e(function(e){if(e>>>=0,null==e)i.clear();else if(e>i.length){for(var t=[],n=i.length;e>n;n++)t.push(n);i.swap(i.length,0,t)}else i.length>e&&i.splice(e,i.length)},n);return function(){r&&r(),a&&a()}}}function G(e,t){return function(n,i){return t(function(t){if("string"!=typeof t)return n();var r=RegExp("^"+RegExp.escape(t));return e(function(e){return"string"!=typeof e?n():n(r.test(e))},i)},i)}}function X(e,t){return function(n,i){return t(function(t){if("string"!=typeof t)return n();var r=RegExp(RegExp.escape(t)+"$");return e(function(e){return"string"!=typeof e?n():n(r.test(e))},i)},i)}}function K(e,t){return function(n,i){return t(function(t){if("string"!=typeof t)return n();var r=RegExp(RegExp.escape(t));return e(function(e){return"string"!=typeof e?n():n(r.test(e))},i)},i)}}function Z(e,t){return t=t||jt,function(n,i){return e(function(e){return e?t(function(t){function r(){a&&a(),a=n(e.join(t))}if("string"!=typeof t)return n();var a,s=J(e,r,i);return function(){s(),a&&a()}},i):n()},i)}}function J(e,t,n){function i(e,n,i){r&&r(),r=t(e,n,i)}if(!e)return Function.noop;var r;if(!e.toArray)return Function.noop;if(!e.addRangeChangeListener)return Function.noop;i(e.toArray(),[],0);var a=e.addRangeChangeListener(i,null,n.beforeChange);return function(){r&&r(),a()}}function Q(e){return function(t,n){return e(function(e){return It(e,t,n)},n)}}function $(e,t,n){function i(n,i,o){if(a+=n.length-i.length,!(a>o+i.length&&a>o+n.length)){var l=0>a?null:e.get(a);r&&r(),r=t(l),s=l}}var r,a=-1,s=null,o=J(e,i,n);return function(){r&&r(),o&&o()}}function et(e){return function(t,n){return e(_t(function(e){return tt(e,t,n)}),n)}}function tt(e,t,n){function i(n,i){return r+=n.length-i.length,1!==r?t():t(e.only())}var r=0;return J(e,i,n)}function nt(e){return function(t,n){return e(_t(function(e){return it(e,t,n)}),n)}}function it(e,t,n){function i(n,i){return r+=n.length-i.length,0===r?t():t(e.one())}var r=0;return J(e,i,n)}function rt(e){return function(t,n){return e(function(e){return e&&e.addRangeChangeListener?J(e,function(){return t(e)},n):t(e)},n)}}function at(e){return function(t,n){return e(function(e){return e&&e.addMapChangeListener?st(e,function(){return t(e)},n):t(e)},n)}}function st(e,t,n){function i(e,n,i){var a=r.get(n);r["delete"](n),a&&a(),a=t(e,n,i),void 0===e?a&&a():r.set(n,a)}if(e.addMapChangeListener){var r=new Et;e.forEach(i);var a=e.addMapChangeListener(i,n.beforeChange);return function(){r.forEach(function(e){e&&e()}),a()}}}function ot(e){return function(t,n){return e(function(e){return e?lt(e,t,n):t()},n)}}function lt(e,t,n){function i(e,t){var n,i;a.has(t)?null==e?(n=a.get(t),a["delete"](t),i=r.indexOf(n),r.splice(i,1)):(n=a.get(t),n.set(1,e)):(n=[t,e],a.set(t,n),r.push(n))}var r=[],a=Et(),s=t(r),o=st(e,i,n);return function(){s&&s(),o&&o()}}function ct(e){var t=Ft(e);return kt(t,ut)}function ut(e,t){return t.value?e(t.value[0]):e()}function ht(e){var t=Ft(e);return kt(t,dt)}function dt(e,t){return t.value?e(t.value[1]):e()}function pt(e){return function(t,n){var i=new Et,r=t(i),a=e(function(e){if(i.clear(),e&&"object"==typeof e){if(e.addRangeChangeListener)return Nt(function(e){function t(e,t){t.forEach(function(e){i["delete"](e[0])}),e.forEach(function(e){i.set(e[0],e[1])})}return J(e,t,n)},n.nest(e));if(e.addMapChangeListener)return st(e,function(e,t){void 0===e?i["delete"](t):i.set(t,e)},n);var t=[],r=0;for(var a in e)t[r++]=Pt(e,a,function(e){void 0===e?i["delete"](a):i.set(a,e)},n);return function(){for(var e=0,n=t.length;n>e;e++)t[e]()}}},n)||Function.noop;return function(){r&&r(),a()}}}function ft(e){return function(t,n){return n.parent?e(t,n.parent):t()}}function gt(e,t,n){return function(i,r){return i=_t(i),e(function(e){return i(t.call(n,e))},r)}}function mt(e,t,n){return function(i,r){return i=_t(i),e(function(e){return e&&e.every(Tt.defined)?i(t.apply(n,e)):void 0},r)}}function vt(t,n){var i=e("./parse"),r=e("./compile-observer");return function(e,a){return e=_t(e),n(function(n){if(null==n)return e();var s,o;try{s=i(n),o=r(s)}catch(l){return e()}return t(function(t){return o(e,a.nest(t))},a)},a)}}function yt(e,t){return function(n,i){return e(function(e){return null==e?n():t(function(e){return null==e?n():n(e)},i.nest(e))},i)}}function bt(e){return function(){var t=e.apply(this,arguments);return function(e,n){var i=[],r=t(function(e){function t(e,t,n){i.swap(n,t.length,e)}return e&&e.addRangeChangeListener?(qt(i,e),e.addRangeChangeListener(t,null,n.beforeChange),function(){e.removeRangeChangeListener(t,null,n.beforeChange)}):(i.clear(),void 0)},n),a=e(i);return function(){r&&r(),a&&a()}}}}function _t(e){var t;return function(n){if(n!==t){var i=e.apply(this,arguments);return t=n,i}}}function Ct(e){e.forEach(function(e){e&&e()})}function wt(e){var t;return function(){return t&&t(),t=e.apply(this,arguments),function(){t&&t(),t=void 0}}}function Lt(e,t,n,i){0>t?t=e.length+t:t>e.length&&(e.length=t),t+n>e.length?n=e.length-t:0>n&&(n=0);var r=i.length-n,a=e.length,s=e.length+r;if(r>0)for(var o=a-1;o>=t+n;o--){var l=o+r;o in e?e[l]=e[o]:(e[l]=void 0,delete e[l])}for(var o=0;i.length>o;o++)o in i?e[t+o]=i[o]:(e[t+o]=void 0,delete e[t+o]);if(0>r)for(var o=t+i.length;a-r>o;o++){var l=o-r;l in e?e[o]=e[l]:(e[o]=void 0,delete e[o])}e.length=s}e("collections/shim");var xt=e("collections/listen/property-changes");e("collections/listen/array-changes");var Mt=e("collections/sorted-array"),St=e("collections/sorted-set"),Et=e("collections/map");e("collections/set");var zt=e("collections/heap");e("./scope");var Tt=e("./operators");t.makeLiteralObserver=n,t.observeValue=i,t.observeParameters=r,t.makeElementObserver=a,t.makeComponentObserver=s,t.observeProperty=o;var Pt=o;t.makePropertyObserver=l,t.observeKey=c,t.observeGet=c;var Ot=c;t.makeGetObserver=u,t.makeHasObserver=h,t.makeObserversObserver=d,t.makeRecordObserver=p,t.makeObjectObserver=p,t.makeTupleObserver=f,t.makeArrayObserver=f,t.makeOperatorObserverMaker=g,t.makeMethodObserverMaker=m,t.makeNotObserver=v,t.makeAndObserver=y,t.makeOrObserver=b,t.makeConditionalObserver=_,t.makeDefinedObserver=C,t.makeDefaultObserver=w;var kt=t.makeMapBlockObserver=bt(L),Dt=t.makeFilterBlockObserver=bt(x);t.makeSortedBlockObserver=M,t.makeSortedSetBlockObserver=T,t.makeReversedObserver=bt(P);var At=t.makeFlattenObserver=bt(O);t.makeConcatObserver=k,t.makeSomeBlockObserver=D,t.makeEveryBlockObserver=A,t.makeGroupBlockObserver=R,t.makeGroupMapBlockObserver=B,t.makeMaxBlockObserver=I,t.makeMinBlockObserver=F,t.makeMaxObserver=N,t.makeMinObserver=q;var Rt=n("length");t.makeSumObserver=W(function(){var e=0;return function(t,n){return t=t.filter(V),n=n.filter(V),e+=t.sum()-n.sum()}}),t.makeAverageObserver=W(function(){var e=0,t=0;return function(n,i){return n=n.filter(V),i=i.filter(V),e+=n.sum()-i.sum(),t+=n.length-i.length,e/t}}),t.makeViewObserver=bt(H);var Bt=n(0);t.makeEnumerateObserver=bt(U),t.makeEnumerationObserver=t.makeEnumerateObserver,t.makeRangeObserver=Y,t.makeStartsWithObserver=G,t.makeEndsWithObserver=X,t.makeContainsObserver=K,t.makeJoinObserver=Z;var jt=n("");t.observeRangeChange=J,t.makeLastObserver=Q,t.observeLast=$;var It=$;t.makeOnlyObserver=et,t.observeOnly=tt,t.makeOneObserver=nt,t.observeOne=it,t.makeRangeContentObserver=rt,t.makeMapContentObserver=at,t.observeMapChange=st;var Ft=t.makeEntriesObserver=bt(ot);t.observeEntries=lt,t.makeKeysObserver=ct,t.observeEntryKey=ut,t.makeValuesObserver=ht,t.observeEntryValue=dt,t.makeToMapObserver=pt;var Nt=kt(R(i,ut),Q(dt));t.makeParentObserver=ft,t.makeConverterObserver=gt,t.makeComputerObserver=mt,t.makePathObserver=vt,t.makeExpressionObserver=vt,t.makeWithObserver=yt,t.makeToArrayObserver=bt(Function.identity),t.makeAsArrayObserver=t.makeToArrayObserver;var qt=e("./merge").merge;t.makeUniq=_t,t.cancelEach=Ct,t.autoCancelPrevious=wt}});