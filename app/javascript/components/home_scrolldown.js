const initHomeChangeColorOnScroll = () => {
  const selectElement = (element) => document.querySelector(element);
  const selectElementAll = (element) => document.querySelectorAll(element);

  const boneColor = '#F0F0F0';
  const charcoalColor = '#454545';

  const rootPath = '/';
  const homePath = '/home';

  const transformToBlackTop = () => {
    selectElement('.color-container').style.backgroundColor = 'black';
    selectElement('#intro-js-change').style.color = boneColor;
    selectElement('.lets-talk-btn-js-change').classList.remove('lets-talk-btn');
    selectElement('.lets-talk-btn-js-change').classList.add('lets-talk-btn-change');

    selectElement('#about-it').style.color = boneColor;

    selectElement('#about-us-js-change').style.color = boneColor;
    selectElement('#swiper-about').style.color = boneColor;
    selectElement('.ceo').style.backgroundColor = 'black';
    selectElement('.cto').style.backgroundColor = 'black';
    selectElement('#home-title').style.color = boneColor;
    selectElement('#home-description').style.color = boneColor;
    selectElement('#home-step').style.color = boneColor;
    selectElement('.what-we-do-btn-js-change').classList.remove('what-we-do-btn');
    selectElement('.what-we-do-btn-js-change').classList.add('what-we-do-btn-change');
  }

  const transformToWhiteTop = () => {
    selectElement('.color-container').style.backgroundColor = 'white';
    selectElement('#intro-js-change').style.color = charcoalColor;
    selectElement('.lets-talk-btn-js-change').classList.add('lets-talk-btn');
    selectElement('.lets-talk-btn-js-change').classList.remove('lets-talk-btn-change');

    selectElement('#about-it').style.color = charcoalColor;



    selectElement('#about-us-js-change').style.color = charcoalColor;
    selectElement('#swiper-about').style.color = charcoalColor;
    selectElement('.ceo').style.backgroundColor = 'white';
    selectElement('.cto').style.backgroundColor = 'white';
    selectElement('#home-title').style.color = charcoalColor;
    selectElement('#home-description').style.color = charcoalColor;
    selectElement('#home-step').style.color = charcoalColor;
    selectElement('.what-we-do-btn-js-change').classList.remove('what-we-do-btn-change');
    selectElement('.what-we-do-btn-js-change').classList.add('what-we-do-btn');
  }

  const transformToBlackBottom = () => {
    selectElement('.verticals-container').style.backgroundColor = 'black';
    selectElement('#verticals-js-change').style.color = boneColor;
    selectElement('.learn-more-btn-js-change').classList.remove('learn-more-btn');
    selectElement('.learn-more-btn-js-change').classList.add('learn-more-btn-change');
  }

  const transformToWhiteBottom = () => {
    selectElement('.verticals-container').style.backgroundColor = 'white';
    selectElement('#verticals-js-change').style.color = charcoalColor;
    selectElement('.learn-more-btn-js-change').classList.remove('learn-more-btn-change');
    selectElement('.learn-more-btn-js-change').classList.add('learn-more-btn');
  }

  window.addEventListener('scroll', () => {
    if (window.location.pathname === rootPath || window.location.pathname === homePath) {

      if (window.scrollY >= 206.5 && window.scrollY <= 1032.5) {
        transformToBlackTop();       
      } else {
        transformToWhiteTop(); 
      }
  
      if (window.scrollY >= 2927) {
        transformToBlackBottom();
      }
       else {
        transformToWhiteBottom();
      }
    }
  });


}

export { initHomeChangeColorOnScroll };