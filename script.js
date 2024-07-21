document.addEventListener("DOMContentLoaded", function () {
  const icons = document.querySelectorAll(".contact_icon");

  icons.forEach((icon) => {
    icon.addEventListener("click", function (event) {
      if (event.target.classList.contains("resume_icon")) {
        window.open("/images/유지아 이력서.pdf", "_blank");
      } else if (event.target.classList.contains("email_icon")) {
        console.log("email");
        location.href = "mailto:jiayoo.dev@gmail.com";
      } else if (event.target.classList.contains("github_icon")) {
        window.open("https://github.com/jia-yoo", "_blank");
      }
    });
  });

  const hamburgerMenu = document.getElementById("hamburger-menu");
  const sidebar = document.getElementById("sidebar");
  const aboutSection = document.querySelector("#about");
  const projectSection = document.querySelector("#project");
  const projectItems = document.querySelectorAll(".project_item");

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
    const screenPos = window.innerHeight / 1.3;

    if (aboutSectionPos < screenPos) {
      aboutSection.classList.add("show");
      aboutSection.classList.remove("hidden");
      projectSection.classList.add("show");
      projectSection.classList.remove("hidden");
    }

    projectItems.forEach((projectItem) => {
      const projectItemPos = projectItem.getBoundingClientRect().top;

      if (projectItemPos < screenPos) {
        projectItem.classList.add("show");
        projectItem.classList.remove("hidden");
      } else {
        projectItem.classList.remove("show");
        projectItem.classList.add("hidden");
      }
    });
  });
});
