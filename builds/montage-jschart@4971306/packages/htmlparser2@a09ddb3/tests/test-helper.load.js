montageDefine("a09ddb3","tests/test-helper",{dependencies:[".."],factory:function(t,e){var n=t(".."),i=n.Parser,r=n.CollectingHandler,a=5;e.writeToParser=function(t,e,n){for(var r=new i(t,e),s=0;n.length>s;s+=a)r.write(n.substr(s,a));r.end(),r.parseComplete(n)},e.getEventCollector=function(t){var e=new r({onerror:t,onend:function(){t(null,e.events.reduce(function(t,e){return"onerror"===e[0]||"onend"===e[0]||("ontext"===e[0]&&t.length&&"text"===t[t.length-1].event?t[t.length-1].data[0]+=e[1]:t.push({event:e[0].slice(2),data:e.slice(1)})),t},[]))}});return e}}});