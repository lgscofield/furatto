/* Rainbow v1.2 rainbowco.de | included languages: generic, javascript, html, css */window.Rainbow=function(){function e(e){var t,n=e.getAttribute&&e.getAttribute("data-language")||0;if(!n){e=e.attributes;for(t=0;t<e.length;++t)if("data-language"===e[t].nodeName)return e[t].nodeValue}return n}function t(t){var n=e(t)||e(t.parentNode);if(!n){var r=/\blang(?:uage)?-(\w+)/;(t=t.className.match(r)||t.parentNode.className.match(r))&&(n=t[1])}return n}function n(e,t){for(var n in h[v]){n=parseInt(n,10);if(e==n&&t==h[v][n]?0:e<=n&&t>=h[v][n])delete h[v][n],delete c[v][n];if(e>=n&&e<h[v][n]||t>n&&t<h[v][n])return!0}return!1}function r(e,t){return'<span class="'+e.replace(/\./g," ")+(b?" "+b:"")+'">'+t+"</span>"}function i(e,t,u,f){var l=e.exec(u);if(l){++g;!t.name&&"string"==typeof t.matches[0]&&(t.name=t.matches[0],delete t.matches[0]);var p=l[0],d=l.index,m=l[0].length+d,y=function(){function n(){i(e,t,u,f)}g%100>0?n():setTimeout(n,0)};if(n(d,m))y();else{var b=s(t.matches),w=function(e,n,i){if(e>=n.length)i(p);else{var s=l[n[e]];if(s){var u=t.matches[n[e]],f=u.language,c=u.name&&u.matches?u.matches:u,h=function(t,s,o){var u;u=0;var a;for(a=1;a<n[e];++a)l[a]&&(u+=l[a].length);s=o?r(o,s):s;p=p.substr(0,u)+p.substr(u).replace(t,s);w(++e,n,i)};f?a(s,f,function(e){h(s,e)}):typeof u=="string"?h(s,s,u):o(s,c.length?c:[c],function(e){h(s,e,u.matches?u.name:0)})}else w(++e,n,i)}};w(0,b,function(e){t.name&&(e=r(t.name,e));if(!c[v]){c[v]={};h[v]={}}c[v][d]={replace:l[0],"with":e};h[v][d]=m;y()})}}else f()}function s(e){var t=[],n;for(n in e)e.hasOwnProperty(n)&&t.push(n);return t.sort(function(e,t){return t-e})}function o(e,t,n){function r(t,s){s<t.length?i(t[s].pattern,t[s],e,function(){r(t,++s)}):u(e,function(e){delete c[v];delete h[v];--v;n(e)})}++v;r(t,0)}function u(e,t){function n(e,t,r,i){if(r<t.length){++y;var s=t[r],o=c[v][s],e=e.substr(0,s)+e.substr(s).replace(o.replace,o["with"]),s=function(){n(e,t,++r,i)};0<y%250?s():setTimeout(s,0)}else i(e)}var r=s(c[v]);n(e,r,0,t)}function a(e,t,n){var r=p[t]||[],i=p[m]||[],t=d[t]?r:r.concat(i);o(e.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/&(?![\w\#]+;)/g,"&amp;"),t,n)}function f(e,n,r){if(n<e.length){var i=e[n],s=t(i);return-1<(" "+i.className+" ").indexOf(" rainbow ")||!s?f(e,++n,r):(s=s.toLowerCase(),i.className+=i.className?" rainbow":"rainbow",a(i.innerHTML,s,function(t){i.innerHTML=t;c={};h={};w&&w(i,s);setTimeout(function(){f(e,++n,r)},0)}))}r&&r()}function l(e,t){var e=e&&"function"==typeof e.getElementsByTagName?e:document,n=e.getElementsByTagName("pre"),r=e.getElementsByTagName("code"),i,s=[],o=[];for(i=0;i<n.length;++i)n[i].getElementsByTagName("code").length?n[i].innerHTML=n[i].innerHTML.replace(/^\s+/,"").replace(/\s+$/,""):s.push(n[i]);for(i=0;i<r.length;++i)o.push(r[i]);f(o.concat(s),0,t)}var c={},h={},p={},d={},v=0,m=0,g=0,y=0,b,w;return{extend:function(e,t,n){1==arguments.length&&(t=e,e=m);d[e]=n;p[e]=t.concat(p[e]||[])},b:function(e){w=e},a:function(e){b=e},color:function(e,t,n){if("string"==typeof e)return a(e,t,n);if("function"==typeof e)return l(0,e);l(e,t)}}}();document.addEventListener?document.addEventListener("DOMContentLoaded",Rainbow.color,!1):window.attachEvent("onload",Rainbow.color);Rainbow.onHighlight=Rainbow.b;Rainbow.addClass=Rainbow.a;Rainbow.extend([{matches:{1:{name:"keyword.operator",pattern:/\=/g},2:{name:"string",matches:{name:"constant.character.escape",pattern:/\\('|"){1}/g}}},pattern:/(\(|\s|\[|\=|:)(('|")([^\\\1]|\\.)*?(\3))/gm},{name:"comment",pattern:/\/\*[\s\S]*?\*\/|(\/\/|\#)[\s\S]*?$/gm},{name:"constant.numeric",pattern:/\b(\d+(\.\d+)?(e(\+|\-)?\d+)?(f|d)?|0x[\da-f]+)\b/gi},{matches:{1:"keyword"},pattern:/\b(and|array|as|b(ool(ean)?|reak)|c(ase|atch|har|lass|on(st|tinue))|d(ef|elete|o(uble)?)|e(cho|lse(if)?|xit|xtends|xcept)|f(inally|loat|or(each)?|unction)|global|if|import|int(eger)?|long|new|object|or|pr(int|ivate|otected)|public|return|self|st(ring|ruct|atic)|switch|th(en|is|row)|try|(un)?signed|var|void|while)(?=\(|\b)/gi},{name:"constant.language",pattern:/true|false|null/g},{name:"keyword.operator",pattern:/\+|\!|\-|&(gt|lt|amp);|\||\*|\=/g},{matches:{1:"function.call"},pattern:/(\w+?)(?=\()/g},{matches:{1:"storage.function",2:"entity.name.function"},pattern:/(function)\s(.*?)(?=\()/g}]);Rainbow.extend("javascript",[{name:"selector",pattern:/(\s|^)\$(?=\.|\()/g},{name:"support",pattern:/\b(window|document)\b/g},{matches:{1:"support.property"},pattern:/\.(length|node(Name|Value))\b/g},{matches:{1:"support.function"},pattern:/(setTimeout|setInterval)(?=\()/g},{matches:{1:"support.method"},pattern:/\.(getAttribute|push|getElementById|getElementsByClassName|log|setTimeout|setInterval)(?=\()/g},{matches:{1:"support.tag.script",2:[{name:"string",pattern:/('|")(.*?)(\1)/g},{name:"entity.tag.script",pattern:/(\w+)/g}],3:"support.tag.script"},pattern:/(&lt;\/?)(script.*?)(&gt;)/g},{name:"string.regexp",matches:{1:"string.regexp.open",2:{name:"constant.regexp.escape",pattern:/\\(.){1}/g},3:"string.regexp.close",4:"string.regexp.modifier"},pattern:/(\/)(?!\*)(.+)(\/)([igm]{0,3})/g},{matches:{1:"storage",3:"entity.function"},pattern:/(var)?(\s|^)(\S*)(?=\s?=\s?function\()/g},{matches:{1:"keyword",2:"entity.function"},pattern:/(new)\s+(.*)(?=\()/g},{name:"entity.function",pattern:/(\w+)(?=:\s{0,}function)/g}]);Rainbow.extend("html",[{name:"source.php.embedded",matches:{2:{language:"php"}},pattern:/&lt;\?=?(?!xml)(php)?([\s\S]*?)(\?&gt;)/gm},{name:"source.css.embedded",matches:{0:{language:"css"}},pattern:/&lt;style(.*?)&gt;([\s\S]*?)&lt;\/style&gt;/gm},{name:"source.js.embedded",matches:{0:{language:"javascript"}},pattern:/&lt;script(?! src)(.*?)&gt;([\s\S]*?)&lt;\/script&gt;/gm},{name:"comment.html",pattern:/&lt;\!--[\S\s]*?--&gt;/g},{matches:{1:"support.tag.open",2:"support.tag.close"},pattern:/(&lt;)|(\/?\??&gt;)/g},{name:"support.tag",matches:{1:"support.tag",2:"support.tag.special",3:"support.tag-name"},pattern:/(&lt;\??)(\/|\!?)(\w+)/g},{matches:{1:"support.attribute"},pattern:/([a-z-]+)(?=\=)/gi},{matches:{1:"support.operator",2:"string.quote",3:"string.value",4:"string.quote"},pattern:/(=)('|")(.*?)(\2)/g},{matches:{1:"support.operator",2:"support.value"},pattern:/(=)([a-zA-Z\-0-9]*)\b/g},{matches:{1:"support.attribute"},pattern:/\s(\w+)(?=\s|&gt;)(?![\s\S]*&lt;)/g}],!0);Rainbow.extend("css",[{name:"comment",pattern:/\/\*[\s\S]*?\*\//gm},{name:"constant.hex-color",pattern:/#([a-f0-9]{3}|[a-f0-9]{6})(?=;|\s|,|\))/gi},{matches:{1:"constant.numeric",2:"keyword.unit"},pattern:/(\d+)(px|em|cm|s|%)?/g},{name:"string",pattern:/('|")(.*?)\1/g},{name:"support.css-property",matches:{1:"support.vendor-prefix"},pattern:/(-o-|-moz-|-webkit-|-ms-)?[\w-]+(?=\s?:)(?!.*\{)/g},{matches:{1:[{name:"entity.name.sass",pattern:/&amp;/g},{name:"direct-descendant",pattern:/&gt;/g},{name:"entity.name.class",pattern:/\.[\w\-_]+/g},{name:"entity.name.id",pattern:/\#[\w\-_]+/g},{name:"entity.name.pseudo",pattern:/:[\w\-_]+/g},{name:"entity.name.tag",pattern:/\w+/g}]},pattern:/([\w\ ,:\.\#\&\;\-_]+)(?=.*\{)/g},{matches:{2:"support.vendor-prefix",3:"support.css-value"},pattern:/(:|,)\s*(-o-|-moz-|-webkit-|-ms-)?([a-zA-Z-]*)(?=\b)(?!.*\{)/g},{matches:{1:"support.tag.style",2:[{name:"string",pattern:/('|")(.*?)(\1)/g},{name:"entity.tag.style",pattern:/(\w+)/g}],3:"support.tag.style"},pattern:/(&lt;\/?)(style.*?)(&gt;)/g}],!0);