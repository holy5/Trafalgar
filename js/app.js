window.addEventListener("load", function () {
  const menu = document.querySelector(".menu");
  const menuBg = document.querySelector(".menu-bg");
  const menuToggle = this.document.querySelector(".menu-toggle");
  const menuClose = this.document.querySelector(".menu-close");
  menuToggle.addEventListener("click", handleToggleMenu);
  function handleToggleMenu(e) {
    menuBg.classList.add("is-active");
    menu.classList.add("is-active");
    menuClose.classList.add("is-active");
  }
  menuClose.addEventListener("click", function () {
    menu.classList.remove("is-active");
    menuBg.classList.remove("is-active");
    this.classList.remove("is-active");
  });
});
$(".review-list").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  prevArrow:
    "<button type='button' class='slick-prev slick-arrow'><i class='fal fa-long-arrow-left' aria-hidden='true'></i></button>",
  nextArrow:
    "<button type='button' class='slick-next slick-arrow'><i class='fal fa-long-arrow-right' aria-hidden='true'></i></button>",
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
});
