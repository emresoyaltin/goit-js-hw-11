import{a as f,S as g,i as n}from"./assets/vendor-Cip_4kvj.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const h="51394947-9bb14754823a2b1072a733c4f",y="https://pixabay.com/api/";function v(i){return f(y,{params:{key:h,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data).catch(r=>{console.error("Помилка запиту:",r.message)})}const u=document.querySelector(".gallery"),p=document.querySelector(".loader"),b=new g(".gallery a",{captionsData:"alt",captionDelay:250});function L(i){const o=i.map(({webformatURL:r,largeImageURL:s,tags:e,likes:t,views:a,comments:d,downloads:m})=>`
           <li class="gallery-item">
        <a href="${s}">
          <img src="${r}" alt="${e}" loading="lazy" />
        </a>
        <div class="info">
          <div class="info-item">
            <p class="label">Likes</p>
            <p class="value">${t}</p>
          </div>
          <div class="info-item">
            <p class="label">Views</p>
            <p class="value">${a}</p>
          </div>
          <div class="info-item">
            <p class="label">Comments</p>
            <p class="value">${d}</p>
          </div>
          <div class="info-item">
            <p class="label">Downloads</p>
            <p class="value">${m}</p>
          </div>
        </div>
      </li>
    `).join("");u.insertAdjacentHTML("beforeend",o),b.refresh()}function w(){u.innerHTML=""}function S(){p.classList.remove("hidden")}function c(){p.classList.add("hidden")}const l=document.querySelector(".form");l.addEventListener("submit",i=>{i.preventDefault();const r=l.elements["search-text"].value.trim();if(r===""){n.warning({message:"Please enter a search query!",position:"topRight"});return}w(),S(),v(r).then(s=>{if(c(),!s.hits.length){n.warning({message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight"});return}L(s.hits),l.reset()}).catch(s=>{c(),n.error({message:`Something went wrong: ${s.message}`,position:"topRight"})})});
//# sourceMappingURL=index.js.map
