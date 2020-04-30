/* ------------------------- */
// fadeout
/* ------------------------- */
$(window).scroll(() => {
  $("#welcome").css("opacity", 1 - $(window).scrollTop() / 250);
});

/* ------------------------- */
// smooth-scroll
/* ------------------------- */
$("#welcome a, .menu-list a, .logo a").on("click", function (e) {
  if (this.hash !== "") {
    e.preventDefault();

    $("html, body").animate({ scrollTop: $(this.hash).offset().top }, 589);
  }
});
