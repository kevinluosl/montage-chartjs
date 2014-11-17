montageDefine("b2e9569","index",{dependencies:["buffer"],factory:function(e,t){function n(e){if(e&&!o(e))throw Error("Unknown encoding: "+e)}function i(e){return e.toString(this.encoding)}function r(e){this.charReceived=e.length%2,this.charLength=this.charReceived?2:0}function a(e){this.charReceived=e.length%3,this.charLength=this.charReceived?3:0}var s=e("buffer").Buffer,o=s.isEncoding||function(e){switch(e&&e.toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":case"raw":return!0;default:return!1}},l=t.StringDecoder=function(e){switch(this.encoding=(e||"utf8").toLowerCase().replace(/[-_]/,""),n(e),this.encoding){case"utf8":this.surrogateSize=3;break;case"ucs2":case"utf16le":this.surrogateSize=2,this.detectIncompleteChar=r;break;case"base64":this.surrogateSize=3,this.detectIncompleteChar=a;break;default:return this.write=i,void 0}this.charBuffer=new s(6),this.charReceived=0,this.charLength=0};l.prototype.write=function(e){for(var t="";this.charLength;){var n=e.length>=this.charLength-this.charReceived?this.charLength-this.charReceived:e.length;if(e.copy(this.charBuffer,this.charReceived,0,n),this.charReceived+=n,this.charReceived<this.charLength)return"";e=e.slice(n,e.length),t=this.charBuffer.slice(0,this.charLength).toString(this.encoding);var i=t.charCodeAt(t.length-1);if(!(i>=55296&&56319>=i)){if(this.charReceived=this.charLength=0,0===e.length)return t;break}this.charLength+=this.surrogateSize,t=""}this.detectIncompleteChar(e);var r=e.length;this.charLength&&(e.copy(this.charBuffer,0,e.length-this.charReceived,r),r-=this.charReceived),t+=e.toString(this.encoding,0,r);var r=t.length-1,i=t.charCodeAt(r);if(i>=55296&&56319>=i){var a=this.surrogateSize;return this.charLength+=a,this.charReceived+=a,this.charBuffer.copy(this.charBuffer,a,0,a),e.copy(this.charBuffer,0,0,a),t.substring(0,r)}return t},l.prototype.detectIncompleteChar=function(e){for(var t=e.length>=3?3:e.length;t>0;t--){var n=e[e.length-t];if(1==t&&6==n>>5){this.charLength=2;break}if(2>=t&&14==n>>4){this.charLength=3;break}if(3>=t&&30==n>>3){this.charLength=4;break}}this.charReceived=t},l.prototype.end=function(e){var t="";if(e&&e.length&&(t=this.write(e)),this.charReceived){var n=this.charReceived,i=this.charBuffer,r=this.encoding;t+=i.slice(0,n).toString(r)}return t}}});