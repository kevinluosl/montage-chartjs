var helper=require("./test-helper.js"),Stream=require("..").WritableStream,fs=require("fs");exports.dir="Stream",exports.test=function(t,e){fs.createReadStream(__dirname+t.file).pipe(new Stream(helper.getEventCollector(function(n,i){e(n,i);var r=helper.getEventCollector(e),a=new Stream(r,t.options);a.end(fs.readFileSync(__dirname+t.file))}),t.options))};