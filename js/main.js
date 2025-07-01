const swiper = new Swiper(".constructions-swiper", {
  slidesPerView: 6,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-btn-next",
    prevEl: ".swiper-btn-prev",
  },
});

// portfolio-swiper
const portfolioSwiper = new Swiper(".portfolio-swiper", {
  slidesPerView: 4,
  spaceBetween: 20,
  navigation: {
    nextEl: ".portfolio-swiper .swiper-btn-next",
    prevEl: ".portfolio-swiper .swiper-btn-prev",
  },
});

// glazing-steps-swiper
const glazingStepsSwiper = new Swiper(".glazing-steps-swiper", {
  slidesPerView: 6,
  spaceBetween: 20,
  navigation: {
    nextEl: ".glazing-steps-swiper .swiper-btn-next",
    prevEl: ".glazing-steps-swiper .swiper-btn-prev",
  },
});

// blog-swiper
const blogSwiper = new Swiper(".blog-swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  navigation: {
    nextEl: ".blog-swiper .swiper-btn-next",
    prevEl: ".blog-swiper .swiper-btn-prev",
  },
});

// try {
//   window.addEventListener('DOMContentLoaded', function () {
//     VK.init({ apiId: 111, onlyWidgets: true });
//     VK.Widgets.Comments('vk_comments', { width: 500, limit: 15 }, 321);
//   });
// } catch (error) { }
