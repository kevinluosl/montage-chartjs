montageDefine("b14c684","core/serialization/serializer/montage-labeler",{dependencies:["../../core","mousse/serialization/labeler"],factory:function(t,e){var i=t("../../core").Montage,n=t("mousse/serialization/labeler").Labeler;e.MontageLabeler=i.specialize.call(n,{_labelRegexp:{value:/^[a-zA-Z_$][0-9a-zA-Z_$]*$/},constructor:{value:function(){n.call(this)}},getTemplatePropertyLabel:{value:function(t){var e=this.superForValue("getObjectLabel")(t);if(":"!==e[0])throw Error("Template property's labels need to start with a colon (:), (\""+e+'").');return e}},getObjectLabel:{value:function(t){var e=this.super(t);if(":"===e[0])throw Error('Labels starting with colon (:) can only be used for template properties, ("'+e+'").');return e}},getObjectName:{value:function(t){var e,a=t.identifier;return a&&this._labelRegexp.test(a)?e=t.identifier:"getInfoForObject"in t||"getInfoForObject"in t.constructor?(e=i.getInfoForObject(t).objectName,e=e.toLowerCase()):e=n.prototype.getObjectName.call(this,t),e}}})}});