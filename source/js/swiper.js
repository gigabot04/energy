'use strict';
{
  document.querySelector(`.portfolio__wrapper--no-js`).classList.remove(`portfolio__wrapper--no-js`);
  const swiper = new Swiper('.swiper-container', {
    a11y: {
      enabled: true,
    },
    spaceBetween: 30,
    breakpoints: {
      320: {
        slidesPerView: 1.6,
        slidesPerGroup: 1,
      },
      768: {
        navigation: false,
        slidesPerView: 2.5,
        slidesPerGroup: 2,
        freeMode: true,
        loop: false
      },
      1200: {
        navigation: {
          nextEl: `.swiper-button-next`,
          prevEl: `.swiper-button-prev`
        },
        slidesPerView: 4,
        slidesPerGroup: 4,
        freeMode: false,
        loop: true
      }
    }
  });
  swiper();
}
