var Montage=require("montage").Montage,AbstractSlider=require("montage/ui/base/abstract-slider").AbstractSlider,Promise=require("montage/core/promise").Promise;exports.VideoControlTrack=Montage.create(AbstractSlider,{constructor:{value:function(){AbstractSlider.constructor.call(this),this.addOwnPropertyChangeListener("time",this),this.defineBinding("max",{"<-":"videoController.duration",source:this}),this.defineBinding("time",{"<-":"videoController.position",source:this})}},handleThumbTranslateStart:{value:function(){AbstractSlider.handleThumbTranslateStart.apply(this,arguments),this.videoController.status===this.videoController.PLAYING?(this._wasPlaying=!0,this.videoController.pause()):this._wasPlaying=!1}},handleThumbTranslate:{value:function(){AbstractSlider.handleThumbTranslate.apply(this,arguments)}},handleThumbTranslateEnd:{value:function(){AbstractSlider.handleThumbTranslateEnd.apply(this,arguments),this._wasPlaying&&this.videoController.unpause()}},_sliderThumbTrackElement:{value:null},_sliderThumbElement:{value:null},time:{value:0},formattedTime:{value:0},controller:{value:null},handleTimeChange:{value:function(){this.formattedTime=this._prettyTime(this.time)}},_wasPlaying:{value:!1},_prettyTime:{value:function(t){var e,i,s;return t=parseInt(t,10),isNaN(t)||0>t?"":(e=t%60,i=Math.floor(t/60)%60,s=Math.floor(t/3600),(s>0?s+":":"")+(10>i?i:i)+":"+(10>e?"0"+e:e))}}});