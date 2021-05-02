"use strict";


window.addEventListener("DOMContentLoaded", init);
gsap.registerPlugin(ScrollTrigger);

function init() {
    fadeInProjects();
}

function fadeInProjects() {
  // Make section fade in from the bottom

  const photo = gsap.utils.toArray('.photo');
  photo.forEach(img => {
    gsap.to(img, { 
      scrollTrigger: img,
      duration: 1.5,
      opacity: 1,
      y: 0,
    })
  });

}