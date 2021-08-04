window.sr = ScrollReveal();

sr.reveal('.nav-items', {
  duration: 2000,
  origin: 'top',
  distance: '300px',
  delay: 500,
});

sr.reveal('.about-us', {
  duration: 1500,
  origin: 'bottom',
  distance: '200px',
});

sr.reveal('.slide-up', {
  duration: 1500,
  origin: 'bottom',
  distance: '200px',
  delay: 1800,
});

sr.reveal('.current-project-img', {
  duration: 2300,
  origin: 'top',
  distance: '300px',
  viewFactor: 0.2,
  easing: 'cubic-bezier(0.1, 0, 0, 1)'
});

sr.reveal('.current-project-text', {
  duration: 2300,
  origin: 'top',
  distance: '300px',
  viewFactor: 0.2,
  easing: 'cubic-bezier(0.1, 0, 0, 1)'
});