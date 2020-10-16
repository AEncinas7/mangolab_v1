const initHomeChangeColorOnScroll = () => {
  const selectElement = (element) => document.querySelector(element);
  const selectElementAll = (element) => document.querySelectorAll(element);
  const boneColor = '#F0F0F0';
  const charcoalColor = '#454545';

  window.addEventListener('scroll', () => {

    if (window.scrollY >= 206.5 && window.scrollY <= 1032.5) {
      selectElement('.color-container').style.backgroundColor = 'black';
      selectElement('#intro-js-change').style.color = boneColor;
      selectElement('.lets-talk-btn-js-change').classList.remove('lets-talk-btn');
      selectElement('.lets-talk-btn-js-change').classList.add('lets-talk-btn-change');
      selectElement('#about-us-js-change').style.color = boneColor;
      selectElement('#home-title').style.color = boneColor;
      selectElement('#home-description').style.color = boneColor;
      selectElement('#home-step').style.color = boneColor;
      selectElement('.what-we-do-btn-js-change').classList.remove('what-we-do-btn');
      selectElement('.what-we-do-btn-js-change').classList.add('what-we-do-btn-change');
      
    } else {
      selectElement('.color-container').style.backgroundColor = 'white';
      selectElement('#intro-js-change').style.color = charcoalColor;
      selectElement('.lets-talk-btn-js-change').classList.add('lets-talk-btn');
      selectElement('.lets-talk-btn-js-change').classList.remove('lets-talk-btn-change');
      selectElement('#about-us-js-change').style.color = charcoalColor;
      selectElement('#home-title').style.color = charcoalColor;
      selectElement('#home-description').style.color = charcoalColor;
      selectElement('#home-step').style.color = charcoalColor;
      selectElement('.what-we-do-btn-js-change').classList.remove('what-we-do-btn-change');
      selectElement('.what-we-do-btn-js-change').classList.add('what-we-do-btn');

    }

    // if (window.scrollY >= 1526 && window.scrollY <= 3756) {
      
    if (window.scrollY >= 3052) {
      selectElement('.verticals-container').style.backgroundColor = 'black';
      selectElement('#verticals-js-change').style.color = boneColor;
      selectElement('.learn-more-btn-js-change').classList.remove('learn-more-btn');
      selectElement('.learn-more-btn-js-change').classList.add('learn-more-btn-change');
    }
     else {
      selectElement('.verticals-container').style.backgroundColor = 'white';
      selectElement('#verticals-js-change').style.color = charcoalColor;
      selectElement('.learn-more-btn-js-change').classList.remove('learn-more-btn-change');
      selectElement('.learn-more-btn-js-change').classList.add('learn-more-btn');
    }
  });


}

export { initHomeChangeColorOnScroll };