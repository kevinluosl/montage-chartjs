montageDefine("fa0a895","lib/parse",{dependencies:["./utils"],factory:function(e,t,n){var i=e("./utils"),r={delimiter:"&",depth:5,arrayLimit:20,parametersLimit:1e3};r.parseValues=function(e,t){t="string"==typeof t?t:r.delimiter;for(var n={},a=e.split(t,r.parametersLimit),s=0,o=a.length;o>s;++s){var l=a[s],c=-1===l.indexOf("]=")?l.indexOf("="):l.indexOf("]=")+1;if(-1===c)n[i.decode(l)]="";else{var u=i.decode(l.slice(0,c)),h=i.decode(l.slice(c+1));n[u]=n[u]?[].concat(n[u]).concat(h):h}}return n},r.parseObject=function(e,t){if(!e.length)return t;var n=e.shift(),i={};if("[]"===n)i=[],i=i.concat(r.parseObject(e,t));else{var a="["===n[0]&&"]"===n[n.length-1]?n.slice(1,n.length-1):n,s=parseInt(a,10);!isNaN(s)&&n!==a&&r.arrayLimit>=s?(i=[],i[s]=r.parseObject(e,t)):i[a]=r.parseObject(e,t)}return i},r.parseKeys=function(e,t,n){if(e){var i=/^([^\[\]]*)/,a=/(\[[^\[\]]*\])/g,s=i.exec(e);if(!Object.prototype.hasOwnProperty(s[1])){var o=[];s[1]&&o.push(s[1]);for(var l=0;null!==(s=a.exec(e))&&n>l;)++l,Object.prototype.hasOwnProperty(s[1].replace(/\[|\]/g,""))||o.push(s[1]);return s&&o.push("["+e.slice(s.index)+"]"),r.parseObject(o,t)}}},n.exports=function(e,t,n){if(""===e||null===e||e===void 0)return{};"number"!=typeof t&&(n=t,t=r.depth);var a="string"==typeof e?r.parseValues(e,n):i.clone(e),s={};for(var o in a)if(a.hasOwnProperty(o)){var l=r.parseKeys(o,a[o],t);s=i.merge(s,l)}return i.compact(s)}}});