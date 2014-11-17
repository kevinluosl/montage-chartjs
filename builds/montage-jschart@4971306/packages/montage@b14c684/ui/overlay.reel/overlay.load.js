montageDefine("b14c684","ui/overlay.reel/overlay",{dependencies:["../../core/core","../component","../../composer/key-composer","../../composer/press-composer","../../core/event/event-manager"],factory:function(t,e){var i=(t("../../core/core").Montage,t("../component").Component),n=t("../../composer/key-composer").KeyComposer,a=t("../../composer/press-composer").PressComposer,r=t("../../core/event/event-manager").defaultEventManager,s="montage-Overlay";e.Overlay=i.specialize({_pressComposer:{value:null},_keyComposer:{value:null},_anchor:{value:null},anchor:{set:function(t){this._anchor=t,this.needsDraw=!0},get:function(){return this._anchor}},_position:{value:null},position:{set:function(t){this._position=t,this.needsDraw=!0},get:function(){return this._position}},_drawPosition:{value:null},_isShown:{value:!1},isShown:{get:function(){return this._isShown}},_isDisplayed:{value:!1},_resizeHandlerTimeout:{value:null},_previousActiveTarget:{value:null},delegate:{value:null},_dismissOnExternalInteraction:{value:!0},dismissOnExternalInteraction:{set:function(t){t!==this._dismissOnExternalInteraction&&(this._dismissOnExternalInteraction=t,t?this._pressComposer.addEventListener("pressStart",this,!1):this._pressComposer.removeEventListener("pressStart",this,!1))},get:function(){return this._dismissOnExternalInteraction}},constructor:{value:function(){this.super(),this._pressComposer=new a,this._pressComposer.lazyLoad=!0}},enterDocument:{value:function(t){var e,i;t&&(e=this.element.ownerDocument.body,e.appendChild(this.element),this.attachToParentComponent(),i=this.element.ownerDocument.defaultView,i.addEventListener("resize",this),this.addComposerForElement(this._pressComposer,this.element.ownerDocument),this._dismissOnExternalInteraction&&this._pressComposer.addEventListener("pressStart",this,!1),this._keyComposer=new n,this._keyComposer.component=this,this._keyComposer.keys="escape",this._keyComposer.identifier="escape",this.addComposer(this._keyComposer),this._keyComposer.element=window)}},show:{value:function(){if(!this._isShown){if(this.isModal&&(this._previousActiveTarget=r.activeTarget,r.activeTarget=this,r.activeTarget!==this))return console.warn("Overlay "+this.identifier+" can't become the active target because ",r.activeTarget," didn't surrender it."),void 0;this.attachToParentComponent(),this.classList.add(s+"--visible"),this._pressComposer.load(),this._keyComposer.load(),this._isShown=!0,this.needsDraw=!0,this._keyComposer.addEventListener("keyPress",this,!1)}}},hide:{value:function(){this._isShown&&(this.classList.remove(s+"--visible"),this._pressComposer.unload(),this._keyComposer.unload(),this._isShown=!1,this.needsDraw=!0,this.isModal&&(r.activeTarget=this._previousActiveTarget),this._keyComposer.removeEventListener("keyPress",this,!1))}},isModal:{value:!0},surrendersActiveTarget:{value:function(t){return this.isShown&&this.isModal?t.element?this.element.contains(t.element):!1:!0}},handleResize:{value:function(){this.isShown&&(this.needsDraw=!0)}},handlePressStart:{value:function(t){this.element.contains(t.targetElement)||this.dismissOverlay(t)}},handleKeyPress:{value:function(t){"escape"===t.identifier&&this.dismissOverlay(t)}},dismissOverlay:{value:function(t){var e=!1;return this._isShown&&(e=this.callDelegateMethod("shouldDismissOverlay",this,t.targetElement,t.type),(void 0===e||e)&&(this.hide(),this._dispatchDismissEvent())),e}},willDraw:{value:function(){this._isDisplayed&&this._isShown&&this._calculatePosition(),this._isShown||this.callDelegateMethod("didHideOverlay",this)}},draw:{value:function(){this._isShown?this._isDisplayed?(this._reposition(),this.element.style.visibility="visible"):(this.element.style.visibility="hidden",this._isDisplayed=!0,this.callDelegateMethod("didShowOverlay",this),this.needsDraw=!0):this._isDisplayed=!1}},didDraw:{value:function(){this._isShown||this.detachFromParentComponent()}},_reposition:{value:function(){var t=this._drawPosition;this.element.style.top=t.top+"px",this.element.style.left=t.left+"px"}},_getElementPosition:{value:function(t){var e=0,i=0;do e+=t.offsetLeft,i+=t.offsetTop;while(t=t.offsetParent);return{top:i,left:e}}},_calculatePosition:{value:function(){var t,e;t=this.position?this.position:this.anchor?this._calculateAnchorPosition():this._calculateCenteredPosition(),e=this.callDelegateMethod("willPositionOverlay",this,t),e&&(t=e),this._drawPosition=t}},_calculateAnchorPosition:{value:function(){var t,e=this.anchor,i=this.element.offsetWidth,n=this._getElementPosition(e),a=e.offsetHeight||0,r=e.offsetWidth||0;return t={top:n.top+a,left:n.left+r/2-i/2},0>t.left&&(t.left=0),t}},_calculateCenteredPosition:{value:function(){var t=this.element.ownerDocument.defaultView,e=t.innerHeight,i=t.innerWidth,n=this.element.offsetHeight,a=this.element.offsetWidth;return{top:e/2-n/2,left:i/2-a/2}}},_dispatchDismissEvent:{value:function(){var t=document.createEvent("CustomEvent");t.initCustomEvent("dismiss",!0,!0,null),this.dispatchEvent(t)}}})}});