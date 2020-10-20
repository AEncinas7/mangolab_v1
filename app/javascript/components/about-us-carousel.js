const initAboutUsCarousel = () => {

  const track = document.querySelector('.carousel-about-us-container');
  const slides = Array.from(track.children);
  const dotsAboutUsNav = document.querySelector('.carousel-about-us-nav');
  const aboutUsDots = Array.from(dotsAboutUsNav.children);
  // const slideWidth = slides[0].getBoundingClientRect().width;
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


  // when i click the nav indicators, move to that slide

}

export { initAboutUsCarousel };