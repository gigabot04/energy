"use strict";{const a=document.querySelector(".header__btn"),b=document.querySelector(".header__nav"),c=document.querySelector(".body");a.addEventListener("click",e=>{e.preventDefault(),a.classList.toggle("header__btn--active"),b.classList.toggle("header__nav--active"),c.classList.toggle("body__js")})}{const e=new Swiper(".swiper-container",{a11y:{enabled:!0},spaceBetween:30,breakpoints:{320:{slidesPerView:1.6,slidesPerGroup:1},768:{navigation:!1,slidesPerView:2.5,slidesPerGroup:2,freeMode:!0,loop:!1},1200:{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},slidesPerView:4,slidesPerGroup:4,freeMode:!1,loop:!0}}});e()}