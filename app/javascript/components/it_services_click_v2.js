const initItServicesClickV2 = () => {
  const selectElement = (element) => document.querySelector(element);
  const ItBtnsV2 = document.querySelectorAll('.home-btn-v2');
  const content = document.querySelector('.section-description');


  ItBtnsV2.forEach(btn => {
    btn.addEventListener('click', (event) => {
      event.preventDefault();

      if (btn.classList != 'home-btn-black-v2') {
        selectElement('.home-btn-v2.home-btn-black-v2.active-v2').classList.remove('home-btn-black-v2', 'active-v2');
        btn.classList.add('home-btn-black-v2', 'active-v2');
      }
      
      content.classList.toggle('show-description');

    })
  })


}

export { initItServicesClickV2 };