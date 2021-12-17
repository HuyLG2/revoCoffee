// product (glide)

const productglide = document.querySelector(".productglide");

if (productglide)
  new Glide(productglide, {
    type: "carousel",
    startAt: 0,
    perView: 2,
    gap: 30,
    hoverpause: true,
    autoplay: 4000,
    animationDuration: 800,
    animationTimingFunc: "linear",
    breakpoints: {
      996: {
        perView: 1,
      },
      768: {
        perView: 1,
      },
      425: {
          perView:1,
      },
    },
  }).mount();

// Giftset

$(".tab_box a").click(function () {
  var idata= $(this).attr('idata');
  $(".tab_content .tab-box").removeClass('active');
  $(".tab-list-" + idata).addClass('active');
});

// combo (Glidejs)

const glide = document.querySelector(".glide");

if (glide)
  new Glide(glide, {
    type: "carousel",
    startAt: 0,
    perView: 3,
    gap: 30,
    hoverpause: true,
    autoplay: 4000,
    animationDuration: 800,
    animationTimingFunc: "linear",
    breakpoints: {
      996: {
        perView: 2,
      },
      768: {
        perView: 2,
      },
      567: {
          perView:1,
      },
    },
  }).mount();

$(document).ready(function () {
  $('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
      $(this).toggleClass('active');
  });
});