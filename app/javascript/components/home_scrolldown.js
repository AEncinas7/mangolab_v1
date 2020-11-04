const initHomeChangeColorOnScroll = () => {
  const selectElement = (element) => document.querySelector(element);
  const selectElementAll = (element) => document.querySelectorAll(element);

  const boneColor = '#F0F0F0';
  const charcoalColor = '#454545';

  const rootPath = '/';
  const homePath = '/home';

  const transformToBlackTop = () => {
    // Main colored container:
    selectElement('.color-container').style.backgroundColor = 'black';

    // Home intro changes:
    selectElement('#intro-js-change').style.color = boneColor;
    selectElement('.lets-talk-btn-js-change').classList.remove('lets-talk-btn');
    selectElement('.lets-talk-btn-js-change').classList.add('lets-talk-btn-change');
        
    // Home IT Services:
    selectElement('#about-it').style.color = boneColor;
    selectElementAll('.home-btn').forEach(btn => btn.style.color = boneColor);
    selectElement('#it-services-text').style.color = boneColor;

    selectElement('#home-title').style.color = boneColor;
    selectElement('#home-description').style.color = boneColor;
    selectElement('#home-step').style.color = boneColor;


    // Home About us changes:
    selectElement('#about-us-js-change').style.color = boneColor;
    selectElement('#swiper-about').style.color = boneColor;
    selectElement('.ceo').style.backgroundColor = 'black';
    selectElement('.cto').style.backgroundColor = 'black';
  }

  const transformToWhiteTop = () => {
    // Main colored container:
    selectElement('.color-container').style.backgroundColor = 'white';

    // Home intro changes:
    selectElement('#intro-js-change').style.color = charcoalColor;
    selectElement('.lets-talk-btn-js-change').classList.add('lets-talk-btn');
    selectElement('.lets-talk-btn-js-change').classList.remove('lets-talk-btn-change');
    
    // Home IT Services:
    selectElement('#about-it').style.color = charcoalColor;
    selectElementAll('.home-btn').forEach(btn => btn.style.color = charcoalColor);
    selectElement('#it-services-text').style.color = charcoalColor;


   
    selectElement('#home-title').style.color = charcoalColor;
    selectElement('#home-description').style.color = charcoalColor;
    selectElement('#home-step').style.color = charcoalColor;


    // Home About us changes:
    selectElement('#about-us-js-change').style.color = charcoalColor;
    selectElement('#swiper-about').style.color = charcoalColor;
    selectElement('.ceo').style.backgroundColor = 'white';
    selectElement('.cto').style.backgroundColor = 'white';
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
      // 1032.5
      if (window.scrollY >= 206.5 && window.scrollY <= 1676) {
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