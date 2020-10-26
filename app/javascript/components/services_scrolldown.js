const initServicesChangeColorOnScroll = () => {

  const selectElement = (element) => document.querySelector(element);
  const selectElementAll = (element) => document.querySelectorAll(element);

  const boneColor = '#F0F0F0';
  const charcoalColor = '#454545';

  const servicesPath = '/services';

  const transformToBlackTop = () => {
    selectElement('.services-color-container').style.backgroundColor = 'white';
    selectElement('#services-intro').style.color = charcoalColor;
  }

  const transformToWhiteTop = () => {

  }

  window.addEventListener('scroll', () => {
    if (window.location.pathname === servicesPath) {

      if (window.scrollY >= 206.5 && window.scrollY <= 1032.5) {

      } else {
        
      }

      if (window.scrollY >= 2927) {

      }

    }

  }
}
