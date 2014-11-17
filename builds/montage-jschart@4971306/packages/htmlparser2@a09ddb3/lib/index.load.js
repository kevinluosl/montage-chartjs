montageDefine("a09ddb3","lib/index",{dependencies:["./Parser.js","domhandler","./FeedHandler.js","./Tokenizer.js","domelementtype","./Stream.js","./WritableStream.js","./ProxyHandler.js","domutils","./CollectingHandler.js"],factory:function(t,e,n){function i(t,e){return delete n.exports[t],n.exports[t]=e,e}n.exports={get Parser(){return i("Parser",t("./Parser.js"))},get DomHandler(){return i("DomHandler",t("domhandler"))},get FeedHandler(){return i("FeedHandler",t("./FeedHandler.js"))},get Tokenizer(){return i("Tokenizer",t("./Tokenizer.js"))},get ElementType(){return i("ElementType",t("domelementtype"))},get Stream(){return i("Stream",t("./Stream.js"))},get WritableStream(){return i("WritableStream",t("./WritableStream.js"))},get ProxyHandler(){return i("ProxyHandler",t("./ProxyHandler.js"))},get DomUtils(){return i("DomUtils",t("domutils"))},get CollectingHandler(){return i("CollectingHandler",t("./CollectingHandler.js"))},get DefaultHandler(){return i("DefaultHandler",this.DomHandler)},get RssHandler(){return i("RssHandler",this.FeedHandler)},createDomStream:function(t,e,i){var r=new n.exports.DomHandler(t,e,i);return new n.exports.Parser(r,e)},EVENTS:{attribute:2,cdatastart:0,cdataend:0,text:1,processinginstruction:2,comment:1,commentend:0,closetag:1,opentag:2,opentagname:1,error:1,end:0}}}});