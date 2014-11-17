var Q=require("q"),URL=require("url2"),MimeTypes=require("mime"),FS=require("../fs"),StatusApps=require("./status"),RedirectApps=require("./redirect"),Negotiation=require("./negotiate"),HtmlApps=require("./html"),Deprecate=require("../deprecate");exports.File=function(e,t){return function(n){return exports.file(n,e+"",t)}},exports.FileTree=function(e,t){t||(t={}),t.notFound=t.notFound||StatusApps.notFound,t.file=t.file||exports.file,t.directory=t.directory||exports.directory,t.fs=t.fs||FS;var n=t.fs;return e=n.canonical(e),function(i,r){URL.parse(i.url),i.fs=n;var a=t.redirect||(i.permanent||t.permanent?RedirectApps.permanentRedirect:RedirectApps.temporaryRedirect);return Q.when(e,function(e){var s=n.join(e,i.pathInfo.slice(1));return Q.when(n.canonical(s),function(o){return t.followInsecureSymlinks&&(Deprecate.deprecationWarning("followInsecureSymlinks","followInsecureSymbolicLinks"),t.followInsecureSymbolicLinks=!0),n.contains(e,o)||t.followInsecureSymbolicLinks?s!==o&&t.redirectSymbolicLinks?a(i,n.relativeFromFile(s,o)):Q.when(n.stat(o),function(e){return e.isFile()?t.file(i,o,t.contentType,n):e.isDirectory()?t.directory(i,o,t.contentType,n):t.notFound(i,r)}):t.notFound(i,r)},function(){return t.notFound(i,r)})})}},exports.file=function(e,t,n,i){return i=i||FS,n=n||MimeTypes.lookup(t),Q.when(i.stat(t),function(r){var a,s=exports.etag(r),o={flags:"rb"},l=200,c={"content-type":n,etag:s};if("range"in e.headers)if("if-range"in e.headers&&s!=e.headers["if-range"]);else{if(a=interpretFirstRange(e.headers.range,r.size),!a)return StatusApps.responseForStatus(e,416);if(a.end>r.size&&(a.end=r.size),a.end<=a.begin)return StatusApps.responseForStatus(e,416);l=206,c["content-range"]="bytes "+a.begin+"-"+(a.end-1)+"/"+r.size,c["content-length"]=""+(a.end-a.begin),o.begin=a.begin,o.end=a.end}else{if(s==e.headers["if-none-match"])return StatusApps.responseForStatus(e,304);c["content-length"]=""+r.size}return{status:l,headers:c,body:i.open(t,o),file:t,range:a}})};var rangesExpression=/^\s*bytes\s*=\s*(\d*\s*-\s*\d*\s*(?:,\s*\d*\s*-\s*\d*\s*)*)$/,rangeExpression=/^\s*(\d*)\s*-\s*(\d*)\s*$/,interpretRange=function(e,t){var n=rangeExpression.exec(e);if(n&&(""!=n[1]||""!=n[2])){var i,r;return""==n[1]?(i=0,r=+n[2]+1):""==n[2]?(i=+n[1],r=t):(i=+n[1],r=+n[2]+1),{begin:i,end:r}}},interpretFirstRange=exports.interpretFirstRange=function(e,t){var n=rangesExpression.exec(e);if(n){for(var i=n[1].split(/\s*,\s*/),r=interpretRange(i[0],t),a=0,s=i.length;s>a;a++){var o=interpretRange(i[a],t);if(!(o.begin<=r.end))return;r.end=o.end}return r}};exports.etag=function(e){return[e.node.ino,e.size,e.lastModified().getTime()].join("-")},exports.directory=function(e,t){var n=StatusApps.notFound(e);return n.directory=t,n},exports.ListDirectories=function(e,t){return t=t||exports.listDirectory,function(n){if(n.directoryIndex)throw Error("DirectoryIndex must be used after ListDirectories");return n.listDirectories=!0,Q.fcall(e,n).then(function(e){return void 0!==e.directory?t(n,e):e})}},exports.listDirectory=function(e,t){if(e.location=URL.parse(e.path),e.location.file)return RedirectApps.redirect(e,e.location.file+"/");var n={};n["text/plain"]=exports.listDirectoryText,n["text/markdown"]=exports.listDirectoryMarkdown,e.handleHtmlFragmentResponse&&(n["text/html"]=exports.listDirectoryHtmlFragment),e.handleJsonResponse&&(n["application/json"]=exports.listDirectoryJson);var i=Negotiation.negotiate(e,n)||function(){return t};return i(e,t)},exports.listDirectoryHtmlFragment=function(e,t){return exports.listDirectoryData(e,t).then(function(e){return{status:200,headers:{"content-type":"text/html"},htmlTitle:"Directory Index",htmlFragment:{forEach:function(t){t('<ul class="directory-index">\n'),Object.keys(e).sort().forEach(function(n){var i=e[n],r="";"directory"===i.type&&(r="/"),t('    <li class="entry '+i.type+'"><a href="'+HtmlApps.escapeHtml(n+r)+'">'+HtmlApps.escapeHtml(n+r)+"</a></li>\n")}),t("</ul>\n")}}}})},exports.listDirectoryText=function(e,t){return exports.listDirectoryData(e,t).then(function(e){return{status:200,headers:{"content-type":"text/plain"},body:{forEach:function(t){Object.keys(e).sort().forEach(function(n){var i=e[n],r="";"directory"===i.type&&(r="/"),t(n+r+"\n")})}}}})},exports.listDirectoryMarkdown=function(e,t){return exports.listDirectoryData(e,t).then(function(e){return{status:200,headers:{"content-type":"text/plain"},body:{forEach:function(t){t("\n# Directory Index\n\n"),Object.keys(e).forEach(function(n){var i=e[n],r="";"directory"===i.type&&(r="/"),t("-   "+n+r+"\n")}),t("\n")}}}})},exports.listDirectoryJson=function(e,t){return exports.listDirectoryData(e,t).then(function(e){return{status:200,headers:{},data:e}})},exports.listDirectoryData=function(e,t){if(!e.fs)throw Error("Can't list a directory without a designated file system");var n=e.fs;return Q.invoke(n,"list",t.directory).then(function(e){return e.sort(),e.map(function(e){return Q.invoke(n,"stat",n.join(t.directory,e)).then(function(t){return t.isDirectory()?{name:e,stat:{type:"directory"}}:t.isFile()?{name:e,stat:{type:"file"}}:void 0},function(){})})}).all().then(function(e){var t={};return e.forEach(function(e){e&&(t[e.name]=e.stat)}),t})},exports.DirectoryIndex=function(e,t){return t=t||"index.html",function(n){return n.directoryIndex=!0,n.location=URL.parse(n.path),n.location.file===t?RedirectApps.redirect(n,"."):Q.fcall(e,n).then(function(i){if(void 0!==i.directory){if(n.location.file)return RedirectApps.redirect(n,n.location.file+"/");var r=n.fs.join(i.directory,t);return Q.invoke(n.fs,"isFile",r).then(function(r){return r?(n.url=URL.resolve(n.url,t),n.pathInfo+=t,e(n)):i})}return i})}};