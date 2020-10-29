const initNavbarScrolldown = () => {
  const selectElement = (element) => document.querySelector(element);
  const selectElementAll = (element) => document.querySelectorAll(element);
  
  const boneColor = '#F0F0F0';
  const charcoalColor = '#454545';
  
  const rootPath = '/';
  const homePath = '/home';
  const servicesPath = '/services';
  const processPath = '/process';
  const verticalsPath = '/verticals';

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

  window.addEventListener('scroll', () => {   

    if (window.location.pathname === rootPath || window.location.pathname === homePath) {

      if (window.scrollY >= 206.5 && window.scrollY <= 1032.5) {
        navbarBlackColor();
      } else {
        navbarWhiteColor();
      }
  
      if (window.scrollY >= 2927) {
        navbarBlackColor();
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
      
    } else if (window.location.pathname === processPath || window.location.pathname === verticalsPath) {
        navbarBlackColor();
    }

  });
}

export { initNavbarScrolldown };