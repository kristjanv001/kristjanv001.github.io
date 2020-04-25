$(".navbar a").on("click", function (e) {
  if (this.hash !== "") {
    e.preventDefault();

    $("html, body").animate({ scrollTop: $(this.hash).offset().top }, 600);
  }
});
