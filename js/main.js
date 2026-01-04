const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15,
  }
);

document.querySelectorAll(".fade-in").forEach((section) => {
  observer.observe(section);
});

// const hamburger = document.getElementById("hamburger");
// const navLinks = document.querySelector(".nav-links");

// hamburger.addEventListener("click", () => {
//   navLinks.classList.toggle("active");
// });

// const hamburger = document.getElementById("hamburger");
// const navLinks = document.querySelector(".nav-links");
// const navItems = document.querySelectorAll(".nav-links a");

// // Toggle menu on hamburger click
// hamburger.addEventListener("click", () => {
//   navLinks.classList.toggle("active");
// });

// // Close menu when a link is clicked (mobile UX)
// navItems.forEach((link) => {
//   link.addEventListener("click", () => {
//     navLinks.classList.remove("active");
//   });
// });

const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");

// Toggle menu + hamburger animation
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");
});

// Close menu when link is clicked
navItems.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    hamburger.classList.remove("active");
  });
});

// const sections = document.querySelectorAll("section[id]");
// const navLinksAll = document.querySelectorAll(".nav-links a");

// function setActiveLink() {
//   let scrollY = window.pageYOffset;

//   sections.forEach((section) => {
//     const sectionTop = section.offsetTop - 100;
//     const sectionHeight = section.offsetHeight;
//     const sectionId = section.getAttribute("id");

//     if (
//       scrollY >= sectionTop &&
//       scrollY < sectionTop + sectionHeight
//     ) {
//       navLinksAll.forEach((link) => {
//         link.classList.remove("active");
//         if (link.getAttribute("href") === `#${sectionId}`) {
//           link.classList.add("active");
//         }
//       });
//     }
//   });
// }

// window.addEventListener("scroll", setActiveLink);

// Works
// const sections = document.querySelectorAll("section[id]");
// const navLinksAll = document.querySelectorAll(".nav-links a");

// function setActiveLink() {
//   const scrollY = window.scrollY;
//   const windowHeight = window.innerHeight;
//   const documentHeight = document.documentElement.scrollHeight;

//   // If user is at bottom → activate Contact
//   if (scrollY + windowHeight >= documentHeight - 5) {
//     navLinksAll.forEach((link) => {
//       link.classList.remove("active");
//       if (link.getAttribute("href") === "#contact") {
//         link.classList.add("active");
//       }
//     });
//     return;
//   }

//   sections.forEach((section) => {
//     const sectionTop = section.offsetTop - 120;
//     const sectionHeight = section.offsetHeight;
//     const sectionId = section.getAttribute("id");

//     if (
//       scrollY >= sectionTop &&
//       scrollY < sectionTop + sectionHeight
//     ) {
//       navLinksAll.forEach((link) => {
//         link.classList.remove("active");
//         if (link.getAttribute("href") === `#${sectionId}`) {
//           link.classList.add("active");
//         }
//       });
//     }
//   });
// }

// window.addEventListener("scroll", setActiveLink);

const sections = document.querySelectorAll("section[id]");
const navLinksAll = document.querySelectorAll(".nav-links a");

function setActiveLink() {
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;

  // 🔹 If user is at very top (Home)
  if (scrollY < document.querySelector("#about").offsetTop - 120) {
    navLinksAll.forEach((link) => link.classList.remove("active"));
    return;
  }

  // 🔹 If user is at bottom → Contact active
  if (scrollY + windowHeight >= documentHeight - 5) {
    navLinksAll.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#contact") {
        link.classList.add("active");
      }
    });
    return;
  }

  // 🔹 Normal section detection
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinksAll.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        }
      });
    }
  });
}

window.addEventListener("scroll", setActiveLink);

// const themeToggle = document.getElementById("themeToggle");

// // Load saved theme
// if (localStorage.getItem("theme") === "dark") {
//   document.body.classList.add("dark");
//   themeToggle.textContent = "☀️";
// }

// // Toggle theme
// themeToggle.addEventListener("click", () => {
//   document.body.classList.toggle("dark");

//   const isDark = document.body.classList.contains("dark");
//   themeToggle.textContent = isDark ? "☀️" : "🌙";
//   localStorage.setItem("theme", isDark ? "dark" : "light");
// });

const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

