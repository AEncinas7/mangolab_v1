// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

// External Imports:
import 'bootstrap';
import 'slick-carousel/slick/slick';
import { initNavbarDropdown } from '../components/navbar_dropdown';
import { initNavbarScrolldown } from '../components/navbar_scrolldown';
import { initHomeChangeColorOnScroll } from '../components/home_scrolldown';
import { initLogoScrolling } from '../components/logo_scrolling';
import { initTimer } from '../components/timer';
// import { initAboutUsCarousel } from '../components/about-us-carousel';
import { initSwiper } from '../plugins/swiper';

document.addEventListener('turbolinks:load', () => {
  initNavbarDropdown();
  initNavbarScrolldown();
  initHomeChangeColorOnScroll();
  initLogoScrolling();
  initTimer();
  // initAboutUsCarousel();
  initSwiper();
});