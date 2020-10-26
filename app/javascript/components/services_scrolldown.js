const initServicesChangeColorOnScroll = () => {

  const selectElement = (element) => document.querySelector(element);
  const selectElementAll = (element) => document.querySelectorAll(element);

  const boneColor = '#F0F0F0';
  const charcoalColor = '#454545';

  const servicesPath = '/services';

  const transformToBlackTop = () => {

    selectElement('.services-color-container').style.backgroundColor = 'black';
    selectElement('#services-intro-js-change').style.color = boneColor;

    selectElement('#services-ux-ui').style.color = boneColor;
    selectElement('#services-ux-ui-swiper').style.color = boneColor;
    Array.from(selectElement('.swiper-pagination-services-ux-ui').children).forEach(e => e.style.background = boneColor);

  }

  const transformToWhiteTop = () => {
    selectElement('.services-color-container').style.backgroundColor = 'white';
    selectElement('#services-intro-js-change').style.color = charcoalColor;

    selectElement('#services-ux-ui').style.color = charcoalColor;
    selectElement('#services-ux-ui-swiper').style.color = charcoalColor;
    Array.from(selectElement('.swiper-pagination-services-ux-ui').children).forEach(e => e.style.background = charcoalColor);

  }

  window.addEventListener('scroll', () => {
    if (window.location.pathname === servicesPath) {

      if (window.scrollY >= 206.5 && window.scrollY <= 1032.5) {
        transformToWhiteTop();
      }
      else {
        transformToBlackTop();
      }

      // if (window.scrollY >= 2927) {

      // }

    }

  });

}

export { initServicesChangeColorOnScroll };