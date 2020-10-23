const initNavbarDropdown = () => {
  const selectElement = (element) => document.querySelector(element);
  const icons = document.querySelector('.menu-icons');

  // const tempFixedPosition = (element) => {
  //   element.style.position = 'fixed';
  //   element.style.top = element.getBoundingClientRect().top;
  //   element.style.right = element.getBoundingClientRect().right;
  // }

  icons.addEventListener('click', (element) => {
    
    
    selectElement('.menu-bar').classList.toggle('active');
    // selectElement('.menu-bar').classList.toggle('z-index');
    
    selectElement('.menu-btn').classList.toggle('btn-hiden');
    selectElement('.close-btn').classList.toggle('btn-displayed');
    
    // if (icons.style.position === 'absolute') {
    //   tempFixedPosition(icons);
    // }
  });


}

export { initNavbarDropdown };