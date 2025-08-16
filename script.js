//  JavaScript Integration
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  navLinks.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");
  // GSAP Animation for Navbar Elements
  gsap.from(".logo img", {
    opacity: 0,
    scale: 0.5,
    duration: 1,
    ease: "power3.out",
  });
  gsap.from(".nav-links li", {
    opacity: 0,
    y: -20,
    stagger: 0.2,
    duration: 1,
    ease: "power2.out",
  });
  gsap.from(".nav-buttons", {
    opacity: 0,
    scale: 0.8,
    stagger: 0.3,
    duration: 1,
    ease: "back.out(1.7)",
  });
});
document.addEventListener("DOMContentLoaded", function () {
  document.body.style.overflow = "hidden";
  setTimeout(() => {
    document.querySelector(".preloader").style.display = "none";
    document.querySelector(".navbar").style.opacity = "1";
    document.querySelector(".home").style.opacity = "1";
    document.body.style.overflow = "auto";
    setTimeout(() => {
      document.querySelector("#about").scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        document.querySelector(".navbar").style.display = "none";
        document.querySelector(".home").style.display = "none";
      }, 1000);
    }, 4000);
  }, 2000);
});
// For Projects
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    const filter = button.getAttribute("data-filter");
    projectCards.forEach((card) => {
      const category = card.getAttribute("data-category");
      if (filter === "all" || category === filter) {
        card.classList.remove("hide");
        card.style.display = "block";
      } else {
        card.classList.add("hide");
        setTimeout(() => {
          card.style.display = "none";
        }, 300);
      }
    });
  });
});

