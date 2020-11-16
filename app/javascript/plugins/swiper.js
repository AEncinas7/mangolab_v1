import swiper from 'swiper/bundle';

const initSwiper = () => {
  
  // Intro About us section:
  new swiper('.swiper-about-it', {

    spaceBetween: 10,
    loop: true,
    speed: 1500,
    simulateTouch: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    breakpoints: {
      // when window width is >= 1039px
      1039: {
        // loop: true,
        // speed: 1500,
        // simulateTouch: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        }
  
      },
       // when window width is >= 364px
      364: {
        pagination: {
          el: '.swiper-pagination-about-it',
          type: 'bullets',
        },
        autoplay: false,
      }
    }

  })

  // Home About us swiper:
  new swiper('.swiper-about', {

    pagination: {
      el: '.swiper-pagination-about',
      type: 'bullets',
    },

  })

  // Services Web Development swiper:
  new swiper('.swiper-services', {
    loop: true,
    pagination: {
      el: '.swiper-pagination-services',
      type: 'bullets',
    },

  })

  // Services Tools section:
  new swiper('.swiper-services-tools', {
    loop: true,
    pagination: {
      el: '.swiper-pagination-services-tools',
      type: 'bullets',
    },
    breakpoints: {
      // when window width is >= 1039px
      1039: {
        slidesPerView: 3,
        spaceBetween: 70,
        // initialSlide: 1
      },
      // when window width is >= 364px
      364: {
        slidesPerView: 1,
        // spaceBetween: 10
      }

    }
  })

  // Webinars Section:
  new swiper('.swiper-webinars', {

    loop: true,
    slidesPerView: 1,
    // initialSlide: 0,
    // spaceBetween: 35,
    pagination: {
      el: '.swiper-pagination-webinars',
      type: 'bullets',
    }

  })

}

export { initSwiper };