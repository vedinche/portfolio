// Переключение языков
let langRu = document.querySelector('.lang-ru');

langRu.addEventListener('click', function (event) {
  if (this.classList.contains('lang--inactive')) {
    event.preventDefault();
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
