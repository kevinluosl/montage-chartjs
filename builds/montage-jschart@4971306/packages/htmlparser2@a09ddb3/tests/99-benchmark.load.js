montageDefine("a09ddb3","tests/99-benchmark",{dependencies:["./test-helper.js","../lib/Parser.js","ben"],factory:function(t){var e=function(t){return Array(5001).join(t)},n={self_closing:e("<br/>"),tag:e("<tag foo=bar foobar> Text </tag>"),comment:e("<!-- this is <<a> comment -->"),directive:e("<?foo bar?>"),special:e("<script> THIS IS <SPECIAL> </script>"),xml:e("<!directive><tag attr='value'> text <!--Comment<>--></tag>")},i=function(){},r={};t("./test-helper.js").EVENTS.forEach(function(t){r["on"+t]=i});var a=new(t("../lib/Parser.js"))(r),s=t("ben");Object.keys(n).forEach(function(t){console.log("Test",t,"took",s(150,function(){a.parseComplete(n[t])}))})}});