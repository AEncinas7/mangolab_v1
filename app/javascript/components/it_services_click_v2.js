const initItServicesClickV2 = () => {
  const selectElement = (element) => document.querySelector(element);
  const ItBtnsV2 = document.querySelectorAll('.home-btn-v2');


  ItBtnsV2.forEach(btn => {
    btn.addEventListener('click', (event) => {
      event.preventDefault();
      const textHeight = btn.nextElementSibling.offsetHeight;

      if (btn.classList != 'home-btn-black-v2') {
        selectElement('.home-btn-v2.home-btn-black-v2.active-v2').classList.remove('home-btn-black-v2', 'active-v2');
        btn.classList.add('home-btn-black-v2', 'active-v2');
      }
        
      if (!btn.parentElement.classList.contains('show-description')) {
        selectElement('.section.show-description').style.height = '44px';
        selectElement('.section.show-description').classList.remove('show-description');
        btn.parentElement.classList.add('show-description');
        
        if (btn.innerText === 'WEB DEVELOPMENT') {
          btn.parentElement.style.height = `${88 + textHeight}px`;
          console.log(btn.parentElement.style.height);
        } else if (btn.innerText === 'MOBILE APPLICATION') {
          btn.parentElement.style.height = `${88 + textHeight}px`;
          console.log(btn.parentElement.style.height);
        } else if (btn.innerText === 'PRODUCT DESIGN') {
          btn.parentElement.style.height = `${88 + textHeight}px`;
        } else if (btn.innerText === 'ANALYTICS & SEO') {
          btn.parentElement.style.height = `${88 + textHeight}px`;
        } else if (btn.innerText === 'API DEVELOPMENT') {
          btn.parentElement.style.height = `${88 + textHeight}px`;
        }

      }

    })
  })


}

export { initItServicesClickV2 };