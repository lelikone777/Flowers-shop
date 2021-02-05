$(document).ready(function () {
  const flowersSlider = new Swiper(".flowers-slider", {
    loop: true,
    slidesPerView: 6,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      320: {
        slidesPerView: 2,
      },
      480: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 6,
      },
    },
  });

  const reviewsSlider = new Swiper(".reviews-slider", {
    loop: true,
    slidesPerView: 1,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  $("#review-1").on("click", function () {
    $.fancybox.open(
      [
        {
          src: "https://source.unsplash.com/IvfoDk30JnI/1500x1000",
          opts: {
            caption: "First caption",
            thumb: "https://source.unsplash.com/IvfoDk30JnI/240x160",
          },
        },
        {
          src: "https://source.unsplash.com/0JYgd2QuMfw/1500x1000",
          opts: {
            caption: "Second caption",
            thumb: "https://source.unsplash.com/0JYgd2QuMfw/240x160",
          },
        },
      ],
      {
        loop: true,
        thumbs: {
          autoStart: true,
        },
      }
    );
  });
});
