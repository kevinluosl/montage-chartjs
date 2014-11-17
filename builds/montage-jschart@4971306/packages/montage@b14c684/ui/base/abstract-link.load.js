montageDefine("b14c684","ui/base/abstract-link",{dependencies:["../../core/core","./abstract-control","../../composer/press-composer"],factory:function(t,e){var i=(t("../../core/core").Montage,t("./abstract-control").AbstractControl),n=t("../../composer/press-composer").PressComposer,a=e.AbstractLink=i.specialize({constructor:{value:function a(){if(this.constructor===a)throw Error("AbstractLink cannot be instantiated.");i.constructor.call(this),this._pressComposer=new n,this.addComposer(this._pressComposer),this.defineBindings({"classList.has('montage--disabled')":{"<-":"!enabled"},"classList.has('montage--active')":{"<-":"active"}})}},hasTemplate:{value:!1},active:{value:!1},enabled:{value:!0},_pressComposer:{value:null},_url:{value:null},url:{set:function(t){this._url=t,this.needsDraw=!0},get:function(){return this._url}},_label:{value:null},label:{set:function(t){this._label=t,this.needsDraw=!0},get:function(){return this._label}},_textAlternative:{value:null},textAlternative:{set:function(t){this._textAlternative=t,this.needsDraw=!0},get:function(){return this._textAlternative}},_opensNewWindow:{value:null},opensNewWindow:{set:function(t){this._opensNewWindow=t,this.needsDraw=!0},get:function(){return this._opensNewWindow}},enterDocument:{value:function(t){t&&(this.hasOwnProperty("_label")||(this.label=this.element.textContent))}},handlePressStart:{value:function(t){this.active=!0,t.touch&&document.addEventListener("touchmove",this,!1)}},handlePress:{value:function(){this.active=!1,this.enabled&&this.dispatchActionEvent()}},handlePressCancel:{value:function(){this.active=!1,document.removeEventListener("touchmove",this,!1)}},prepareForActivationEvents:{value:function(){this._pressComposer.addEventListener("pressStart",this,!1),this._pressComposer.addEventListener("press",this,!1),this._pressComposer.addEventListener("pressCancel",this,!1)}}})}});