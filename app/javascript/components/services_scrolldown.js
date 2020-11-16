const initServicesChangeColorOnScroll = () => {

  const selectElement = (element) => document.querySelector(element);
  const selectElementAll = (element) => document.querySelectorAll(element);

  const boneColor = '#F0F0F0';
  const charcoalColor = '#454545';

  const servicesPath = '/services';

  const transformToBlackTop = () => {
    // Services Intro section:
    selectElement('.services-color-container').style.backgroundColor = 'black';
    selectElement('#services-intro-js-change').style.color = boneColor;

    // Services Body section:
    selectElement('#web-dev-mob-app').style.color = boneColor;
    selectElementAll('.services-btn').forEach(ele => ele.classList.remove('services-btn-white'));
    selectElementAll('.services-btn').forEach(ele => ele.classList.add('services-btn-black'));
    selectElementAll('.services-btn').forEach(ele => ele.style.color = boneColor);
    selectElementAll('.services-paths').forEach(ele => ele.style.fill = boneColor);
  }
  
  const transformToWhiteTop = () => {
    // Services Intro section:
    selectElement('.services-color-container').style.backgroundColor = 'white';
    selectElement('#services-intro-js-change').style.color = charcoalColor;
    
    // Services Body section:
    selectElement('#web-dev-mob-app').style.color = charcoalColor;
    selectElementAll('.services-btn').forEach(ele => ele.classList.remove('services-btn-black'));
    selectElementAll('.services-btn').forEach(ele => ele.classList.add('services-btn-white'));
    selectElementAll('.services-btn').forEach(ele => ele.style.color = charcoalColor);
    selectElementAll('.services-paths').forEach(ele => ele.style.fill = charcoalColor);


  }

  if (window.location.pathname === servicesPath) {
    transformToBlackTop();
  }

  window.addEventListener('scroll', () => {
    if (window.location.pathname === servicesPath) {

      if (window.screen.width > 1039) {
      
        if (window.scrollY <= 1726) {
          transformToBlackTop();
        }
        else {
          transformToWhiteTop();
        }

      }

    }

  });

}

export { initServicesChangeColorOnScroll };