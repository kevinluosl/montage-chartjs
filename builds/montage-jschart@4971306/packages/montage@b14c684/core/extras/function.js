require("./object"),Object.defineProperty(Function,"identity",{value:function(t){return t},writable:!0,configurable:!0}),Object.defineProperty(Function,"noop",{value:function(){},writable:!0,configurable:!0}),Object.defineProperty(Function,"by",{value:function(t,e){e=e||Object.compare,t=t||Function.identity;var i=function(i,n){return e(t(i),t(n))};return i.compare=e,i.by=t,i},writable:!0,configurable:!0});