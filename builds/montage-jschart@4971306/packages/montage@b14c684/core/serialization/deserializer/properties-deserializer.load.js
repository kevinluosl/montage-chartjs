montageDefine("b14c684","core/serialization/deserializer/properties-deserializer",{dependencies:["../../core","../../promise"],factory:function(t,e){var n=t("../../core").Montage;t("../../promise").Promise;var i=n.specialize({_object:{value:null},_objectDescriptor:{value:null},_context:{value:null},initWithObjectAndObjectDescriptorAndContext:{value:function(t,e,n){return this._object=t,this._objectDescriptor=e,this._context=n,this}},get:{value:function(t){return this._objectDescriptor.properties?this._objectDescriptor.properties[t]:void 0}},deserializeProperties:{value:function(t){var e,i=this._object,a=this._objectDescriptor.properties;if(a){t||(t=n.getSerializablePropertyNames(i));for(var r=0,s=t.length;s>r;r++)e=t[r],i[e]=a[e]}}},getObjectByLabel:{value:function(t){this._context.getObject(t)}}});e.PropertiesDeserializer=i}});