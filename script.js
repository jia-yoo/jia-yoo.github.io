const hamburgerMenu = document.getElementById("hamburger-menu");
const sidebar = document.getElementById("sidebar");
const sections = document.querySelectorAll("section.hidden");
const icons = document.querySelectorAll(
  ".contact_icon, .intro-link, .about-icon-btn",
);

document.addEventListener("DOMContentLoaded", function () {
  icons.forEach((icon) => {
    icon.addEventListener("click", function (event) {
      const el = event.currentTarget;
      if (el.classList.contains("resume_icon")) {
        window.open("/images/유지아 이력서.pdf", "_blank");
      } else if (el.classList.contains("project_icon")) {
        window.open("/images/유지아 경력기술서.pdf", "_blank");
      } else if (el.classList.contains("email_icon")) {
        location.href = "mailto:jiayoo.dev@gmail.com";
      } else if (el.classList.contains("github_icon")) {
        window.open("https://github.com/jia-yoo", "_blank");
      } else if (el.classList.contains("file_icon")) {
        if (el.parentElement.classList.contains("pet_care")) {
          window.open(
            "https://acrobat.adobe.com/id/urn:aaid:sc:AP:94765680-af7a-451a-bc9d-6ea98abfe42e",
            "_blank",
          );
        } else if (el.parentElement.classList.contains("onepick")) {
          window.open(
            "https://acrobat.adobe.com/id/urn:aaid:sc:AP:93b2c643-be45-474e-bd83-aa7faed910b7",
            "_blank",
          );
        } else {
          window.open(
            "https://acrobat.adobe.com/id/urn:aaid:sc:ap:a01a76d5-b0e7-477a-9148-8902ecf24b2b",
            "_blank",
          );
        }
      } else if (el.classList.contains("github_white_icon")) {
        if (el.parentElement.classList.contains("pet_care")) {
          window.open(
            "https://github.com/jia-yoo/Animal_Hospital_Reservation",
            "_blank",
          );
        } else if (el.parentElement.classList.contains("onepick")) {
          window.open("https://github.com/jia-yoo/onepick", "_blank");
        } else {
          window.open("https://github.com/jia-yoo/Jobking", "_blank");
        }
      }
    });
  });

  hamburgerMenu.addEventListener("click", function () {
    sidebar.style.width = sidebar.style.width === "220px" ? "0" : "220px";
  });

  document.addEventListener("click", function (event) {
    if (
      !sidebar.contains(event.target) &&
      !hamburgerMenu.contains(event.target)
    ) {
      sidebar.style.width = "0";
    }
  });

  window.addEventListener("scroll", function () {
    const screenPos = window.innerHeight / 1.2;
    sections.forEach((section) => {
      const pos = section.getBoundingClientRect().top;
      if (pos < screenPos) {
        section.classList.add("show");
        section.classList.remove("hidden");
      } else {
        section.classList.add("hidden");
        section.classList.remove("show");
      }
    });
  });
});

// 실무 프로젝트 카드 하나씩 애니메이션
const expCards = document.querySelectorAll(".exp-card-animate");
const cardObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  },
  { threshold: 0.15 },
);

expCards.forEach((card, i) => {
  card.style.transitionDelay = `${i * 0.15}s`;
  cardObserver.observe(card);
});

document.querySelectorAll(".project_item").forEach((item) => {
  const images = item.querySelectorAll("img");
  if (images.length > 0) images[0].classList.add("active");
  item.addEventListener("mouseover", () => {
    if (images.length > 1) {
      images[0].classList.remove("active");
      images[1].classList.add("active");
    }
  });
  item.addEventListener("mouseout", () => {
    if (images.length > 1) {
      images[1].classList.remove("active");
      images[0].classList.add("active");
    }
  });
});
