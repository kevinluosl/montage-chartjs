"use strict";function MapChanges(){throw Error("Can't construct. MapChanges is a mixin.")}var WeakMap=require("weak-map"),List=require("../list");module.exports=MapChanges;var object_owns=Object.prototype.hasOwnProperty,mapChangeDescriptors=new WeakMap;MapChanges.prototype.getAllMapChangeDescriptors=function(){var e=require("../dict");return mapChangeDescriptors.has(this)||mapChangeDescriptors.set(this,e()),mapChangeDescriptors.get(this)},MapChanges.prototype.getMapChangeDescriptor=function(e){var t=this.getAllMapChangeDescriptors();return e=e||"",t.has(e)||t.set(e,{willChangeListeners:new List,changeListeners:new List}),t.get(e)},MapChanges.prototype.addMapChangeListener=function(e,t,n){!this.isObservable&&this.makeObservable&&this.makeObservable();var i,a=this.getMapChangeDescriptor(t);i=n?a.willChangeListeners:a.changeListeners,i.push(e),Object.defineProperty(this,"dispatchesMapChanges",{value:!0,writable:!0,configurable:!0,enumerable:!1});var r=this;return function(){r&&(r.removeMapChangeListener(e,t,n),r=null)}},MapChanges.prototype.removeMapChangeListener=function(e,t,n){var i,a=this.getMapChangeDescriptor(t);i=n?a.willChangeListeners:a.changeListeners;var r=i.findLast(e);if(!r)throw Error("Can't remove map change listener: does not exist: token "+JSON.stringify(t));r["delete"]()},MapChanges.prototype.dispatchMapChange=function(e,t,n){var i=this.getAllMapChangeDescriptors(),a="Map"+(n?"WillChange":"Change");i.forEach(function(i,r){if(!i.isActive){i.isActive=!0;var s;s=n?i.willChangeListeners:i.changeListeners;var o="handle"+(r.slice(0,1).toUpperCase()+r.slice(1))+a;try{s.forEach(function(n){if(n[o])n[o](t,e,this);else{if(!n.call)throw Error("Handler "+n+" has no method "+o+" and is not callable");n.call(n,t,e,this)}},this)}finally{i.isActive=!1}}},this)},MapChanges.prototype.addBeforeMapChangeListener=function(e,t){return this.addMapChangeListener(e,t,!0)},MapChanges.prototype.removeBeforeMapChangeListener=function(e,t){return this.removeMapChangeListener(e,t,!0)},MapChanges.prototype.dispatchBeforeMapChange=function(e,t){return this.dispatchMapChange(e,t,!0)};