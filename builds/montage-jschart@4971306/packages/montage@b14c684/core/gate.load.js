montageDefine("b14c684","core/gate",{dependencies:["./core","./logger"],factory:function(t,e){var i=t("./core").Montage,n=t("./logger").logger("gate");e.Gate=i.specialize({constructor:{value:function(){this.super()}},init:{enumerable:!1,value:function(){return this.reset(),this}},initWithDelegate:{enumerable:!1,value:function(t){return this.reset(),this.delegate=t,this}},initWithDescriptor:{enumerable:!1,value:function(t){var e;this.reset();for(e in t)this.setField(e,t[e].value);return this}},count:{value:0},table:{value:null},getField:{enumerable:!1,value:function(t){var e=this.table;return!e||e[t]}},setField:{enumerable:!1,value:function(t,e){var i,a=this.table,s=this.count;a=a?a:this.table={},i=a[t],void 0!==i||e?i!==void 0&&i!==e?e?this.count--:this.count++:e&&n.isDebug&&n.debug(this,t+" was not set before."):this.count++,a[t]=!!e,0===this.count&&s>0?this.callDelegateMethod(!0):0===s&&this.count>0&&this.callDelegateMethod(!1)}},removeField:{enumerable:!1,value:function(t){var e=this.table,i=e[t];void 0===i||i||this.count--,delete e[t]}},delegate:{enumerable:!1,value:null},callDelegateMethod:{value:function(t){var e;this.delegate&&"function"==typeof(e=this.delegate["gateDidBecome"+(t?"True":"False")])&&e.call(this.delegate,this)},enumerable:!1},value:{enumerable:!1,get:function(){return 0===this.count}},reset:{enumerable:!1,value:function(){this.table={},this.count=0}},toString:{value:function(){var t,e,i=this._fields,n="";for(t=0;e=i[t];t++)n+=e+"["+(this._value&i[e])+"], ";return n}}})}});