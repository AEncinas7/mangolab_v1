const initNavbarDropdown = () => {
  const selectElement = (element) => document.querySelector(element);
  const icons = document.querySelector('.menu-icons');

  icons.addEventListener('click', (element) => {
    selectElement('.menu-bar').classList.toggle('active');

    selectElement('.menu-btn').classList.toggle('btn-hiden');
    selectElement('.close-btn').classList.toggle('btn-displayed');
  });


}

export { initNavbarDropdown };