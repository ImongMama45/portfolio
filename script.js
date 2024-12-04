document.addEventListener("DOMContentLoaded", () => {
    const burger = document.getElementById("burger");
    const navLinks = document.getElementById("nav-links");
  
    burger.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  });
  
document.addEventListener("DOMContentLoaded", function () {
  const scrollable = document.querySelector(".skills-scrollable");
  const leftButton = document.querySelector(".left-btn");
  const rightButton = document.querySelector(".right-btn");

  leftButton.addEventListener("click", () => {
    scrollable.scrollBy({ left: -200, behavior: "smooth" });
  });

  rightButton.addEventListener("click", () => {
    scrollable.scrollBy({ left: 200, behavior: "smooth" });
  });
});