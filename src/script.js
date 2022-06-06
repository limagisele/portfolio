// Hamburger toggle menu
$(document).ready(function () {
  const menu = document.querySelector(".menu");
  const menuItems = document.querySelectorAll(".menuItem");
  const hamburger = document.querySelector(".hamburger");
  const closeIcon = document.querySelector(".closeIcon");
  const menuIcon = document.querySelector(".menuIcon");

  function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
      menu.classList.remove("showMenu");
      closeIcon.style.display = "none";
      menuIcon.style.display = "block";
    } else {
      menu.classList.add("showMenu");
      closeIcon.style.display = "block";
      menuIcon.style.display = "none";
    }
  }

  hamburger.addEventListener("click", toggleMenu);
});

// Make entire project cards clickable
$(document).ready(function () {
  $(".listing").click(function () {
    document.location = $(this).find("a").attr("href");
  });
});

// Make cards on about page interactive showing text and removing filter on click
$(document).ready(function () {
  $(".about").on("click", function () {
    $(this).find(".text").toggleClass("show-text");
    $(this).find("figure").toggleClass("no-filter");
  });
});

// Add alert message on static form from contact page
$(document).ready(function () {
  $("[type='submit']").on("click", function () {
    alert(
      "This is a static form and message has not been received.\nWould you mind sending and email instead? 😊\nThanks! "
    );
  });
});
