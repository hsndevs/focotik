(()=>{"use strict";var e,t={579:()=>{const e=window.wp.blocks,t=window.wp.i18n,a=window.wp.blockEditor,s=window.wp.element,n=window.wp.components,i=window.ReactJSXRuntime,o=JSON.parse('{"UU":"focotik/testimonial-item"}');(0,e.registerBlockType)(o.UU,{edit:function({attributes:e,setAttributes:o}){const{tabId:r,emails:l,imageUrl:c,videoUrl:d,message:m,tags:u,author:h,designation:v}=e,g=(0,a.useBlockProps)({className:"focotik-testimonial-item"});(0,s.useEffect)((()=>{g.id&&o({tabId:g.id})}),[]);const[p,x]=(0,s.useState)(""),f=(0,s.useRef)(null);return(0,s.useLayoutEffect)((()=>{const e=f.current;let t=null;const a=e=>{t=e.target,e.target.style.opacity="0.5"},s=e=>{e.preventDefault();const a=e.target.closest("li");if(a&&a!==t){const s=a.getBoundingClientRect();e.clientY-s.top>s.height/2?a.parentNode.insertBefore(t,a.nextSibling):a.parentNode.insertBefore(t,a)}},n=a=>{a.preventDefault();const s=Array.from(e.children).map((e=>e.querySelector("span").textContent));o({emails:s}),t.style.opacity="1",t=null},i=e=>{e.target.style.opacity="1",t=null};return e.addEventListener("dragstart",a),e.addEventListener("dragover",s),e.addEventListener("drop",n),e.addEventListener("dragend",i),()=>{e.removeEventListener("dragstart",a),e.removeEventListener("dragover",s),e.removeEventListener("drop",n),e.removeEventListener("dragend",i)}}),[]),(0,i.jsxs)("div",{...g,children:[(0,i.jsx)(a.MediaUpload,{onSelect:e=>o({imageUrl:e.url}),allowedTypes:["image"],render:({open:e})=>(0,i.jsx)("button",{className:"logo-changer",onClick:e,children:c?(0,i.jsx)(i.Fragment,{children:(0,t.__)("Change Image","focotik")}):(0,t.__)("Upload Image","focotik")})}),(0,i.jsxs)("div",{className:"video-markup",children:[(0,i.jsx)(n.TextControl,{label:"Video URL",value:d,onChange:e=>o({videoUrl:e}),placeholder:"Enter video URL..."}),(0,i.jsxs)("div",{className:"video-wrap",children:[(0,i.jsxs)("div",{className:"video-container",children:[(0,i.jsx)("div",{className:"loading",children:(0,i.jsx)("span",{className:"foco_loader"})}),(0,i.jsx)("iframe",{class:"vimeo-player",src:d,frameborder:"0",allow:"autoplay; fullscreen",allowfullscreen:!0})]}),(0,i.jsx)("button",{class:"pause-button",children:"Pause Video"})]})]}),(0,i.jsxs)("div",{className:"testimonial-content",children:[(0,i.jsx)(a.RichText,{tagName:"p",value:m,className:"testimonial-content__author-message",onChange:e=>o({message:e}),placeholder:(0,t.__)("Enter client's comment here.","focotik")}),(0,i.jsx)("div",{className:"testimonial-content__author-tags",children:(0,i.jsxs)("ul",{ref:f,children:[l.map(((e,t)=>(0,i.jsxs)("li",{draggable:"true",className:"tag-item",children:[(0,i.jsx)("span",{children:e}),(0,i.jsx)(n.Button,{variant:"secondary",onClick:()=>{return t=e,void o({emails:l.filter((e=>e!==t))});var t},children:"×"})]},t))),(0,i.jsx)("li",{children:(0,i.jsx)(n.TextControl,{value:p,onKeyDown:e=>{"Enter"===e.key&&(p.trim()&&!l.includes(p.trim())&&(o({emails:[...l,p.trim()]}),x("")),e.preventDefault())},onChange:e=>x(e),placeholder:"Add tag and ↵ "})})]})}),(0,i.jsxs)("div",{className:"testimonial-content__author",children:[(0,i.jsx)(a.RichText,{tagName:"p",value:h,className:"testimonial-content__author-name",onChange:e=>o({author:e}),placeholder:(0,t.__)("Enter author name...","focotik")}),(0,i.jsx)(a.RichText,{tagName:"p",value:v,className:"testimonial-content__author-designation",onChange:e=>o({designation:e}),placeholder:(0,t.__)("Enter author designation...","focotik")})]})]})]})},save:function({attributes:e}){const{tabId:t,imageUrl:s,videoUrl:n,emails:o,message:r,tags:l,author:c,designation:d}=e,m=a.useBlockProps.save();return(0,i.jsxs)("div",{...m,className:"focotik-testimonial-item",id:`${t}`,children:[s&&(0,i.jsx)("img",{src:s,alt:"Testimonial Image",className:"testimonial-image"}),n&&(0,i.jsxs)("div",{className:"video-markup",children:[(0,i.jsxs)("div",{className:"video-container",children:[(0,i.jsx)("div",{className:"loading",children:(0,i.jsx)("span",{className:"foco_loader"})}),(0,i.jsx)("iframe",{class:"vimeo-player",src:n,frameborder:"0",allow:"autoplay; fullscreen",allowfullscreen:!0})]}),(0,i.jsx)("button",{class:"pause-button",children:"Pause Video"})]}),(0,i.jsxs)("div",{className:"testimonial-content",children:[r&&(0,i.jsx)(a.RichText.Content,{tagName:"p",className:"testimonial-content__author-message",value:r}),o&&(0,i.jsx)("div",{className:"testimonial-content__author-tags",children:(0,i.jsx)("ul",{children:o.map(((e,t)=>(0,i.jsx)("li",{className:"tag-item",children:(0,i.jsx)("span",{children:e})},t)))})}),(0,i.jsxs)("div",{className:"testimonial-content__author",children:[c&&(0,i.jsx)(a.RichText.Content,{tagName:"p",className:"testimonial-content__author-name",value:c}),d&&(0,i.jsx)(a.RichText.Content,{tagName:"p",className:"testimonial-content__author-designation",value:d})]})]})]})}})}},a={};function s(e){var n=a[e];if(void 0!==n)return n.exports;var i=a[e]={exports:{}};return t[e](i,i.exports,s),i.exports}s.m=t,e=[],s.O=(t,a,n,i)=>{if(!a){var o=1/0;for(d=0;d<e.length;d++){for(var[a,n,i]=e[d],r=!0,l=0;l<a.length;l++)(!1&i||o>=i)&&Object.keys(s.O).every((e=>s.O[e](a[l])))?a.splice(l--,1):(r=!1,i<o&&(o=i));if(r){e.splice(d--,1);var c=n();void 0!==c&&(t=c)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[a,n,i]},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={178:0,702:0};s.O.j=t=>0===e[t];var t=(t,a)=>{var n,i,[o,r,l]=a,c=0;if(o.some((t=>0!==e[t]))){for(n in r)s.o(r,n)&&(s.m[n]=r[n]);if(l)var d=l(s)}for(t&&t(a);c<o.length;c++)i=o[c],s.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return s.O(d)},a=globalThis.webpackChunkfocotik=globalThis.webpackChunkfocotik||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var n=s.O(void 0,[702],(()=>s(579)));n=s.O(n)})();