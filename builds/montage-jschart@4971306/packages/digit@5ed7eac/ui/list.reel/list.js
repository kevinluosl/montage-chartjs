var List=require("matte/ui/list.reel").List;exports.List=List.specialize({constructor:{value:function List(){this.super()}},templateDidLoad:{value:function(){this._repetition=this.templateObjects.repetition}},enterDocument:{value:function(t){t&&this.element.addEventListener("touchstart",this,!1)}},handleTouchstart:{value:function(){var t=this.element,e=t.scrollTop;0>=e&&(t.scrollTop=1),e+t.offsetHeight>=t.scrollHeight&&(t.scrollTop=t.scrollHeight-t.offsetHeight-1)}}});