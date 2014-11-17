montageDefine("4cd051b","serialization/labeler",{dependencies:[],factory:function(e,t){(function(e){function t(){this._labels=Object.create(null),this._objectsLabels=Object.create(null),this._objects=Object.create(null),this._baseNamesIndex=Object.create(null),this._userDefinedLabels=Object.create(null)}Object.defineProperties(t.prototype,{_labels:{value:null,writable:!0},_objectsLabels:{value:null,writable:!0},_objects:{value:null,writable:!0},_INITIAL_LABEL_NUMBER:{value:2},_baseNamesIndex:{value:null,writable:!0},_userDefinedLabels:{value:null,writable:!0},initWithObjects:{value:function(e){for(var t in e)this.setObjectLabel(e[t],t),this._userDefinedLabels[t]=!0}},cleanup:{value:function(){this._labels=null,this._objectsLabels=null,this._objects=null,this._baseNamesIndex=null,this._userDefinedLabels=null}},generateLabel:{value:function(e){var t,n=this._baseNamesIndex[e];do n?(t=e+n,this._baseNamesIndex[e]=n+=1):(t=e,this._baseNamesIndex[e]=n=this._INITIAL_LABEL_NUMBER);while(t in this._labels);return t}},getLabelBaseName:{value:function(e){return e.replace(/\d*$/,"")}},addLabel:{value:function(e){this._labels[e]=!0}},addLabels:{value:function(e){for(var t=0,n=e.length;n>t;t++)this.addLabel(e[t])}},isLabelDefined:{value:function(e){return e in this._labels}},isUserDefinedLabel:{value:function(e){return e in this._userDefinedLabels}},getObjectName:{value:function(e){return Array.isArray(e)?"array":RegExp.isRegExp(e)?"regexp":typeof e}},generateObjectLabel:{value:function(e){var t=this.getObjectName(e);return this.generateLabel(t)}},getObjectLabel:{value:function(e){var t,n=Object.hash(e);return n in this._objectsLabels?t=this._objectsLabels[n]:(t=this.generateObjectLabel(e),this.setObjectLabel(e,t)),t}},setObjectLabel:{value:function(e,t){if(e!==void 0){var n=Object.hash(e);this.addLabel(t),this._objectsLabels[n]=t,this._objects[t]=e}}},getObjectByLabel:{value:function(e){return this._objects[e]}}}),e.Labeler=t})(t)}});