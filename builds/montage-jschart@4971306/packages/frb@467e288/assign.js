function assign(e,t,n,i,r,a){var s;s="string"==typeof t?parse(t):t;var o=compile(s),l=new Scope(e);return l.parameters=i,l.document=r,l.components=a,o(n,l)}var parse=require("./parse"),compile=require("./compile-assigner"),Scope=require("./scope");module.exports=assign;