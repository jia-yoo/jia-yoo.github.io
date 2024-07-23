const hamburgerMenu = document.getElementById("hamburger-menu");
const sidebar = document.getElementById("sidebar");
const aboutSection = document.querySelector("#about");
const skillsSection = document.querySelector("#skills");
const projectSection = document.querySelector("#project");
const projectItems = document.querySelectorAll(".project_item");
const projectInfoItems = document.querySelectorAll(".project_info");
const icons = document.querySelectorAll(".contact_icon");

document.addEventListener("DOMContentLoaded", function () {
  icons.forEach((icon) => {
    icon.addEventListener("click", function (event) {
      if (event.target.classList.contains("resume_icon")) {
        window.open("/images/유지아 이력서.pdf", "_blank");
      } else if (event.target.classList.contains("email_icon")) {
        console.log("email");
        location.href = "mailto:jiayoo.dev@gmail.com";
      } else if (event.target.classList.contains("github_icon")) {
        window.open("https://github.com/jia-yoo", "_blank");
      } else if (event.target.classList.contains("file_icon")) {
        if (event.target.parentElement.classList.contains("pet_care")) {
          window.open(
            "https://drive.google.com/file/d/1ixqWIfH7KiMiFBZBcNiLYxbLyq5TwWws/view?usp=sharing",
            "_blank"
          );
        } else if (event.target.parentElement.classList.contains("onepick")) {
          window.open(
            "https://drive.google.com/file/d/1ixqWIfH7KiMiFBZBcNiLYxbLyq5TwWws/view?usp=sharing",
            "_blank"
          );
        } else {
          window.open(
            "https://drive.google.com/file/d/1YR3kzhQhFRYBmuJDJtUCvjaKVgdNzycw/view?usp=sharing",
            "_blank"
          );
        }
      } else if (event.target.classList.contains("github_white_icon")) {
        if (event.target.parentElement.classList.contains("pet_care")) {
          window.open(
            "https://github.com/jia-yoo/Animal_Hospital_Reservation",
            "_blank"
          );
        } else if (event.target.parentElement.classList.contains("onepick")) {
          window.open("https://github.com/jia-yoo/onepick", "_blank");
        } else {
          window.open("https://github.com/jia-yoo/Jobking", "_blank");
        }
      }
    });
  });

  hamburgerMenu.addEventListener("click", function () {
    if (sidebar.style.width === "250px") {
      closeSidebar();
    } else {
      openSidebar();
    }
  });

  document.addEventListener("click", function (event) {
    if (
      !sidebar.contains(event.target) &&
      !hamburgerMenu.contains(event.target)
    ) {
      closeSidebar();
    }
  });

  function openSidebar() {
    sidebar.style.width = "250px";
  }

  function closeSidebar() {
    sidebar.style.width = "0";
  }

  window.addEventListener("scroll", function () {
    const aboutSectionPos = aboutSection.getBoundingClientRect().top;
    const skillsSectionPos = skillsSection.getBoundingClientRect().top;
    const projectItemPos = projectSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.3;

    if (aboutSectionPos < screenPos) {
      aboutSection.classList.add("show");
      aboutSection.classList.remove("hidden");
    } else {
      aboutSection.classList.add("hidden");
      aboutSection.classList.remove("show");
    }
    if (skillsSectionPos < screenPos) {
      skillsSection.classList.add("show");
      skillsSection.classList.remove("hidden");
    } else {
      skillsSection.classList.add("hidden");
      skillsSection.classList.remove("show");
    }

    if (projectItemPos < screenPos) {
      projectSection.classList.add("show");
      projectSection.classList.remove("hidden");
    } else {
      projectSection.classList.add("hidden");
      projectSection.classList.remove("show");
    }
  });
});

projectItems.forEach((projectItem) => {
  const images = projectItem.querySelectorAll("img");
  if (images.length > 0) {
    images[0].classList.add("active"); // 첫 번째 이미지를 기본 활성화
  }

  projectItem.addEventListener("mouseover", function () {
    if (images.length > 1) {
      images[0].classList.remove("active");
      images[1].classList.add("active");
    }
  });

  projectItem.addEventListener("mouseout", function () {
    if (images.length > 1) {
      images[1].classList.remove("active");
      images[0].classList.add("active");
    }
  });
});
