const initLogoScrolling = () => {
  const selectElement = (element) => document.querySelector(element);
  // const selectElementAll = (element) => document.querySelectorAll(element);
  let limit = 206.5;

  window.addEventListener('scroll', () => {
    if (window.scrollY >= limit) {
      selectElement('#logo-small').style.visibility = 'hidden';
      selectElement('#logo-small').style.opacity = 0;

      selectElement('#logo-big').style.visibility = 'hidden';
      selectElement('#logo-big').style.opacity = 0;

      selectElement('#logo-chevron-left').style.visibility = 'hidden';
      selectElement('#logo-chevron-left').style.opacity = 0;

      selectElement('#logo-chevron-right').style.visibility = 'hidden';
      selectElement('#logo-chevron-right').style.opacity = 0;
      
      selectElement('#logo-slash').style.visibility = 'hidden';
      selectElement('#logo-slash').style.opacity = 0;
    } else {
      selectElement('#logo-small').style.visibility = 'visible';
      selectElement('#logo-small').style.opacity = 1;

      selectElement('#logo-big').style.visibility = 'visible';
      selectElement('#logo-big').style.opacity = 1;

      selectElement('#logo-chevron-left').style.visibility = 'visible';
      selectElement('#logo-chevron-left').style.opacity = 1;

      selectElement('#logo-chevron-right').style.visibility = 'visible';
      selectElement('#logo-chevron-right').style.opacity = 1;

      selectElement('#logo-slash').style.visibility = 'visible';
      selectElement('#logo-slash').style.opacity = 1;
    }
    limit = window.scrollY;
  });
}
export { initLogoScrolling };