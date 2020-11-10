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
    selectElement('.bottom-container').style.color = boneColor;

    // Process and industries section:
    selectElement('.process-container').style.backgroundColor = 'black';
    selectElementAll('#home-title').forEach(ele => ele.style.color = boneColor);
    selectElementAll('#home-description').forEach(ele => ele.style.color = boneColor);
    selectElement('#home-step').style.color = boneColor;
    selectElement('.view-our-process-btn-js-change').classList.remove('view-our-process-btn');
    selectElement('.view-our-process-btn-js-change').classList.add('view-our-process-btn-change');
  
    selectElementAll('#home-title-v2').forEach(ele => ele.style.color = boneColor);

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
    selectElement('.bottom-container').style.color = charcoalColor;
   
    // Process and industries section:
    selectElement('.process-container').style.backgroundColor = 'white';
    selectElementAll('#home-title').forEach(ele => ele.style.color = charcoalColor);
    selectElementAll('#home-description').forEach(ele => ele.style.color = charcoalColor);
    selectElement('#home-step').style.color = charcoalColor;
    selectElement('.view-our-process-btn-js-change').classList.remove('view-our-process-btn-change');
    selectElement('.view-our-process-btn-js-change').classList.add('view-our-process-btn');

    selectElementAll('#home-title-v2').forEach(ele => ele.style.color = charcoalColor);

  }

  const transformToBlackBottom = () => {
    // Industries section:
    selectElement('.industries-container').style.backgroundColor = 'black';
    selectElement('#industries-js-change').style.color = boneColor;
    selectElement('.discover-more-btn-js-change').classList.remove('discover-more-btn');
    selectElement('.discover-more-btn-js-change').classList.add('discover-more-btn-change');
    
    // Industries Section:
    selectElement('.industries-description').style.color = boneColor;
    selectElement('.industries-title').style.color = boneColor;

    // Home About us changes:
    selectElement('.about-us-container').style.backgroundColor = 'black';
    selectElement('#about-us-js-change').style.color = boneColor;
    selectElement('#swiper-about').style.color = boneColor;
    selectElement('.about-us-head').style.color = boneColor;
  }

  const transformToWhiteBottom = () => {
    // Industries section:
    selectElement('.industries-container').style.backgroundColor = 'white';
    selectElement('#industries-js-change').style.color = charcoalColor;
    selectElement('.discover-more-btn-js-change').classList.remove('discover-more-btn-change');
    selectElement('.discover-more-btn-js-change').classList.add('discover-more-btn');
   
    // Industries Section:
    selectElement('.industries-description').style.color = charcoalColor;
    selectElement('.industries-title').style.color = charcoalColor;


    // Home About us changes:
    selectElement('.about-us-container').style.backgroundColor = 'white';
    selectElement('#about-us-js-change').style.color = charcoalColor;
    selectElement('#swiper-about').style.color = charcoalColor;
    selectElement('.about-us-head').style.color = charcoalColor;
  }

  window.addEventListener('scroll', () => {
    if (window.location.pathname === rootPath || window.location.pathname === homePath) {
    
      if (window.screen.width > 1039) {

        if (window.scrollY >= 206.5 && window.scrollY <= 1886) {
          transformToBlackTop();       
        } else {
          transformToWhiteTop(); 
        }
    

        if (window.scrollY >= 2760) {
          transformToBlackBottom();
        }
         else {
          transformToWhiteBottom();
        }

      } else if (window.screen.width > 654) {

        if (window.scrollY >= 206.5 && window.scrollY <= 2107) {
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

      } else if (window.screen.width > 530) {

        if (window.scrollY >= 206.5 && window.scrollY <= 2097) {
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

      } else if (window.screen.width > 420) {

        if (window.scrollY >= 206.5 && window.scrollY <= 2124) {
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

      } else if (window.screen.width > 364) {

        if (window.scrollY >= 206.5 && window.scrollY <= 2135) {
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

    }
  });

}

export { initHomeChangeColorOnScroll };