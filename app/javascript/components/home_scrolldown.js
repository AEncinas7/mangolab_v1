const initHomeChangeColorOnScroll = () => {
  const selectElement = (element) => document.querySelector(element);
  const boneColor = '#F0F0F0';
  const charcoalColor = '#454545';


  window.addEventListener('scroll', () => {
    if(window.scrollY >= 206.5) {
      selectElement('.color-container').style.backgroundColor = 'black';
      selectElement('#intro-js-change').style.color = boneColor;
      selectElement('.lets-talk-btn-js-change').classList.remove('lets-talk-btn');
      selectElement('.lets-talk-btn-js-change').classList.add('lets-talk-btn-change');

      selectElement('#about-us-js-change').style.color = boneColor;

    } else {
      selectElement('.color-container').style.backgroundColor = 'white';
      selectElement('#intro-js-change').style.color = charcoalColor;
      selectElement('.lets-talk-btn-js-change').classList.add('lets-talk-btn');
      selectElement('.lets-talk-btn-js-change').classList.remove('lets-talk-btn-change');


      selectElement('#about-us-js-change').style.color = charcoalColor;
    }
  });

}

export { initHomeChangeColorOnScroll };