const initGoogleAnalytics = () => {
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', 'UA-179873545-1');
}

export { initGoogleAnalytics };