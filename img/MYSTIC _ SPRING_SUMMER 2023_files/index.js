/** Shopify CDN: Minification failed

Line 16:1250 Transforming const to the configured target environment ("es5") is not supported yet
Line 16:2324 Transforming default arguments to the configured target environment ("es5") is not supported yet
Line 16:3860 Transforming const to the configured target environment ("es5") is not supported yet
Line 16:3986 Transforming const to the configured target environment ("es5") is not supported yet
Line 16:4136 Transforming destructuring to the configured target environment ("es5") is not supported yet
Line 16:4448 Transforming const to the configured target environment ("es5") is not supported yet
Line 16:4737 Transforming let to the configured target environment ("es5") is not supported yet
Line 16:4746 Transforming const to the configured target environment ("es5") is not supported yet
Line 16:5085 Transforming const to the configured target environment ("es5") is not supported yet
Line 16:5142 Transforming const to the configured target environment ("es5") is not supported yet
... and 33 more hidden warnings

**/
(()=>{var e={18067:()=>{"development"===window.Shopify.theme.role&&(new EventSource("/hot-reload").onmessage=()=>{setTimeout((()=>{window.app.mount()}),600)})}},t={};function n(i){var o=t[i];if(void 0!==o)return o.exports;var s=t[i]={exports:{}};return e[i](s,s.exports,n),s.exports}(()=>{"use strict";n(18067);var e=function(e){if("object"!=typeof(t=e)||Array.isArray(t))throw"state should be an object";var t},t=function(e,t,n,i){return(o=e,o.reduce((function(e,t,n){return e.indexOf(t)>-1?e:e.concat(t)}),[])).reduce((function(e,n){return e.concat(t[n]||[])}),[]).map((function(e){return e(n,i)}));var o};function i(n){void 0===n&&(n={});var i={};return{getState:function(){return Object.assign({},n)},hydrate:function(o){return e(o),Object.assign(n,o),function(){var e=["*"].concat(Object.keys(o));t(e,i,n)}},on:function(e,t){return(e=[].concat(e)).map((function(e){return i[e]=(i[e]||[]).concat(t)})),function(){return e.map((function(e){return i[e].splice(i[e].indexOf(t),1)}))}},emit:function(o,s,r){var a=("*"===o?[]:["*"]).concat(o);(s="function"==typeof s?s(n):s)&&(e(s),Object.assign(n,s),a=a.concat(Object.keys(s))),t(a,i,n,r)}}}i();var o=function(e){return"object"==typeof e&&!Array.isArray(e)},s=function(e){return"function"==typeof e};const r=function(e,t,n){void 0===e&&(e={}),void 0===t&&(t={}),void 0===n&&(n=[]);var r=i(t),a=[];return{on:r.on,emit:r.emit,getState:function(){return r.getState()},add:function(t){if(!o(t))throw"components should be an object";Object.assign(e,t)},use:function(e){if(!s(e))throw"plugins should be a function";n.push(e)},hydrate:function(e){return r.hydrate(e)},mount:function(t){void 0===t&&(t="data-component"),t=[].concat(t);for(var i=0;i<t.length;i++){for(var c=t[i],d=[].slice.call(document.querySelectorAll("["+c+"]")),l=function(){for(var t=d.pop(),i=t.getAttribute(c).split(/\s/),l=0;l<i.length;l++){var u=e[i[l]];if(u){t.removeAttribute(c);try{var w=n.reduce((function(e,n){var i=n(t,r);return o(i)?Object.assign(e,i):e}),{}),p=u(t,Object.assign({},w,r));s(p.unmount)&&a.push(p)}catch(e){console.error(e),r.emit("error",{error:e}),r.hydrate({error:void 0})}}}};d.length;)l();r.emit("mount")}},unmount:function(){for(var e=a.length-1;e>-1;e--){var t=a[e],n=t.subs;(0,t.unmount)(t.node),n.map((function(e){return e()})),a.splice(e,1)}r.emit("unmount")}}}({},{}),a=(e,t="asset")=>{if(window?.Phill?.theme?.links)return window.Phill.theme.links[t].replace("XXX.XXX",e)},c=[{name:"Google Optimize",src:`https://www.googleoptimize.com/optimize.js?id=${window?.Phill?.scripts?.google_optimize}`,include:window?.Phill?.scripts?.google_optimize,important:!0},{name:"Swiper",src:a("swiper.min.js"),include:document.querySelector(".swiper-wrapper"),important:!0},{name:"Keen slider",src:a("keen-slider.min.js"),include:document.querySelector(".keen-slider")},{name:"Octane quiz",src:`https://app.octaneai.com/${window?.Phill?.scripts?.octane}/quiz.js`,include:document.querySelector(".octane-ai-quiz")&&window?.Phill?.scripts?.octane},{name:"Zigpoll",src:`https://cdn.zigpoll.com/zigpoll-shopify-embed.js?accountId=${window?.Zigpoll?.accountId}&shop=${window.Shopify.shop}`,include:window?.Zigpoll?.accountId},{name:"OneTrust OtAutoBlock",src:`https://cdn.cookielaw.org/consent/${window?.Phill?.scripts?.onetrust}/OtAutoBlock.js`,include:window?.Phill?.scripts?.onetrust},{name:"OneTrust otSDKStub",src:"https://cdn.cookielaw.org/scripttemplates/otSDKStub.js",include:window?.Phill?.scripts?.onetrust,attributes:{"data-domain-script":window?.Phill?.scripts?.onetrust}},{name:"EasySize",src:"https://webapp.easysize.me/web_app_v1.0/js/easysize.js",include:window?.Phill?.scripts?.easy_size,callback:window.initEasySize}],d=[{name:"Swiper",src:a("swiper.css"),include:document.querySelector(".swiper-wrapper")},{name:"Keen slider",src:a("keen-slider.css"),include:document.querySelector(".keen-slider")}],l=(e,t)=>{const n=document.getElementsByTagName("script")[0];e.forEach((e=>{if(window?.hasLoaded?.scripts[e?.name]||!e.include)return"";const t=document.createElement("script");return t.type="text/javascript",t.async=!0,t.src=e?.src,e.attributes&&Object.entries(e.attributes).forEach((([e,n])=>t.setAttribute(e,n))),t.addEventListener("load",(t=>{window.vendors&&window.vendors(e.name),e.callback&&e.callback(t),window?.hasLoaded?.scripts&&e?.name&&(window.hasLoaded.scripts[e.name]=!0)})),n.parentNode.insertBefore(t,n)})),t.forEach((e=>{if(window?.hasLoaded?.styles[e?.name]||!e.include)return"";const t=document.createElement("link");return t.rel="stylesheet",t.href=e?.src,n.parentNode.insertBefore(t,n),n.addEventListener("load",(t=>{e.callback&&e.callback(t),window?.hasLoaded?.styles&&e?.name&&(window.hasLoaded.styles[e.name]=!0)})),e}))};window.hasLoaded={styles:{},scripts:{}};let u=!1;const w=()=>{u||(u=!0,window.dispatchEvent(new Event("userinteracted")))};["click","scroll","mousemove","touchstart"].forEach((e=>{window.addEventListener(e,w,{once:!0})})),window.attachEvent?window.attachEvent("onload",(()=>l(c,d))):window.addEventListener("load",(()=>l(c,d)),!1),l(c.filter((e=>e.important)),d.filter((e=>e.important)));const p=[120,390,512,768,1280,1440,1920,2140,2560],m=e=>{const t=e,{maxWidth:n,srcset:i,srcsetFactor:o}=t.dataset,{media:s}=t;return t.setAttribute("sizes",100/devicePixelRatio+"vw"),t.srcset=p.filter((e=>(e<=n||n<1280&&1280===e)&&((e,t)=>t.includes("min")?e>=1024:e<=1024)(e,s))).map((e=>`${i.replace("{width}",Math.round(e*o))} ${e}w`)).join(","),t},h=new IntersectionObserver((e=>{e.forEach((e=>{if(e.isIntersecting){const t=e.target,{src:n,lazyVideo:i}=t.dataset,o=i?t.querySelectorAll("source"):t.parentNode.querySelectorAll("source");t.classList.add("is-visible"),n&&(t.src=n),i?(o.forEach((e=>{e.src=e.dataset.lazyVideoSrc})),t.load()):(t.setAttribute("fetchpriority","high"),o.forEach((e=>{const{srcset:t=m()}=e.dataset;e.srcset=t}))),h.unobserve(e.target)}}))}),{rootMargin:"0px",threshold:0}),f=(e="data-src",t="data-lazy-video")=>{const n=[...document.querySelectorAll(`[${e}]:not([data-observed])`)],i=[...document.querySelectorAll(`video[${t}]:not([data-observed])`)];n.concat(i).map((e=>{const t=e,{lazyVideo:n}=t.dataset;return t.addEventListener(n?"canplay":"load",(()=>{t.classList.add("is-loaded")})),t.dataset.lazyVideo||t.setAttribute("sizes",100/devicePixelRatio+"vw"),t.setAttribute("data-observed",!0),h.observe(t)}))},v=()=>{if(!window.ShopifyAnalytics||!window.exponea)return;const e=window.Phill?.customer.shopify_id||window.ShopifyAnalytics?.lib?.user().traits().uniqToken||"",t=document.querySelectorAll("[data-section-name]"),n=new IntersectionObserver((t=>{t.filter((e=>e.isIntersecting)).forEach((t=>{const{target:i}=t,o=i.closest(".shopify-section"),{sectionName:s}=i.dataset;window.exponea.track("view_section",{user_id:e,timestamp:Date.now(),page_url:window.location.href,section_name:s,section_id:o.id}),n.unobserve(t.target)}))}));Array.from(t).forEach((e=>{n.observe(e)}));const i=t=>{const{target:n,type:i}=t,o=n.closest("[data-interaction]"),s=n.closest("[data-section-name]"),r=n.closest(".shopify-section"),a=n.closest("a[href][id]"),{sectionName:c}=s?.dataset||{sectionName:""};if("swipe"===i)window.exponea.track("interaction",{user_id:e,timestamp:Date.now(),page_url:window.location.href,section_name:c,section_id:r.id,interaction:`${c}: Swipe`});else if(o){const{interaction:t}=o.dataset;window.exponea.track("interaction",{user_id:e,timestamp:Date.now(),page_url:window.location.href,section_name:c,section_id:r.id,interaction:t})}else a&&window.exponea.trackLink(`#${a.id}`,"link",{user_id:e,timestamp:Date.now(),page_url:window.location.href,section_name:c,section_id:r.id,link_url:a.href})};window.addEventListener("click",i),window.addEventListener("swipe",i)};window.app=r,window.component=function(e){return function(t,n){var i=[];return{subs:i,unmount:e(t,Object.assign({},n,{on:function(e,t){var o=n.on(e,t);return i.push(o),o}})),node:t}}},window.vendors=e=>r.emit(`${e}:loaded`),f(),window.Phill?.customer.shopify_id||"function"==typeof window.ShopifyAnalytics.lib.user?v():window.addEventListener("load",(()=>{v()})),function(){const e=e=>{const{target:t,type:n}=e,i=t.closest("[data-interaction]"),{interaction:o}=i?.dataset||{interaction:""},s=t.closest("[data-section-name]"),r=t.closest(".shopify-section"),{sectionName:a}=s?.dataset||{sectionName:""},c=window.Phill?.customer.shopify_id||window.ShopifyAnalytics?.lib?.user().traits().uniqToken||"";window&&window?.dataLayer&&window.dataLayer.push({event:"click",event_name:"interaction_click",event_category:"clicks",event_action:"interaction click",event_label:"swipe"===n?`${a}: Swipe`:o,context:[{section_id:r.id,section_name:a,User_id:c}]})};window.addEventListener("click",e),window.addEventListener("swipe",e);const t=new IntersectionObserver((e=>{const{isIntersecting:t,target:n}=e[0];if(!t)return;const i=n.closest("[data-section-name]"),o=n.closest(".shopify-section"),{sectionName:s}=i?.dataset||{sectionName:""},r=window.Phill?.customer.shopify_id||window.ShopifyAnalytics?.lib?.user().traits().uniqToken||"";window&&window?.dataLayer&&window.dataLayer.push({event:"element_impression",event_name:"element_impression",event_category:"impressions",event_action:"element_impression",event_label:`${s}: viewed`,context:[{section_id:o.id,section_name:s,User_id:r}]})}),{threshold:.9});document.querySelectorAll("[data-section-name]").forEach((e=>t.observe(e)))}(),r.on("mount",(()=>f())),r.on("mount",(()=>console.log("js is mounted")))})()})();