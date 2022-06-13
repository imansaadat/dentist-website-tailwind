const menu = document.querySelector("#menu");
const hamMenu = document.querySelector("#hamMenu");
const header = document.querySelector("#header");
// hamMenu
hamMenu.addEventListener('click', () => {
  menu.classList.toggle('left-0')
  menu.classList.toggle('left-[-100%]')
  hamMenu.classList.toggle('fa-times')
})

// bg header
window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    header.classList.add('bg-white')
    menu.classList.remove('left-0')
    menu.classList.add('left-[-100%]')
    hamMenu.classList.remove('fa-times')
  } else {
    header.classList.remove('bg-white')
  }
})

// swiper
var swiper = new Swiper(".clients", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});