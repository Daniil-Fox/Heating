import Swiper from 'swiper/bundle';

const partnersSlider = new Swiper('.partners__slider', {
  slidesPerView: 3.9,
  loop: true,
  speed: 2000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  breakpoints: {
    320 : {
      slidesPerView: 1.2,
    },
    768 : {
      slidesPerView: 3.9,
    }
  }
})

window.addEventListener('DOMContentLoaded', () => {

  const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
    let swiper;

    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function(className, settings) {
      swiper = new Swiper(className, settings);

      if (callback) {
        callback(swiper);
      }
    }

    const checker = function() {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper !== undefined) swiper.destroy(true, true);
        return;
      }
    };

    breakpoint.addEventListener('change', checker);
    checker();
  }

  const someFunc = (instance) => {
    if (instance) {
      instance.on('slideChange', function (e) {
        console.log('*** mySwiper.activeIndex', instance.activeIndex);
      });
    }
  };

  resizableSwiper(
    '(max-width: 768px)',
    '.benefits__slider',
    {
      slidesPerView: 1,
      pagination: {
        el: '.benefits-pagination',
        type: "custom",
        renderCustom: function (swiper, current, total) {
            return current.toString().padStart(2,"0") + ' - ' + total.toString().padStart(2,"0");
        }
      },

      // Navigation arrows
      navigation: {
        nextEl: '.benefits-button-next',
        prevEl: '.benefits-button-prev',
      },
    }
  );
  resizableSwiper(
    '(max-width: 768px)',
    '.compos__slider',
    {
      slidesPerView: 1,
      pagination: {
        el: '.compos-pagination',
        type: "custom",
        renderCustom: function (swiper, current, total) {
            return current.toString().padStart(2,"0") + ' - ' + total.toString().padStart(2,"0");
        }
      },
      navigation: {
        nextEl: '.compos-button-next',
        prevEl: '.compos-button-prev',
      },
    }
  );
});



// window.addEventListener('resize', initSlider)
// initSlider()



// const heatingSlider = new Swiper('.heating__slider', {
//   direction: 'vertical',
//   mousewheel: true,
//   speed: 3000
// })
