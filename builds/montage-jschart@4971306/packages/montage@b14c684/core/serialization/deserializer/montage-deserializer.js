var Montage=require("../../core").Montage,Interpreter=require("mousse/deserialization/interpreter").Interpreter,Deserializer=require("mousse/deserialization/deserializer").Deserializer,MontageInterpreter=require("./montage-interpreter").MontageInterpreter,MontageReviver=require("./montage-reviver").MontageReviver,Promise=require("../../promise").Promise,JSHINT=require("../../jshint").JSHINT,logger=require("../../logger").logger("montage-deserializer"),MontageDeserializer=Montage.specialize.call(Deserializer,{_interpreter:{value:null},_serializationString:{value:null},_serialization:{value:null},init:{value:function(t,e,n){if(!this.isSerializationStringValid(t))throw Error(this._formatSerializationSyntaxError(t));return Deserializer.call(this,t),this._origin,this._serialization=null,this._interpreter=(new MontageInterpreter).init(e,n),this}},serialization:{get:function(){var t=this._serialization;return t||(t=JSON.parse(this._serializationString),this._serialization=t),t}},deserialize:{value:function(t,e){var n;try{n=JSON.parse(this._serializationString)}catch(i){return Promise.reject(i)}return this._interpreter.instantiate(n,t,e)}},preloadModules:{value:function(){var t=JSON.parse(this._serializationString);return this._interpreter.preloadModules(t)}},getExternalObjectLabels:{value:function(){var t=this.serialization,e=[];for(var n in t)0===Object.keys(t[n]).length&&e.push(n);return e}},isSerializationStringValid:{value:function(t){try{return JSON.parse(t),!0}catch(e){return!1}}},_formatSerializationSyntaxError:{value:function(t){var e,n,i,a,r,s="   ",o=this._origin;if(JSHINT(t))e="Syntax error in the serialization but not able to find it!\n"+t;else{n=JSHINT.errors[0],i=t.split("\n"),a=(s+i.length).length,r=n.line-1;for(var l=0,c=i.length;c>l;l++)i[l]=Array(a-(l+1+"").length+1).join(l===r?">":" ")+(l+1)+" "+i[l];e="Syntax error at line "+n.line+(o?" from "+o:"")+":\n"+n.evidence+"\n"+n.reason+"\n"+i.join("\n")}return e}}},{defineDeserializationUnit:{value:function(t,e){MontageReviver.defineUnitReviver(t,e)}}});exports.MontageDeserializer=MontageDeserializer,exports.deserialize=function(t,e){return(new MontageDeserializer).init(t,e).deserializeObject()};