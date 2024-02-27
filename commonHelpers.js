import{a as y,S as b,i as u}from"./assets/vendor-527658dd.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function l(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=l(e);fetch(e.href,o)}})();async function m(r,t){const e="https://pixabay.com/"+"/api/",o={key:"42127236-8bfdbbfbeed8a2dadaca720e8",q:`${r}`,image_type:"photo",orientation:"horizontal",safesearch:"true",page:t,per_page:15};return(await y.get(e,{params:o})).data}function L(){u.warning({title:"Caution",message:"Please type something to search!",position:"topRight"})}function v(){u.warning({title:"Caution",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}function w(r){u.warning({title:"Caution",message:`Error: ${r}`,position:"topRight"})}function S(){u.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}function B(r){return r.hits.map(({webformatURL:t,largeImageURL:l,tags:a,likes:e,views:o,comments:n,downloads:p})=>`<li class="gallery-item">
  <a class="gallery-link" href="${l}">
    <img
      class="gallery-image"
      src="${t}"
      alt="${a}"
      loading="lazy"
    />
  </a>
  <div class="gallery-descr">
  <p><b>Likes</b> ${e}</p>
  <p><b>Views</b> ${o}</p>
  <p><b>Comments</b> ${n}</p>
  <p><b>Downloads</b> ${p}</p>
 </div>
</li>`).join(`
`)}function f(r){const t=B(r);i.galleryForm.insertAdjacentHTML("beforeend",t)}let d=new b(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});const i={formEl:document.querySelector(".search-form"),galleryForm:document.querySelector(".gallery"),galleryEl:document.querySelector(".gallery-item"),loader:document.querySelector(".loader"),loadBtn:document.querySelector(".more")};i.formEl.addEventListener("submit",E);i.loadBtn.addEventListener("click",P);let s,g,c;async function E(r){if(r.preventDefault(),c=r.target.elements.text.value.trim(),s=1,!c){L();return}i.loader.classList.remove("hidden");try{const t=await m(c,s);t.hits.length===0&&v(),g=Math.ceil(t.totalHits/15),i.galleryForm.innerHTML="",f(t),d.on("show.simplelightbox"),d.refresh()}catch(t){w(t)}i.loader.classList.add("hidden"),h(),r.target.reset()}async function P(){s+=1,i.loader.classList.remove("hidden");const r=await m(c,s);f(r),d.on("show.simplelightbox"),d.refresh(),i.loader.classList.add("hidden"),h();const t=i.galleryForm.firstElementChild.getBoundingClientRect().height;scrollBy({behavior:"smooth",top:t*2})}function N(){i.loadBtn.classList.remove("hidden")}function $(){i.loadBtn.classList.add("hidden")}function h(){s>=g?($(),S()):N()}
//# sourceMappingURL=commonHelpers.js.map
