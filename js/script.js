const navList = document.querySelector("#navList");
const hamMenu = document.querySelector("#hamMenu");
const header = document.querySelector("#header");
// hamMenu
hamMenu.addEventListener("click", () => {
  if(navList.classList.contains('left-[-100%]')){
    navList.classList.remove("left-[-100%]")
    navList.classList.add("left-0")
  }
  else{
    navList.classList.add("left-[-100%]")
    navList.classList.remove("left-0")
  }
});

// bg header
window.addEventListener('scroll',()=>{
  if(window.scrollY > 0){
    header.classList.add('bg-white')
    header.classList.remove('border-b-2')
  }else{
    header.classList.remove('bg-white')
    header.classList.add('border-b-2')
  }
})

// swiper
var swiper = new Swiper(".clients", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop:true,
  grabCursor:true,
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