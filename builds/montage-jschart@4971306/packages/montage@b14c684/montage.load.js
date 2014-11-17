montageDefine("b14c684","montage",{dependencies:["./node.js"],factory:function(t,e,i){"undefined"!=typeof window&&("ontouchstart"in window||(window.Touch=null),document._montageTiming={},document._montageTiming.loadStartTime=Date.now(),window.addEventListener("DOMContentLoaded",function(){var t=1e3;document._montageStartBootstrappingTimeout=setTimeout(function(){document._montageStartBootstrappingTimeout=null;var t=document.documentElement;t.classList?t.classList.add("montage-app-bootstrapping"):t.className=t.className+" montage-app-bootstrapping",document._montageTiming.bootstrappingStartTime=Date.now()},t)})),function(n){t!==void 0?n.call("undefined"!=typeof global?global:this,t,e,i):n({},{},{})}(function(t,e){global=this,e.initMontage=function(){var t=e.getPlatform();t.bootstrap(function(i,n,a){var r=t.getParams(),o={location:i.getLocation()},l=a.resolve(o.location,r.montageLocation);o.moduleTypes=["html","meta"],o.makeLoader=function(t){return e.ReelLoader(t,i.makeLoader(t))},o.makeCompiler=function(t){return e.MetaCompiler(t,e.SerializationCompiler(t,e.TemplateCompiler(t,i.makeCompiler(t))))};var c=a.resolve(o.location,r["package"]||"."),h=r.applicationHash;if("object"==typeof BUNDLE){var u={},d=function(t){return u[t]=u[t]||n.defer()};global.bundleLoaded=function(t){d(t).resolve()};var p=n.defer();o.preloaded=p.promise;var g=n.resolve();BUNDLE.forEach(function(t){g=g.then(function(){return n.all(t.map(function(t){return s.load(t),d(t).promise}))})}),p.resolve(g.then(function(){delete BUNDLE,delete bundleLoaded}))}var f;if("remoteTrigger"in r){var v=n.defer();window.postMessage({type:"montageReady"},"*");var m=function(t){if(r.remoteTrigger===t.origin&&(t.source===window||t.source===window.parent))switch(t.data.type){case"montageInit":window.removeEventListener("message",m),v.resolve([t.data.location,t.data.injections]);break;case"isMontageReady":window.postMessage({type:"montageReady"},"*")}};window.addEventListener("message",m),f=v.promise.spread(function(t,e){var n=i.loadPackage({location:t,hash:h},o);return e&&(n=n.then(function(i){t=a.resolve(t,".");var n,r,s=e.packageDescriptions,o=e.packageDescriptionLocations,l=e.mappings,c=e.dependencies;if(s)for(r=s.length,n=0;r>n;n++)i.injectPackageDescription(s[n].location,s[n].description);if(o)for(r=o.length,n=0;r>n;n++)i.injectPackageDescriptionLocation(o[n].location,o[n].descriptionLocation);if(l)for(r=l.length,n=0;r>n;n++)i.injectMapping(l[n].dependency,l[n].name);if(c)for(r=c.length,n=0;r>n;n++)i.injectDependency(c[n].name,c[n].version);return i})),n})}else{if("autoPackage"in r)i.injectPackageDescription(c,{dependencies:{montage:"*"}},o);else if(".json"===c.slice(c.length-5)){var L=c;c=a.resolve(c,"."),i.injectPackageDescriptionLocation(c,L,o)}f=i.loadPackage({location:c,hash:h},o)}f.then(function(e){e.loadPackage({location:l,hash:r.montageHash}).then(function(t){var e;return e=r.promiseLocation?a.resolve(i.getLocation(),r.promiseLocation):a.resolve(l,"packages/mr/packages/q"),[t,t.loadPackage({location:e,hash:r.promiseHash})]}).spread(function(i,s){i.inject("core/mini-url",a),i.inject("core/promise",{Promise:n}),s.inject("q",n),o.lint=function(t){i.async("core/jshint").then(function(e){e.JSHINT(t.text)||(console.warn("JSHint Error: "+t.location),e.JSHINT.errors.forEach(function(t){t&&(console.warn("Problem at line "+t.line+" character "+t.character+": "+t.reason),t.evidence&&console.warn("    "+t.evidence))}))}).done()},self.mr=e,t.initMontage(i,e,r)})}).done()})};var i=/((.*)\.reel)\/\2$/,n=function(t,e){return e};e.SerializationCompiler=function(t,e){return function(t){if(e(t),t.factory){var a=t.factory;return t.factory=function(t,e,r){a.call(this,t,e,r);for(var s in e){var o=e[s];if(o instanceof Object){if(o.hasOwnProperty("_montage_metadata")&&!o._montage_metadata.isInstance)o._montage_metadata.aliases.push(s),o._montage_metadata.objectName=s;else if(!Object.isSealed(o)){var l=r.id.replace(i,n);Object.defineProperty(o,"_montage_metadata",{value:{require:t,module:l,moduleId:l,property:s,objectName:s,aliases:[s],isInstance:!1}})}}else;}},t}}};var a=/([^\/]+)\.reel$/;e.ReelLoader=function(t,e){return function(t,i){var n=a.exec(t);return n?(i.redirect=t+"/"+n[1],i):e(t,i)}};var r=/\.meta/;e.MetaCompiler=function(t,e){return function(t){var i=(t.location||"").match(r);return i?(t.exports=JSON.parse(t.text),t):e(t)}},e.TemplateCompiler=function(t,e){return function(t){if(t.location){var i=t.location.match(/(.*\/)?(?=[^\/]+\.html(?:\.load\.js)?$)/);return i?(t.dependencies=t.dependencies||[],t.exports={directory:i[1],content:t.text},Object.defineProperty(t.exports,"root",{get:function(){return"object"==typeof console&&console.warn("'root' property is deprecated on template modules.  Use 'directory' instead of root[1]"),i}}),t):(e(t),void 0)}}},e.getPlatform=function(){if("undefined"!=typeof window&&window&&window.document)return s;if("undefined"!=typeof process)return t("./node.js");throw Error("Platform not supported.")};var s={makeResolve:function(){var t=document.querySelector("head"),e=document.createElement("base"),i=document.createElement("a");return e.href="",function(n,a){var r=t.querySelector("base");if(r||(t.appendChild(e),r=e),n+="",!/^[\w\-]+:/.test(n))throw Error("Can't resolve from a relative location: "+JSON.stringify(n)+" "+JSON.stringify(a));var s=r.href;r.href=n,i.href=a;var o=i.href;return r.href=s,r===e&&t.removeChild(r),o}},load:function(t){var e=document.createElement("script");e.src=t,e.onload=function(){e.parentNode.removeChild(e)},document.getElementsByTagName("head")[0].appendChild(e)},getParams:function(){var t,e,i,n,a,r,s;if(!this._params){this._params={};var o=document.getElementsByTagName("script");for(t=0;o.length>t;t++)if(n=o[t],a=!1,n.src&&(i=n.src.match(/^(.*)montage.js(?:[\?\.]|$)/i))&&(this._params.montageLocation=i[1],a=!0),n.hasAttribute("data-montage-location")&&(this._params.montageLocation=n.getAttribute("data-montage-location"),a=!0),a){if(n.dataset)for(s in n.dataset)this._params[s]=n.dataset[s];else if(n.attributes){var l=/-([a-z])/g,c=function(t,e){return e.toUpperCase()};for(e=0;n.attributes.length>e;e++)r=n.attributes[e],i=r.name.match(/^data-(.*)$/),i&&(this._params[i[1].replace(l,c)]=r.value)}n.parentNode.removeChild(n);break}}return this._params},bootstrap:function(t){function e(){document.removeEventListener("DOMContentLoaded",e,!0),o=!0,a()}function i(t){if(!v[t]&&f[t]){var e=v[t]={};v[t]=f[t](i,e)||e}return v[t]}function n(){c=i("mini-url"),l=i("promise"),r=i("require"),delete global.bootstrap,a()}function a(){o&&r&&t(r,l,c)}var r,o,l,c,h=this.getParams(),u=this.makeResolve();/interactive|complete/.test(document.readyState)?e():document.addEventListener("DOMContentLoaded",e,!0);var d={require:"packages/mr/require.js","require/browser":"packages/mr/browser.js",promise:"packages/mr/packages/q/q.js"};if("undefined"==typeof BUNDLE){var p=u(window.location,h.montageLocation);for(var g in d)s.load(u(p,d[g]))}var f={};global.bootstrap=function(t,e){f[t]=e,delete d[t];for(var t in d)return;delete global.bootstrap,n()},global.bootstrap("mini-url",function(t,e){e.resolve=u});var v={}},initMontage:function(t,e,i){var n=["core/core","core/event/event-manager","core/serialization/deserializer/montage-reviver","core/logger","core/deprecate"],a=t("core/promise").Promise;return a.all(n.map(t.deepLoad)).then(function(){n.forEach(t),t("core/core").Montage;var r,s,o=t("core/event/event-manager").EventManager,l=t("core/serialization/deserializer/montage-reviver").MontageReviver,c=t("core/logger").logger,h=t("core/deprecate");c("Promise stacktrace support",function(t){a.longStackSupport=!!t}),r=(new o).initWithWindow(window),"function"==typeof global.montageWillLoad&&global.montageWillLoad();var u,d,p=e.packageDescription.applicationPrototype;return p?(u=l.parseObjectLocationId(p),d=e.async(u.moduleId)):d=t.async("core/application"),d.then(function(t){var n=t[u?u.objectName:"Application"];s=new n,Object.defineProperty(window.document,"application",{get:h.deprecateMethod(null,function(){return t.application},'document.application is deprecated, use require("montage/core/application").application instead.')}),r.application=s,s.eventManager=r,s._load(e,function(){i.module&&e.async(i.module).done(),"function"==typeof global.montageDidLoad&&global.montageDidLoad()})})}).done()}};"undefined"!=typeof window?global.__MONTAGE_LOADED__?console.warn("Montage already loaded!"):(global.__MONTAGE_LOADED__=!0,e.initMontage()):e.getPlatform()})}});