import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);


function onResize() {
  ScrollTrigger.refresh(true);
  ScrollTrigger.update();
}

const heatingVideo = document.querySelector('.heating__video')
if(heatingVideo){
  let mm = gsap.matchMedia()
  mm.add('(min-width: 769px)', () => {
    const timeline =  gsap.timeline()
    timeline.to(heatingVideo, {clipPath: 'circle(100% at 25% 50%)'}).set(heatingVideo, {clipPath: 'inset(0%)'}).to(heatingVideo, {clipPath: 'inset(5% 5% 5% 5%)'})
    ScrollTrigger.create({
      trigger: '.heating',
      animation: timeline,
      scrub: 0.5,
      start: 'top top',
      end: "+=250%",
      invalidateOnRefresh: true,
      pin: true
    })
    const timeline2 = gsap.timeline()
    var slides = gsap.utils.toArray(".video-block__slide");

    slides.forEach(el => {
      timeline2.to(el , {opacity: 1, scrollTrigger: {
        trigger: el,
        start: 'top bottom-=5%',
        end: "top center",
        scrub: 0.5,
        invalidateOnRefresh: true,
      } })
    })
    const timeline3 = gsap.timeline()

    timeline3.to('.video-block', {yPercent: () => -100})

    ScrollTrigger.create({
      trigger: '.heating',
      animation: timeline3,
      start: 'top top',
      end: '+=450%',
      scrub: 0.5,
      invalidateOnRefresh: true,
    })

    const timeline4 = gsap.timeline()

    timeline4.to('.heating__header', {yPercent: () => -200})

    ScrollTrigger.create({
      trigger: '.heating',
      animation: timeline4,
      start: 'top top',
      end: '+=30%',
      scrub: 0.5,
      invalidateOnRefresh: true,
    })

    ScrollTrigger.addEventListener("refreshInit", onResize);

    window.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => {
        ScrollTrigger.refresh(true)
      }, 70)
    })
    window.addEventListener('resize', () => {
      setTimeout(() => {
        ScrollTrigger.refresh(true)
      }, 70)
    })
  })
  mm.add('(max-width: 768px)', () => {
    const len = document.querySelector('.video-block').scrollWidth
    const lenOne = document.querySelector('.video-block__slide').scrollWidth
    const tl = gsap.timeline()

    tl.to('.video-block', {x: () => -(len - lenOne)})

    ScrollTrigger.create({
      trigger: '.heating__video',
      animation: tl,
      start: 'center center',
      end: "+=" + len,
      scrub: 0.5,
      pin: true
    })
  })
}


