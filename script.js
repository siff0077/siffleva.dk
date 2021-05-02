"use strict";


window.addEventListener("DOMContentLoaded", init);
gsap.registerPlugin(ScrollTrigger);

function init() {
  fadeIn();
}

function fadeIn() {
  // Make section fade in from the bottom
  gsap.to("#about", {
    scrollTrigger: "#about",
    duration: 1,
    opacity: 1,
    y: 0,
    onLeave: () => gsap.to("#about", {
      y: -50,
      opacity: 0,
      stagger: 0.2,
    }),
    onEnterBack: () => gsap.to("#about", {
      y: 0,
      opacity: 1,
      stagger: -0.2,
    }),
    onLeaveBack: () => gsap.to("#about", {
      y: 50,
      opacity: 0,
      stagger: -0.2,
    }),
  });
  
  gsap.to("#resume", {
    scrollTrigger: "#resume",
    duration: 1,
    opacity: 1,
    y: 0,
    onLeave: () => gsap.to("#resume", {
      y: -50,
      opacity: 0,
      stagger: 0.2,
    }),
    onEnterBack: () => gsap.to("#resume", {
      y: 0,
      opacity: 1,
      stagger: -0.2,
    }),
    onLeaveBack: () => gsap.to("#resume", {
      y: 50,
      opacity: 0,
      stagger: -0.2,
    }),
  }); 

  gsap.to("#skills", {
    scrollTrigger: "#skills",
    duration: 1,
    opacity: 1,
    y: 0,
    onLeave: () => gsap.to("#skills", {
      y: -50,
      opacity: 0,
      stagger: 0.2,
    }),
    onEnterBack: () => gsap.to("#skills", {
      y: 0,
      opacity: 1,
      stagger: -0.2,
    }),
    onLeaveBack: () => gsap.to("#skills", {
      y: 50,
      opacity: 0,
      stagger: -0.2,
    }),
  }); 
}


