var Component=require("montage/ui/component").Component,Text=require("montage/ui/text.reel").Text;exports.ResultItem=Text.specialize({textPropertyPath:{value:null},_object:{value:null},object:{get:function(){return this._object},set:function(t){t&&(this._object=t),this._object&&(this.value=this.textPropertyPath?this._object[this.textPropertyPath]:this._object)}}});