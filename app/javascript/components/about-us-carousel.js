const initAboutUsCarousel = () => {

  const track = document.querySelector('.carousel-about-us-container');
  const slides = Array.from(track.children);
  const dotsAboutUsNav = document.querySelector('.carousel-about-us-nav');
  const aboutUsDots = Array.from(dotsAboutUsNav.children);
  const slideWidth = slides[0].getBoundingClientRect().width;
  // console.log(slides[0]);
  // console.log(slides[0].getBoundingClientRect());
  // console.log(slideWidth);

  // arrange the slides next to one another
  slides[0].style.left = 0 + 'px';

  if(track.style.width = '530px') {
    slides[1].style.left = '530px';
  }
  
  // const setSlidePosition = (slide, index) => {
  //   slide.style.left = slideWidth * index + 'px';
  // }
  // slides.forEach(setSlidePosition);


  // when I click the nav indicators, move to that slide

  const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-about-us-slide');  
    targetSlide.classList.add('current-about-us-slide');  
  }

  const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-about-us-slide');
    targetDot.classList.add('current-about-us-slide');
  }

  dotsAboutUsNav.addEventListener('click', (e) => {
    // what indicator was clicked on?
    const targetDot = e.target.closest('button');
    console.log(targetDot);

    const currentSlide = track.querySelector('.current-about-us-slide');
    const currentDot = dotsAboutUsNav.querySelector('.current-about-us-slide');
    const targetIndex = aboutUsDots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);

  });
  

}

export { initAboutUsCarousel };