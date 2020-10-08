const initNavbarDropdown = () => {
  const selectElement = (element) => document.querySelector(element);
  const icons = document.querySelector('.menu-icons');

  icons.addEventListener('click', (element) => {
    selectElement('header').classList.toggle('active');
  });
}

export { initNavbarDropdown };