montageDefine("a42a82b","fs-mock",{dependencies:["q","./fs-boot","./fs-common","./buffer-stream","./reader","collections/set","./fs"],factory:function(e,t,n){function i(e,t){return this instanceof i?(this._root=new o(this,"/"),u.update(this,function(){return t}),t=t||this.ROOT,e&&this._init(e),void 0):new i(e,t)}function r(e,t){return c.when(e.listTree(t),function(n){var r={};return c.all(n.map(function(n){var i=e.join(t,n),a=e.relativeFromDirectory(t,i);return c.when(e.stat(i),function(t){return t.isFile()?c.when(e.read(n,"rb"),function(e){r[a]=e}):void 0})})).then(function(){return i(r)})})}function a(e){if(!e)throw Error("FS required argument");this._fs=e,this.atime=this.mtime=Date.now(),this.mode=parseInt("0644",8),this._owner=null}function s(e){a.call(this,e),this._chunks=[]}function o(e){a.call(this,e),this._entries=Object.create(null),this.mode=parseInt("0755",8)}function l(e,t){a.call(this,e),this._link=t}var c=e("q"),h=e("./fs-boot"),u=e("./fs-common"),d=e("./buffer-stream"),p=e("./reader"),f=e("collections/set");n.exports=i,i.prototype=Object.create(h),i.prototype._init=function(e,t){t=t||this.ROOT,Object.keys(e).forEach(function(n){var i=e[n];n=this.join(t,n);var r=this.directory(n),a=this.base(n),o=this._root._walk(r,!0),l=new s(this);if(!(i instanceof Buffer)){if("object"==typeof i)return this._root._walk(n,!0),this._init(i,n),void 0;i=new Buffer(i+"","utf-8")}o._entries[a]=l,l._chunks=[i]},this)},i.prototype.list=function(e){var t=this;return c.fcall(function(){e=t.absolute(e);var n=t._root._walk(e)._follow(e);return n.isDirectory()||Error("Can't list non-directory: "+JSON.stringify(e)),Object.keys(n._entries).sort()})},i.prototype.open=function(e,t,n,i){var r=this;return c.fcall(function(){e=r.absolute(e);var a=r.directory(e),o=r.base(e),l=r._root._walk(a);if(!l.isDirectory())throw Error("Can't find "+e+" because "+a+" is not a directory");"object"==typeof t?(i=t,t=i.flags,n=i.charset):i=i||{},t=t||"r";var c=t.indexOf("b")>=0,h=t.indexOf("w")>=0,u=t.indexOf("a")>=0;if(c||(n=n||"utf-8"),h||u){l._entries[o]||(l._entries[o]=new s(this),"mode"in i&&(l._entries[o].mode=i.mode));var f=l._entries[o]._follow(e);if(!f.isFile())throw Error("Can't write non-file "+e);return f.mtime=Date.now(),f.atime=Date.now(),u||(f._chunks.length=0),new d(f._chunks,n)}if(!l._entries[o])throw Error("Can't read non-existant "+e);var f=l._entries[o]._follow(e);if(!f.isFile())throw Error("Can't read non-file "+e);return f.atime=Date.now(),"begin"in i&&"end"in i?new d([p.join(f._chunks).slice(i.begin,i.end)],n):new d(f._chunks,n)})},i.prototype.remove=function(e){var t=this;return c.fcall(function(){e=t.absolute(e);var n=t.directory(e),i=t.base(e),r=t._root._walk(n);if(!r.isDirectory())throw Error("Can't remove file from non-directory: "+e);if(!r._entries[i])throw Error("Can't remove non-existant file: "+e);if(r._entries[i].isDirectory())throw Error("Can't remove directory. Use removeDirectory: "+e);delete r._entries[i]})},i.prototype.makeDirectory=function(e,t){var n=this;return c.fcall(function(){e=n.absolute(e);var i=n.directory(e),r=n.base(e),a=n._root._walk(i);if(!a.isDirectory()){var s=Error("Can't make directory in non-directory: "+e);throw s.code="EEXISTS",s.exists=!0,s}if(a._entries[r]){var s=Error("Can't make directory. Entry exists: "+e);throw s.code="EISDIR",s.exists=!0,s.isDirectory=!0,s}a._entries[r]=new o(n),t&&(a._entries[r].mode=t)})},i.prototype.removeDirectory=function(e){var t=this;return c.fcall(function(){e=t.absolute(e);var n=t.directory(e),i=t.base(e),r=t._root._walk(n);if(!r.isDirectory())throw Error("Can't remove directory from non-directory: "+e);if(!r._entries[i])throw Error("Can't remove non-existant directory: "+e);if(!r._entries[i].isDirectory())throw Error("Can't remove non-directory: "+e);delete r._entries[i]})},i.prototype.stat=function(e){var t=this;return c.fcall(function(){return e=t.absolute(e),new t.Stats(t._root._walk(e)._follow(e))})},i.prototype.statLink=function(e){var t=this;return c.fcall(function(){return e=t.absolute(e),new t.Stats(t._root._walk(e))})},i.prototype.link=function(e,t){var n=this;return c.fcall(function(){e=n.absolute(e),t=n.absolute(t);var i=n._root._walk(e)._follow(e);if(!i.isFile())throw Error("Can't link non-file: "+e);var r=n.directory(t),a=n.base(t),s=n._root._walk(r)._follow(r);if(!s.isDirectory())throw Error("Can't create link in non-directory: "+t);if(s._entries[a]&&s._entries[a].isDirectory())throw Error("Can't overwrite existing directory with hard link: "+t);s._entries[a]=i})},i.prototype.symbolicLink=function(e,t){var n=this;return c.fcall(function(){e=n.absolute(e);var i=n.directory(e),r=n.base(e),a=n._root._walk(i);if(a._entries[r]&&a._entries[r].isDirectory())throw Error("Can't overwrite existing directory with symbolic link: "+e);a._entries[r]=new l(n,t)})},i.prototype.chown=function(e,t){var n=this;return c.fcall(function(){e=n.absolute(e),n._root._walk(e)._follow(e)._owner=t})},i.prototype.chmod=function(e,t){var n=this;return c.fcall(function(){e=n.absolute(e),n._root._walk(e)._follow(e).mode=t})},i.prototype.rename=function(e,t){var n=this;return c.fcall(function(){e=n.absolute(e),t=n.absolute(t);var i=n.directory(e),r=n._root._walk(i)._follow(i),a=n.base(e),s=r._entries[a];if(!s){var o=Error("Can't copy non-existent file: "+e);throw o.code="ENOENT",o}if(s=s._follow(e),!s){var o=Error("Can't copy non-existent file: "+e);throw o.code="ENOENT",o}var l=n.directory(t),c=n._root._walk(l)._follow(l),h=n.base(t),u=c._entries[h];if(u&&(u=u._follow(t)),u&&u.isDirectory()){var o=Error("Can't copy over existing directory: "+t);throw o.code="EISDIR",o}u!==s&&(c._entries[h]=s,delete r._entries[a])})},i.prototype.readLink=function(e){var t=this;return c.fcall(function(){e=t.absolute(e);var n=t._root._walk(e);if(!t.isSymbolicLink())throw Error("Can't read non-symbolic link: "+e);return n._link})},i.prototype.canonical=function(e){var t=this;return c.fcall(function(){return e=t.absolute(e),t._root._canonical(e)})},i.mock=r,a.prototype._walk=function(e,t,n){var i=this._fs.split(e);return this._fs.isAbsolute(e)?(i.shift(),this._fs._root._walkParts(i,t,this._fs.ROOT)):this._walkParts(i,t,n||this._fs.ROOT)},a.prototype._walkParts=function(e,t,n){if(0===e.length)return this;var i=e.shift();if(""===i)return this._walkParts(e,t,this._fs.join(n,i));var r=Error("Can't find "+JSON.stringify(this._fs.resolve(i,this._fs.join(e)))+" via "+JSON.stringify(n));throw r.code="ENOENT",r},a.prototype._canonical=function(e){if(!this._fs.isAbsolute(e))throw Error("Path must be absolute for _canonical: "+e);var t=this._fs.split(e);t.shift();var n=this._fs.ROOT;return n+this._fs._root._canonicalParts(t,n)},a.prototype._canonicalParts=function(e,t){return 0===e.length?t:this._fs.join(t,this._fs.join(e))},a.prototype._follow=function(){return this},a.prototype._touch=function(){this.mtime=Date.now()};var g=["isDirectory","isFile","isBlockDevice","isCharacterDevice","isSymbolicLink","isFIFO","isSocket"];g.forEach(function(e){a.prototype[e]=function(){return!1}}),a.prototype.lastAccessed=function(){return this.atime},a.prototype.lastModified=function(){return this.mtime},s.prototype=Object.create(a.prototype),s.prototype.isFile=function(){return!0},Object.defineProperty(s.prototype,"size",{configurable:!0,enumerable:!0,get:function(){return this._chunks.reduce(function(e,t){return e+=t.length},0)}}),o.prototype=Object.create(a.prototype),o.prototype.isDirectory=function(){return!0},o.prototype._walkParts=function(e,t,n){if(n=n||this._fs.ROOT,0===e.length)return this;var i=e.shift();if(""===i)return this._walkParts(e,t,this._fs.join(n,i));if(!this._entries[i]){if(!t){var r=Error("Can't find "+JSON.stringify(this._fs.join(e))+" via "+JSON.stringify(n));throw r.code="ENOENT",r}this._entries[i]=new o(this._fs)}return this._entries[i]._walkParts(e,t,this._fs.join(n,i))},o.prototype._canonicalParts=function(e,t){if(0===e.length)return t;var n=e.shift();return""===n?t:(t===this._fs.ROOT&&(t=""),this._entries[n]?this._entries[n]._canonicalParts(e,this._fs.join(t,n)):this._fs.join(t,n,this._fs.join(e)))},l.prototype=Object.create(a.prototype),l.prototype.isSymbolicLink=function(){return!0},l.prototype._follow=function(e,t){if(t=t||f(),t.has(this)){var n=Error("Can't follow symbolic link cycle at "+JSON.stringify(e));throw n.code="ELOOP",n}t.add(this);var i=this._fs.join(e,"..",this._link);return this._walk(i,null,"<link>")._follow(i,t)},l.prototype._canonicalParts=function(e,t){return this._fs.relativeFromDirectory(this._fs.ROOT,this._fs._root._canonical(this._fs.absolute(this._fs.join(t,"..",this._link))))},e("./fs")}});