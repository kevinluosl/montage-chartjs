function generate(){var t,e=CHARS,i=FORMAT;return i[0]=e[15&(t=4294967296*Math.random())],i[1]=e[15&(t>>>=4)],i[2]=e[15&(t>>>=4)],i[3]=e[15&(t>>>=4)],i[4]=e[15&(t>>>=4)],i[5]=e[15&(t>>>=4)],i[6]=e[15&(t>>>=4)],i[7]=e[15&(t>>>=4)],i[9]=e[15&(t=4294967296*Math.random())],i[10]=e[15&(t>>>=4)],i[11]=e[15&(t>>>=4)],i[12]=e[15&(t>>>=4)],i[15]=e[15&(t>>>=4)],i[16]=e[15&(t>>>=4)],i[17]=e[15&(t>>>=4)],i[19]=e[8|3&(t=4294967296*Math.random())],i[20]=e[15&(t>>>=4)],i[21]=e[15&(t>>>=4)],i[22]=e[15&(t>>>=4)],i[24]=e[15&(t>>>=4)],i[25]=e[15&(t>>>=4)],i[26]=e[15&(t>>>=4)],i[27]=e[15&(t>>>=4)],i[28]=e[15&(t=4294967296*Math.random())],i[29]=e[15&(t>>>=4)],i[30]=e[15&(t>>>=4)],i[31]=e[15&(t>>>=4)],i[32]=e[15&(t>>>=4)],i[33]=e[15&(t>>>=4)],i[34]=e[15&(t>>>=4)],i[35]=e[15&(t>>>=4)],i.join("")}var CHARS="0123456789ABCDEF".split(""),FORMAT="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".split(""),Uuid=exports.Uuid=Object.create(Object.prototype,{generate:{enumerable:!1,value:generate}});exports.generate=generate;