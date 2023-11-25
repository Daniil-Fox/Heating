import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
const benefitsRow = document.querySelector('.benefits__row')
if(window.matchMedia('(min-width: 769px)').matches){
  const tween = gsap.to(benefitsRow, {
    x: () => -(document.querySelector('.benefits__row').scrollWidth - window.innerWidth),
    // duration: 3,
  })

  ScrollTrigger.create({
    trigger: '.benefits',
    start: 'center center',
    end: "+=200% bottom",
    pin: true,
    animation: tween,
    scrub: 2,
    invalidateOnRefresh: true
  })

  function onResize() {
    ScrollTrigger.refresh(true);
    ScrollTrigger.update();
  }
  ScrollTrigger.addEventListener("refreshInit", onResize);
  window.addEventListener('resize', onResize)
}
