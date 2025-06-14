
  const burger = document.getElementById("burger-menu");
  const navMenu = document.querySelector(".nav-menu-container");
  const burgerIcon = document.getElementById("burger-icon");

  burger.addEventListener("click", () => {
    navMenu.classList.toggle("active");

    // Alterne l'icône
    if (navMenu.classList.contains("active")) {
      burgerIcon.classList.remove("fa-bars");
      burgerIcon.classList.add("fa-xmark");
    } else {
      burgerIcon.classList.remove("fa-xmark");
      burgerIcon.classList.add("fa-bars");
    }
  });
