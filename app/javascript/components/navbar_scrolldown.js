const initNavbarScrolldown = () => {
  const selectElement = (element) => document.querySelector(element);
  const selectElementAll = (element) => document.querySelectorAll(element);
  
  const boneColor = '#F0F0F0';
  const charcoalColor = '#454545';
  
  const rootPath = '/';
  const homePath = '/home';
  const servicesPath = '/services';
  const processPath = '/process';
  const industriesPath = '/industries';
  const webinarsPath = '/webinars';

  const navbarBlackColor = () => {
    selectElement('.menu-bar').style.backgroundColor = 'black';
    selectElementAll('.btn-white').forEach(ele => ele.style.color = boneColor);

    selectElement('.free-consultation-btn').classList.remove('black-background');
    selectElement('.free-consultation-btn').classList.add('white-background');
    selectElement('.btn-black').style.color = 'black';

    selectElement('#logo-big').style.fill = boneColor;
    selectElement('#logo-small').style.fill = boneColor;

    selectElement('#menu-color-one').style.fill = boneColor;
    selectElement('#menu-color-two').style.fill = boneColor;
    selectElement('#menu-color-three').style.fill = boneColor;

    selectElement('#close-color-one').style.stroke = boneColor;
    selectElement('#close-color-two').style.stroke = boneColor;
  }

  const navbarWhiteColor = () => {
    selectElement('.menu-bar').style.backgroundColor = 'white';
    selectElementAll('.btn-white').forEach(ele => ele.style.color = charcoalColor);

    selectElement('.free-consultation-btn').classList.remove('white-background');
    selectElement('.free-consultation-btn').classList.add('black-background');
    selectElement('.btn-black').style.color = 'white';

    selectElement('#logo-big').style.fill = charcoalColor;
    selectElement('#logo-small').style.fill = charcoalColor;

    selectElement('#menu-color-one').style.fill = charcoalColor;
    selectElement('#menu-color-two').style.fill = charcoalColor;
    selectElement('#menu-color-three').style.fill = charcoalColor;

    selectElement('#close-color-one').style.stroke = charcoalColor;
    selectElement('#close-color-two').style.stroke = charcoalColor;
  }

  if (window.location.pathname === homePath || window.location.pathname === rootPath || window.location.pathname === webinarsPath) {
    navbarWhiteColor();
  } else {
    navbarBlackColor();
  }

  window.addEventListener('scroll', () => {   

    if (window.location.pathname === rootPath || window.location.pathname === homePath) {
  
      if (window.screen.width > 1039) {

        if (window.scrollY >= 206.5 && window.scrollY <= 1886) {
          navbarBlackColor();
        } else {
          navbarWhiteColor();
        }

    
        if (window.scrollY >= 2760) {
          navbarBlackColor();
        }

      } else if (window.screen.width <= 1039 && window.screen.width > 654) {

        if (window.scrollY >= 206.5 && window.scrollY <= 2107) {
          navbarBlackColor();
        } else {
          navbarWhiteColor();
        }


        if (window.scrollY >= 2927) {
          navbarBlackColor();
        }

      } else if (window.screen.width <= 654 && window.screen.width > 530) {

        if (window.scrollY >= 206.5 && window.scrollY <= 2097) {
          navbarBlackColor();
        } else {
          navbarWhiteColor();
        }


        if (window.scrollY >= 2927) {
          navbarBlackColor();
        }

      } else if (window.screen.width <= 530 && window.screen.width > 420) {

        if (window.scrollY >= 206.5 && window.scrollY <= 2124) {
          navbarBlackColor();
        } else {
          navbarWhiteColor();
        }


        if (window.scrollY >= 2927) {
          navbarBlackColor();
        }

      } else if (window.screen.width <= 420 && window.screen.width > 364) {

        if (window.scrollY >= 206.5 && window.scrollY <= 2135) {
          navbarBlackColor();
        } else {
          navbarWhiteColor();
        }


        if (window.scrollY >= 2927) {
          navbarBlackColor();
        }

      }

    } else if (window.location.pathname === servicesPath) {
  
      if (window.scrollY <= 413) {
          navbarBlackColor();
        } else {
          navbarWhiteColor();
        }
        

        if (window.scrollY >= 3504) {
          navbarBlackColor();
        }
      
    } else if (window.location.pathname === processPath || window.location.pathname === industriesPath) {

        navbarBlackColor();

    } else if (window.location.pathname === webinarsPath) {

        navbarWhiteColor();
        
    }

  });
}

export { initNavbarScrolldown };