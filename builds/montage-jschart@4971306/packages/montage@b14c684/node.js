function parseHtml(t){var e,i,n=new htmlparser.DomHandler(function(t,n){i=t,e=n}),a=new htmlparser.Parser(n);if(a.write(t),a.done(),i)throw i;if(!e)throw Error("HTML parsing did not complete");return{type:"document",children:e}}function visit(t,e){var i,n=function(){i=!0};if(e(t,n),!i)for(var a=t.children,r=a?a.length:0,s=0;r>s;s++)visit(a[s],e)}function getAttribute(t,e){return t.attribs?t.attribs[e]:null}function getText(t){return DomUtils.getText(t)}function parsePrototypeForModule(t){return t.replace(/\[[^\]]+\]$/,"")}var FS=require("q-io/fs"),MontageBoot=require("./montage"),Require=require("mr/require");require("mr/node");var Promise=require("q"),URL=require("url"),htmlparser=require("htmlparser2"),DomUtils=htmlparser.DomUtils;Require.overlays=["node","server","montage"],exports.bootstrap=function(){var t=process.argv.slice(0,3),e=process.argv.slice(2),i=e.shift();return FS.canonical(i).then(function(i){return findPackage(i).fail(function(n){if("Can't find package"!==n.message)throw Error(n);loadFreeModule(i,t,e)}).then(function(n){return loadPackagedModule(n,i,t,e)})})};var findPackage=function(t){var e=FS.directory(t);if(e===t)throw Error("Can't find package");return FS.join(e,"package.json"),FS.stat(t).then(function(t){return t.isFile()?e:findPackage(e)})},loadFreeModule=function(){throw Error("Can't load module that is not in a package")},loadPackagedModule=function(t,e){return MontageBoot.loadPackage(t).then(function(i){var n=e.slice(t.length+1);return i.async(n)}).done()};MontageBoot.loadPackage=function(t,e){return"/"!==t.slice(t.length-1,t.length)&&(t+="/"),e=e||{},e.location=URL.resolve(Require.getLocation(),t),e.moduleTypes=["html","meta"],e.makeLoader=function(t){return MontageBoot.ReelLoader(t,Require.makeLoader(t))},e.makeCompiler=function(t){return MontageBoot.TemplateCompiler(t,MontageBoot.SerializationCompiler(t,Require.makeCompiler(t)))},Require.loadPackage(e.location,e)},MontageBoot.TemplateLoader=function(t,e){return function(t,i){var n=t.match(/(.*\/)?(?=[^\/]+\.html$)/),a=t.match(/(?=[^\/]+\.json$)/),r=t.match(/(.*\/)?([^\/]+)\.reel\/\2$/);return n?e(t,i).then(function(){return i.dependencies=parseHtmlDependencies(i.text,i.location),i}):a?e(t,i).then(function(){return i.dependencies=collectSerializationDependencies(i.text,[]),i}):r?e(t,i).then(function(){var e=URL.resolve(i.location,r[2]+".html");return FS.stat(URL.parse(e).pathname).then(function(e){e.isFile()&&(i.extraDependencies=[t+".html"])},function(){})}):e(t,i)}},Require.makeLoader=function(t){return function(e){return MontageBoot.TemplateLoader(e,t(e))}}(Require.makeLoader);var parseHtmlDependencies=function(t){var e=[],i=parseHtml(t);return collectHtmlDependencies(i,e),e},collectHtmlDependencies=function(t,e){visit(t,function(t){DomUtils.isTag(t)&&("script"===t.name?"text/montage-serialization"===getAttribute(t,"type")&&collectSerializationDependencies(getText(t),e):"link"===t.name&&"text/montage-serialization"===getAttribute(t,"type")&&e.push(getAttribute(t,"href")))})},collectSerializationDependencies=function(t,e){var i=JSON.parse(t);return Object.keys(i).forEach(function(t){var n=i[t];n.lazy||("string"==typeof n.prototype&&e.push(parsePrototypeForModule(n.prototype)),"string"==typeof n.object&&e.push(parsePrototypeForModule(n.object)))}),e};