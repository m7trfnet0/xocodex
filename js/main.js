$(document).on(function () {
  if (screen.width > 768) $(".sidemenu").hide();
});
$(document).on("click", ".button-nav, .navigation-backdrop", function () {
  var $nav = $("#navigation-demo");
  var $hasClass = $nav.hasClass("open");

  if (!$hasClass) {
    $nav.addClass("open");
    $("body").append("<div class='navigation-backdrop'></div>");
  } else {
    $nav.removeClass("open");
    $(".navigation-backdrop").remove();
  }
});
