const initAboutUsCarousel = () => {
  
  const aboutContainer = document.querySelector('.carousel-about');

  const track = document.querySelector('.carousel-about-container');

  const slides = Array.from(track.children);
  const dotsAboutUsNav = document.querySelector('.carousel-about-nav');
  const aboutUsDots = Array.from(dotsAboutUsNav.children);

  let isDown = false;
  let startX;
  let scrollLeft;

  // const slideWidth = slides[0].getBoundingClientRect().width;
  // console.log(slides[0]);
  // console.log(slides[0].getBoundingClientRect());
  // console.log(slideWidth);

  // arrange the slides next to one another
  slides[0].style.left = 0 + 'px';

  if(aboutContainer.style.width = '530px') {
    slides[1].style.left = '530px';
  }
  
  // const setSlidePosition = (slide, index) => {
  //   slide.style.left = slideWidth * index + 'px';
  // }
  // slides.forEach(setSlidePosition);


  // when I click the nav indicators, move to that slide

  // const moveToSlide = (track, currentSlide, targetSlide) => {
  //   track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
  //   currentSlide.classList.remove('current-about-slide');  
  //   targetSlide.classList.add('current-about-slide');  
  // }

  // const updateDots = (currentDot, targetDot) => {
  //   currentDot.classList.remove('current-about-slide');
  //   targetDot.classList.add('current-about-slide');
  // }

  // dotsAboutUsNav.addEventListener('click', (e) => {
  //   // what indicator was clicked on?
  //   const targetDot = e.target.closest('button');

  //   const currentSlide = track.querySelector('.current-about-slide');
  //   const currentDot = dotsAboutUsNav.querySelector('.current-about-slide');
  //   const targetIndex = aboutUsDots.findIndex(dot => dot === targetDot);
  //   const targetSlide = slides[targetIndex];

  //   moveToSlide(track, currentSlide, targetSlide);
  //   updateDots(currentDot, targetDot);
  // });
  



  track.addEventListener('mousedown', (e) => {
    isDown = true;
    // track.classList.add('active');
    startX = e.pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
  });
  
  track.addEventListener('mouseleave', () => {
    isDown = false;
    // track.classList.remove('active');
  });
  
  track.addEventListener('mouseup', () => {
    isDown = false;
    // track.classList.remove('active');
  });

  track.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    const walk = (x - startX) * 5;
    // console.log(walk);
    track.scrollLeft = scrollLeft - walk;
  });

  track.addEventListener('scroll', () => {
    const ceo = document.querySelector('.ceo');

    const ceoX = (ceo.getBoundingClientRect().x);
    console.log(ceoX);

    const ceoXdelta = ceo.getBoundingClientRect().x + 530;
    console.log(ceoXdelta);

    const delta = Math.abs(ceoXdelta) - Math.abs(ceoX);
    console.log(delta);
    // const distanceX = (ceo.getBoundingClientRect().x - 530);
  
    // console.log(distanceX);

    // const deltaX = distanceX + ceoX;

    // if (deltaX === -1466) {
    //   aboutUsDots[0].classList.remove('current-about-slide');
    //   aboutUsDots[1].classList.add('current-about-slide');
    // } else if (deltaX === -406) {
    //   aboutUsDots[0].classList.add('current-about-slide');
    //   aboutUsDots[1].classList.remove('current-about-slide');
    // }

  });
}

export { initAboutUsCarousel };