montageDefine("b14c684","core/serialization/serializer/montage-builder",{dependencies:["../../core","mousse/serialization/builder","./montage-ast"],factory:function(t,e){var i=t("../../core").Montage,n=t("mousse/serialization/builder").Builder,a=t("./montage-ast"),r=i.specialize.call(n,{constructor:{value:function r(){n.call(this)}},createElementReference:{value:function(t){return(new a.ElementReference).initWithRootAndId(this._root,t)}},createModuleReference:{value:function(t){return(new a.ModuleReference).initWithRootAndModuleId(this._root,t)}}});e.MontageBuilder=r}});