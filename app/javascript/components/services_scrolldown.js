const initServicesChangeColorOnScroll = () => {

  const selectElement = (element) => document.querySelector(element);
  const selectElementAll = (element) => document.querySelectorAll(element);

  const boneColor = '#F0F0F0';
  const charcoalColor = '#454545';

  const servicesPath = '/services';

  const transformToBlack = () => {
    // Services Intro section:
    selectElement('.services-color-container').style.backgroundColor = 'black';
    selectElement('#services-intro-js-change').style.color = boneColor;

    // Services Body section:
    selectElement('#web-dev-mob-app').style.color = boneColor;
    selectElementAll('.services-btn').forEach(ele => ele.classList.remove('services-btn-white'));
    selectElementAll('.services-btn').forEach(ele => ele.classList.add('services-btn-black'));
    selectElementAll('.services-btn').forEach(ele => ele.style.color = boneColor);
    selectElementAll('.services-paths').forEach(ele => ele.style.fill = boneColor);
    selectElementAll('.swiper-pagination-services').forEach( ele => {
      let bulletObject = ele.children;
      Object.values(bulletObject).forEach(bullet => bullet.style.backgroundColor = boneColor);
    });
    
    selectElement('#prod-design-ana-seo').style.color = boneColor;
    selectElement('#api-development').style.color = boneColor;
    selectElement('.services-lets-talk-container').style.backgroundColor = 'black';
    selectElement('.services-lets-talk-container').style.color = boneColor;
  }
  
  const transformToWhite = () => {
    // Services Intro section:
    selectElement('.services-color-container').style.backgroundColor = 'white';
    selectElement('#services-intro-js-change').style.color = charcoalColor;
    
    // Services Body section:
    selectElement('#web-dev-mob-app').style.color = charcoalColor;
    selectElementAll('.services-btn').forEach(ele => ele.classList.remove('services-btn-black'));
    selectElementAll('.services-btn').forEach(ele => ele.classList.add('services-btn-white'));
    selectElementAll('.services-btn').forEach(ele => ele.style.color = charcoalColor);
    selectElementAll('.services-paths').forEach(ele => ele.style.fill = charcoalColor);
    selectElementAll('.swiper-pagination-services').forEach(ele => {
      let bulletObject = ele.children;
      Object.values(bulletObject).forEach(bullet => bullet.style.backgroundColor = charcoalColor);
    });
    
    selectElement('#prod-design-ana-seo').style.color = charcoalColor;
    selectElement('#api-development').style.color = charcoalColor;
    selectElement('.services-lets-talk-container').style.backgroundColor = 'white';
    selectElement('.services-lets-talk-container').style.color = charcoalColor;
    
  }

  if (window.location.pathname === servicesPath) {
    transformToBlack();
  }

  window.addEventListener('scroll', () => {
    if (window.location.pathname === servicesPath) {

      if (window.screen.width > 1039) {
      
        if (window.scrollY >= 1825 && window.scrollY <= 3287) {
          transformToWhite();
        }
        else {
          transformToBlack();
        }

      } else if (window.screen.width <= 1039 && window.screen.width > 654) {

        if (window.scrollY >= 1825 && window.scrollY <= 3287) {
          transformToWhite();
        }
        else {
          transformToBlack();
        }

      } else if (window.screen.width <= 654 && window.screen.width > 530) {

        if (window.scrollY >= 1825 && window.scrollY <= 3287) {
          transformToWhite();
        }
        else {
          transformToBlack();
        }

      } else if (window.screen.width <= 530 && window.screen.width > 420) {

        if (window.scrollY >= 1825 && window.scrollY <= 3287) {
          transformToWhite();
        }
        else {
          transformToBlack();
        }

      } else if (window.screen.width <= 420 && window.screen.width > 364) {

        if (window.scrollY >= 1825 && window.scrollY <= 3287) {
          transformToWhite();
        }
        else {
          transformToBlack();
        }
        
      }

    }

  });

}

export { initServicesChangeColorOnScroll };