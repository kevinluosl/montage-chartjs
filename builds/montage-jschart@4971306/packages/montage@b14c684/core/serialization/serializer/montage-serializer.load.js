montageDefine("b14c684","core/serialization/serializer/montage-serializer",{dependencies:["../../core","mousse/serialization/malker","mousse/serialization/serializer","./montage-builder","./montage-labeler","./montage-visitor","../../logger"],factory:function(t,e){var i=t("../../core").Montage,n=t("mousse/serialization/malker").Malker,a=t("mousse/serialization/serializer").Serializer,r=t("./montage-builder").MontageBuilder,s=t("./montage-labeler").MontageLabeler,o=t("./montage-visitor").MontageVisitor;t("../../logger").logger("montage-serializer");var l=i.specialize.call(a,{_require:{value:null},_visitor:{value:null},_findObjectNameRegExp:{value:/([^\/]+?)(\.reel)?$/},_toCamelCaseRegExp:{value:/(?:^|-)([^-])/g},_replaceToCamelCase:{value:function(t,e){return e.toUpperCase()}},constructor:{value:function l(){}},initWithRequire:{value:function(t){return this._require=t,this._builder=new r,this._labeler=new s,this._visitor=(new o).initWithBuilderAndLabelerAndRequireAndUnits(this._builder,this._labeler,this._require,this.constructor._units),this._malker=new n(this._visitor),this}},getExternalObjects:{value:function(){return this._visitor.getExternalObjects()}},getExternalElements:{value:function(){return this._visitor.getExternalElements()}}},{_units:{value:Object.create(null)},defineSerializationUnit:{value:function(t,e){this._units[t]=e}},getDefaultObjectNameForModuleId:{value:function(t){return this._findObjectNameRegExp.test(t),RegExp.$1.replace(this._toCamelCaseRegExp,this._replaceToCamelCase)}}});e.MontageSerializer=l,e.serialize=function(t,e){return(new l).initWithRequire(e).serializeObject(t)}}});