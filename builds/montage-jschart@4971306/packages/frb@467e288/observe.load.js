montageDefine("467e288","observe",{dependencies:["./parse","./compile-observer","./observers","./scope"],factory:function(e,t,n){function i(e,t,n){var i;i="function"==typeof n?{change:n}:n,i=i||c,i.source=e,i.sourcePath=t;var u=i.parameters=i.parameters||e,h=i.document,d=i.components,p=i.beforeChange,f=i.contentChange,g=new l(e);g.parameters=u,g.document=h,g.components=d,g.beforeChange=p;var m=r(t),v=a(m);return f===!0&&(v=s.makeRangeContentObserver(v)),v(o(function(t){if(t){if("function"!=typeof f)return i.change.apply(e,arguments);if("function"==typeof f)return t.addRangeChangeListener(f),function(){t.removeRangeChangeListener(f)}}else;}),g)}var r=e("./parse"),a=e("./compile-observer"),s=e("./observers"),o=s.autoCancelPrevious,l=e("./scope");n.exports=i;var c={}}});