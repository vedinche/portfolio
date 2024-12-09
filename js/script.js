// Переключение языков
let langRu = document.querySelector('.lang-ru');

langRu.addEventListener('click', function (event) {
  if (this.classList.contains('lang--inactive')) {
    event.preventDefault();
  }
  closeMenu();
});

// Тёмный-светлый режим
let lightmode = localStorage.getItem('lightmode');
const themeSwitch = document.querySelector('.theme-switch');

const enableLightMode = () => {
  document.body.classList.add('lightmode');
  localStorage.setItem('lightmode', 'active');
};

const disabeLightMode = () => {
  document.body.classList.remove('lightmode');
  localStorage.setItem('lightmode', null);
};

if (lightmode === 'active') enableLightMode();

themeSwitch.addEventListener('click', () => {
  lightmode = localStorage.getItem('lightmode');
  lightmode !== 'active' ? enableLightMode() : disabeLightMode();
  closeMenu();
});

// Мобильное меню
let burger = document.querySelector('.burger');
let headerControl = document.querySelector('.header__control');
let nav = document.querySelector('.nav');
let navItems = nav.querySelectorAll('.nav__link');
let overlay = document.querySelector('.overlay');

const toggleMenu = () => {
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
    setTimeout(() => {
      headerControl.classList.add('header__control--visible');
    }, 20); // небольшая задержка, чтобы transition применился
  }
};

const closeMenu = () => {
  document.body.classList.remove('stop-scroll');
  burger.classList.remove('burger--active');
  headerControl.classList.remove('header__control--visible');
  overlay.classList.remove('overlay--visible');
  burger.setAttribute('aria-expanded', 'false');

  setTimeout(() => {
    headerControl.classList.remove('header__control--initial');
  }, 600);
};

burger.addEventListener('click', toggleMenu);
overlay.addEventListener('click', closeMenu);

navItems.forEach((el) => el.addEventListener('click', closeMenu));

window.addEventListener('resize', () => {
  if (window.innerWidth > 767) {
    headerControl.style.transition = 'none';
    closeMenu();
    setTimeout(() => {
      headerControl.style.transition = '';
    }, 0);
  }
});

//Swiper
var swiper = new Swiper('.mySwiper', {
  slidesPerView: 3,
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
    },
    767: {
      slidesPerView: 2.5,
    },
    575: {
      slidesPerView: 1.5,
    },
    320: {
      slidesPerView: 1,
    },
  },
});
