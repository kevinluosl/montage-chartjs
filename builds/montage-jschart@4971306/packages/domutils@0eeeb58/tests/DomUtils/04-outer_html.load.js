montageDefine("0eeeb58","tests/DomUtils/04-outer_html",{dependencies:["../.."],factory:function(e,t){var n=e("../..");t.name="Get outer HTML",t.getElements=function(){return'<tag1 id="asdf"> <script>text</script> <!-- comment --> <tag2> text </tag2></tag1>'},t.getByFunction=function(e){return n.getOuterHTML(n.getElementById("asdf",e,!0))},t.expected='<tag1 id="asdf"> <script>text</script> <!-- comment --> <tag2> text </tag2></tag1>'}});