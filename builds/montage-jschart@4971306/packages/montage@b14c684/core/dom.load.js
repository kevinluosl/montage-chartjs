montageDefine("b14c684","core/dom",{dependencies:["./geometry/point"],factory:function(t,e){var i=t("./geometry/point").Point,a=Node.prototype,n=Element.prototype;Object.defineProperty(n,"set",{value:function(t,e,i){var a,n,s,l,o,r=t.indexOf(".",i);i=i||0,n=t.substring(i,-1===r?t.length:r),-1===r?this.setAttribute(n,e):(s=t.lastIndexOf("."),"style"===n?(l=t.substring(r+1,t.length),this.style[l]=e):"classList"===n?(o=t.substring(r+1,t.length),e?this.classList.add(o):this.classList.remove(o)):(a=this.get(t.substring(0,s)))&&(a[t.substring(s+1,t.length)]=e))},enumerable:!1}),a.get=function(t){return this.getAttribute(t)||this[t]},Object.getPrototypeOf(document).addRule=function(t,e){var i,a;if(null==(i=document.styleSheets[0])){var n=document.createElement("style");n.type="text/css",document.head.appendChild(n),i=document.styleSheets[0]}else a=document.getRule(t,i);a||i.insertRule(t+" "+e,i.cssRules.length)},Object.getPrototypeOf(document).getRule=function(t,e){var i;if(e.cssRules)for(var a=0;i=e.cssRules[a];a++){if(i.name&&i.name===t)return i;if(i.selectorText===t)return i}},"undefined"!=typeof Element&&function(){var t="classList";if(!Element.prototype.hasOwnProperty(t)){var e=/^\s+|\s+$/g,i=function(t,e){t.setAttribute("class",e.join(" "))},a=function(t,e){if(""===e)throw"SYNTAX_ERR";if(/\s/.test(e))throw"INVALID_CHARACTER_ERR";return t.indexOf(e)},n=function(){var t=this,n=t.getAttribute("class")||"";return n=n.replace(e,"").split(/\s+/),{length:n.length,item:function(t){return n[t]||null},contains:function(t){return-1!==a(n,t)},add:function(e){-1===a(n,e)&&(n.push(e),this.length=n.length,i(t,n))},remove:function(e){var s=a(n,e);-1!==s&&(n.splice(s,1),this.length=n.length,i(t,n))},toggle:function(t){-1===a(n,t)?this.add(t):this.remove(t)},toString:function(){return t.getAttribute("class")||""}}};Object.defineProperty?Object.defineProperty(Element.prototype,t,{get:n,enumerable:!0}):Object.prototype.__defineGetter__&&Element.prototype.__defineGetter__(t,n)}}(),a.parentOf=function(t){for(;(t=t.parentNode)&&t!==this;);return t?!0:!1};var s=function(t){var e,i,a,n,s=t.ownerDocument;if(t&&s){if(i=s.documentElement,a=s.body,n=s.defaultView,t!==a){if(e=t.getBoundingClientRect(),i.parentOf(t)){var l=i.clientTop||a.clientTop||0,o=i.clientLeft||a.clientLeft||0,r=n.pageYOffset||i.scrollTop||a.scrollTop,c=n.pageXOffset||i.scrollLeft||a.scrollLeft,h=e.top+r-l,p=e.left+c-o;return{top:h,left:p}}return{top:e.top,left:e.left}}return{top:a.offsetTop,left:a.offsetLeft}}return null},l=null;try{l=new WebKitPoint(0,0)}catch(o){}var r=function(){e.convertPointFromNodeToPage=function(t,e){return e?(l.x=e.x,l.y=e.y):(l.x=0,l.y=0),e=webkitConvertPointFromNodeToPage(t,l),e?(new i).init(e.x,e.y):null},e.convertPointFromPageToNode=function(t,e){return e?(l.x=e.x,l.y=e.y):(l.x=0,l.y=0),e=webkitConvertPointFromPageToNode(t,l),e?(new i).init(e.x,e.y):null}},c=function(){e.convertPointFromNodeToPage=function(t,e){if(!t||t.x!==void 0)return null;var a;return(a=s(t))?(new i).init((e?e.x:0)+a.left,(e?e.y:0)+a.top):(new i).init(e?e.x:0,e?e.y:0)},e.convertPointFromPageToNode=function(t,e){if(!t||t.x!==void 0)return null;var a;return(a=s(t))?(new i).init((e?e.x:0)-a.left,(e?e.y:0)-a.top):(new i).init(e?e.x:0,e?e.y:0)}};l?r():c()}});