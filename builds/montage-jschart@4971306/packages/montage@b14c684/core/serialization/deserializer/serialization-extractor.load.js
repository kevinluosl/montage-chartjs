montageDefine("b14c684","core/serialization/deserializer/serialization-extractor",{dependencies:["../../core","./montage-reviver","frb/parse"],factory:function(t,e){var i=t("../../core").Montage,n=t("./montage-reviver").MontageReviver,a=t("frb/parse"),r=i.specialize({_serialization:{value:null},initWithSerialization:{value:function(t){this._serialization=t}},extractObjects:{value:function(t,e){var i=this._serialization,n={};e=e||[];for(var a,r=0;a=t[r];r++)a in i&&(n[a]=i[a],this._findLabels(a,e));for(var a,r=0;a=e[r];r++)!(a in n)&&a in i&&(n[a]={});return JSON.parse(JSON.stringify(n))}},_findLabels:{value:function(t,e){var i;if(-1===e.indexOf(t)){if(!(t in this._serialization))throw Error("Object '"+t+"' not found.");e.push(t),i=this._serialization[t],this._collectLabels(i,e),this._collectLabelsInUnits(i,e)}}},_collectLabels:{value:function(t,e){var i,a=n.getTypeOf(t);if("reference"===a)i=t["@"],this._findLabels(i,e);else if("array"===a)for(var r=0,s=t.length;s>r;r++)this._collectLabels(t[r],e);else if("object"===a)for(var o in t)this._collectLabels(t[o],e)}},_collectLabelsInUnits:{value:function(t,e){"bindings"in t?this._collectLabelsInBindings(t.bindings,e):"localizations"in t&&this._collectLabelsInLocalizations(t.localizations,e)}},_collectLabelsInBindings:{value:function(t,e){var i,n;for(var a in t)i=t[a],n=i["<-"]||i["<->"],this._collectLabelsInBindingPath(n,e)}},_collectLabelsInBindingPath:{value:function(t,e){var i=this,n=a(t);this._traverseBindingParseTree(n,function(t){i._findLabels(t.label,e)})}},_traverseBindingParseTree:{value:function(t,e){var i=t.args;if("component"===t.type&&e(t),i)for(var n=0,a=i.length;a>n;n++)this._traverseBindingParseTree(i[n],e)}},_collectLabelsInLocalizations:{value:function(t,e){for(var i in t)this._collectLabelsInLocalizationProperty(t[i],e)}},_collectLabelsInLocalizationProperty:{value:function(t,e){var i;if("key"in t&&this._collectLabelsInLocalizationBinding(t.key,e),"default"in t&&this._collectLabelsInLocalizationBinding(t.default,e),"data"in t){i=t.data;for(var n in i)this._collectLabelsInLocalizationBinding(i[n],e)}}},_collectLabelsInLocalizationBinding:{value:function(t,e){var i=t["<-"]||t["<->"];i&&this._collectLabelsInBindingPath(i,e)}}});e.SerializationExtractor=r}});