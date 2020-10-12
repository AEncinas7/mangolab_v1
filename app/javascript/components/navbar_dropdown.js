const initNavbarDropdown = () => {
  const selectElement = (element) => document.querySelector(element);
  const icons = document.querySelector('.menu-icons');

  icons.addEventListener('click', (element) => {
    selectElement('.menu-bar').classList.toggle('active');

    if (selectElement('.menu-btn').style.display === "block") {
      selectElement('.menu-btn').style.display === "none";
    }
    
    if (selectElement('.close-btn').style.display === "none") {
      selectElement('.close-btn').style.display === "display";
    }
    // selectElement('.menu-btn').style.display = "none";
    // selectElement('.close-btn').style.display = "block";
  });


}

export { initNavbarDropdown };