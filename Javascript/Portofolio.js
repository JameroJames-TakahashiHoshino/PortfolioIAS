// Sticky Navigation Menu
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");

// Show/hide sticky navigation and scroll button based on scroll position
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  } else {
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
};
const layers = document.querySelectorAll(".layer");
const fog = document.querySelector(".fog");
const particles = document.querySelector(".particles");

document.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;

    // CAMERA SWAY (whole scene tilts)
    document.querySelector(".home").style.transform =
        `rotateX(${y * 4}deg) rotateY(${x * 4}deg)`;

    // PARALLAX DEPTH ON EACH LAYER
    layers.forEach((layer, index) => {
        const depth = (index + 1) * 20;
        layer.style.transform = `translate(${x * depth}px, ${y * depth}px)`;
    });

    // Fog moves slower
    fog.style.transform = `translate(${x * 10}px, ${y * 10}px)`;

    // Particles move more
    particles.style.transform = `translate(${x * 40}px, ${y * 40}px)`;
});


// Side Navigation Menu
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");

// Open side navigation
menuBtn.onclick = function () {
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
};

const hideNavMenu = () => {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
};

// Close side navigation
cancelBtn.onclick = hideNavMenu;

// Close side navigation when a menu link is clicked
let navLinks = document.querySelectorAll(".menu li a");
navLinks.forEach((link) => {
  link.addEventListener("click", hideNavMenu);
});


document.addEventListener("DOMContentLoaded", function() {
  const textTwoSpans = document.querySelectorAll(".text-two span");
  textTwoSpans.forEach((span, index) => {
    span.style.setProperty('--i', index);
  });
});
document.getElementById('view-cv').addEventListener('click', function () {
  window.open('Resume.html', '_blank');
});