function Reader(e,t){function n(){var e;return e=t?o.join(""):i.constructor.join(o),o.splice(0,o.length),e}var i=Object.create(Reader.prototype);t&&e.setEncoding&&e.setEncoding(t);var r=Q.defer(),a=Q.defer();e.on("error",function(e){r.reject(e)});var s,o=[];return e.on("end",function(){r.resolve(i),a.resolve()}),e.on("data",function(e){r.resolve(i),s?s(e):o.push(e)}),i.read=function(){s=void 0;var e=Q.defer();return Q.done(a.promise,function(){e.resolve(n())}),e.promise},i.forEach=function(e){return o&&o.length&&e(n()),s=e,Q.when(a.promise,function(){s=void 0})},i.close=function(){e.destroy()},i.node=e,r.promise}function read(e,t){var n=[];return e.forEach(function(e){n.push(e)}),t?n.join(""):join(n)}function join(e){var t,n,i,r,a=0,s=e.length;for(n=0;s>n;n++)i=e[n],a+=i.length;for(r=new Buffer(a),t=0,n=0;s>n;n++)i=e[n],i.copy(r,t,0),t+=i.length;return e.splice(0,s,r),r}var Q=require("q");module.exports=Reader,Reader.read=read,Reader.join=join;