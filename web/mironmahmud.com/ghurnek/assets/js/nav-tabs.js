"use strict";function navTabs(){const e=document.querySelector(".create-nav-list"),c=document.querySelector(".create-ads-form");for(let t=0;t<e.childElementCount;t++){const s=e.children[t],a=c.children[t];s.addEventListener("click",(function(){Array.from(e.children).map((e=>e.classList.remove("active"))),Array.from(c.children).map((e=>e.classList.remove("active"))),s.classList.add("active"),a.classList.add("active");for(let c=0;c<e.childElementCount;c++)c<t?e.children[c].classList.add("complete"):e.children[c].classList.remove("complete")}))}}navTabs();