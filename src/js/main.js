import './_vendor';
import vars from './_vars';
import './_functions';
import './_components';

import Rellax from 'rellax';

var rellax = new Rellax('.rellax', {
  // center: true
});
if(rellax){
  window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      try {
        rellax.refresh()
      } catch(e){
        console.log(e);
      }
    }, 70)
    const mask = (type, options) => { // создаем универсальную функцию
      const elements = document.querySelectorAll(`[data-type="${type}"]`) // ищем поля ввода по селектору с переданным значением data-атрибута
      if (!elements) return // если таких полей ввода нет, прерываем функцию

      elements.forEach(el => { // для каждого из полей ввода
        IMask(el, options) // инициализируем плагин imask для необходимых полей ввода с переданными параметрами маски
      })
    }
    mask('phone', {
      mask: '+{7}(000)000-00-00'
    })

    mask('date', {
      mask: Date,
      min: new Date(1900, 0, 1),
    })



  })

  window.addEventListener('resize', () => {
    try {
      rellax.refresh()
    } catch(e){
      console.log(e);
    }
  })
}

const video = document.querySelector('.heating-video')
if(video){
  if(window.matchMedia('(max-width: 768px)').matches){
    const videoBtn = document.querySelector('.video-mob__btn')
    let clicked = false
    function f(){
      if (!document.fullscreenElement) {
        video.pause()
        video.volume = 0
        clicked = !clicked
        document.removeEventListener('fullscreenchange', this)
      }
    }
    videoBtn.addEventListener('click', () => {
      clicked = !clicked
        if(clicked){
          video.play()
          video.requestFullscreen()
          video.volume = 0.5
          document.addEventListener('fullscreenchange', f)
        }
    })

  } else {
    video.volume = 0
    const observer = new IntersectionObserver((entries, observer) => {
      if(entries[0].isIntersecting){
        video.play()
      } else {
        video.pause()
      }
    }, {
      threshold: 0.4
    })
    observer.observe(document.querySelector('.heating'))
  }
}




const formButtons = document.querySelectorAll('[data-form-btn]')
formButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault()
    e.stopPropagation()

    modal.style.transform = 'translateY(0)'
  })
})

const modal = document.querySelector('[data-form-modal]')
if(modal){

  modal.addEventListener('click', e => {
    e.stopPropagation()

    modal.style.transform = null
  })
  modal.querySelector('.modal-form').addEventListener('click', e => e.stopPropagation())
}
