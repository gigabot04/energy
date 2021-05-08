'use strict';
{
  const phoneInput = document.querySelector(`input[name="tel"]`);
  const submitBtnFeedback = document.querySelector(`.feedback__form button`);
  const inputCheckbox = document.querySelector(`.feedback__form input[type="checkbox"]`);
  const labelCheckbox = document.querySelector(`.feedback__form label[for="check"]`);
  const inputName = document.querySelector(`input#name`);
  const masks = (event) => {
    if (!(event.key === `ArrowLeft` || event.key === `ArrowRight` || event.key === `Backspace` || event.key === `Tab`)) {
      event.preventDefault();
    }
    const mask = `+7 (111) 111-11-11`;

    if (/[0-9\+\ \-\(\)]/.test(event.key)) {
      let currentString = phoneInput.value;
      let currentLength = currentString.length;
      if (/[0-9]/.test(event.key)) {
        if (mask[currentLength] === `1`) {
          phoneInput.value = currentString + event.key;
        } else {
          for (let i = currentLength; i < mask.length; i++) {
            if (mask[i] === `1`) {
              phoneInput.value = currentString + event.key;
              break;
            }
            currentString += mask[i];
          }
        }
      }
    }
  };
  const validity = (evt) => {
    if (!inputCheckbox.checked || phoneInput.value.length !== 18 || !inputName.value) {
      if (!inputCheckbox.checked) {
        evt.preventDefault();
        labelCheckbox.classList.add(`feedback__form--error`);
      } else {
        labelCheckbox.classList.remove(`feedback__form--error`);
      }
      if (phoneInput.value.length !== 18) {
        evt.preventDefault();
        phoneInput.classList.add(`feedback__form--error`);
      } else {
        phoneInput.classList.remove(`feedback__form--error`);
      }
      if (!inputName.value) {
        inputName.classList.add(`feedback__form--error`);
      } else {
        inputName.classList.remove(`feedback__form--error`);
      }
    }
  };
  submitBtnFeedback.addEventListener(`click`, validity);
  phoneInput.addEventListener(`keydown`, masks);
}

'use strict';
{
  const btnMenu = document.querySelector(`.header__btn`);
  const navMenu = document.querySelector(`.header__nav`);
  document.querySelector(`.header__nav--no-js`).classList.remove(`header__nav--no-js`);
  const body = document.querySelector(`.body`);

  btnMenu.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    btnMenu.classList.toggle(`header__btn--active`);
    navMenu.classList.toggle(`header__nav--active`);
    body.classList.toggle(`body__js`);
  });
}

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
}
