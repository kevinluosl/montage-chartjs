var Component=require("montage/ui/component").Component;exports.Scroller=Component.specialize({constructor:{value:function(){this.super()}},_scrollX:{value:0},scrollX:{get:function(){return this._scrollX},set:function(t){this._scrollX!==t&&(this._scrollX=t,this.needsDraw=!0)}},_scrollY:{value:0},scrollY:{get:function(){return this._scrollY},set:function(t){this._scrollY!==t&&(this._scrollY=t,this.needsDraw=!0)}},_maxTranslateX:{value:0},_maxTranslateY:{value:0},_axis:{value:"auto"},axis:{get:function(){return this._axis},set:function(t){this._axis=t,this.needsDraw=!0}},_displayScrollbars:{value:"auto"},displayScrollbars:{get:function(){return this._displayScrollbars},set:function(t){switch(t){case"vertical":case"horizontal":case"both":case"auto":this._displayScrollbars=t;break;default:this._displayScrollbars="none"}this.needsDraw=!0}},_hasMomentum:{value:!0},hasMomentum:{get:function(){return this._hasMomentum},set:function(t){this._hasMomentum=t}},_content:{value:null},_scrollBars:{value:null},handleTranslateStart:{value:function(){this._scrollBars.opacity=.5}},handleTranslateEnd:{value:function(){this._scrollBars.opacity=0}},canDraw:{value:function(){return this.needsDraw=!0,Component.canDraw.apply(this,arguments)}},willDraw:{value:function(){this._left=this._element.offsetLeft,this._top=this._element.offsetTop,this._width=this._element.offsetWidth,this._height=this._element.offsetHeight;var t=this._content.scrollWidth-this._width;this._maxTranslateX=0>t?0:t;var i=this._content.offsetHeight-this._height;this._maxTranslateY=0>i?0:i;var e=this.callDelegateMethod("didSetMaxScroll",{x:this._maxTranslateX,y:this._maxTranslateY});switch(e&&(this._maxTranslateX=e.x,this._maxTranslateY=e.y),this.scrollX=Math.min(this._scrollX,this._maxTranslateX),this.scrollY=Math.min(this._scrollY,this._maxTranslateY),this._displayScrollbars){case"horizontal":this._scrollBars.displayHorizontal=!0,this._scrollBars.displayVertical=!1;break;case"vertical":this._scrollBars.displayHorizontal=!1,this._scrollBars.displayVertical=!0;break;case"both":this._scrollBars.displayHorizontal=!0,this._scrollBars.displayVertical=!0;break;case"auto":this._scrollBars.displayHorizontal=!!this._maxTranslateX,this._scrollBars.displayVertical=!!this._maxTranslateY;break;case"none":this._scrollBars.displayHorizontal=!1,this._scrollBars.displayVertical=!1}this._scrollBars.displayHorizontal&&(this._content.scrollWidth?(this._scrollBars.horizontalLength=this._width/this._content.scrollWidth,this._scrollBars.horizontalScroll=this._scrollX/this._content.scrollWidth):(this._scrollBars.horizontalLength=1,this._scrollBars.horizontalScroll=0)),this._scrollBars.displayVertical&&(this._content.offsetHeight?(this._scrollBars.verticalLength=this._height/this._content.offsetHeight,this._scrollBars.verticalScroll=this._scrollY/this._content.offsetHeight):(this._scrollBars.verticalLength=1,this._scrollBars.verticalScroll=0))}},draw:{value:function(){var t=-this._scrollX+"px, "+-this._scrollY+"px";this._content.style.webkitTransform="translate3d("+t+", 0px)",this._content.style.MozTransform="translate("+t+")",this._content.style.transform="translate("+t+")"}}});