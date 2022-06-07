// Hamburger toggle menu
const menu = document.querySelector(".menu")
const hamburger = document.querySelector(".hamburger")
const closeIcon = document.querySelector(".closeIcon")
const menuIcon = document.querySelector(".menuIcon")

function toggleMenu() {
  menu.classList.toggle("showMenu")
  if (menu.classList.contains("showMenu")) {
    closeIcon.style.display = "block"
    menuIcon.style.display = "none"
  } else {
    menuIcon.style.display = "block"
    closeIcon.style.display = "none"
  }
}

hamburger.addEventListener("click", toggleMenu)

// Make entire project cards clickable
$(document).ready(function () {
  $(".listing").click(function () {
    document.location = $(this).find("a").attr("href")
  })
})

// Make cards on about page interactive showing text and removing filter on click
$(document).ready(function () {
  $(".about").on("click", function () {
    $(this).find(".text").toggleClass("show-text")
    $(this).find("figure").toggleClass("no-filter")
  })
})

// Add alert message on static form from contact page
$(document).ready(function () {
  $("[type='submit']").on("click", function () {
    alert(
      "This is a static form and message has not been received.\nWould you mind sending and email instead? 😊\nThanks! "
    )
  })
})
