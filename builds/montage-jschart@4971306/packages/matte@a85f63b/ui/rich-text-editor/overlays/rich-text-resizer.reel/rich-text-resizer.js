var Component=require("montage/ui/component").Component,dom=require("montage/core/dom"),Point=require("montage/core/geometry/point").Point;exports.RichTextResizer=Component.specialize({_isActive:{enumerable:!1,value:!1},_editor:{enumerable:!1,value:null},target:{enumerable:!1,value:null},_draggedElement:{enumerable:!1,value:null},_needsReset:{enumerable:!1,value:!1},initWithEditor:{value:function(t){this._editor=t}},editorMouseDown:{value:function(t){var e=t.target;return this._isActive&&e===this.element?(t.preventDefault(),t.stopPropagation(),!0):void 0}},editorTouchStart:{value:function(t){this.editorMouseDown(t)}},editorMouseUp:{value:function(t){var e=t.target,n=this.target;if(this._observedPointer)return!0;if(e===this.element&&this._editor.activeOverlay==this)this._editor.hideOverlay(),t.target=this.target,t.preventDefault(),t.stopPropagation();else{if("IMG"===e.tagName)return e!==n&&(n&&(n.classList.remove("matte-Resizer-element"),0==n.classList.length&&n.removeAttribute("class")),this.target=e,this._needsReset=!0,this._isActive?this.needsDraw=!0:(this._ignoreNextSelectionchanged=!0,this._editor.showOverlay(this))),t.preventDefault(),t.stopPropagation(),!0;this._editor.activeOverlay==this&&this._editor.hideOverlay()}return!1}},editorTouchEnd:{value:function(t){this.editorMouseUp(t)}},editorSelectionDidChange:{value:function(){return this._ignoreNextSelectionchanged||this._finalizeDrag?this._ignoreNextSelectionchanged=!1:(this._editor.activeOverlay==this&&this._editor.hideOverlay(),this.target=null),!1}},draw:{enumerable:!1,value:function(){var t,e=this.element,n=this.target,i=this._editor.innerElement;if(this._needsReset){var a,r,s=function(t){for(r=t.offsetTop,a=t.offsetLeft;(t=t.offsetParent)&&t!=i;)r+=t.offsetTop,a+=t.offsetLeft};s(n),t=e.style,t.width=n.offsetWidth+"px",t.height=n.offsetHeight+"px",t.top=r+"px",t.left=a+"px",this._editor.innerElement.classList.remove("matte-Editor--resizing"),n.classList.add("matte-Resizer-element"),this.image.src=n.src,this.image.title=n.title,this.image.alt=n.alt,this._selectElement(n),this._needsReset=!1}if(this._draggedElement){var o=(new Point).init(0,0),l=dom.convertPointFromNodeToPage(e,o),c=this._cursorPosition,h=this._draggedElement.getAttribute("data-montage-id").substring("matte-resizer-handle-".length),u=this._resizerFrameInfo,d=u.ratio,p=parseFloat(e.style.height,10),g=parseFloat(e.style.width,10),m=parseFloat(e.style.top,10),f=parseFloat(e.style.left,10),v=15;this._editor.innerElement.classList.add("matte-Editor--resizing"),"n"==h?(p+=l.y-c.y,m=u.top-(p-u.height)):"ne"==h?(p+=l.y-c.y,g=Math.round(p*d),c.x>l.x+g&&(g=c.x-l.x,p=Math.round(g/d)),m=u.top-(p-u.height)):"e"==h?g=c.x-l.x:"se"==h?(p=c.y-l.y,g=Math.round(p*d),c.x>l.x+g&&(g=c.x-l.x,p=Math.round(g/d))):"s"==h?p=c.y-l.y:"sw"==h?(p=c.y-l.y,g=Math.round(p*d),c.x<=l.x-g+e.clientWidth&&(g=e.clientWidth+l.x-c.x,p=Math.round(g/d)),f=u.left-(g-u.width)):"w"==h?(g+=l.x-c.x,f=u.left-(g-u.width)):"nw"==h&&(p+=l.y-c.y,g=Math.round(p*d),c.x<=l.x-g+e.clientWidth&&(g=e.clientWidth+l.x-c.x,p=Math.round(g/d)),m=u.top-(p-u.height),f=u.left-(g-u.width)),p>v&&g>v&&(e.style.height=p+"px",e.style.width=g+"px",e.style.top=m+"px",e.style.left=f+"px")}if(this._finalizeDrag){g=e.clientWidth,p=e.clientHeight,this._editor.innerElement.classList.remove("matte-Editor--resizing"),n.classList.remove("matte-Resizer-element"),0==n.classList.length&&n.removeAttribute("class"),this._selectElement(n);var _,b,L=document.createElement("div");L.appendChild(n.cloneNode(!0)),_=L.firstChild,_.width=g,_.height=p,_.style.removeProperty("width"),_.style.removeProperty("height"),b=_.id,_.id="matte-editor-resized-image",this._editor.execCommand("inserthtml",!1,L.innerHTML,"Resizing Image"),n=document.getElementById(_.id),n&&(void 0!==b&&""!==b?n.id=b:n.removeAttribute("id"),this.target=n,this._needsReset=!0,this.needsDraw=!0),this._finalizeDrag=!1}}},didBecomeActive:{value:function(){this._isActive=!0,this.element.addEventListener(window.Touch?"touchstart":"mousedown",this,!1),window.addEventListener("resize",this,!1)}},didBecomeInactive:{value:function(){var t=this.target;this._isActive=!1,this.element.removeEventListener(window.Touch?"touchstart":"mousedown",this,!1),window.removeEventListener("resize",this,!1),this._draggedElement&&(window.Touch?(document.removeEventListener("touchmove",this),document.removeEventListener("touchend",this)):(document.removeEventListener("mousemove",this),document.removeEventListener("mouseup",this)),this._releaseInterest()),t&&(t.classList.remove("matte-Resizer-element"),0==t.classList.length&&t.removeAttribute("class"),this._editor.markDirty()),this.target=null,this._needsReset=!1,this._draggedElement=null,this._finalizeDrag=!1}},handleResize:{enumerable:!1,value:function(){this._needsReset=!0,this.needsDraw=!0}},handleMousedown:{value:function(t){var e=t.target,n=this.element;e.classList.contains("matte-Resizer-handle")&&(window.Touch?(this._observePointer(e.id),document.addEventListener("touchmove",this),document.addEventListener("touchend",this)):(this._observePointer("mouse"),document.addEventListener("mousemove",this),document.addEventListener("mouseup",this)),this._resizerFrameInfo={width:n.clientWidth,height:n.clientHeight,left:parseInt(n.style.left,10),top:parseInt(n.style.top,10),ratio:n.clientWidth/n.clientHeight},this._cursorPosition={x:t.pageX,y:t.pageY},this._draggedElement=e,t.preventDefault(),t.stopPropagation())}},handleTouchstart:{value:function(t){this.handleMousedown(t)}},handleMousemove:{value:function(t){this._cursorPosition={x:t.pageX,y:t.pageY},this.needsDraw=!0,t.preventDefault(),t.stopPropagation()}},handleTouchmove:{value:function(t){this.handleMousemove(t)}},handleMouseup:{value:function(t){this._draggedElement&&(window.Touch?(document.removeEventListener("touchmove",this),document.removeEventListener("touchend",this)):(document.removeEventListener("mousemove",this),document.removeEventListener("mouseup",this)),this._draggedElement=null,this._finalizeDrag=!0,this.needsDraw=!0,this._releaseInterest(),t.preventDefault(),t.stopPropagation())}},handleTouchend:{value:function(t){this.handleMouseup(t)}},surrenderPointer:{value:function(){return!1}},_observePointer:{value:function(t){this.eventManager.claimPointer(t,this),this._observedPointer=t}},_releaseInterest:{value:function(){this.eventManager.forfeitPointer(this._observedPointer,this),this._observedPointer=null}},_selectElement:{value:function(t){this._ignoreNextSelectionchanged=!0,this._editor.selectElement(t)}}});