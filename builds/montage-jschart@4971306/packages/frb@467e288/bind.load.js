montageDefine("467e288","bind",{dependencies:["./parse","./algebra","./stringify","./compile-observer","./compile-binder","./compile-assigner","./observers","./binders","./scope"],factory:function(e,t,n){function i(e,t,n){n.target=e,n.targetPath=t;var i=n.source=n.source||e,c=n["<-"]||n["<->"]||"",h=n.twoWay="<->"in n;n.sourcePath=c,n.value;var u=n.parameters=n.parameters||i,d=n.document,p=n.components,g=n.trace,m=n.sourceScope=new f(i);m.parameters=u,m.document=d,m.components=p;var v=n.targetScope=new f(e);if(v.parameters=u,v.document=d,v.components=p,n.converter){var _=n.converter;_.convert&&(n.convert=_.convert.bind(_)),_.revert&&(n.revert=_.revert.bind(_))}else if(n.reverter){var y=n.reverter;y.convert&&(n.revert=y.convert.bind(y)),y.revert&&(n.convert=y.revert.bind(y))}var b=n.convert,C=n.revert,w=n.sourceSyntax=s(c),L=n.targetSyntax=s(t),x=o(L,w);if(L=x[0],w=x[1],h&&"rangeContent"===L.type)return a(v,L.args[0],m,w,b,C,n,g?{sourcePath:l(w),targetPath:l(L.args[0])}:null);g&&console.log("DEFINE BINDING",t,"<-",c,e);var M=r(v,L,m,w,b,n,g),x=o(w,L);w=x[0],L=x[1];var S=Function.noop;return h&&(g&&console.log("DEFINE BINDING",t,"->",c,i),S=r(m,w,v,L,C,n,g)),function(){M(),S()}}function r(e,t,n,i,r,a,s){var o=c(i);r&&(o=d.makeConverterObserver(o,r,n));var u=h(t);return u(o,n,e,a,s?{sourcePath:l(i),targetPath:l(t)}:null)}function a(e,t,n,i,r,a,s,o){function l(e,t,n){m||(m=!0,o&&console.log("RANGE CONTENT PROPAGATED",o.targetPath,"<-",o.sourcePath,"PLUS",e,"MINUS",t,"AT",n),f.swap(n,t.length,e),m=!1)}function h(e,t,n){m||(m=!0,o&&console.log("RANGE CONTENT PROPAGATED",o.targetPath,"->",o.sourcePath,"PLUS",e,"MINUS",t,"AT",n),g.swap(n,t.length,e),m=!1)}function d(){if(g!==f){o&&console.log("RANGE CONTENT BOUND",o.targetPath,"<->",o.sourcePath),m=!0;var t=p(g,l,n),i=p(f,h,e);return m=!1,function(){o&&console.log("RANGE CONTENT UNBOUND",o.targetPath,"<->",o.sourcePath),t(),i()}}}var f,g,m,v=c(i),_=c(t),y=u(i),b=u(t),C=Function.noop;m=!0;var w=_(function(e){C(),C=Function.noop,o&&console.log("RANGE CONTENT TARGET",o.targetPath,"SET TO",e),e&&e.addRangeChangeListener&&(f=e,g&&f?(o&&console.log("RANGE CONTENT TARGET REPLACES SOURCE",o.targetPath,"->",o.sourcePath,"WITH",f),m=!0,g.swap(0,g.length,f),m=!1,C=d()):g||m||(o&&console.log("RANGE CONTENT TARGET INITIALIZED TO COPY OF SOURCE",o.targetPath,"<-",tarce.sourcePath,"WITH",g),y(f.clone(),n)))},e);m=!1;var L=v(function(t){C(),C=Function.noop,o&&console.log("RANGE CONTENT SOURCE",o.sourcePath,"SET TO",t),t&&t.addRangeChangeListener&&(g=t,f&&g?(o&&console.log("RANGE CONTENT SOURCE REPLACES TARGET",o.targetPath,"<-",o.sourcePath,"WITH",g),m=!0,f.swap(0,f.length,g),m=!1,C=d()):f||b(g.clone(),e))},n);return f||g||y([],n),function(){C(),w(),L()}}var s=e("./parse"),o=e("./algebra"),l=e("./stringify"),c=e("./compile-observer"),h=e("./compile-binder"),u=e("./compile-assigner"),d=e("./observers"),p=d.observeRangeChange;e("./binders");var f=e("./scope");n.exports=i}});