/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.querySelectorAll(".skills__content");

function toggleSkills() {
    this.classList.toggle("skills__open");
}

skillsContent.forEach((el) => {
    el.addEventListener("click", toggleSkills);
});

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll("[data-target]");
const tabContents = document.querySelectorAll("[data-content]");
const skillsContainer = document.querySelector("#soft-skills");

const skillsData = [
  {
    title: "Frontend",
    technologies: "ReactJS/TypeScript, React Native, Next.js",
    usage: ["Building responsive web applications", "Developing user-friendly interfaces", "Implementing state management"],
    icon: "fa-laptop-code"
  },
  {
    title: "Backend",
    technologies: "NodeJS/Express + TypeScript, C# .Net Core, Python Django",
    usage: ["Creating RESTful APIs", "Handling authentication and authorization", "Integrating with databases"],
    icon: "fa-code"
  },
  {
    title: "Styling",
    technologies: "TailwindCSS, Bootstrap, SCSS, Styled Components, Material UI, etc.",
    usage: ["Designing visually appealing UIs", "Implementing consistent styles across the application", "Ensuring accessibility and responsiveness"],
    icon: "fa-palette"
  },
  {
    title: "Database & APIs",
    technologies: "MS SQL, MySQL, MongoDB, Firebase",
    usage: ["Designing and optimizing database schemas", "Developing scalable and efficient APIs", "Integrating third-party APIs"],
    icon: "fa-database"
  },
  {
    title: "Deployment",
    technologies: "Github Actions, Netlify, Firebase Tools, Heroku, etc.",
    usage: ["Setting up continuous integration and deployment pipelines", "Managing cloud infrastructure", "Ensuring application scalability and availability"],
    icon: "fa-cloud-upload-alt"
  },
  {
    title: "Containers & Cloud",
    technologies: "Docker, AWS",
    usage: ["Containerizing applications for portability", "Utilizing cloud services for scalability", "Implementing serverless architectures"],
    icon: "fa-cloud"
  }
];

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
      const target = document.querySelector(tab.dataset.target);

      tabContents.forEach((tabContent) => {
          tabContent.classList.remove("qualification__active");
      });
      target.classList.add("qualification__active");

      tabs.forEach((tab) => {
          tab.classList.remove("qualification__active");
      });
      tab.classList.add("qualification__active");

      if (target.id === "soft-skills") {
          renderSkills();
      }
  });
});

function renderSkills() {
  skillsContainer.innerHTML = ""; // Clear previous content

  skillsData.forEach((skill) => {
    const skillCard = document.createElement("div");
    skillCard.classList.add("skills__card");

    const skillIcon = document.createElement("div");
    skillIcon.classList.add("skills__icon");
    skillIcon.innerHTML = `<i class="fas ${skill.icon}"></i>`;

    const skillTitle = document.createElement("h3");
    skillTitle.classList.add("skills__title");
    skillTitle.innerHTML = `${skill.title} <i class="fas ${skill.icon}"></i>`;

    const skillTechnologies = document.createElement("p");
    skillTechnologies.classList.add("skills__description");
    skillTechnologies.innerHTML = `<strong>Technologies:</strong> ${skill.technologies}`;

    const skillUsage = document.createElement("ul");
    skillUsage.classList.add("skills__description");
    skill.usage.forEach((usageItem) => {
      const usageListItem = document.createElement("li");
      usageListItem.textContent = usageItem;
      skillUsage.appendChild(usageListItem);
    });

    skillCard.appendChild(skillTitle);
    skillCard.appendChild(skillTechnologies);
    skillCard.appendChild(skillUsage);

    skillsContainer.appendChild(skillCard);
  });
}
/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll(".services__modal"),
  modalBtns = document.querySelectorAll(".services__button"),
  modalCloses = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    modal(i);
  });
});

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal");
    });
  });
});

/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortfolio = new Swiper(".portfolio__container", {
  cssMode: true,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  /* mousewheel: true,
  keyboard: true, */
});

/*==================== TESTIMONIAL ====================*/
let swiperTestimonial = new Swiper(".testimonial__container", {
  loop: true,
  grabCursor: true,
  spaceBetween: 48,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  breakpoints: {
    568: {
      slidesPerView: 2,
    },
  },

  /* mousewheel: true,
  keyboard: true, */
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const nav = document.getElementById("header");
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*==================== DARK LIGHT THEME ====================*/

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

// Initially render skills cards
renderSkills();
