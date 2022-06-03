$(document).ready(function () {
  $(".listing").click(function () {
    document.location = $(this).find("a").attr("href");
  });
});

$(document).ready(function () {
  $(".about").on("click", function () {
      $(this).find(".text").toggleClass("show-text");
      $(this).find("figure").toggleClass("no-filter");
  });
});

$(document).ready(function () {
  $("[type='submit']").on("click", function () {
    alert("This is an static form and message has not been received.\nWould you mind sending and email instead? 😊\nThanks! ");
  });
});
