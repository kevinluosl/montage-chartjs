montageDefine("272500d","generic-map",{dependencies:["./shim-object","./listen/map-changes","./listen/property-changes"],factory:function(e,t,n){"use strict";function i(){throw Error("Can't construct. GenericMap is a mixin.")}function a(e,t){this.key=e,this.value=t}var r=e("./shim-object"),s=e("./listen/map-changes"),o=e("./listen/property-changes");n.exports=i,r.addEach(i.prototype,s.prototype),r.addEach(i.prototype,o.prototype),i.prototype.isMap=!0,i.prototype.addEach=function(e){if(e&&r(e)===e)if("function"==typeof e.forEach)e.isMap===!0?e.forEach(function(e,t){this.set(t,e)},this):e.forEach(function(e){this.set(e[0],e[1])},this);else if("number"==typeof e.length)for(var t=0;e.length>t;t++)this.add(e[t],t);else r.keys(e).forEach(function(t){this.set(t,e[t])},this);else if(e&&"number"==typeof e.length)for(var t=0;e.length>t;t++)this.add(e[t],t);return this},i.prototype.get=function(e,t){var n=this.store.get(new this.Item(e));return n?n.value:arguments.length>1?t:this.getDefault(e)},i.prototype.set=function(e,t){var n=new this.Item(e,t),i=this.store.get(n),a=!1;return i?(this.dispatchesMapChanges&&this.dispatchBeforeMapChange(e,i.value),i.value=t,this.dispatchesMapChanges&&this.dispatchMapChange(e,t)):(this.dispatchesMapChanges&&this.dispatchBeforeMapChange(e,void 0),this.store.add(n)&&(this.length++,a=!0),this.dispatchesMapChanges&&this.dispatchMapChange(e,t)),a},i.prototype.add=function(e,t){return this.set(t,e)},i.prototype.has=function(e){return this.store.has(new this.Item(e))},i.prototype["delete"]=function(e){var t=new this.Item(e);if(this.store.has(t)){var n=this.store.get(t).value;return this.dispatchesMapChanges&&this.dispatchBeforeMapChange(e,n),this.store["delete"](t),this.length--,this.dispatchesMapChanges&&this.dispatchMapChange(e,void 0),!0}return!1},i.prototype.clear=function(){var e;this.dispatchesMapChanges&&(this.forEach(function(e,t){this.dispatchBeforeMapChange(t,e)},this),e=this.keys()),this.store.clear(),this.length=0,this.dispatchesMapChanges&&e.forEach(function(e){this.dispatchMapChange(e)},this)},i.prototype.reduce=function(e,t,n){return this.store.reduce(function(t,i){return e.call(n,t,i.value,i.key,this)},t,this)},i.prototype.reduceRight=function(e,t,n){return this.store.reduceRight(function(t,i){return e.call(n,t,i.value,i.key,this)},t,this)},i.prototype.keys=function(){return this.map(function(e,t){return t})},i.prototype.values=function(){return this.map(Function.identity)},i.prototype.entries=function(){return this.map(function(e,t){return[t,e]})},i.prototype.items=function(){return this.entries()},i.prototype.equals=function(e,t){if(t=t||r.equals,this===e)return!0;if(e&&"function"==typeof e.every)return e.length===this.length&&e.every(function(e,n){return t(this.get(n),e)},this);var n=r.keys(e);return n.length===this.length&&r.keys(e).every(function(n){return t(this.get(n),e[n])},this)},i.prototype.toJSON=function(){return this.entries()},i.prototype.Item=a,a.prototype.equals=function(e){return r.equals(this.key,e.key)&&r.equals(this.value,e.value)},a.prototype.compare=function(e){return r.compare(this.key,e.key)}}});