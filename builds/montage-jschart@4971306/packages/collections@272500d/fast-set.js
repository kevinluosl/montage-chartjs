"use strict";function FastSet(e,t,n,i){return this instanceof FastSet?(t=t||Object.equals,n=n||Object.hash,i=i||Function.noop,this.contentEquals=t,this.contentHash=n,this.getDefault=i,this.buckets=new this.Buckets(null,this.Bucket),this.length=0,this.addEach(e),void 0):new FastSet(e,t,n,i)}var Shim=require("./shim"),Dict=require("./dict"),List=require("./list"),GenericCollection=require("./generic-collection"),GenericSet=require("./generic-set"),TreeLog=require("./tree-log"),PropertyChanges=require("./listen/property-changes"),object_has=Object.prototype.hasOwnProperty;module.exports=FastSet,FastSet.FastSet=FastSet,Object.addEach(FastSet.prototype,GenericCollection.prototype),Object.addEach(FastSet.prototype,GenericSet.prototype),Object.addEach(FastSet.prototype,PropertyChanges.prototype),FastSet.prototype.Buckets=Dict,FastSet.prototype.Bucket=List,FastSet.prototype.constructClone=function(e){return new this.constructor(e,this.contentEquals,this.contentHash,this.getDefault)},FastSet.prototype.has=function(e){var t=this.contentHash(e);return this.buckets.get(t).has(e)},FastSet.prototype.get=function(e,t){if(t)throw Error("FastSet#get does not support second argument: equals");var n=this.contentHash(e),i=this.buckets;return i.has(n)?i.get(n).get(e):this.getDefault(e)},FastSet.prototype["delete"]=function(e,t){if(t)throw Error("FastSet#delete does not support second argument: equals");var n=this.contentHash(e),i=this.buckets;if(i.has(n)){var a=i.get(n);if(a["delete"](e))return this.length--,0===a.length&&i["delete"](n),!0}return!1},FastSet.prototype.clear=function(){this.buckets.clear(),this.length=0},FastSet.prototype.add=function(e){var t=this.contentHash(e),n=this.buckets;return n.has(t)||n.set(t,new this.Bucket(null,this.contentEquals)),n.get(t).has(e)?!1:(n.get(t).add(e),this.length++,!0)},FastSet.prototype.reduce=function(e,t){var n=arguments[2],i=this.buckets,a=0;return i.reduce(function(t,i){return i.reduce(function(t,i){return e.call(n,t,i,a++,this)},t,this)},t,this)},FastSet.prototype.one=function(){return this.length>0?this.buckets.one().one():void 0},FastSet.prototype.iterate=function(){return this.buckets.values().flatten().iterate()},FastSet.prototype.log=function(e,t,n,i){e=e||TreeLog.unicodeSharp,t=t||this.logNode,n||(n=console.log,i=console),n=n.bind(i);var a=this.buckets,r=a.keys();r.forEach(function(s,o){var l,c;o===r.length-1?(l=e.fromAbove,c=" "):0===o?(l=e.branchDown,c=e.strafe):(l=e.fromBoth,c=e.strafe);var h=a.get(s);n.call(i,l+e.through+e.branchDown+" "+s),h.forEach(function(a,r){var s,o;r===h.head.prev?(s=e.fromAbove,o=" "):(s=e.fromBoth,o=e.strafe);var l;t(r,function(t){l?n.call(i,c+" "+o+"  "+t):(n.call(i,c+" "+s+e.through+e.through+t),l=!0)},function(t){n.call(i,c+" "+e.strafe+"  "+t)})})})},FastSet.prototype.logNode=function(e,t){var n=e.value;Object(n)===n?JSON.stringify(n,null,4).split("\n").forEach(function(e){t(" "+e)}):t(" "+n)};