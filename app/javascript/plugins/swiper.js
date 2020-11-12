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

    // loop: true,
    slidesPerView: 1,
    initialSlide: 0,
    pagination: {
      el: '.swiper-pagination-webinars',
      type: 'bullets',
    }

  })

}

export { initSwiper };