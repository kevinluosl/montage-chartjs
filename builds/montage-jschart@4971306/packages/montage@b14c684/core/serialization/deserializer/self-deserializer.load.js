montageDefine("b14c684","core/serialization/deserializer/self-deserializer",{dependencies:["../../core","../../promise"],factory:function(t,e){var n=t("../../core").Montage;t("../../promise").Promise;var i=n.specialize({_object:{value:null},_objectDescriptor:{value:null},_context:{value:null},_unitNames:{value:null},_objectUnitNames:{value:null},create:{value:function(){return new this}},initWithObjectAndObjectDescriptorAndContextAndUnitNames:{value:function(t,e,n,i){return this._object=t,this._objectDescriptor=e,this._context=n,this._unitNames=i,this}},getProperty:{value:function(t){return this._objectDescriptor.properties?this._objectDescriptor.properties[t]:void 0}},getType:{value:function(){return"prototype"in this._objectDescriptor?"prototype":"object"in this._objectDescriptor?"object":void 0}},getTypeValue:{value:function(){return this._objectDescriptor.prototype||this._objectDescriptor.object}},getObjectByLabel:{value:function(t){this._context.getObject(t)}},deserializeProperties:{value:function(t){var e,i=this._object,a=this._objectDescriptor.properties;if(a){t||(t=n.getSerializablePropertyNames(i));for(var r=0,s=t.length;s>r;r++)e=t[r],i[e]=a[e]}}},deserializeUnit:{value:function(t){var e=this._objectUnitNames;e?-1===e.indexOf(t)&&e.push(t):(e=this._objectUnitNames=[t],this._context.setUnitsToDeserialize(this._object,this._objectDescriptor,e))}},deserializeUnits:{value:function(){var t=this._objectUnitNames;if(t)for(var e,n=0;e=t[n];n++)-1===t.indexOf(e)&&t.push(e);else t=this._objectUnitNames=this._unitNames,this._context.setUnitsToDeserialize(this._object,this._objectDescriptor,t)}}});e.SelfDeserializer=i}});