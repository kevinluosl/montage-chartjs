"use strict";var Montage=require("../core").Montage,Promise=require("../promise").Promise,logger=require("../logger").logger("blueprint");exports.RemoteReference=Montage.specialize({constructor:{value:function(){return this.superForValue("constructor")(),this._value=null,this._reference=null,this._promise=null,this}},initWithValue:{value:function(t){return this._value=t,this._reference=null,this._promise=null,this}},serializeSelf:{value:function(t){this._reference||(this._reference=this.referenceFromValue(this._value)),t.setProperty("valueReference",this._reference)}},deserializeSelf:{value:function(t){this._value=null,this._reference=t.getProperty("valueReference"),this._promise=null}},_value:{value:null},_reference:{value:null},_promise:{value:null},promise:{value:function(t){return this._promise||(this._promise=this._value?Promise.resolve(this._value):this.valueFromReference(this._reference,t)),this._promise}},valueFromReference:{value:function(){return Promise.resolve(null)}},referenceFromValue:{value:function(){return{}}},blueprintModuleId:require("../core")._blueprintModuleIdDescriptor,blueprint:require("../core")._blueprintDescriptor});