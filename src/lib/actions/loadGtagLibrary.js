'use strict';

module.exports = function(settings) {
  // TODO Perform some action.

  // var gtag = document.createElement('script');
  // console.log('***** ' + window.gtag + ' *****')
  // gtag.src = 'https://www.googletagmanager.com/gtag/js?id=UA-132575550-1&l=gTagLayer';
  // document.head.appendChild(gtag);

  // try {
  //   window.gTagLayer = window.gTagLayer || [];
  //   function gtag() { window.gTagLayer.push(arguments); }
  //   gtag('js', new Date());

  //   gtag('config', 'DC-6587013');
  // } catch (error) {
  //   _satellite.logger.error(error);
  // }


  var gtagReady = 'false';
  var gtag = document.createElement('script');

  gtag.src = 'https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID&l=gTagLayer';
  document.head.appendChild(gtag);

  try {
    window.gTagLayer = window.gTagLayer || [];
    function gtag() { window.gTagLayer.push(arguments); }
    gtag('js', new Date());

    gtag('config', 'DC-6587013');
    gtag('config', 'DC-4402085');
    gtag('config', 'AW-941542088');
    gtag('config', 'AW-938639790');
    gtag('config', 'DC-8005118');
    gtag('config', 'AW-933379285');
    gtag('config', 'AW-1064506604');
    gtag('config', 'AW-939302497');
    gtag('config', 'AW-1046799360');
    gtag('config', 'AW-794708998');
    gtag('config', 'AW-1066229737');

  } catch (error) {
    _satellite.logger.error(error);
  }
  /* End of global snippet: Please do not remove */

  /* global function for firing gtag pixel */
  if (typeof gtag === 'function') {
    gtagReady = 'true';
  }
};
