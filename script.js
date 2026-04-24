// ===== CURSOR =====
const dot = document.querySelector(".cursor-dot");
const outline = document.querySelector(".cursor-outline");

window.addEventListener("mousemove", (e) => {
  const posX = e.clientX;
  const posY = e.clientY;

  // Update dot instantly
  dot.style.left = `${posX}px`;
  dot.style.top = `${posY}px`;

  // Outline follows with a slight lag (defined in CSS transition)
  outline.style.left = `${posX}px`;
  outline.style.top = `${posY}px`;
});

// Logic to scale the cursor when hovering over links
document.querySelectorAll('a, button').forEach(link => {
  link.addEventListener('mouseenter', () => {
    outline.style.transform = 'translate(-50%, -50%) scale(1.5)';
    outline.style.backgroundColor = 'rgba(var(--accent-rgb), 0.1)'; 
  });
  link.addEventListener('mouseleave', () => {
    outline.style.transform = 'translate(-50%, -50%) scale(1)';
    outline.style.backgroundColor = 'transparent';
  });
});

// ===== GSAP HERO ANIMATION =====
if (typeof gsap !== "undefined") {
  gsap.from(".hero-tag", { y: 30, opacity: 0, duration: 0.8, delay: 0.2 });
  gsap.from(".hero-title", { y: 60, opacity: 0, duration: 1, delay: 0.4 });
  gsap.from(".hero-sub", { y: 30, opacity: 0, duration: 0.8, delay: 0.7 });
  gsap.from(".hero-stats", { y: 20, opacity: 0, duration: 0.7, delay: 0.9 });
  gsap.from(".hero-actions", { y: 20, opacity: 0, duration: 0.7, delay: 1.1 });
  gsap.from(".header-icons", { y: 20, opacity: 0, duration: 0.7, delay: 1.3 });
}

// ===== PARTICLES =====
document.addEventListener("DOMContentLoaded", function () {
  if (typeof particlesJS === "undefined") return;

  particlesJS("particles-js", {
    particles: {
      number: { value: 40, density: { enable: true, value_area: 1800 } },
      color: { value: ["#7f5af0", "#00f0ff", "#ffffff"] },
      shape: { type: "circle" },
      opacity: { value: 0.5, random: true, anim: { enable: true, speed: 2, opacity_min: 0.1 } },
      size: { value: 2.5, random: true },
      line_linked: { enable: true, distance: 150, color: "#7f5af0", opacity: 0.12, width: 1 },
      move: { enable: true, speed: 1.5, direction: "none", random: true, out_mode: "out" }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" },
        resize: true
      },
      modes: {
        repulse: { distance: 120, duration: 0.4 },
        push: { particles_nb: 3 }
      }
    },
    retina_detect: true
  });
});

// ===== CONTACT FORM =====
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector("button[type=submit]");
  btn.textContent = "Message Sent ✓";
  btn.style.background = "linear-gradient(135deg, #0f6e56, #1d9e75)";
  setTimeout(() => {
    btn.innerHTML = 'Send Message <i class="fa-solid fa-paper-plane"></i>';
    btn.style.background = "";
    e.target.reset();
  }, 3000);
}

// ===== ACTIVE NAV HIGHLIGHT =====
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
  });
  navLinks.forEach(link => {
    link.style.color = link.getAttribute("href") === "#" + current ? "#00f0ff" : "";
  });
});
