!function(){"use strict";var t={filterInterestingIndices(t,e){Array.isArray(t)||(t=Array.from(t)),Array.isArray(e)||(e=Array.from(e));let i=0;return e.map((e=>{const r=t.indexOf(e,i),l=-1!==r?r:t.slice(0,i).indexOf(e,0);return i=-1!==l?l:0,l}))},filterIndices(t,e){return t.reduce(((t,i,r,l)=>(e(i,r,l)&&t.push(r),t)),[])},controlIndex(t){return[function(){return t},function(e){return t=e}]}};let e=document.querySelector(".container"),i=e.querySelectorAll(".list__item"),r=e.querySelectorAll(".list__item:first-child"),l=document.querySelectorAll(".section-control-btn"),c=document.querySelector(".btn-previous"),s=document.querySelector(".btn-next");const n=t.filterInterestingIndices,[a,d]=t.controlIndex(0),[o,u]=t.controlIndex(0);let m=n(i,r);[...l].forEach(((t,e,r)=>{t.addEventListener("click",(()=>{let t=o(),l=m[e];if(t===l)return;let c=a();_(r[c],r[e]),v(i[t],i[l]),d(e),u(l)}))})),c.addEventListener("click",(()=>{let t=o();if(0===t)return;let e=t-1,r=i[t],l=i[e];v(r,l),u(e),l.matches(".list__item:last-child")&&h(".list__item:last-child")})),s.addEventListener("click",(()=>{let t=o();if(t===i.length-1)return;let e=t+1,r=i[t],l=i[e];v(r,l),u(e),l.matches(".list__item:first-child")&&h(".list__item:first-child")}));let f=null;function h(t){let e=a(),i=".list__item:first-child"===t?e+1:e-1;_(l[e],l[i]),d(i)}function _(t,e){t.classList.remove("active--btn"),e.classList.add("active--btn")}function v(t,e){t.classList.remove("active--card"),e.scrollIntoView({block:"nearest",inline:"center",behavior:"smooth"}),e.classList.add("active--card")}e.addEventListener("touchstart",(t=>{f=t.touches[0].clientX})),e.addEventListener("touchmove",(t=>{if(f){if(f-t.touches[0].clientX<0){let t=o();if(0===t)return;let e=t-1,r=i[t],l=i[e];r.classList.remove("active--card"),l.classList.add("active--card"),u(e),l.matches(".list__item:last-child")&&h(".list__item:last-child")}else{let t=o();if(t===i.length-1)return;let e=t+1,r=i[t],l=i[e];r.classList.remove("active--card"),l.classList.add("active--card"),u(e),l.matches(".list__item:first-child")&&h(".list__item:first-child")}f=null}}))}();