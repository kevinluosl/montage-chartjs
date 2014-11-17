function bind(e,t,n){n.target=e,n.targetPath=t;var i=n.source=n.source||e,r=n["<-"]||n["<->"]||"",a=n.twoWay="<->"in n;n.sourcePath=r,n.value;var s=n.parameters=n.parameters||i,o=n.document,l=n.components,c=n.trace,h=n.sourceScope=new Scope(i);h.parameters=s,h.document=o,h.components=l;var u=n.targetScope=new Scope(e);if(u.parameters=s,u.document=o,u.components=l,n.converter){var d=n.converter;d.convert&&(n.convert=d.convert.bind(d)),d.revert&&(n.revert=d.revert.bind(d))}else if(n.reverter){var p=n.reverter;p.convert&&(n.revert=p.convert.bind(p)),p.revert&&(n.convert=p.revert.bind(p))}var f=n.convert,g=n.revert,m=n.sourceSyntax=parse(r),v=n.targetSyntax=parse(t),_=solve(v,m);if(v=_[0],m=_[1],a&&"rangeContent"===v.type)return bindRangeContent(u,v.args[0],h,m,f,g,n,c?{sourcePath:stringify(m),targetPath:stringify(v.args[0])}:null);c&&console.log("DEFINE BINDING",t,"<-",r,e);var y=bindOneWay(u,v,h,m,f,n,c),_=solve(m,v);m=_[0],v=_[1];var b=Function.noop;return a&&(c&&console.log("DEFINE BINDING",t,"->",r,i),b=bindOneWay(h,m,u,v,g,n,c)),function(){y(),b()}}function bindOneWay(e,t,n,i,r,a,s){var o=compileObserver(i);r&&(o=Observers.makeConverterObserver(o,r,n));var l=compileBinder(t);return l(o,n,e,a,s?{sourcePath:stringify(i),targetPath:stringify(t)}:null)}function bindRangeContent(e,t,n,i,r,a,s,o){function l(e,t,n){p||(p=!0,o&&console.log("RANGE CONTENT PROPAGATED",o.targetPath,"<-",o.sourcePath,"PLUS",e,"MINUS",t,"AT",n),u.swap(n,t.length,e),p=!1)}function c(e,t,n){p||(p=!0,o&&console.log("RANGE CONTENT PROPAGATED",o.targetPath,"->",o.sourcePath,"PLUS",e,"MINUS",t,"AT",n),d.swap(n,t.length,e),p=!1)}function h(){if(d!==u){o&&console.log("RANGE CONTENT BOUND",o.targetPath,"<->",o.sourcePath),p=!0;var t=observeRangeChange(d,l,n),i=observeRangeChange(u,c,e);return p=!1,function(){o&&console.log("RANGE CONTENT UNBOUND",o.targetPath,"<->",o.sourcePath),t(),i()}}}var u,d,p,f=compileObserver(i),g=compileObserver(t),m=compileAssigner(i),v=compileAssigner(t),_=Function.noop;p=!0;var y=g(function(e){_(),_=Function.noop,o&&console.log("RANGE CONTENT TARGET",o.targetPath,"SET TO",e),e&&e.addRangeChangeListener&&(u=e,d&&u?(o&&console.log("RANGE CONTENT TARGET REPLACES SOURCE",o.targetPath,"->",o.sourcePath,"WITH",u),p=!0,d.swap(0,d.length,u),p=!1,_=h()):d||p||(o&&console.log("RANGE CONTENT TARGET INITIALIZED TO COPY OF SOURCE",o.targetPath,"<-",tarce.sourcePath,"WITH",d),m(u.clone(),n)))},e);p=!1;var b=f(function(t){_(),_=Function.noop,o&&console.log("RANGE CONTENT SOURCE",o.sourcePath,"SET TO",t),t&&t.addRangeChangeListener&&(d=t,u&&d?(o&&console.log("RANGE CONTENT SOURCE REPLACES TARGET",o.targetPath,"<-",o.sourcePath,"WITH",d),p=!0,u.swap(0,u.length,d),p=!1,_=h()):u||v(d.clone(),e))},n);return u||d||m([],n),function(){_(),y(),b()}}var parse=require("./parse"),solve=require("./algebra"),stringify=require("./stringify"),compileObserver=require("./compile-observer"),compileBinder=require("./compile-binder"),compileAssigner=require("./compile-assigner"),Observers=require("./observers"),observeRangeChange=Observers.observeRangeChange,Binders=require("./binders"),Scope=require("./scope");module.exports=bind;