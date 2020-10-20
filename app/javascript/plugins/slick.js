
const initHomeSlick = () => {
  
  jQuery(function () {
    $('.single-item').slick({
      dots: true,
      // slidesToShow: 1,
      arrows: false,
      draggable: true
    });
  })

}

export { initHomeSlick };