!function(){function h(b){for(var f,a,e,c,d=[],q=0;q<t.length;q++){var m=t[q];if(m.Tag===b){d=m.CategoryId;break}var g=(f=m.Tag,c=e=a=void 0,a=-1!==(c=f).indexOf("http:")?c.replace("http:",""):c.replace("https:",""),-1!==(e=a.indexOf("?"))?a.replace(a.substring(e),""):a);if(b&&(-1!==b.indexOf(g)||-1!==m.Tag.indexOf(b))){d=m.CategoryId;break}}if(!d.length&&v){var h=function(a){var c=document.createElement("a");c.href=a;a=c.hostname.split(".");return-1!==a.indexOf("www")||2<a.length?a.slice(1).join("."):
c.hostname}(b);w.some(function(a){return a===h})&&(d=["C0004"])}return d}function g(b){return b&&window.OptanonActiveGroups&&b.every(function(b){return-1!==window.OptanonActiveGroups.indexOf(b)})}function k(b){return-1!==(b.getAttribute("class")||"").indexOf("optanon-category")}function l(b){return b.hasAttribute("data-ot-ignore")}function n(b,f){b=b.join("-");var a=f.getAttribute("class")||"";-1===a.indexOf("optanon-category-"+b)&&(b=r(b,a),f.setAttribute("class",b))}function r(b,f){return("optanon-category-"+
b+" "+f).trim()}var t=JSON.parse('[{"Host":"mysticboarding.com","Tag":"https://www.google-analytics.com/analytics.js","CategoryId":["C0002"]}]'),v=JSON.parse("true"),w=[""],p=["embed","iframe","img","script"];(new MutationObserver(function(b){Array.prototype.forEach.call(b,function(b){Array.prototype.forEach.call(b.addedNodes,function(a){var c,b;if(1===a.nodeType&&-1!==p.indexOf(a.tagName.toLowerCase())&&!k(a)&&!l(a))if("script"===a.tagName.toLowerCase()){if((b=h(c=a.src||"")).length){n(b,a);g(b)||
(a.type="text/plain");var d=function(b){"text/plain"===a.getAttribute("type")&&b.preventDefault();a.removeEventListener("beforescriptexecute",d)};a.addEventListener("beforescriptexecute",d)}}else(b=h(c=a.src||"")).length&&(n(b,a),g(b)||(a.removeAttribute("src"),a.setAttribute("data-src",c)))});var a=b.target;if(b.attributeName&&(!k(a)||!l(a)))if("script"===a.nodeName.toLowerCase()){if((d=h(c=a.src||"")).length){n(d,a);g(d)||(a.type="text/plain");var e=function(b){"text/plain"===a.getAttribute("type")&&
b.preventDefault();a.removeEventListener("beforescriptexecute",e)};a.addEventListener("beforescriptexecute",e)}}else if(-1!==p.indexOf(b.target.nodeName.toLowerCase())){var c,d;(d=h(c=a.src||"")).length&&(n(d,a),g(d)||(a.removeAttribute("src"),a.setAttribute("data-src",c)))}})})).observe(document.documentElement,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["src"]});var u=document.createElement;document.createElement=function(){for(var b=[],f=0;f<arguments.length;f++)b[f]=arguments[f];if("script"!==
b[0].toLowerCase()&&-1===p.indexOf(b[0].toLowerCase()))return u.bind(document).apply(void 0,b);var a=u.bind(document).apply(void 0,b),e=a.setAttribute.bind(a);return Object.defineProperties(a,{src:{get:function(){return a.getAttribute("src")||""},set:function(c){var d="";"string"==typeof c?d=c:c instanceof Object&&(d=c.toString());d=h(d);!d.length||"script"!==b[0].toLowerCase()||k(a)||g(d)||l(a)?!d.length||-1===p.indexOf(b[0].toLowerCase())||k(a)||g(d)||l(a)?e("src",c):(a.removeAttribute("src"),e("data-src",
c),c=a.getAttribute("class"),d=d.join("-"),c||(c=r(d,c||""),e("class",c))):(e("type","text/plain"),e("src",c));return!0}},type:{set:function(b){var c=h(a.src||"");b=!c.length||k(a)||g(c)||l(a)?b:"text/plain";return e("type",b),!0}},class:{set:function(b){var c=h(a.src);!c.length||k(a)||g(c)||l(a)?e("class",b):(b=r(c.join("-"),b),e("class",b));return!0}}}),a.setAttribute=function(b,d,f){"type"!==b&&"src"!==b||f?e(b,d):a[b]=d},a}}();