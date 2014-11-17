montageDefine("b14c684","core/serialization/deserializer/montage-reviver",{dependencies:["../../core","mousse/deserialization/reviver","./properties-deserializer","./self-deserializer","./unit-deserializer","../../module-reference","../alias","../../promise"],factory:function(t,e){var n=t("../../core").Montage,i=t("mousse/deserialization/reviver").Reviver,a=t("./properties-deserializer").PropertiesDeserializer,r=t("./self-deserializer").SelfDeserializer,s=t("./unit-deserializer").UnitDeserializer,o=t("../../module-reference").ModuleReference,l=t("../alias").Alias,c=t("../../promise").Promise,h=n.specialize({_require:{value:null},_objectRequires:{value:null},init:{value:function(t,e){if("function"!=typeof t)throw Error("Function 'require' missing.");if("string"!=typeof t.location)throw Error("Function 'require' location is missing");if("object"!=typeof e&&e!==void 0)throw Error("Parameter 'objectRequires' should be an object.");return this._require=t,this._objectRequires=e,this}},getExports:{value:function(t,e){var n;for(e=t.resolve(e),n=t.getModuleDescriptor(e);void 0!==n.redirect;)n=t.getModuleDescriptor(n.redirect);return void 0!==n.mappingRedirect?this.getExports(n.mappingRequire,n.mappingRedirect):n.exports}},getModule:{value:function(t,e){var n,i,a=this._objectRequires;return n=a&&e in a?a[e]:this._require,i=this.getExports(n,t),i||(i=n.async(t)),i}}}),u=e.MontageReviver=n.specialize.call(i,{moduleLoader:{value:null},init:{value:function(t,e){return this.moduleLoader=(new h).init(t,e),this}},getTypeOf:{value:function(t){if(null!==t&&"object"==typeof t&&1===Object.keys(t).length){if("#"in t)return"Element";if("%"in t)return"Module"}return i.prototype.getTypeOf.call(this,t)}},_checkLabel:{value:function(t,e){return e&&":"!==t[0]?Error('Aliases can only be defined in template properties (start with a colon (:)), "'+t+'".'):e||":"!==t[0]?void 0:Error('Only aliases are allowed as template properties (start with a colon (:), "'+t+'".')}},reviveRootObject:{value:function(t,e,n){var a,r="alias"in t;return a=this._checkLabel(n,r),a?c.reject(a):i.prototype.reviveRootObject.apply(this,arguments)}},reviveElement:{value:function(t,e,n){var i=t["#"],a=e.getElementById(i);return a?(n&&e.setObjectLabel(a,n),a):c.reject(Error("Element with id '"+i+"' was not found."))}},reviveModule:{value:function(t,e){var n=t["%"],i=e.getRequire();n=i.resolve(n);var a=i.getModuleDescriptor(n);return(new o).initWithIdAndRequire(a.id,a.require)}},reviveCustomObject:{value:function(t,e,n){return"alias"in t?this.reviveAlias(t,e,n):this.reviveMontageObject(t,e,n)}},reviveMontageObject:{value:function(t,e,n){var i,a,r,s=this,o=t.prototype||t.object;return o&&(a=u.parseObjectLocationId(o),i=this.moduleLoader.getModule(a.moduleId,n),r=a.objectName),c.isPromise(i)?i.then(function(i){return s.instantiateMontageObject(t,i,r,e,n)},function(e){throw e.stack&&console.error(e.stack),Error('Error deserializing "'+n+'" when loading module "'+a.moduleId+"' from '"+t.prototype+"'")}):this.instantiateMontageObject(t,i,r,e,n)}},instantiateMontageObject:{value:function(t,e,n,i,a){var r,s,o=this;return r=this.getMontageObject(t,e,n,i,a),i.setObjectLabel(r,a),r.isDeserializing=!0,s=this.reviveObjectLiteral(t,i),c.isPromise(s)?s.then(function(t){return o.deserializeMontageObject(t,r,i,a)}):this.deserializeMontageObject(s,r,i,a)}},deserializeMontageObject:{value:function(t,e,n,i){var a;return"function"==typeof e.deserializeSelf?this.deserializeCustomMontageObject(e,t,n,i):(n.setUnitsToDeserialize(e,t,u._unitNames),a=this.deserializeMontageObjectProperties(e,t.properties,n),c.isPromise(a)?a.then(function(){return e}):e)}},deserializeMontageObjectProperties:{value:function(t,e,n){var i;if("function"==typeof t.deserializeProperties){var r=(new a).initWithReviverAndObjects(this,n);i=t.deserializeProperties(r)}else for(var s in e)t[s]=e[s];return i}},deserializeCustomMontageObject:{value:function(t,e,n,i){var a,s=(new r).initWithObjectAndObjectDescriptorAndContextAndUnitNames(t,e,n,u._unitNames);return a=t.deserializeSelf(s),c.isPromise(a)?a.then(function(t){return n.setObjectLabel(t,i),t}):a!==void 0?(n.setObjectLabel(a,i),a):t}},getMontageObject:{value:function(t,e,n,i,a){var r;if(i.hasUserObject(a))return i.getUserObject(a);if("prototype"in t){if(!(n in e))throw Error('Error deserializing "'+a+'": object named "'+n+'"'+' was not found in "'+t.prototype+'".'+" Available objects are: "+Object.keys(e)+".");return r=Object.create(e[n].prototype),r.isDeserializing=!0,"function"==typeof r.didCreate?r.didCreate():"function"==typeof r.constructor&&r.constructor(),r}if("object"in t){if(!(n in e))throw Error('Error deserializing "'+a+'": object named "'+r+"' was not found given '"+t.object+"'");return e[n]}throw Error("Error deserializing "+JSON.stringify(t)+', might need "prototype" or "object" on label '+JSON.stringify(a))}},reviveAlias:{value:function(t,e,n){var i=new l;return i.value=t.alias,e.setObjectLabel(i,n),i}},didReviveObjects:{value:function(t,e){var n,i=this;return n=this._deserializeUnits(e),c.isPromise(n)?n.then(function(){i._invokeDeserializedFromSerialization(t,e)}):(this._invokeDeserializedFromSerialization(t,e),void 0)}},_invokeDeserializedFromSerialization:{value:function(t,e){var n;for(var i in t)n=t[i],null!=n&&delete n.isDeserializing,e.hasUserObject(i)||n&&"function"==typeof n.deserializedFromSerialization&&n.deserializedFromSerialization(i)}},_deserializeUnits:{value:function(t){var e,n,i=t.getUnitsToDeserialize(),a=u._unitRevivers;try{for(var r,o=0;r=i[o];o++){e=r.unitNames;for(var l,h=0;l=e[h];h++)l in r.objectDesc&&(n=(new s).initWithContext(t),a[l](n,r.object,r.objectDesc[l]))}}catch(d){return c.reject(d)}}}},{_unitRevivers:{value:Object.create(null)},_unitNames:{value:[]},_findObjectNameRegExp:{value:/([^\/]+?)(\.reel)?$/},_toCamelCaseRegExp:{value:/(?:^|-)([^-])/g},_replaceToCamelCase:{value:function(t,e){return e.toUpperCase()}},_locationDescCache:{value:Object.create(null)},parseObjectLocationId:{value:function(t){var e,n,i,a,r=this._locationDescCache;return t in r?e=r[t]:(n=t.indexOf("["),n>0?(i=t.substr(0,n),a=t.slice(n+1,-1)):(i=t,this._findObjectNameRegExp.test(t),a=RegExp.$1.replace(this._toCamelCaseRegExp,this._replaceToCamelCase)),e={moduleId:i,objectName:a},r[t]=e),e}},defineUnitReviver:{value:function(t,e){this._unitRevivers[t]=e,this._unitNames.push(t)}},getTypeOf:{value:function(t){return this.prototype.getTypeOf.call(this,t)}}});e!==void 0&&(e.MontageReviver=u)}});