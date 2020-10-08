const initNavbarDropdown = () => {
  const selectElement = (element) => document.querySelector(element);

  selectElement('.menu-icons'),addEventListener('click', () => {
    selectElement('body').classList.toggle('active');
  });
}

export { initNavbarDropdown };