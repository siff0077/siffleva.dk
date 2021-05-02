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
    duration: 1.5,
    opacity: 1,
    y: 0,
  });
  
  gsap.to("#resume", {
    scrollTrigger: "#resume",
    duration: 1.5,
    opacity: 1,
    y: 0,
  }); 

  gsap.to("#skills", {
    scrollTrigger: "#skills",
    duration: 1.5,
    opacity: 1,
    y: 0,
  }); 
}


