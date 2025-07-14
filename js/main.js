const menu = document.querySelector(".header .nav-list");
const closeMenuBtn = document.querySelector("#close-menu");
const openMenuBtn = document.querySelector("#open-menu");
const overlay = document.querySelector("#overlay");
openMenuBtn.addEventListener('click', () => {
  menu.classList.add("show");
  overlay.classList.add("show");
})
closeMenuBtn.addEventListener('click', () => {
  menu.classList.remove("show");
  overlay.classList.remove("show");
})

document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', function (e) {
    e.preventDefault(); // Havolani bosganda sahifa yangilanmasligi uchun
    const subMenu = this.querySelector('.sub-menu');

    // Faqat bosilgan nav-itemning sub-menusini ochish/yopish
    if (subMenu) {
      const isActive = this.classList.contains('active');

      // Barcha nav-item'larni yopish (faqat bitta ochiq bo'lishi uchun)
      document.querySelectorAll('.nav-item').forEach(nav => {
        nav.classList.remove('active');
        const otherSubMenu = nav.querySelector('.sub-menu');
        if (otherSubMenu) {
          otherSubMenu.classList.remove('active');
        }
      });

      // Agar sub-menu allaqachon ochiq bo'lsa, yopamiz, aks holda ochamiz
      if (!isActive) {
        this.classList.add('active');
        subMenu.classList.add('active');
      }
    }
  });
});

const swiper = new Swiper(".constructions-swiper", {
  slidesPerView: 6,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".swiper-btn-next",
    prevEl: ".swiper-btn-prev",
  },
  breakpoints: {
    992: {
      slidesPerView: 6,
    },
    768: {
      slidesPerView: 5,
    },
    550: {
      slidesPerView: 4,
    },
    0: {
      slidesPerView: 1,
    }
  }
});

// portfolio-swiper
const portfolioSwiper = new Swiper(".portfolio-swiper", {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".portfolio-swiper .swiper-btn-next",
    prevEl: ".portfolio-swiper .swiper-btn-prev",
  },
  breakpoints: {
    1150: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 3,
    },
    490: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1
    },
  }
});

// glazing-steps-swiper
const glazingStepsSwiper = new Swiper(".glazing-steps-swiper", {
  slidesPerView: 6,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".glazing-steps-swiper .swiper-btn-next",
    prevEl: ".glazing-steps-swiper .swiper-btn-prev",
  },
  breakpoints: {
    1450: {
      slidesPerView: 6,
    },
    1024: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 3,
    },
    600: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  }
});

// blog-swiper
const blogSwiper = new Swiper(".blog-swiper", {
  slidesPerView: 3,
  loop: true,
  spaceBetween: 20,
  navigation: {
    nextEl: ".blog-swiper .swiper-btn-next",
    prevEl: ".blog-swiper .swiper-btn-prev",
  },
  breakpoints: {
    1250: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 2,
    },
    700: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  }
});

// accessories-swiper
const accessoriesSwiper = new Swiper(".accessories-swiper", {
  slidesPerView: 5,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".accessories .swiper-btn-next",
    prevEl: ".accessories .swiper-btn-prev",
  },
  breakpoints: {
    1150: {
      slidesPerView: 5,
    },
    992: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 3,
    },
    550: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  }
});

// tab-swiper-1
const tabSwiper1 = new Swiper(".tab-swiper-1", {
  slidesPerView: 1,
  spaceBetween: 20, loop: true,
  navigation: {
    nextEl: ".tab-swiper-1 .swiper-btn-next",
    prevEl: ".tab-swiper-1 .swiper-btn-prev",
  },
});

// colors-swiper
const colorsSwiper = new Swiper(".colors-swiper", {
  slidesPerView: 9,
  spaceBetween: 20, loop: true,
  navigation: {
    nextEl: ".colors-swiper .swiper-btn-next",
    prevEl: ".colors-swiper .swiper-btn-prev",
  },
  breakpoints: {
    1350: {
      slidesPerView: 9,
    },
    1024: {
      slidesPerView: 6,
    },
    700: {
      slidesPerView: 4,
    },
    490: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  }
});

// intro-swiper
const introSwiper = new Swiper(".intro-swiper", {
  slidesPerView: 1,
  spaceBetween: 20, loop: true,
  navigation: {
    nextEl: ".intro-swiper .swiper-btn-next",
    prevEl: ".intro-swiper .swiper-btn-prev",
  },
  loop: true,
  breakpoints: {
    700: {
      slidesPerView: 1,
    },
    500: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  }
});

// partners-images
const partnersImages = new Swiper(".partners-images", {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 800,

  breakpoints: {
    1100: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 3,
    },
    490: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  }
});

// products-swiper
const productsSwiper = new Swiper(".products-swiper", {
  slidesPerView: 4, loop: true,
  spaceBetween: 20,
  navigation: {
    nextEl: ".products-swiper .swiper-btn-next",
    prevEl: ".products-swiper .swiper-btn-prev",
  },
  breakpoints: {
    992: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 3,
    },
    490: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  }
});

try {
  const ctx = document.getElementById('myChart').getContext('2d');
  if (ctx) {
    const myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: [
          'Размер и геометрическая форма',
          'Количество сборок',
          'Тип оглавления',
          'Тип профиля',
          'Вид строповка',
          'Качество фурнитуры',
          'Цвет профиля',
          'Акссесуары, монтажные сетки НПД.'
        ],
        datasets: [{
          data: [25, 15, 10, 20, 10, 5, 10, 5], // Approximate percentages based on visual estimation
          backgroundColor: [
            '#1E90FF',
            '#FF4500',
            '#D3D3D3',
            '#1E90FF',
            '#FF4500',
            '#FFA500',
            '#D3D3D3',
            '#FF4500'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false // Hide default legend
          }
        }
      }
    });

    // Generate dynamic legend
    const legendContainer = document.getElementById('legendContainer');
    const legendItems = myChart.data.labels.map((label, index) => {
      const color = myChart.data.datasets[0].backgroundColor[index];
      return `<div class="legend-item"><span class="legend-color" style="background-color: ${color};"></span>${label}</div>`;
    });
    legendContainer.innerHTML = legendItems.join('');
  }
} catch (error) {
}


// try {
//   window.addEventListener('DOMContentLoaded', function () {
//     VK.init({ apiId: 111, onlyWidgets: true });
//     VK.Widgets.Comments('vk_comments', { width: 500, limit: 15 }, 321);
//   });
// } catch (error) { }

const blockQuotes = document.querySelectorAll(".info-blockquote");

if (blockQuotes.length) {
  blockQuotes.forEach(item => {
    const showMoreBtn = item.querySelector(".show-more");
    const hiddenText = item.querySelector(".hide-deck");

    showMoreBtn.addEventListener("click", () => {
      hiddenText.classList.toggle("show");

      // Tugma matnini almashtirish
      if (hiddenText.classList.contains("show")) {
        showMoreBtn.textContent = "Скрыть"; // yoki "Yopish"
      } else {
        showMoreBtn.textContent = "Подробнее..."; // yoki "Batafsil"
      }
    });
  });
}

const footerList = document.querySelectorAll(".footer-list");
footerList.forEach(list => {
  const footerListItem = list.querySelectorAll(".footer-list__item");

  footerListItem.forEach(item => {
    const options = item.querySelector("ul");
    const icon = item.querySelector('.fa-solid.fa-chevron-right');
    options.classList.add('d-none')
    item.addEventListener("click", () => {
      options.classList.toggle('d-none');
      icon.classList.toggle('rotate-180');

    })
  })

})
