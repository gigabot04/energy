'use strict';
{
  const btnMenu = document.querySelector(`.header__btn`);
  const navMenu = document.querySelector(`.header__nav`);
  const body = document.querySelector(`.body`);

  btnMenu.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    btnMenu.classList.toggle(`header__btn--active`);
    navMenu.classList.toggle(`header__nav--active`);
    body.classList.toggle(`body__js`);
  });
}