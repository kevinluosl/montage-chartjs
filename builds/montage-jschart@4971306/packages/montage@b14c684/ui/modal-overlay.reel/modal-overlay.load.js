montageDefine("b14c684","ui/modal-overlay.reel/modal-overlay",{dependencies:["../overlay.reel","../../core/promise"],factory:function(t,e){var i=t("../overlay.reel").Overlay,n=t("../../core/promise").Promise,a="montage-ModalOverlay";e.ModalOverlay=i.specialize({constructor:{value:function(){this.super()}},enterDocument:{value:function(t){var e;this.super(t),t&&(e=this.element.ownerDocument.body,e.appendChild(this.modalMaskElement))}},_queue:{value:[]},_showPromise:{value:null},_dismissOnExternalInteraction:{value:!1},hasModalMask:{value:!0},show:{value:function(){var t,e=this._queue,i=e.indexOf(this);return-1===i?(0===e.length?(this.super(),t=n.resolve()):(this._showPromise=n.defer(),t=this._showPromise.promise),e.push(this)):(0===i&&(this._showPromise=n.defer(),e.push(this)),t=this._showPromise.promise),t}},hide:{value:function(){var t,e=this._queue,n=e.indexOf(this);0===n?(e.shift(),this.super(),e.length>0&&(t=e[0],t._showPromise.resolve(),i.prototype.show.call(t))):n>0&&(e.splice(n,1),this._showPromise.reject())}},draw:{value:function(){this.super(),this._isShown&&this.hasModalMask?this.modalMaskElement.classList.add(a+"-modalMask--visible"):this.modalMaskElement.classList.remove(a+"-modalMask--visible")}}})}});