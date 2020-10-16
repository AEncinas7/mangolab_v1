const initNavbarScrolldown = () => {
  const selectElement = (element) => document.querySelector(element);
  const selectElementAll = (element) => document.querySelectorAll(element);

  const boneColor = '#F0F0F0';
  const charcoalColor = '#454545';

  window.addEventListener('scroll', () => {   

    if (window.scrollY >= 206.5 && window.scrollY <= 1032.5) {
      selectElement('.menu-bar').style.backgroundColor = 'black';
      selectElementAll('.btn-white').forEach(ele => ele.style.color = boneColor);

      selectElement('.free-consultation-btn').classList.remove('black-background');
      selectElement('.free-consultation-btn').classList.add('white-background');
      selectElement('.btn-black').style.color = 'black';

      selectElement('#logo-big').style.fill = boneColor;
      selectElement('#logo-small').style.fill = boneColor;
    } else {
      selectElement('.menu-bar').style.backgroundColor = 'white';
      selectElementAll('.btn-white').forEach(ele => ele.style.color = charcoalColor);

      selectElement('.free-consultation-btn').classList.remove('white-background');
      selectElement('.free-consultation-btn').classList.add('black-background');
      selectElement('.btn-black').style.color = 'white';

      selectElement('#logo-big').style.fill = charcoalColor;
      selectElement('#logo-small').style.fill = charcoalColor;
    }
  });
}

export { initNavbarScrolldown };