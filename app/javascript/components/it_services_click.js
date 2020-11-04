const initItServicesClick = () => {
  const selectElement = (element) => document.querySelector(element);
  const ItBtns = document.querySelectorAll('.home-btn');

  const title = document.getElementById('it-services-title');
  const text = document.getElementById('it-services-description');

  // Content to be changed:
  const webDevTitle = 'Website Development';
  const webDevText = 'MangoLab turns your business idea into a launched product by guiding your journey through a personalized and custom software development to meet your goals.';

  const mobileAppTitle = 'Mobile Application';
  const mobileAppText = 'MangoLab turns your business idea into a launched product by guiding your journey through a personalized and custom software development to meet your goals.';

  const prodDesignTitle = 'Product Design';
  const prodDesignText = 'MangoLab turns your business idea into a launched product by guiding your journey through a personalized and custom software development to meet your goals.';

  const analyticTitle = 'Analytics & SEO';
  const analyticText = 'MangoLab turns your business idea into a launched product by guiding your journey through a personalized and custom software development to meet your goals.';

  const apiDevTitle = 'API Development';
  const apiDevText = 'MangoLab turns your business idea into a launched product by guiding your journey through a personalized and custom software development to meet your goals.';



  ItBtns.forEach(btn => {
    btn.addEventListener('click', (event) => {
      event.preventDefault();

      if (btn.classList != 'home-btn-black') {
        selectElement('.home-btn.home-btn-black.active').classList.remove('home-btn-black', 'active');
        btn.classList.add('home-btn-black', 'active'); 

        if (btn.innerText == 'WEB DEVELOPMENT') {
          title.innerText = webDevTitle;
          text.innerText = webDevText;
        } else if (btn.innerText == 'MOBILE APPLICATION') {
          title.innerText = mobileAppTitle;
          text.innerText = mobileAppText;
        } else if (btn.innerText == 'PRODUCT DESIGN') {
          title.innerText = prodDesignTitle;
          text.innerText = prodDesignText;
        } else if (btn.innerText == 'ANALYTICS & SEO') {
          title.innerText = analyticTitle;
          text.innerText = analyticText;
        } else if (btn.innerText == 'API DEVELOPMENT') {
          title.innerText = apiDevTitle;
          text.innerText = apiDevText;
        }
      }
    })
    
    // if (btn.classList == 'active') {
    //   console.log('ok');
      
    // }
  })


}

export { initItServicesClick };