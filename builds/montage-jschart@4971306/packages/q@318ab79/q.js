(function(e){if("function"==typeof bootstrap)bootstrap("promise",e);else if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else if("undefined"!=typeof ses){if(!ses.ok())return;ses.makeQ=e}else Q=e()})(function(){"use strict";function e(e){return function(){return X.apply(e,arguments)}}function t(e){return e===Object(e)}function n(e){return"[object StopIteration]"===tt(e)||e instanceof V}function i(e,t){if(N&&t.stack&&"object"==typeof e&&null!==e&&e.stack&&-1===e.stack.indexOf(nt)){for(var n=[],i=t;i;i=i.source)i.stack&&n.unshift(i.stack);n.unshift(e.stack);var s=n.join("\n"+nt+"\n");e.stack=a(s)}}function a(e){for(var t=e.split("\n"),n=[],i=0;t.length>i;++i){var a=t[i];o(a)||s(a)||!a||n.push(a)}return n.join("\n")}function s(e){return-1!==e.indexOf("(module.js:")||-1!==e.indexOf("(node.js:")}function r(e){var t=/at .+ \((.+):(\d+):(?:\d+)\)$/.exec(e);if(t)return[t[1],Number(t[2])];var n=/at ([^ ]+):(\d+):(?:\d+)$/.exec(e);if(n)return[n[1],Number(n[2])];var i=/.*@(.+):(\d+)$/.exec(e);return i?[i[1],Number(i[2])]:void 0}function o(e){var t=r(e);if(!t)return!1;var n=t[0],i=t[1];return n===q&&i>=Y&&rt>=i}function l(){if(N)try{throw Error()}catch(e){var t=e.stack.split("\n"),n=t[0].indexOf("@")>0?t[1]:t[2],i=r(n);if(!i)return;return q=i[0],i[1]}}function c(e,t,n){return function(){return"undefined"!=typeof console&&"function"==typeof console.warn&&console.warn(t+" is deprecated, use "+n+" instead.",Error("").stack),e.apply(e,arguments)}}function h(e){return v(e)?e:_(e)?z(e):S(e)}function u(){function e(e){t=e,s.source=e,G(n,function(t,n){U(function(){e.promiseDispatch.apply(e,n)})},void 0),n=void 0,i=void 0}var t,n=[],i=[],a=J(u.prototype),s=J(m.prototype);if(s.promiseDispatch=function(e,a,s){var r=K(arguments);n?(n.push(r),"when"===a&&s[1]&&i.push(s[1])):U(function(){t.promiseDispatch.apply(t,r)})},s.valueOf=function(){if(n)return s;var e=f(t);return v(e)&&(t=e),e},s.inspect=function(){return t?t.inspect():{state:"pending"}},h.longStackSupport&&N)try{throw Error()}catch(r){s.stack=r.stack.substring(r.stack.indexOf("\n")+1)}return a.promise=s,a.resolve=function(n){t||e(h(n))},a.fulfill=function(n){t||e(S(n))},a.reject=function(n){t||e(M(n))},a.notify=function(e){t||G(i,function(t,n){U(function(){n(e)})},void 0)},a}function d(e){if("function"!=typeof e)throw new TypeError("resolver must be a function.");var t=u();try{e(t.resolve,t.reject,t.notify)}catch(n){t.reject(n)}return t.promise}function p(e){return d(function(t,n){for(var i=0,a=e.length;a>i;i++)h(e[i]).then(t,n)})}function m(e,t,n){void 0===t&&(t=function(e){return M(Error("Promise does not support operation: "+e))}),void 0===n&&(n=function(){return{state:"unknown"}});var i=J(m.prototype);if(i.promiseDispatch=function(n,a,s){var r;try{r=e[a]?e[a].apply(i,s):t.call(i,a,s)}catch(o){r=M(o)}n&&n(r)},i.inspect=n,n){var a=n();"rejected"===a.state&&(i.exception=a.reason),i.valueOf=function(){var e=n();return"pending"===e.state||"rejected"===e.state?i:e.value}}return i}function g(e,t,n,i){return h(e).then(t,n,i)}function f(e){if(v(e)){var t=e.inspect();if("fulfilled"===t.state)return t.value}return e}function v(e){return t(e)&&"function"==typeof e.promiseDispatch&&"function"==typeof e.inspect}function _(e){return t(e)&&"function"==typeof e.then}function b(e){return v(e)&&"pending"===e.inspect().state}function y(e){return!v(e)||"fulfilled"===e.inspect().state}function L(e){return v(e)&&"rejected"===e.inspect().state}function C(){it.length=0,at.length=0,st||(st=!0)}function w(e,t){st&&(at.push(e),t&&t.stack!==void 0?it.push(t.stack):it.push("(no stack) "+t))}function x(e){if(st){var t=Z(at,e);-1!==t&&(at.splice(t,1),it.splice(t,1))}}function M(e){var t=m({when:function(t){return t&&x(this),t?t(e):this}},function(){return this},function(){return{state:"rejected",reason:e}});return w(t,e),t}function S(e){return m({when:function(){return e},get:function(t){return e[t]},set:function(t,n){e[t]=n},"delete":function(t){delete e[t]},post:function(t,n){return null===t||void 0===t?e.apply(void 0,n):e[t].apply(e,n)},apply:function(t,n){return e.apply(t,n)},keys:function(){return et(e)}},void 0,function(){return{state:"fulfilled",value:e}})}function z(e){var t=u();return U(function(){try{e.then(t.resolve,t.reject,t.notify)}catch(n){t.reject(n)}}),t.promise}function E(e){return m({isDef:function(){}},function(t,n){return A(e,t,n)},function(){return h(e).inspect()})}function P(e,t,n){return h(e).spread(t,n)}function T(e){return function(){function t(e,t){var r;if("undefined"==typeof StopIteration){try{r=i[e](t)}catch(o){return M(o)}return r.done?r.value:g(r.value,a,s)}try{r=i[e](t)}catch(o){return n(o)?o.value:M(o)}return g(r,a,s)}var i=e.apply(this,arguments),a=t.bind(t,"next"),s=t.bind(t,"throw");return a()}}function D(e){h.done(h.async(e)())}function k(e){throw new V(e)}function O(e){return function(){return P([this,B(arguments)],function(t,n){return e.apply(t,n)})}}function A(e,t,n){return h(e).dispatch(t,n)}function B(e){return g(e,function(e){var t=0,n=u();return G(e,function(i,a,s){var r;v(a)&&"fulfilled"===(r=a.inspect()).state?e[s]=r.value:(++t,g(a,function(i){e[s]=i,0===--t&&n.resolve(e)},n.reject,function(e){n.notify({index:s,value:e})}))},void 0),0===t&&n.resolve(e),n.promise})}function I(e){return g(e,function(e){return e=$(e,h),g(B($(e,function(e){return g(e,H,H)})),function(){return e})})}function R(e){return h(e).allSettled()}function F(e,t){return h(e).then(void 0,void 0,t)}function j(e,t){return h(e).nodeify(t)}var N=!1;try{throw Error()}catch(W){N=!!W.stack}var q,V,Y=l(),H=function(){},U=function(){function e(){for(;t.next;){t=t.next;var n=t.task;t.task=void 0;var a=t.domain;a&&(t.domain=void 0,a.enter());try{n()}catch(r){if(s)throw a&&a.exit(),setTimeout(e,0),a&&a.enter(),r;setTimeout(function(){throw r},0)}a&&a.exit()}i=!1}var t={task:void 0,next:null},n=t,i=!1,a=void 0,s=!1;if(U=function(e){n=n.next={task:e,domain:s&&process.domain,next:null},i||(i=!0,a())},"undefined"!=typeof process&&process.nextTick)s=!0,a=function(){process.nextTick(e)};else if("function"==typeof setImmediate)a="undefined"!=typeof window?setImmediate.bind(window,e):function(){setImmediate(e)};else if("undefined"!=typeof MessageChannel){var r=new MessageChannel;r.port1.onmessage=function(){a=o,r.port1.onmessage=e,e()};var o=function(){r.port2.postMessage(0)};a=function(){setTimeout(e,0),o()}}else a=function(){setTimeout(e,0)};return U}(),X=Function.call,K=e(Array.prototype.slice),G=e(Array.prototype.reduce||function(e,t){var n=0,i=this.length;if(1===arguments.length)for(;;){if(n in this){t=this[n++];break}if(++n>=i)throw new TypeError}for(;i>n;n++)n in this&&(t=e(t,this[n],n));return t}),Z=e(Array.prototype.indexOf||function(e){for(var t=0;this.length>t;t++)if(this[t]===e)return t;return-1}),$=e(Array.prototype.map||function(e,t){var n=this,i=[];return G(n,function(a,s,r){i.push(e.call(t,s,r,n))},void 0),i}),J=Object.create||function(e){function t(){}return t.prototype=e,new t},Q=e(Object.prototype.hasOwnProperty),et=Object.keys||function(e){var t=[];for(var n in e)Q(e,n)&&t.push(n);return t},tt=e(Object.prototype.toString);V="undefined"!=typeof ReturnValue?ReturnValue:function(e){this.value=e};var nt="From previous event:";h.resolve=h,h.nextTick=U,h.longStackSupport=!1,h.defer=u,u.prototype.makeNodeResolver=function(){var e=this;return function(t,n){t?e.reject(t):arguments.length>2?e.resolve(K(arguments,1)):e.resolve(n)}},h.Promise=d,h.promise=d,d.race=p,d.all=B,d.reject=M,d.resolve=h,h.passByCopy=function(e){return e},m.prototype.passByCopy=function(){return this},h.join=function(e,t){return h(e).join(t)},m.prototype.join=function(e){return h([this,e]).spread(function(e,t){if(e===t)return e;throw Error("Can't join: not the same: "+e+" "+t)})},h.race=p,m.prototype.race=function(){return this.then(h.race)},h.makePromise=m,m.prototype.toString=function(){return"[object Promise]"},m.prototype.then=function(e,t,n){function a(t){try{return"function"==typeof e?e(t):t}catch(n){return M(n)}}function s(e){if("function"==typeof t){i(e,o);try{return t(e)}catch(n){return M(n)}}return M(e)}function r(e){return"function"==typeof n?n(e):e}var o=this,l=u(),c=!1;return U(function(){o.promiseDispatch(function(e){c||(c=!0,l.resolve(a(e)))},"when",[function(e){c||(c=!0,l.resolve(s(e)))}])}),o.promiseDispatch(void 0,"when",[void 0,function(e){var t,n=!1;try{t=r(e)}catch(i){if(n=!0,!h.onerror)throw i;h.onerror(i)}n||l.notify(t)}]),l.promise},h.when=g,m.prototype.thenResolve=function(e){return this.then(function(){return e})},h.thenResolve=function(e,t){return h(e).thenResolve(t)},m.prototype.thenReject=function(e){return this.then(function(){throw e})},h.thenReject=function(e,t){return h(e).thenReject(t)},h.nearer=f,h.isPromise=v,h.isPromiseAlike=_,h.isPending=b,m.prototype.isPending=function(){return"pending"===this.inspect().state},h.isFulfilled=y,m.prototype.isFulfilled=function(){return"fulfilled"===this.inspect().state},h.isRejected=L,m.prototype.isRejected=function(){return"rejected"===this.inspect().state};var it=[],at=[],st=!0;h.resetUnhandledRejections=C,h.getUnhandledReasons=function(){return it.slice()},h.stopUnhandledRejectionTracking=function(){C(),st=!1},C(),h.reject=M,h.fulfill=S,h.master=E,h.spread=P,m.prototype.spread=function(e,t){return this.all().then(function(t){return e.apply(void 0,t)},t)},h.async=T,h.spawn=D,h["return"]=k,h.promised=O,h.dispatch=A,m.prototype.dispatch=function(e,t){var n=this,i=u();return U(function(){n.promiseDispatch(i.resolve,e,t)}),i.promise},h.get=function(e,t){return h(e).dispatch("get",[t])},m.prototype.get=function(e){return this.dispatch("get",[e])},h.set=function(e,t,n){return h(e).dispatch("set",[t,n])},m.prototype.set=function(e,t){return this.dispatch("set",[e,t])},h.del=h["delete"]=function(e,t){return h(e).dispatch("delete",[t])},m.prototype.del=m.prototype["delete"]=function(e){return this.dispatch("delete",[e])},h.mapply=h.post=function(e,t,n){return h(e).dispatch("post",[t,n])},m.prototype.mapply=m.prototype.post=function(e,t){return this.dispatch("post",[e,t])},h.send=h.mcall=h.invoke=function(e,t){return h(e).dispatch("post",[t,K(arguments,2)])},m.prototype.send=m.prototype.mcall=m.prototype.invoke=function(e){return this.dispatch("post",[e,K(arguments,1)])},h.fapply=function(e,t){return h(e).dispatch("apply",[void 0,t])},m.prototype.fapply=function(e){return this.dispatch("apply",[void 0,e])},h["try"]=h.fcall=function(e){return h(e).dispatch("apply",[void 0,K(arguments,1)])},m.prototype.fcall=function(){return this.dispatch("apply",[void 0,K(arguments)])},h.fbind=function(e){var t=h(e),n=K(arguments,1);return function(){return t.dispatch("apply",[this,n.concat(K(arguments))])}},m.prototype.fbind=function(){var e=this,t=K(arguments);return function(){return e.dispatch("apply",[this,t.concat(K(arguments))])}},h.keys=function(e){return h(e).dispatch("keys",[])},m.prototype.keys=function(){return this.dispatch("keys",[])},h.all=B,m.prototype.all=function(){return B(this)},h.allResolved=c(I,"allResolved","allSettled"),m.prototype.allResolved=function(){return I(this)},h.allSettled=R,m.prototype.allSettled=function(){return this.then(function(e){return B($(e,function(e){function t(){return e.inspect()}return e=h(e),e.then(t,t)}))})},h.fail=h["catch"]=function(e,t){return h(e).then(void 0,t)},m.prototype.fail=m.prototype["catch"]=function(e){return this.then(void 0,e)},h.progress=F,m.prototype.progress=function(e){return this.then(void 0,void 0,e)},h.fin=h["finally"]=function(e,t){return h(e)["finally"](t)},m.prototype.fin=m.prototype["finally"]=function(e){return e=h(e),this.then(function(t){return e.fcall().then(function(){return t})},function(t){return e.fcall().then(function(){throw t})})},h.done=function(e,t,n,i){return h(e).done(t,n,i)},m.prototype.done=function(e,t,n){var a=function(e){U(function(){if(i(e,s),!h.onerror)throw e;h.onerror(e)})},s=e||t||n?this.then(e,t,n):this;"object"==typeof process&&process&&process.domain&&(a=process.domain.bind(a)),s.then(void 0,a)},h.timeout=function(e,t,n){return h(e).timeout(t,n)},m.prototype.timeout=function(e,t){var n=u(),i=setTimeout(function(){n.reject(Error(t||"Timed out after "+e+" ms"))},e);return this.then(function(e){clearTimeout(i),n.resolve(e)},function(e){clearTimeout(i),n.reject(e)},n.notify),n.promise},h.delay=function(e,t){return void 0===t&&(t=e,e=void 0),h(e).delay(t)},m.prototype.delay=function(e){return this.then(function(t){var n=u();return setTimeout(function(){n.resolve(t)},e),n.promise})},h.nfapply=function(e,t){return h(e).nfapply(t)},m.prototype.nfapply=function(e){var t=u(),n=K(e);return n.push(t.makeNodeResolver()),this.fapply(n).fail(t.reject),t.promise},h.nfcall=function(e){var t=K(arguments,1);return h(e).nfapply(t)},m.prototype.nfcall=function(){var e=K(arguments),t=u();return e.push(t.makeNodeResolver()),this.fapply(e).fail(t.reject),t.promise},h.nfbind=h.denodeify=function(e){var t=K(arguments,1);return function(){var n=t.concat(K(arguments)),i=u();return n.push(i.makeNodeResolver()),h(e).fapply(n).fail(i.reject),i.promise}},m.prototype.nfbind=m.prototype.denodeify=function(){var e=K(arguments);return e.unshift(this),h.denodeify.apply(void 0,e)},h.nbind=function(e,t){var n=K(arguments,2);return function(){function i(){return e.apply(t,arguments)}var a=n.concat(K(arguments)),s=u();return a.push(s.makeNodeResolver()),h(i).fapply(a).fail(s.reject),s.promise}},m.prototype.nbind=function(){var e=K(arguments,0);return e.unshift(this),h.nbind.apply(void 0,e)},h.nmapply=h.npost=function(e,t,n){return h(e).npost(t,n)},m.prototype.nmapply=m.prototype.npost=function(e,t){var n=K(t||[]),i=u();return n.push(i.makeNodeResolver()),this.dispatch("post",[e,n]).fail(i.reject),i.promise},h.nsend=h.nmcall=h.ninvoke=function(e,t){var n=K(arguments,2),i=u();return n.push(i.makeNodeResolver()),h(e).dispatch("post",[t,n]).fail(i.reject),i.promise},m.prototype.nsend=m.prototype.nmcall=m.prototype.ninvoke=function(e){var t=K(arguments,1),n=u();return t.push(n.makeNodeResolver()),this.dispatch("post",[e,t]).fail(n.reject),n.promise},h.nodeify=j,m.prototype.nodeify=function(e){return e?(this.then(function(t){U(function(){e(null,t)})},function(t){U(function(){e(t)})}),void 0):this};var rt=l();return h});