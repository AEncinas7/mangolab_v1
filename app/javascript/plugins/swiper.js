import swiper from 'swiper/bundle';

const initSwiper = () => {
  
  new swiper('.swiper-about', {

    pagination: {
      el: '.swiper-pagination-about',
      type: 'bullets',
    },

  })

}

export { initSwiper };