montageDefine("b14c684","core/meta/derived-property-blueprint",{dependencies:["../core","./property-blueprint","../logger"],factory:function(t,e){"use strict";t("../core").Montage;var n=t("./property-blueprint").PropertyBlueprint;t("../logger").logger("blueprint");var i={dependencies:[],getterDefinition:"",setterDefinition:""};e.DerivedPropertyBlueprint=n.specialize({constructor:{value:function(){this.superForValue("constructor")()}},serializeSelf:{value:function(t){this.dependencies.length>0&&this._setPropertyWithDefaults(t,"dependencies",this.dependencies),this._setPropertyWithDefaults(t,"getterDefinition",this.getterDefinition),this._setPropertyWithDefaults(t,"setterDefinition",this.setterDefinition)}},deserializeSelf:{value:function(t){this.dependencies=this._getPropertyWithDefaults(t,"dependencies"),this.getterDefinition=this._getPropertyWithDefaults(t,"getterDefinition"),this.setterDefinition=this._getPropertyWithDefaults(t,"setterDefinition")}},_setPropertyWithDefaults:{value:function(t,e,n){n!=i[e]&&t.setProperty(e,n)}},_getPropertyWithDefaults:{value:function(t,e){var n=t.getProperty(e);return n?n:i[e]}},isDerived:{get:function(){return!0},serializable:!1},dependencies:{value:[],distinct:!0},getterDefinition:{value:i.getterDefinition},setterDefinition:{value:i.setterDefinition}})}});