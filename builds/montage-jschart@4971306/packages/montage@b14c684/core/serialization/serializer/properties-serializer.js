var Montage=require("../../core").Montage,PropertiesSerializer=Montage.specialize.call(Object,{_malker:{value:null},_visitor:{value:null},_object:{value:null},constructor:{value:function PropertiesSerializer(){}},initWithMalkerAndVisitorAndObject:{value:function(t,e,i){return this._malker=t,this._visitor=e,this._object=i,this}},addObject:{value:function(t){return"object"==typeof t?(this._malker.visit(t),t):void 0}},addObjectReference:{value:function(t){var e=this._visitor.builder,i=this._visitor.labeler,n=i.getObjectLabel(t),a=Object.create(ObjectReference);return a.reference=e.createReference(n),a}},set:{value:function(t,e,i){this._visitor.setProperty(this._malker,t,e,i)}},setAll:{value:function(){this._visitor.setSerializableObjectProperties(this._malker,this._object)}}}),ObjectReference={thisIsAReferenceCreatedByMontageSerializer:!0,reference:null};exports.PropertiesSerializer=PropertiesSerializer;