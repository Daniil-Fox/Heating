import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
const benefitsRow = document.querySelector('.benefits__row')

function onResize() {
  ScrollTrigger.refresh(true);
  ScrollTrigger.update();
}

  let tween = null
  let mm = gsap.matchMedia();
  mm.add("(min-width: 769px)", () => {

    tween = gsap.to(benefitsRow, {
      x: () => -(document.querySelector('.benefits__row').scrollWidth - window.innerWidth),
    })
    ScrollTrigger.create({
      trigger: '.benefits',
      start: 'center center',
      end:  "+=50%",
      animation: tween,
      scrub: 1,
      pin: '.wrapper',
      invalidateOnRefresh: true,
    })
    ScrollTrigger.addEventListener("refreshInit", onResize);
  });

window.addEventListener('resize', () => {
  onResize()
})
