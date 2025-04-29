gsap.registerPlugin(ScrollTrigger);

const sections = document.querySelectorAll(".scroll-section");

sections.forEach((section, index) => {
  const direction = index % 2 === 0 ? -50 : 50;

  gsap.from(section, {
    x: direction,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      toggleActions: "play none none none",
      scrub: true,
      once: false,
    }
  });
});
