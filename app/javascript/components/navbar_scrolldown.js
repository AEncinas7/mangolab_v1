const initNavbarScrolldown = () => {

  document.addEventListener('scroll', () => {
    const navbar = document.querySelector('.menu-bar');
    // const navbarHeightOne = 126;
    // const navbarHeightTwo = 100;
  
    const distanceFromTop = Math.abs(
      document.body.getBoundingClientRect().top
    );
      
    if (distanceFromTop >= navbar.offsetHeight) {
      navbar.classList.add('white-menu');
    } else {
      navbar.classList.remove('white-menu');
    }
  });
}

export { initNavbarScrolldown };