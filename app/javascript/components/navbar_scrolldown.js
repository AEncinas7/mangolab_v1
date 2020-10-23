const initNavbarScrolldown = () => {
  const selectElement = (element) => document.querySelector(element);
  const selectElementAll = (element) => document.querySelectorAll(element);

  const boneColor = '#F0F0F0';
  const charcoalColor = '#454545';

  window.addEventListener('scroll', () => {   

    if (window.location.pathname === '/home') {

      if (window.scrollY >= 206.5 && window.scrollY <= 1032.5) {
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
      } else {
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
  
      if (window.scrollY >= 2927) {
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

    } else if (window.location.pathname === '/services' || window.location.pathname === '/process' || window.location.pathname === '/verticals') {
      // window.scrollY >= 206.5 && 
      if (window.scrollY >= 0 && window.scrollY <= 1032.5) {
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
      } else {
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

      if (window.scrollY >= 2927) {
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

    }

  });
}

export { initNavbarScrolldown };