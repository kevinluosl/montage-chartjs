montageDefine("0eeeb58","tests/02-dom_utils",{dependencies:["domhandler","htmlparser2"],factory:function(e,t){var n=new(e("domhandler"));new(e("htmlparser2").Parser)(n).parseComplete(Array(21).join("<?xml><tag1 id='asdf'> <script>text</script> <!-- comment --> <tag2> text </tag1>"));var i=n.dom;t.dir="/DomUtils/",t.test=function(e,t){t(null,e.getElements(i)),t(null,e.getByFunction(i))}}});