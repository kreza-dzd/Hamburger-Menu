const  hamburger = document.querySelector(".hamburger");
const navGuide = document.querySelector(".nav-guide");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navGuide.classList.toggle("active");
});



