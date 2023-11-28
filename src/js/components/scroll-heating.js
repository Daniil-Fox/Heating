import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);


function onResize() {
  ScrollTrigger.refresh(true);
  ScrollTrigger.update();
}

const heatingVideo = document.querySelector('.heating__video')
const timeline =  gsap.timeline()
timeline.to(heatingVideo, {clipPath: 'circle(100% at 50% 50%)'}).set(heatingVideo, {clipPath: 'inset(0%)'}).to(heatingVideo, {clipPath: 'inset(5% 5% 5% 5%)'})



ScrollTrigger.create({
  trigger: '.heating',
  animation: timeline,
  scrub: 0.5,
  start: 'top top',
  end: "+=200%",
  pin: true
})


const timeline2 = gsap.timeline()
var slides = gsap.utils.toArray(".video-block__slide");


slides.forEach(el => {
  gsap.to(el ,{opacity: 1, scrollTrigger: {
    trigger: el,
    // animation: timeline2,
    start: 'top bottom-=25%',
    end: '+=60vh',
    scrub: 0.5,
    markers: true
  } })
})
// timeline2.to(containers.querySelectorAll('.video-block__slide'), {opacity: 1})

// ScrollTrigger.create({

// })

const timeline3 = gsap.timeline()

timeline3.to('.video-block', {yPercent: -100})

ScrollTrigger.create({
  trigger: '.heating',
  animation: timeline3,
  start: 'top top',
  end: '+=200%',
  scrub: 0.5,


})
