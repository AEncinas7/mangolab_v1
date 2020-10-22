import swiper from 'swiper/bundle';

const initSwiper = () => {
  
  new swiper('.swiper-container', {

    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },

  })

}

export { initSwiper };