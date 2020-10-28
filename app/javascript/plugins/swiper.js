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

  // Services Website Dev section:
  new swiper('.swiper-services-website', {

    pagination: {
      el: '.swiper-pagination-services-website-dev',
      type: 'bullets',
    },

  })

  // Services Dev and test section:
  new swiper('.swiper-dev-test', {

    pagination: {
      el: '.swiper-pagination-services-dev-test',
      type: 'bullets',
    },

  })

  // Services Tools section:
  const tools = new swiper('.swiper-services-tools', {

    slidesPerView: 3,
    spaceBetween: 70,
    // slidesOffsetBefore : 10,
    centeredSlides: false,
    pagination: {
      el: '.swiper-pagination-services-tools',
      type: 'bullets',
    },
  
  })

}

export { initSwiper };