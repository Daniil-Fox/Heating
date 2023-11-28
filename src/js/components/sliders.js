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
const initSlider = () => {
  if(window.matchMedia('(max-width: 768px)').matches){
    const benefitsSlider = new Swiper('.benefits__slider', {
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
    })
  }
}
window.addEventListener('resize', initSlider)
initSlider()



// const heatingSlider = new Swiper('.heating__slider', {
//   direction: 'vertical',
//   mousewheel: true,
//   speed: 3000
// })
