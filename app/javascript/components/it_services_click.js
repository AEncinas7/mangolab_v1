const initItServicesClick = () => {
  const selectElement = (element) => document.querySelector(element);
  const ItBtns = document.querySelectorAll('.home-btn');

  const title = document.getElementById('it-services-title');
  const text = document.getElementById('it-services-description');

  // Content to be changed:
  const webDevTitle = 'Website Development';
  const webDevText = 'Dive into our deep web development expertise to build any web solution your company feels the need to receive: from single-page websites to online stores and including everything in between.';

  const mobileAppTitle = 'Mobile Application';
  const mobileAppText = 'Get the best experience for your users utilizing the expertise of MangoLab mobile software developers. We build Android, iOS, and PWA solutions to meet all the modern requirements and utilize best practices in terms of functionality, security, scalability and other parameters.';

  const prodDesignTitle = 'Product Design';
  const prodDesignText = 'MangoLab delivers value to customers by focusing on their needs and understanding their behavior. We believe that the most effective way to introduce technology into an organization is by delivering a user-friendly interface and delivering outstanding user experience. Naturally, those are the services we focus on.';

  const analyticTitle = 'Analytics & SEO';
  const analyticText = 'Develop sustainable strategies to bring more traffic, boost sales and increase sign ups thanks to our team of experts that will optimize each part of your product.';

  const apiDevTitle = 'API Development';
  const apiDevText = 'At MangoLab, we deliver web API development services, enabling smooth integration with your existing apps. According to your specific requirements, we will help you to streamline business processes, while leveraging reliable and secure development approaches.';



  ItBtns.forEach(btn => {
    btn.addEventListener('click', (event) => {
      event.preventDefault();

      if (btn.classList != 'home-btn-black') {
        selectElement('.home-btn.home-btn-black.active').classList.remove('home-btn-black', 'active');
        btn.classList.add('home-btn-black', 'active'); 

        if (btn.innerText == 'WEB DEVELOPMENT') {
          title.innerText = webDevTitle;
          text.innerText = webDevText;
        } else if (btn.innerText == 'MOBILE APPLICATION') {
          title.innerText = mobileAppTitle;
          text.innerText = mobileAppText;
        } else if (btn.innerText == 'PRODUCT DESIGN') {
          title.innerText = prodDesignTitle;
          text.innerText = prodDesignText;
        } else if (btn.innerText == 'ANALYTICS & SEO') {
          title.innerText = analyticTitle;
          text.innerText = analyticText;
        } else if (btn.innerText == 'API DEVELOPMENT') {
          title.innerText = apiDevTitle;
          text.innerText = apiDevText;
        }
      }
    })
  })


}

export { initItServicesClick };