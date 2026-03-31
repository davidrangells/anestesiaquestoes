const revealElements = document.querySelectorAll(".reveal");
const counters = document.querySelectorAll("[data-counter]");

const onIntersection = (entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("reveal-visible");
    observer.unobserve(entry.target);
  });
};

const revealObserver = new IntersectionObserver(onIntersection, {
  threshold: 0.2,
});

revealElements.forEach((element) => revealObserver.observe(element));

const animateCounter = (element, target) => {
  const duration = 1600;
  const start = performance.now();
  const prefix = element.getAttribute("data-prefix") || "";
  const suffix = element.getAttribute("data-suffix") || "";
  const step = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const value = Math.floor(progress * target);
    element.textContent = `${prefix}${value.toLocaleString("pt-BR")}${suffix}`;
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
};

const counterObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const element = entry.target;
      const target = Number(element.getAttribute("data-counter"));
      animateCounter(element, target);
      observer.unobserve(element);
    });
  },
  { threshold: 0.45 }
);

counters.forEach((counter) => counterObserver.observe(counter));
