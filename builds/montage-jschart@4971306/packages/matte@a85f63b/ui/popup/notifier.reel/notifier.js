var Component=require("montage/ui/component").Component,Popup=require("ui/popup/popup.reel").Popup,Notifier=exports.Notifier=Component.specialize({_msgEl:{value:null},_msg:{value:null},msg:{get:function(){return this._msg},set:function(t){this._msg!==t&&(this._msg=t,this.needsDraw=!0)}},details:{value:null},draw:{value:function(){this._msgEl.textContent=this.msg}},show:{value:function(t,e,n){var i,a=this.application._notifyPopup;a||(a=new Popup,this.popup=a,a.type="notify",this.application._notifyPopup=a,i=new Notifier,a.content=i),i=a.content,i.msg=t,n||(window.innerWidth,n={top:1,right:10}),a.position=n,e&&(e=parseInt(e,10)||3e3,a.autoHide=e),a.show()}},hide:{value:function(){var t=this.application._notifyPopup;t&&t.hide()}}});