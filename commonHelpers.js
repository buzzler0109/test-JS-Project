import{a}from"./assets/vendor-0cb09735.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();async function l(){const s="https://books-backend.p.goit.global/books/"+"category-list";return(await a.get(s)).data}function u(t){return t.map(o=>`<li class="categories-item">
  
   ${o.list_name}
  
  </li>`).join(`
`)}function d(t){const o=u(t);c.categories.insertAdjacentHTML("beforeend",o)}const c={categories:document.querySelector(".categories")};async function f(){const t=await l();console.log(t),d(t)}f();c.categories.addEventListener("click",t=>{if(t.target===t.currentTarget)return;t.target.closest("li").classList.add("active")});
//# sourceMappingURL=commonHelpers.js.map
