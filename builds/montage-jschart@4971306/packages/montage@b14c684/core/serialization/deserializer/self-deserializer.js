var Montage=require("../../core").Montage,Promise=require("../../promise").Promise,SelfDeserializer=Montage.specialize({_object:{value:null},_objectDescriptor:{value:null},_context:{value:null},_unitNames:{value:null},_objectUnitNames:{value:null},create:{value:function(){return new this}},initWithObjectAndObjectDescriptorAndContextAndUnitNames:{value:function(t,e,n,i){return this._object=t,this._objectDescriptor=e,this._context=n,this._unitNames=i,this}},getProperty:{value:function(t){return this._objectDescriptor.properties?this._objectDescriptor.properties[t]:void 0}},getType:{value:function(){return"prototype"in this._objectDescriptor?"prototype":"object"in this._objectDescriptor?"object":void 0}},getTypeValue:{value:function(){return this._objectDescriptor.prototype||this._objectDescriptor.object}},getObjectByLabel:{value:function(t){this._context.getObject(t)}},deserializeProperties:{value:function(t){var e,n=this._object,i=this._objectDescriptor.properties;if(i){t||(t=Montage.getSerializablePropertyNames(n));for(var a=0,r=t.length;r>a;a++)e=t[a],n[e]=i[e]}}},deserializeUnit:{value:function(t){var e=this._objectUnitNames;e?-1===e.indexOf(t)&&e.push(t):(e=this._objectUnitNames=[t],this._context.setUnitsToDeserialize(this._object,this._objectDescriptor,e))}},deserializeUnits:{value:function(){var t=this._objectUnitNames;if(t)for(var e,n=0;e=t[n];n++)-1===t.indexOf(e)&&t.push(e);else t=this._objectUnitNames=this._unitNames,this._context.setUnitsToDeserialize(this._object,this._objectDescriptor,t)}}});exports.SelfDeserializer=SelfDeserializer;