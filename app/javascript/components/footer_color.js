const initFooterColor = () => {
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

  const footerBlackColor = () => {

  }

  const footerWhite = () => {
    selectElement('.black-footer').style.backgroundColor = 'white';
    selectElement('.border-top-footer').style.color = charcoalColor;
    selectElement('.footer-container').style.color = charcoalColor;
    selectElement('#mail-icon').style.fill = charcoalColor;
    selectElement('#linkedin-icon').style.fill = charcoalColor;
    selectElementAll('#insta-icon').forEach(ele => ele.style.fill = charcoalColor);
    selectElement('#face-icon').style.fill = charcoalColor;
  }

  if (window.location.pathname === webinarsPath) {
    footerWhite();
  }

}

export { initFooterColor };