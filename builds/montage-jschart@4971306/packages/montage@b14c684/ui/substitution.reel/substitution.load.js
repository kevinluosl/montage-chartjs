montageDefine("b14c684","ui/substitution.reel/substitution",{dependencies:["../slot.reel","../../core/promise","../../core/logger"],factory:function(t,e){var n=t("../slot.reel").Slot,i=t("../../core/promise").Promise;t("../../core/logger").logger("substitution"),e.Substitution=n.specialize({hasTemplate:{enumerable:!1,value:!1},constructor:{value:function(){this._switchElements=Object.create(null),this._switchComponentTreeLoaded=Object.create(null)}},_allChildComponents:{value:null},deserializedFromTemplate:{value:function(){this._allChildComponents=this.childComponents.slice(0),this.switchValue&&this._loadSwitchComponentTree(this.switchValue)}},_switchElements:{value:null},_switchComponentTreeLoaded:{value:null},addSwitchElement:{value:function(t,e){if(e.parentNode)throw Error("Can't handle elements inside the DOM.");this._switchElements[t]=e,this._findFringeComponents(e,this._allChildComponents)}},_findFringeComponents:{value:function(t,e){var n;if(e=e||[],t.component)e.push(t.component);else{n=t.children;for(var i,a=0;i=n[a];a++)this._findFringeComponents(i,e)}return e}},_drawnSwitchValue:{value:null},_switchValue:{value:null},switchValue:{get:function(){return this._switchValue},set:function(t){this._switchValue===t||this._isSwitchingContent||(this._switchValue=t,this._firstDraw||this.isDeserializing||this._loadContent(t))}},enterDocument:{value:function(t){var e;if(n.enterDocument.apply(this,arguments),t){e=this.getDomArgumentNames();for(var i,a=0;i=e[a];a++)this._switchElements[i]=this.extractDomArgument(i);this._loadContent(this.switchValue),this._updateComponentDom()}}},_loadContent:{value:function(t){this.content=t===this._drawnSwitchValue?this.element.children[0]:this._switchElements[t]||null,this._switchComponentTreeLoaded[t]||this._loadSwitchComponentTree(t)}},contentDidChange:{value:function(t,e){this.super(),this._drawnSwitchValue&&(this._switchElements[this._drawnSwitchValue]=e),this._drawnSwitchValue=this._switchValue}},_loadSwitchComponentTree:{value:function(t){var e,n,a=this,r=this._allChildComponents,s=this._switchElements[t],o=this.element,l=this.canDrawGate,c=[];s||(s=this._getSubstitutionDomArgument(t));for(var h=0;r.length>h;h++){for(e=r[h],n=e.element;n!==s&&n!==o&&n.parentNode;)n=n.parentNode;n===s&&c.push(e.loadComponentTree())}c.length>0?(l.setField(t+"ComponentTreeLoaded",!1),i.all(c).then(function(){a._switchComponentTreeLoaded[t]=!0,l.setField(t+"ComponentTreeLoaded",!0),a._canDraw=!0,a.needsDraw=!0}).done()):(this._switchComponentTreeLoaded[t]=!0,this.needsDraw=!0)}},_getSubstitutionDomArgument:{value:function(t){var e,n,i,a,r,s,o=this._ownerDocumentPart.template;i=this.element,e=i.querySelectorAll("*["+this.DOM_ARG_ATTRIBUTE+"='"+t+"']");t:for(var l,c=0;l=e[c];c++){for(n=l;(n=n.parentNode)!==i;)if(a=o.getElementId(n),a&&(r=o.getSerialization(),s=r.getSerializationLabelsWithElements(a),s.length>0))continue t;return l}}},shouldLoadComponentTree:{value:!1},transition:{value:null}})}});