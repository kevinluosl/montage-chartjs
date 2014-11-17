montageDefine("b14c684","core/serialization/deserializer/montage-interpreter",{dependencies:["../../core","mousse/deserialization/interpreter","mousse/deserialization/context","./montage-reviver","../../promise"],factory:function(t,e){var n=t("../../core").Montage,i=t("mousse/deserialization/interpreter").Interpreter,a=t("mousse/deserialization/context").Context,r=t("./montage-reviver").MontageReviver,s=t("../../promise").Promise,o=n.specialize.call(i,{_require:{value:null},_reviver:{value:null},init:{value:function(t,e){if("function"!=typeof t)throw Error("Function 'require' missing.");return this._reviver=(new r).init(t,e),this._require=t,this}},instantiate:{value:function(t,e,n){var i;return i=(new l).init(t,this._reviver,e,n,this._require),i.getObjects()}},preloadModules:{value:function(t){var e,n,i,a,o=this._reviver,l=o.moduleLoader,c=[];for(var h in t)e=t[h],n=e.prototype||e.object,n&&(i=r.parseObjectLocationId(n),a=l.getModule(i.moduleId,h),s.isPromise(a)&&c.push(a));return c.length>0?s.all(c):void 0}}}),l=n.specialize.call(a,{_ELEMENT_ID_ATTRIBUTE:{value:"data-montage-id"},_unitsToDeserialize:{value:null},_element:{value:null},_require:{value:null},constructor:{value:function(){this._unitsToDeserialize=[]}},init:{value:function(t,e,n,i,r){return a.call(this,t,e,n),this._element=i,this._require=r,this}},hasObject:{value:function(t){return t in this._serialization}},getRequire:{value:function(){return this._require}},getElement:{value:function(){return this._element}},getElementById:{value:function(t){var e="*["+this._ELEMENT_ID_ATTRIBUTE+'="'+t+'"]';return this._element.querySelector(e)}},setUnitsToDeserialize:{value:function(t,e,n){this._unitsToDeserialize.push({object:t,objectDesc:e,unitNames:n})}},getUnitsToDeserialize:{value:function(){return this._unitsToDeserialize}}});e.MontageInterpreter=o,e.MontageContext=l}});