// Переключение языков
let langRu = document.querySelector('.lang-ru');

langRu.addEventListener('click', function (event) {
  if (this.classList.contains('lang--inactive')) {
    event.preventDefault();
  }
});

// Мобильное меню
let burger = document.querySelector('.burger');
let headerControl = document.querySelector('.header__control');
let nav = document.querySelector('.nav');
let navItems = nav.querySelectorAll('.nav__link');
let header = document.querySelector('.header');
let overlay = document.querySelector('.overlay');

burger.addEventListener('click', () => {
  document.body.classList.toggle('stop-scroll');
  burger.classList.toggle('burger--active');
  overlay.classList.toggle('overlay--visible');

  let expanded = burger.getAttribute('aria-expanded') === 'true' || false;
  burger.setAttribute('aria-expanded', !expanded);

  if (headerControl.classList.contains('header__control--visible')) {
    headerControl.classList.remove('header__control--visible');
    setTimeout(() => {
      headerControl.classList.remove('header__control--initial');
    }, 600);
  } else {
    headerControl.classList.add('header__control--initial');
    headerControl.classList.add('header__control--visible');
  }
});

overlay.addEventListener('click', () => {
  document.body.classList.remove('stop-scroll');
  burger.classList.remove('burger--active');
  headerControl.classList.remove('header__control--visible');
  overlay.classList.remove('overlay--visible');
  burger.setAttribute('aria-expanded', 'false');
});

navItems.forEach((el) => {
  el.addEventListener('click', () => {
    document.body.classList.remove('stop-scroll');
    burger.classList.remove('burger--active');
    headerControl.classList.remove('header__control--visible');
    overlay.classList.remove('overlay--visible');

    burger.setAttribute('aria-expanded', false);
  });
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 767) {
    headerControl.style.transition = 'none';
    headerControl.classList.remove('header__control--visible');
    headerControl.classList.remove('header__control--initial');
    overlay.classList.remove('overlay--visible');
    burger.classList.remove('burger--active');
    document.body.classList.remove('stop-scroll');
    burger.setAttribute('aria-expanded', 'false');
    setTimeout(() => {
      nav.style.transition = '';
    }, 0);
  }
});

// Карточки в слайдер на адаптиве
window.addEventListener('DOMContentLoaded', () => {
  const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
    let swiper;

    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function (className, settings) {
      swiper = new Swiper(className, settings);

      if (callback) {
        callback(swiper);
      }
    };

    const checker = function () {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper !== undefined) swiper.destroy(true, true);
        return;
      }
    };

    breakpoint.addEventListener('change', checker);
    checker();
  };

  const someFunc = (instance) => {
    if (instance) {
      instance.on('slideChange', function (e) {
        console.log('*** mySwiper.activeIndex', instance.activeIndex);
      });
    }
  };

  resizableSwiper('(max-width: 1023px)', '.slider', {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 2,
    freeMode: true,
    breakpoints: {
      900: {
        slidesPerView: 3,
      },
    },
  });
});
