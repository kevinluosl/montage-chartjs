montageDefine("b14c684","core/serialization/serializer/montage-ast",{dependencies:["../../core","mousse/serialization/ast"],factory:function(t,e){var i=t("../../core").Montage,n=t("mousse/serialization/ast").Value,a=i.specialize.call(n,{constructor:{value:function a(){}},initWithRootAndId:{value:function(t,e){return n.call(this,t,e),this}},_getSerializationValue:{value:function(){return{"#":this.value}}}}),r=i.specialize.call(n,{constructor:{value:function r(){}},initWithRootAndModuleId:{value:function(t,e){return n.call(this,t,e),this}},_getSerializationValue:{value:function(){return{"%":this.value}}}});e.ElementReference=a,e.ModuleReference=r}});