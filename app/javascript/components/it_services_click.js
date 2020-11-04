const initItServicesClick = () => {
  const selectElement = (element) => document.querySelector(element);
  const ItBtns = document.querySelectorAll('.home-btn');


  ItBtns.forEach(btn => {
    btn.addEventListener('click', (event) => {
      event.preventDefault();
      if (btn.classList != 'home-btn-text') {
        selectElement('.home-btn.home-btn-black.active').classList.remove('home-btn-black', 'active');
        btn.classList.add('home-btn-black', 'active');
      }
    })
  })
}

export { initItServicesClick };