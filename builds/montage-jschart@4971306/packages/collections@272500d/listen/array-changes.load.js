montageDefine("272500d","listen/array-changes",{dependencies:["../shim","../list","weak-map","./property-changes","./range-changes","./map-changes"],factory:function(e){function t(e){for(var t in e)Object.defineProperty(Array.prototype,t,{value:e[t],writable:!0,configurable:!0,enumerable:!1})}e("../shim"),e("../list"),e("weak-map");var n=e("./property-changes"),i=e("./range-changes"),a=e("./map-changes");Array.prototype.splice;var r=Array.prototype.slice;Array.prototype.reverse;var s,o=Array.prototype.sort,l=Array.prototype.swap,c=[],h={}.__proto__===Object.prototype;s=h?function(){this.__proto__=d}:function(){Object.defineProperties(this,u)},Object.defineProperty(Array.prototype,"makeObservable",{value:s,writable:!0,configurable:!0,enumerable:!1}),t(n.prototype),t(i.prototype),t(a.prototype);var u={isObservable:{value:!0,writable:!0,configurable:!0},makeObservable:{value:Function.noop,writable:!0,configurable:!0},reverse:{value:function(){var e=this.constructClone(this);return e.reverse(),this.swap(0,this.length,e),this},writable:!0,configurable:!0},sort:{value:function(){this.dispatchBeforeRangeChange(this,this,0);for(var e=0;this.length>e;e++)n.dispatchBeforeOwnPropertyChange(this,e,this[e]),this.dispatchBeforeMapChange(e,this[e]);o.apply(this,arguments);for(var e=0;this.length>e;e++)n.dispatchOwnPropertyChange(this,e,this[e]),this.dispatchMapChange(e,this[e]);return this.dispatchRangeChange(this,this,0),this},writable:!0,configurable:!0},swap:{value:function(e,t,i){if(i?Array.isArray(i)||(i=r.call(i)):i=c,0>e)e=this.length+e;else if(e>this.length){for(var a=e-this.length,s=Array(a+i.length),o=0,h=a;i.length>o;o++,h++)o in i&&(s[h]=i[o]);i=s,e=this.length}var u;if(0===t){if(0===i.length)return[];u=c}else u=r.call(this,e,e+t);var d=i.length-u.length,p=this.length,g=Math.max(this.length+d,e+i.length),f=Math.max(p,g);if(d&&n.dispatchBeforeOwnPropertyChange(this,"length",this.length),this.dispatchBeforeRangeChange(i,u,e),0===d)for(var o=e;e+i.length>o;o++)n.dispatchBeforeOwnPropertyChange(this,o,this[o]),this.dispatchBeforeMapChange(o,this[o]);else if(n.hasOwnPropertyChangeDescriptor(this))for(var o=e;f>o;o++)n.dispatchBeforeOwnPropertyChange(this,o,this[o]),this.dispatchBeforeMapChange(o,this[o]);e>p&&(this.length=e);var m=l.call(this,e,t,i);if(0===d)for(var o=e;e+i.length>o;o++)n.dispatchOwnPropertyChange(this,o,this[o]),this.dispatchMapChange(o,this[o]);else if(n.hasOwnPropertyChangeDescriptor(this))for(var o=e;f>o;o++)n.dispatchOwnPropertyChange(this,o,this[o]),this.dispatchMapChange(o,this[o]);return this.dispatchRangeChange(i,u,e),d&&n.dispatchOwnPropertyChange(this,"length",this.length),m},writable:!0,configurable:!0},splice:{value:function(e,t){return e>this.length&&(e=this.length),this.swap.call(this,e,t,r.call(arguments,2))},writable:!0,configurable:!0},set:{value:function(e,t){return this.swap(e,e>=this.length?0:1,[t]),!0},writable:!0,configurable:!0},shift:{value:function(){return this.splice(0,1)[0]},writable:!0,configurable:!0},pop:{value:function(){return this.length?this.splice(this.length-1,1)[0]:void 0},writable:!0,configurable:!0},push:{value:function(e){if(1===arguments.length)return this.splice(this.length,0,e);var t=r.call(arguments);return this.swap(this.length,0,t)},writable:!0,configurable:!0},unshift:{value:function(e){if(1===arguments.length)return this.splice(0,0,e);var t=r.call(arguments);return this.swap(0,0,t)},writable:!0,configurable:!0},clear:{value:function(){return this.splice(0,this.length)},writable:!0,configurable:!0}},d=Object.create(Array.prototype,u)}});