"use strict";


window.addEventListener("DOMContentLoaded", init);
gsap.registerPlugin(ScrollTrigger);

function init() {
    fadeInProjects();
}

function fadeInProjects() {
  // Make section fade in from the bottom

  const projects = gsap.utils.toArray('#content_box');
  projects.forEach(project => {
    gsap.to(project, { 
      scrollTrigger: project,
      duration: 1.5,
      opacity: 1,
      y: 0,
    })
  });

}