montageDefine("b14c684","node",{dependencies:["q-io/fs","./montage","mr/require","mr/node","q","url","htmlparser2"],factory:function(t,e){function i(t){var e,i,n=new u.DomHandler(function(t,n){i=t,e=n}),a=new u.Parser(n);if(a.write(t),a.done(),i)throw i;if(!e)throw Error("HTML parsing did not complete");return{type:"document",children:e}}function n(t,e){var i,a=function(){i=!0};if(e(t,a),!i)for(var r=t.children,s=r?r.length:0,o=0;s>o;o++)n(r[o],e)}function a(t,e){return t.attribs?t.attribs[e]:null}function r(t){return d.getText(t)}function s(t){return t.replace(/\[[^\]]+\]$/,"")}var o=t("q-io/fs"),l=t("./montage"),c=t("mr/require");t("mr/node"),t("q");var h=t("url"),u=t("htmlparser2"),d=u.DomUtils;c.overlays=["node","server","montage"],e.bootstrap=function(){var t=process.argv.slice(0,3),e=process.argv.slice(2),i=e.shift();return o.canonical(i).then(function(i){return p(i).fail(function(n){if("Can't find package"!==n.message)throw Error(n);g(i,t,e)}).then(function(n){return f(n,i,t,e)})})};var p=function(t){var e=o.directory(t);if(e===t)throw Error("Can't find package");return o.join(e,"package.json"),o.stat(t).then(function(t){return t.isFile()?e:p(e)})},g=function(){throw Error("Can't load module that is not in a package")},f=function(t,e){return l.loadPackage(t).then(function(i){var n=e.slice(t.length+1);return i.async(n)}).done()};l.loadPackage=function(t,e){return"/"!==t.slice(t.length-1,t.length)&&(t+="/"),e=e||{},e.location=h.resolve(c.getLocation(),t),e.moduleTypes=["html","meta"],e.makeLoader=function(t){return l.ReelLoader(t,c.makeLoader(t))},e.makeCompiler=function(t){return l.TemplateCompiler(t,l.SerializationCompiler(t,c.makeCompiler(t)))},c.loadPackage(e.location,e)},l.TemplateLoader=function(t,e){return function(t,i){var n=t.match(/(.*\/)?(?=[^\/]+\.html$)/),a=t.match(/(?=[^\/]+\.json$)/),r=t.match(/(.*\/)?([^\/]+)\.reel\/\2$/);return n?e(t,i).then(function(){return i.dependencies=v(i.text,i.location),i}):a?e(t,i).then(function(){return i.dependencies=L(i.text,[]),i}):r?e(t,i).then(function(){var e=h.resolve(i.location,r[2]+".html");return o.stat(h.parse(e).pathname).then(function(e){e.isFile()&&(i.extraDependencies=[t+".html"])},function(){})}):e(t,i)}},c.makeLoader=function(t){return function(e){return l.TemplateLoader(e,t(e))}}(c.makeLoader);var v=function(t){var e=[],n=i(t);return m(n,e),e},m=function(t,e){n(t,function(t){d.isTag(t)&&("script"===t.name?"text/montage-serialization"===a(t,"type")&&L(r(t),e):"link"===t.name&&"text/montage-serialization"===a(t,"type")&&e.push(a(t,"href")))})},L=function(t,e){var i=JSON.parse(t);return Object.keys(i).forEach(function(t){var n=i[t];n.lazy||("string"==typeof n.prototype&&e.push(s(n.prototype)),"string"==typeof n.object&&e.push(s(n.object)))}),e}}});