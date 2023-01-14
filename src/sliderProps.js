import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
SwiperCore.use([Pagination, Navigation, EffectFade, Autoplay]);

const props = (currentCls, totalCls, allCls) => {
  return {
    loop: false,
    slidesPerView: 1,
    spaceBetween: 0,
    loopAdditionalSlides: 1,
    autoplay: {
      delay: 6000,
    },

    navigation: {
      nextEl: ".my_next",
      prevEl: ".my_prev",
    },

    pagination: {
      el: ".edrea_tm_swiper_progress",
      type: "custom", // progressbar
      renderCustom: function (swiper, current, total) {
        // progress animation
        var scale, translateX;
        var progressDOM = document.querySelector(".edrea_tm_swiper_progress");
        if (progressDOM.classList.contains("fill")) {
          translateX = "0px";
          scale = parseInt((current / total) * 100) / 100;
        } else {
          scale = parseInt((1 / total) * 100) / 100;
          translateX =
            ((current - 1) * parseInt((100 / total) * 100)) / 100 + "px";
        }
        document.querySelector(
          `.${allCls} span`
        ).style.transform = `translate3d(${translateX},0px,0px) scaleX(${scale}) scaleY(1)`;

        if (current < 10) {
          current = "0" + current;
        }
        if (total < 10) {
          total = "0" + total;
        }
        document.querySelector(`.${currentCls}`).innerHTML = current;
        document.querySelector(`.${totalCls}`).innerHTML = total;
      },
    },
    breakpoints: {
      700: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  };
};

export const portfolioSlider = props("current", "total", "all");
export const newsSlider = props("currentNews", "totalNews", "allNews");

export const testimonialSlider = {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 5000,
  },
};
