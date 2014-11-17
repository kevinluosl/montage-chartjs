function getAttributeProperties(t,e){var i=UNDERSCORE+e+ATTRIBUTE_PROPERTIES;return t.hasOwnProperty(i)?t[i]:Object.defineProperty(t,i,{enumerable:!1,configurable:!1,writable:!0,value:Object.create(getAttributeProperties(Object.getPrototypeOf(t),e))})[i]}require("collections/shim"),require("./shim/object"),require("./shim/array"),require("./shim/string"),require("./extras/object"),require("./extras/date"),require("./extras/element"),require("./extras/function"),require("./extras/regexp"),require("./extras/string");var deprecate=require("./deprecate"),ATTRIBUTE_PROPERTIES="AttributeProperties",UNDERSCORE="_",PROTO="__proto__",VALUE="value",ENUMERABLE="enumerable",DISTINCT="distinct",SERIALIZABLE="serializable",MODIFY="modify",ARRAY_PROTOTYPE=Array.prototype,OBJECT_PROTOTYPE=Object.prototype,CONSTRUCTOR_COMPATIBILITY=!0,Montage=exports.Montage=function Montage(){};Montage.deprecate=deprecate.deprecateMethod(Montage,deprecate.deprecateMethod,"Montage.deprecate","deprecate module's deprecateMethod"),Montage.callDeprecatedFunction=deprecate.deprecateMethod(Montage,deprecate.callDeprecatedFunction,"Montage.callDeprecatedFunction","deprecate module's callDeprecatedFunction");var PROTO_IS_SUPPORTED={}.__proto__===Object.prototype,PROTO_PROPERTIES_BLACKLIST={_montage_metadata:1,__state__:1},FUNCTION_PROPERTIES=Object.getOwnPropertyNames(Function);if(Object.defineProperty(Montage,"specialize",{value:function(t,e){var i,a,n,s,l,o,r,c=this,h=this.specialize===void 0;if(t=t||Object.empty,e=e||Object.empty,i=t.constructor&&t.constructor.value?t.constructor.value:t.didCreate&&t.didCreate.value?Montage.deprecate(null,t.didCreate.value,"didCreate","constructor"):function(){return this.superForValue("constructor")()||this},PROTO_IS_SUPPORTED)i.__proto__=c;else{n=Object.getOwnPropertyNames(c);for(var o=0;n.length>o;o++)s=n[o],PROTO_PROPERTIES_BLACKLIST.hasOwnProperty(s)||(l=Object.getOwnPropertyDescriptor(i,s),(!l||l.configurable)&&Montage.defineProperty(i,s,Object.getOwnPropertyDescriptor(c,s)));i.__constructorProto__=c,Montage.defineProperty(i,"isPrototypeOf",{value:function(t){for(;null!==t;){if(Object.getPrototypeOf(t)===this)return!0;t=Object.getPrototypeOf(t)}return!1},enumerable:!1})}if(a=Object.create(this.prototype),h){for(n=Object.getOwnPropertyNames(Montage),o=0;n.length>o;o++)s=n[o],l=Object.getOwnPropertyDescriptor(i,s),(!l||l.configurable)&&Montage.defineProperty(i,s,Object.getOwnPropertyDescriptor(Montage,s));for(n=Object.getOwnPropertyNames(Montage.prototype),o=0;n.length>o;o++)s=n[o],l=Object.getOwnPropertyDescriptor(i,s),(!l||l.configurable)&&Montage.defineProperty(a,s,Object.getOwnPropertyDescriptor(Montage.prototype,s))}if(Montage.defineProperties(a,t),CONSTRUCTOR_COMPATIBILITY){r=function(t,e,i){function a(){return this===e&&deprecate.deprecationWarning(Montage.getInfoForObject(e).objectName+"."+i+" should be moved to constructorProperties",null,3),t.apply(this,arguments)}return a.deprecatedFunction=t,a};for(s in t)FUNCTION_PROPERTIES.has(s)?delete t[s]:(l=t[s],l.value&&"function"==typeof l.value&&!l.value.__isConstructor__?l.value=r(l.value,i,s):(l.get&&(l.get=r(l.get,i,s)),l.set&&(l.set=r(l.set,i,s))));Montage.defineProperties(i,t),Montage.defineProperty(i,"create",{value:function(){return new i},enumerable:!1})}return Montage.defineProperties(i,e),Montage.defineProperty(i,"__isConstructor__",{value:!0,enumerable:!1}),Montage.defineProperty(i,"_superCache",{value:{},enumerable:!1}),i.prototype=a,Montage.defineProperty(a,"constructor",{value:i,enumerable:!1}),i},writable:!0,configurable:!0,enumerable:!1}),!PROTO_IS_SUPPORTED){var originalGetPrototypeOf=Object.getPrototypeOf;Object.getPrototypeOf=function(t){return"function"==typeof t&&t.__constructorProto__?t.__constructorProto__:originalGetPrototypeOf.apply(Object,arguments)}}Object.defineProperty(Montage,"create",{configurable:!0,value:function(t,e){if(void 0!==t&&"object"!=typeof t&&"function"!=typeof t)throw new TypeError("Object prototype may only be an Object or null, not '"+t+"'");if(t=t===void 0?this:t,"function"==typeof t)return e?t.specialize(e):new t;var i=Object.create(t);return e&&Montage.defineProperties(i,e),i}});var extendedPropertyAttributes=[SERIALIZABLE];extendedPropertyAttributes.forEach(function(t){Object.defineProperty(Object.prototype,UNDERSCORE+t+ATTRIBUTE_PROPERTIES,{enumerable:!1,configurable:!1,writable:!0,value:{}})}),Object.defineProperty(Montage,"defineProperty",{value:function(t,e,i){if("object"!=typeof t&&"function"!=typeof t||null===t)throw new TypeError("Object must be an object, not '"+t+"'");var a=VALUE in i;if(DISTINCT in i&&!a)throw new TypeError("Cannot use distinct attribute on non-value property '"+e+"'");if(PROTO in i)i.__proto__=a?"function"==typeof i.value?_defaultFunctionValueProperty:_defaultObjectValueProperty:_defaultAccessorProperty;else{var n;n=a?"function"==typeof i.value?_defaultFunctionValueProperty:_defaultObjectValueProperty:_defaultAccessorProperty;for(var s in n)s in i||(i[s]=n[s])}if(i.hasOwnProperty(ENUMERABLE)||e.charAt(0)!==UNDERSCORE||(i.enumerable=!1),i.hasOwnProperty(SERIALIZABLE)||(i.enumerable?i.get&&!i.set?i.serializable=!1:i.writable===!1&&(i.serializable=!1):i.serializable=!1),SERIALIZABLE in i&&(getAttributeProperties(t,SERIALIZABLE)[e]=i.serializable),i.distinct!==!0||"object"!=typeof i.value){var l,o,r;if(t._superDependencies){if("function"==typeof i.value&&(l=t._superDependencies[e+".value"]))for(o=0,r=l.length;r>o;o++)delete l[o]._superCache[e+".value"];if("function"==typeof i.get&&(l=t._superDependencies[e+".get"]))for(o=0,r=l.length;r>o;o++)delete l[o]._superCache[e+".get"];if("function"==typeof i.set&&(l=t._superDependencies[e+".set"]))for(o=0,r=l.length;r>o;o++)delete l[o]._superCache[e+".set"]}return Object.defineProperty(t,e,i)}(function(t,e,i,a){var n=function(t,e,i){Object.defineProperty(t,e,{enumerable:!1,configurable:!0,writable:!0,value:i})};i.constructor===Object&&Object.getPrototypeOf(i)===OBJECT_PROTOTYPE?0!==Object.keys(i).length?Object.defineProperty(a,t,{configurable:!0,get:function(){var t=this[e];if(!t){var a;t={};for(a in i)t[a]=i[a];this.hasOwnProperty(e)?this[e]=t:n(this,e,t)}return t},set:function(t){this.hasOwnProperty(e)?this[e]=t:n(this,e,t)}}):Object.defineProperty(a,t,{configurable:!0,get:function(){var t=this[e];return t||(t={},this.hasOwnProperty(e)?this[e]=t:n(this,e,t)),t},set:function(t){this.hasOwnProperty(e)?this[e]=t:n(this,e,t)}}):(i.__proto__||Object.getPrototypeOf(i))===ARRAY_PROTOTYPE?0!==i.length?Object.defineProperty(a,t,{configurable:!0,get:function(){var t=this[e];if(!t){var a,s;for(t=[],a=0;(s=i[a])!==void 0;a++)t[a]=s;this.hasOwnProperty(e)?this[e]=t:n(this,e,t)}return t},set:function(t){this.hasOwnProperty(e)?this[e]=t:n(this,e,t)}}):Object.defineProperty(a,t,{configurable:!0,get:function(){var t=this[e];return t||(t=[],this.hasOwnProperty(e)?this[e]=t:n(this,e,t)),t},set:function(t){this.hasOwnProperty(e)?this[e]=t:n(this,e,t)}}):i.constructor.prototype===Object.getPrototypeOf(i)?Object.defineProperty(a,t,{configurable:!0,get:function(){var t=this[e];if(!t){var a;t=new i.constructor;for(a in i)t[a]=i[a];this.hasOwnProperty(e)?this[e]=t:n(this,e,t)}return t},set:function(t){this.hasOwnProperty(e)?this[e]=t:n(this,e,t)}}):Object.defineProperty(a,t,{configurable:!0,get:function(){var t=this[e];return t||(t=Object.create(i.__proto__||Object.getPrototypeOf(i)),this.hasOwnProperty(e)?this[e]=t:n(this,e,t)),t},set:function(t){this.hasOwnProperty(e)?this[e]=t:n(this,e,t)}})})(e,UNDERSCORE+e,i.value,t)}}),Object.defineProperty(Montage,"defineProperties",{value:function(t,e){if("object"!=typeof e||null===e)throw new TypeError("Properties must be an object, not '"+e+"'");for(var i in e)"_bindingDescriptors"!==i&&this.defineProperty(t,i,e[i]);return t}});var _defaultAccessorProperty={enumerable:!0,configurable:!0,serializable:!0},_defaultObjectValueProperty={writable:!0,enumerable:!0,configurable:!0,serializable:"reference"},_defaultFunctionValueProperty={writable:!0,enumerable:!1,configurable:!0,serializable:!1};Montage.defineProperty(Montage,"didCreate",{value:Function.noop});var getSuper=function(t,e){var i,a,n,s,l,o,r,c,h;if(!e._superPropertyName||!e._superPropertyType)for(Montage.defineProperty(e,"_superPropertyType",{value:null}),Montage.defineProperty(e,"_superPropertyName",{value:null}),r=t;!c&&null!==r;){for(i=Object.getOwnPropertyNames(r),a=Object.getPrototypeOf(r),n=0,s=i.length,n;s>n;n++){if(l=i[n],h=Object.getOwnPropertyDescriptor(r,l),null!=(o=h.value)&&(o===e||o.deprecatedFunction===e)){e._superPropertyType="value",e._superPropertyName=l,c=!0;break}if(null!=(o=h.get)&&(o===e||o.deprecatedFunction===e)){e._superPropertyType="get",e._superPropertyName=l,c=!0;break}if(null!=(o=h.set)&&(o===e||o.deprecatedFunction===e)){e._superPropertyType="set",e._superPropertyName=l,c=!0;break}}r=a}return superForImplementation(t,e._superPropertyType,e._superPropertyName)},superImplementation=function(){if("function"!=typeof superImplementation.caller)throw new TypeError("Can't get super without caller. Use this.superForValue(methodName) if using strict mode.");var t=getSuper(this,superImplementation.caller);return"function"==typeof t?t.bind(this):Function.noop},superForImplementation=function(t,e,i){var a,n,s,l,o,r=t,c=i+"."+e;if(t._superContext||Montage.defineProperty(t,"_superContext",{value:{}}),t._superContext[c])r=t._superContext[c];else for(r=t;null!==r&&(!r.hasOwnProperty(i)||(s=Object.getOwnPropertyDescriptor(r,i),"function"!=typeof s[e]));)r=Object.getPrototypeOf(r);if(l=r.constructor,l._superCache&&l._superCache[c])return o=function(t,e,i,a){return function(){e._superContext[t]=i;var n=a.apply(e,arguments);return delete e._superContext[t],n}}(c,t,l._superCache[c].owner,l._superCache[c].func);for(n=r;a===void 0&&(n=Object.getPrototypeOf(n));)if(n._superDependencies||Montage.defineProperty(n,"_superDependencies",{value:{}}),n._superDependencies[c]||(n._superDependencies[c]=[]),n._superDependencies[c].push(l),s=Object.getOwnPropertyDescriptor(n,i)){if("function"==typeof s[e]){a=s[e];break}break}return"function"==typeof a?(o=function(t,e,i,a){return function(){e._superContext[t]=i;var n=a.apply(e,arguments);return delete e._superContext[t],n}}(c,t,n,a),l._superCache||Montage.defineProperty(l,"_superCache",{value:{}}),l._superCache[c]={func:a,owner:n},o):Function.noop},superForValueImplementation=function(t){return superForImplementation(this,"value",t)},superForGetImplementation=function(t){return superForImplementation(this,"get",t)},superForSetImplementation=function(t){return superForImplementation(this,"set",t)};Montage.defineProperty(Montage,"super",{get:superImplementation,enumerable:!1}),Montage.defineProperty(Montage.prototype,"super",{get:superImplementation,enumerable:!1}),Montage.defineProperty(Montage,"superForValue",{value:superForValueImplementation,enumerable:!1}),Montage.defineProperty(Montage.prototype,"superForValue",{value:superForValueImplementation,enumerable:!1}),Montage.defineProperty(Montage,"superForGet",{value:superForGetImplementation,enumerable:!1}),Montage.defineProperty(Montage.prototype,"superForGet",{value:superForGetImplementation,enumerable:!1}),Montage.defineProperty(Montage,"superForSet",{value:superForSetImplementation,enumerable:!1}),Montage.defineProperty(Montage.prototype,"superForSet",{value:superForSetImplementation,enumerable:!1}),Montage.defineProperty(Montage,"getSerializablePropertyNames",{value:function(t){var e=[],i=t._serializableAttributeProperties;if(i)for(var a in i)i[a]&&e.push(a);return e}}),Montage.defineProperty(Montage,"getPropertyAttribute",{value:function(t,e,i){var a=UNDERSCORE+i+ATTRIBUTE_PROPERTIES,n=t[a];return n?n[e]:void 0}}),Montage.defineProperty(Montage,"getPropertyAttributes",{value:function(t,e){var i={},a=UNDERSCORE+e+ATTRIBUTE_PROPERTIES,n=t[a];if(n){for(var s in n)i[s]=n[s];return i}}});var _instanceMetadataDescriptor={isInstance:{value:!0}},_functionInstanceMetadataDescriptor={objectName:{value:"Function"},isInstance:{value:!0}};Montage.defineProperty(Montage,"getInfoForObject",{value:function(t){var e,i;if(hasOwnProperty.call(t,"_montage_metadata"))return t._montage_metadata;if(e=t._montage_metadata||t.constructor&&t.constructor._montage_metadata||null,i=t.constructor===Function?_functionInstanceMetadataDescriptor:_instanceMetadataDescriptor,t===Object.prototype)return Object.create(e,i);try{return Object.defineProperty(t,"_montage_metadata",{enumerable:!1,writable:!0,value:Object.create(e,i)})._montage_metadata}catch(a){return t._montage_metadata=Object.create(e,i)}}});var UUID=require("./uuid");"undefined"!=typeof window&&(window.uuid=UUID.generate());var hasOwnProperty=Object.prototype.hasOwnProperty,uuidGetGenerator=function(){var t=UUID.generate(),e=Montage.getInfoForObject(this);try{null!==e&&e.isInstance===!1?(this._uuid=t,Object.defineProperty(this,"uuid",{get:function(){return this.hasOwnProperty("uuid")?this._uuid:uuidGetGenerator.call(this)}})):(e.isInstance&&Object.defineProperty(this,"uuid",{configurable:!0,enumerable:!1,writable:!1,value:t}),!(this instanceof Element)&&e.isInstance&&VALUE in(Object.getOwnPropertyDescriptor(this,"uuid")||{})&&PROTO in this||(this._uuid=t))}catch(i){}return this._uuid=t,t},defaultUuidGet=function defaultUuidGet(){return hasOwnProperty.call(this,"_uuid")?this._uuid:uuidGetGenerator.call(this)};Object.defineProperty(Object.prototype,"_uuid",{enumerable:!1,value:null,writable:!0}),Object.defineProperty(Object.prototype,"uuid",{configurable:!0,get:defaultUuidGet,set:function(){}}),Montage.defineProperty(Montage,"identifier",{value:null,serializable:!0}),Montage.defineProperty(Montage.prototype,"identifier",{value:null,serializable:!0}),Montage.defineProperty(Montage.prototype,"equals",{value:function(t){return t?this===t||this.uuid===t.uuid:!1}}),Montage.defineProperty(Montage,"equals",{value:Montage.prototype.equals}),Montage.defineProperty(Montage.prototype,"callDelegateMethod",{value:function(t){var e,i,a=this.delegate;return"string"==typeof this.identifier&&(e=this.identifier+t.toCapitalized(),a&&"function"==typeof(i=a[e]))?(ARRAY_PROTOTYPE.shift.call(arguments),i.apply(a,arguments)):a&&"function"==typeof(i=a[t])?(ARRAY_PROTOTYPE.shift.call(arguments),i.apply(a,arguments)):void 0}});var PropertyChanges=require("collections/listen/property-changes");Object.addEach(Montage,PropertyChanges.prototype),Object.addEach(Montage.prototype,PropertyChanges.prototype);var Bindings=exports.Bindings=require("frb"),bindingPropertyDescriptors={defineBinding:{value:function(t,e,i){return Bindings.defineBinding(this,t,e,i)}},defineBindings:{value:function(t,e){return Bindings.defineBindings(this,t,e)}},cancelBinding:{value:function(t){return Bindings.cancelBinding(this,t)}},cancelBindings:{value:function(){return Bindings.cancelBindings(this)}},getBinding:{value:function(t){return Bindings.getBinding(this,t)}},getBindings:{value:function(){return Bindings.getBindings(this)}}};Montage.defineProperties(Montage,bindingPropertyDescriptors),Montage.defineProperties(Montage.prototype,bindingPropertyDescriptors);var WeakMap=require("collections/weak-map"),Map=require("collections/map"),parse=require("frb/parse"),evaluate=require("frb/evaluate"),assign=require("frb/assign"),observe=require("frb/observe"),bind=require("frb/bind"),compileObserver=require("frb/compile-observer"),Scope=require("frb/scope"),Observers=require("frb/observers"),autoCancelPrevious=Observers.autoCancelPrevious,pathChangeDescriptors=new WeakMap,pathPropertyDescriptors={getPath:{value:function(t,e,i,a){return evaluate(t,this,e||this,i,a)}},setPath:{value:function(t,e,i,a,n){return assign(this,t,e,i||this,a,n)}},observePath:{value:function(t,e){var i=parse(t),a=compileObserver(i);return a(autoCancelPrevious(e),new Scope(this))}},addRangeAtPathChangeListener:{value:function(t,e,i,a,n,s){function l(t,a,n){if(e[i])e[i](t,a,n);else{if(!e.call)throw Error("Can't dispatch range change to "+e);e.call(null,t,a,n)}}i=i||"handleRangeChange";var o=[];return this.addPathChangeListener(t,function(t){return t&&t.toArray&&t.addRangeChangeListener?(l(t.toArray(),o.toArray(),0),o=t,t.addRangeChangeListener(l)):(t=[],l(t,o,0),o=t,void 0)},void 0,void 0,a,n,s)}},getPathChangeDescriptors:{value:function(){return pathChangeDescriptors.has(this)||pathChangeDescriptors.set(this,{}),pathChangeDescriptors.get(this)}},getPathChangeDescriptor:{value:function(t,e,i){var a=Montage.getPathChangeDescriptors.call(this);return Object.owns(a,t)||(a[t]={willChangeListeners:new Map,changeListeners:new Map}),a=a[t],a=i?a.willChangeListeners:a.changeListeners,a.has(e)||a.set(e,{path:t,handler:e,beforeChange:i,cancel:Function.noop}),a.get(e)}},addPathChangeListener:{value:function(t,e,i,a,n,s,l){var o=this;e=e||Function.noop;var r=Montage.getPathChangeDescriptor.call(this,t,e,a);r.cancel();var c,h,p,d=parse(t);if(e===Function.noop)p=function(e){if(h)throw Error("Path change handler needs a handler because it emits new values when the source changes: "+JSON.stringify(t));h=!0,c=e};else if(i)p=function(a){return e[i].call(e,a,t,o)};else if(e.handlePathChange)p=function(i){return e.handlePathChange.call(e,i,t,o)};else{if("function"!=typeof e)throw Error("Can't recognize handler type: "+e+". Must be function or delegate implementing handlePathChange.");p=function(i){return e.call(o,i,t,o)}}var g=compileObserver(d),u=new Scope(this);u.beforeChange=a,u.parameters=n,u.document=s,u.components=l;var m=g(autoCancelPrevious(p),u);return r.cancel=m,h?c:m}},removePathChangeListener:{value:function(t,e,i){e=e||Function.noop;var a=Montage.getPathChangeDescriptors.call(this),n=i?"willChangeListeners":"changeListeners";if(!Object.owns(a,t))throw Error("Can't find "+n+" for "+JSON.stringify(t));var s=a[t],l=s[n];if(!l.has(e))throw Error("Can't find "+n+" for "+JSON.stringify(t));var o=l.get(e);o.cancel(),l["delete"](e),0===s.willChangeListeners.length&&0===s.changeListeners.length&&delete a[t];for(var r in a)return;pathChangeDescriptors["delete"](this)}},addBeforePathChangeListener:{value:function(t,e,i,a,n,s){return Montage.addPathChangeListener.call(this,t,e,i,!0,a,n,s)}},removeBeforePathChangeListener:{value:function(t,e){return Montage.removePathChangeListener.call(this,t,e,!0)}}};Montage.defineProperties(Montage,pathPropertyDescriptors),Montage.defineProperties(Montage.prototype,pathPropertyDescriptors),require("./serialization/bindings"),exports._blueprintModuleIdDescriptor={serializable:!1,enumerable:!1,get:function(){var t=Montage.getInfoForObject(this),e=t&&!t.isInstance?this:this.constructor;if(!Object.getOwnPropertyDescriptor(e,"_blueprintModuleId")||!e._blueprintModuleId){t=Montage.getInfoForObject(e);var i=t.moduleId,a=i.lastIndexOf("/"),n=i.lastIndexOf(".");a=-1===a?0:a+1,n=-1===n?i.length:n,n=a>n?i.length:n,Montage.defineProperty(e,"_blueprintModuleId",{enumerable:!1,value:i.slice(0,n)+".meta"})}return e._blueprintModuleId}},exports._blueprintDescriptor={serializable:!1,enumerable:!1,get:function(){var t=Montage.getInfoForObject(this),e=t&&!t.isInstance?this:this.constructor;if(!Object.getOwnPropertyDescriptor(e,"_blueprint")||!e._blueprint){var i=e.blueprintModuleId;if(""===i)throw new TypeError("Blueprint moduleId undefined for the module '"+JSON.stringify(e)+"'");exports._blueprintDescriptor.BlueprintModulePromise||(exports._blueprintDescriptor.BlueprintModulePromise=require.async("core/meta/module-blueprint").get("ModuleBlueprint")),Montage.defineProperty(e,"_blueprint",{enumerable:!1,value:exports._blueprintDescriptor.BlueprintModulePromise.then(function(t){var a=Montage.getInfoForObject(e);return t.getBlueprintWithModuleId(i,a.require).fail(function(i){if(-1!==i.message.indexOf("Can't XHR"))return t.createDefaultBlueprintForObject(e).then(function(t){return t});throw i})})})}return e._blueprint},set:function(t){var e,i=Montage.getInfoForObject(this),a=i&&!i.isInstance?this:this.constructor;if(null===t)e=null;else{if("function"==typeof t.then)throw new TypeError("Object blueprint should not be a promise");t.blueprintInstanceModule=a.blueprintModule,e=require("./promise").Promise.resolve(t)}Montage.defineProperty(a,"_blueprint",{enumerable:!1,value:e})}};