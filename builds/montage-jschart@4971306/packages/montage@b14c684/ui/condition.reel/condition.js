var Component=require("../component").Component,logger=require("../../core/logger").logger("condition");exports.Condition=Component.specialize({hasTemplate:{value:!1},_condition:{value:!0},_contents:{value:null},constructor:{value:function(){this.super()}},condition:{set:function(t){t!==this._condition&&(this._condition=t,this.needsDraw=!0,this.isDeserializing||this._updateDomContent(t))},get:function(){return this._condition}},_updateDomContent:{value:function(t){"remove"===this.removalStrategy&&(t?this.domContent=this._contents:(this._contents=this.domContent,this.domContent=null))}},deserializedFromTemplate:{value:function(){this._condition||this._updateDomContent(this._condition)}},_removalStrategy:{value:"remove"},removalStrategy:{get:function(){return this._removalStrategy},set:function(t){var e;this._removalStrategy!==t&&("hide"!==t||this.isDeserializing||(e=this.domContent,this.domContent=this._contents,this._contents=e),this._removalStrategy=t,this.needsDraw=!0)}},draw:{value:function(){this.condition?this.element.classList.remove("montage-invisible"):this.element.classList.add("montage-invisible")}}});