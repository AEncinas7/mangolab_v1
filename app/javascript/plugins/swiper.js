import swiper from 'swiper/bundle';

const initSwiper = () => {
  
  // Intro About us section:
  new swiper('.swiper-about', {

    pagination: {
      el: '.swiper-pagination-about',
      type: 'bullets',
    },

  })

  // Services UX-UI section:
  new swiper('.swiper-services-ux-ui', {

    pagination: {
      el: '.swiper-pagination-services-ux-ui',
      type: 'bullets',
    },

  })
}

export { initSwiper };