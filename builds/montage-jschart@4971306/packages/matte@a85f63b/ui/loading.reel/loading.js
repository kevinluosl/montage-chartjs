var Component=require("montage/ui/component").Component;exports.Loading=Component.specialize({_loading:{value:null},loading:{get:function(){return this._loading},set:function(t){this._loading!==t&&(this._loading=t,this.needsDraw=!0)}},draw:{value:function(){var t=this.element.classList,e=t.contains("animate");this.loading?e||t.add("animate"):e&&t.remove("animate")}}});