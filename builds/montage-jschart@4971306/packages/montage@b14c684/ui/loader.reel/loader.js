var Montage=require("../../core/core").Montage,Component=require("../component").Component,logger=require("../../core/logger").logger("loader"),defaultEventManager=require("../../core/event/event-manager").defaultEventManager,bootstrappingTimeoutPropertyName="_montageStartBootstrappingTimeout",MONTAGE_BOOTSTRAPPER_ELEMENT_ID="montage-app-bootstrapper",MONTAGE_LOADER_ELEMENT_ID="montage-app-loader",BOOTSTRAPPING_CLASS_NAME="montage-app-bootstrapping",LOADING_CLASS_NAME="montage-app-loading",LOADED_CLASS_NAME="montage-app-loaded",PRELOADING=0,BOOTSTRAPPING=1,LOADING=2,LOADED=3;exports.Loader=Component.specialize({constructor:{value:function(){this.super()}},mainModule:{value:"ui/main.reel"},mainName:{value:"Main"},includeFrameworkModules:{value:!1},minimumBootstrappingDuration:{value:1500},minimumLoadingDuration:{value:2e3},_initializedModules:{value:null},initializedModules:{dependencies:["includeFrameworkModules"],enumerable:!1,get:function(){return!this._initializedModules||this.includeFrameworkModules?this._initializedModules:this._initializedModules.slice(this._frameworkModuleCount-1)},set:function(t){this._initializedModules=t}},_requiredModules:{value:null},requiredModules:{dependencies:["includeFrameworkModules"],enumerable:!1,get:function(){return!this._requiredModules||this.includeFrameworkModules?this._requiredModules:this._requiredModules.slice(this._frameworkModuleCount-1)},set:function(t){this._requiredModules=t}},_currentStage:{value:PRELOADING},currentStage:{get:function(){return this._currentStage},set:function(t){t!==this._currentStage&&(logger.isDebug&&logger.debug(this,"CURRENT STAGE: "+t),this._currentStage=t,this.needsDraw=!0)}},_readyToShowLoader:{value:!1},isLoadingMainComponent:{value:null},readyToShowLoader:{get:function(){return this._readyToShowLoader},set:function(t){t===this._readyToShowLoader&&(this._readyToShowLoader=t,this.needsDraw=!0)}},readyToShowMainComponent:{get:function(){return!!this._mainComponent}},_frameworkModuleCount:{enumerable:!1,value:null},hasTemplate:{enumerable:!1,value:!1},_mainComponent:{value:null},_mainComponentEnterDocument:{value:null},_showLoadingTimeout:{enumerable:!1,value:null},_showMainComponentTimeout:{enumerable:!1,value:null},templateDidLoad:{value:function(){logger.isDebug&&logger.debug(this,"templateDidLoad"),this.element||(this.element=document.documentElement,this.attachToParentComponent()),this.readyToShowLoader=!0;var t,e=document._montageTiming,i=this;e.bootstrappingStartTime?(logger.isDebug&&logger.debug(this,"had already started bootstrapping"),this.currentStage=BOOTSTRAPPING,e.bootstrappingEndTime=Date.now(),t=this.minimumBootstrappingDuration-(e.bootstrappingEndTime-e.bootstrappingStartTime),t>0?(logger.isDebug&&logger.debug(this,"still need to show bootstrapper for another "+t+"ms"),this._showLoadingTimeout=setTimeout(function(){i._revealLoader()},t)):this._revealLoader()):(logger.isDebug&&logger.debug(this,"bootstrapping has not started yet…"),this._loadMainComponent())}},_revealLoader:{value:function(){logger.isDebug&&logger.debug(this,"_revealLoader"),this.currentStage=LOADING,document._montageTiming.loadingStartTime=Date.now();var t,e,i,n,a=document.getElementById(MONTAGE_LOADER_ELEMENT_ID);if(a)for(e=a.children,t=0;i=e[t];t++)(n=i.component)&&(n.attachToParentComponent(),n.needsDraw=!0)}},_revealMainComponent:{value:function(){logger.isDebug&&logger.debug(this,"_revealMainComponent"),this.currentStage=LOADED}},_loadMainComponent:{value:function(){logger.isDebug&&logger.debug(this,"_loadMainComponent"),this.isLoadingMainComponent=!0;var t=this;mr.async(this.mainModule).then(function(e){if(!(t.mainName in e))throw Error(t.mainName+" was not found in "+t.mainModule);return t._mainLoadedCallback(e)}).done()}},_mainLoadedCallback:{value:function(t){logger.isDebug&&logger.debug(this,"_mainLoadedCallback"),this._mainComponent=t[this.mainName].create(),this._mainComponentEnterDocument=this._mainComponent.enterDocument,this._mainComponent.enterDocument=this.mainComponentEnterDocument.bind(this),this._mainComponent.setElementWithParentComponent(document.createElement("div"),this),this._mainComponent.attachToParentComponent(),this._mainComponent._canDrawOutsideDocument=!0,this._mainComponent.needsDraw=!0}},mainComponentEnterDocument:{value:function(){var t,e=this;logger.isDebug&&logger.debug(this,"main preparing to draw"),this.isLoadingMainComponent=!1,this._contentToRemove=document.createRange(),t=this.element===document.documentElement?document.body:this.element,this._contentToRemove.selectNodeContents(t),this.childComponents=[this._mainComponent],t.appendChild(this._mainComponent.element);var i,n,a=document[bootstrappingTimeoutPropertyName],r=document._montageTiming;r.bootstrappingStartTime?r.bootstrappingStartTime&&!r.loadingStartTime?(clearTimeout(this._showLoadingTimeout),this._showLoadingTimeout=null,r.bootstrappingEndTime=Date.now(),(i=this.minimumBootstrappingDuration-(r.bootstrappingEndTime-r.bootstrappingStartTime))>0?(logger.isDebug&&logger.debug(this,"show bootstrapper for another "+i+"ms"),this._showMainComponentTimeout=setTimeout(function(){logger.isDebug&&logger.debug(this,"ok, shown bootstrapper long enough"),e._revealMainComponent()},i)):setTimeout(function(){logger.isDebug&&logger.debug(this,"ok, showing bootstrapper now"),e._revealMainComponent()},0)):r.loadingStartTime&&(r.loadingEndTime=Date.now(),(n=this.minimumLoadingDuration-(r.loadingEndTime-r.loadingStartTime))>0?(logger.isDebug&&logger.debug(this,"show loader for another "+n+"ms"),this._showMainComponentTimeout=setTimeout(function(){logger.isDebug&&logger.debug(this,"ok, shown loader long enough"),e._revealMainComponent()},n)):this._revealMainComponent()):(logger.isDebug&&logger.debug(this,"bootstrapper never shown"),clearTimeout(a),a=null,this._revealMainComponent());var s=this._mainComponent;return defaultEventManager.unregisterEventHandlerForElement(this.element),s.attachToParentComponent(),LOADED>this.currentStage&&(this.currentStage=LOADED),s.enterDocument=this._mainComponentEnterDocument,s.enterDocument?s.enterDocument.apply(s,arguments):void 0}},removeContentOnLoad:{value:!0},_forceContentRemoval:{enumerable:!1,value:!1},_contentToRemove:{enumerable:!1,value:null},removeContent:{value:function(){this._forceContentRemoval=!0,this.needsDraw=!0}},draw:{value:function(){if(this.readyToShowMainComponent||this.isLoadingMainComponent||(logger.isDebug&&logger.debug(this,"draw; start loading main component"),this._loadMainComponent()),LOADING===this.currentStage)this.element.classList.remove(BOOTSTRAPPING_CLASS_NAME),this.element.classList.add(LOADING_CLASS_NAME);else if(LOADED===this.currentStage&&this._contentToRemove){this.element.classList.remove(BOOTSTRAPPING_CLASS_NAME),this.element.classList.remove(LOADING_CLASS_NAME),(this.removeContentOnLoad||this._forceContentRemoval)&&(this._contentToRemove.extractContents(),this._contentToRemove.detach(),this._contentToRemove=null),this.element.classList.add(LOADED_CLASS_NAME);var t=document.createEvent("CustomEvent");t.initCustomEvent("componentLoaded",!0,!0,this._mainComponent),this.dispatchEvent(t,!0,!0),this.detachFromParentComponent()}}}});