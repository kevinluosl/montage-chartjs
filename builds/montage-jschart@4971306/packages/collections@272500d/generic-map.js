"use strict";function GenericMap(){throw Error("Can't construct. GenericMap is a mixin.")}function Item(e,t){this.key=e,this.value=t}var Object=require("./shim-object"),MapChanges=require("./listen/map-changes"),PropertyChanges=require("./listen/property-changes");module.exports=GenericMap,Object.addEach(GenericMap.prototype,MapChanges.prototype),Object.addEach(GenericMap.prototype,PropertyChanges.prototype),GenericMap.prototype.isMap=!0,GenericMap.prototype.addEach=function(e){if(e&&Object(e)===e)if("function"==typeof e.forEach)e.isMap===!0?e.forEach(function(e,t){this.set(t,e)},this):e.forEach(function(e){this.set(e[0],e[1])},this);else if("number"==typeof e.length)for(var t=0;e.length>t;t++)this.add(e[t],t);else Object.keys(e).forEach(function(t){this.set(t,e[t])},this);else if(e&&"number"==typeof e.length)for(var t=0;e.length>t;t++)this.add(e[t],t);return this},GenericMap.prototype.get=function(e,t){var n=this.store.get(new this.Item(e));return n?n.value:arguments.length>1?t:this.getDefault(e)},GenericMap.prototype.set=function(e,t){var n=new this.Item(e,t),i=this.store.get(n),a=!1;return i?(this.dispatchesMapChanges&&this.dispatchBeforeMapChange(e,i.value),i.value=t,this.dispatchesMapChanges&&this.dispatchMapChange(e,t)):(this.dispatchesMapChanges&&this.dispatchBeforeMapChange(e,void 0),this.store.add(n)&&(this.length++,a=!0),this.dispatchesMapChanges&&this.dispatchMapChange(e,t)),a},GenericMap.prototype.add=function(e,t){return this.set(t,e)},GenericMap.prototype.has=function(e){return this.store.has(new this.Item(e))},GenericMap.prototype["delete"]=function(e){var t=new this.Item(e);if(this.store.has(t)){var n=this.store.get(t).value;return this.dispatchesMapChanges&&this.dispatchBeforeMapChange(e,n),this.store["delete"](t),this.length--,this.dispatchesMapChanges&&this.dispatchMapChange(e,void 0),!0}return!1},GenericMap.prototype.clear=function(){var e;this.dispatchesMapChanges&&(this.forEach(function(e,t){this.dispatchBeforeMapChange(t,e)},this),e=this.keys()),this.store.clear(),this.length=0,this.dispatchesMapChanges&&e.forEach(function(e){this.dispatchMapChange(e)},this)},GenericMap.prototype.reduce=function(e,t,n){return this.store.reduce(function(t,i){return e.call(n,t,i.value,i.key,this)},t,this)},GenericMap.prototype.reduceRight=function(e,t,n){return this.store.reduceRight(function(t,i){return e.call(n,t,i.value,i.key,this)},t,this)},GenericMap.prototype.keys=function(){return this.map(function(e,t){return t})},GenericMap.prototype.values=function(){return this.map(Function.identity)},GenericMap.prototype.entries=function(){return this.map(function(e,t){return[t,e]})},GenericMap.prototype.items=function(){return this.entries()},GenericMap.prototype.equals=function(e,t){if(t=t||Object.equals,this===e)return!0;if(e&&"function"==typeof e.every)return e.length===this.length&&e.every(function(e,n){return t(this.get(n),e)},this);var n=Object.keys(e);return n.length===this.length&&Object.keys(e).every(function(n){return t(this.get(n),e[n])},this)},GenericMap.prototype.toJSON=function(){return this.entries()},GenericMap.prototype.Item=Item,Item.prototype.equals=function(e){return Object.equals(this.key,e.key)&&Object.equals(this.value,e.value)},Item.prototype.compare=function(e){return Object.compare(this.key,e.key)};