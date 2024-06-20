const swiperTop = new Swiper('.top__swiper', {
    // Optional parameters
    
    // loop: true,
    effect: 'fade',
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    //   },
  
    pagination: {
      el: ".swiper-pagination",
    },
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  
  });

  const swiperAbout = new Swiper(".about__slider", {
    slidesPerView: 4,
    spaceBetween: 20,
    freeMode: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  });

  // accordeon__item--active

document.querySelectorAll('.accordeon__triger').forEach((item) => {
  item.addEventListener('click', () => {
    item.parentNode.classList.toggle('accordeon__item--active')
  })
});