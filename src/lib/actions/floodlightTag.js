'use strict';

// ========================================
// ============= gtag library =============
// ========================================


var gtagReady = 'false';
console.log('***** ' + window.gtagReady + ' *****')

var gtag = document.createElement('script');
console.log('***** ' + window.gtag + ' *****')
gtag.src = 'https://www.googletagmanager.com/gtag/js?id=UA-132575550-1&l=gTagLayer';
document.head.appendChild(gtag);

function gtag() { window.gTagLayer.push(arguments); }

try {
  window.gTagLayer = window.gTagLayer || [];
  gtag('js', new Date());
  gtag('config', 'DC-6587013');

} catch (error) {
  console.log(error)
  _satellite.logger.error(error);
}
/* End of global snippet: Please do not remove */

/* global function for firing gtag pixel */
if (typeof gtag === 'function') {
  gtagReady = 'true';
}

// ========= end of gtag library ==========

// =============== floodlight example =================

// gtag('event', 'conversion', { 
//   'allow_custom_scripts': true, 
//   'send_to': 'DC-6587013/telus0/telus00s+standard' 
// });
// _satellite.logger.log('gtag fired: DC-6587013/telus0/telus00s+standard');

// gtag('event', 'conversion', {
//   'allow_custom_scripts': true,
//   'send_to': settings.advertiserId + '/' + settings.groupId + '/' + settings.activityId + '/' + settings.countingMethod
// }),

module.exports = function(settings) {
  // TODO Perform some action.
  _satellite.setDebug(true);
  console.log( 'Floodlight Tag',
    { 'Advertiser ID' : settings.advertiserId, 
      'Group ID': settings.groupId,  
      'Activity ID': settings.activityId, 
      'Counting Method': settings.countingMethod
    },
    settings.advertiserId + '/' + settings.groupId + '/' + settings.activityId + '/' + settings.countingMethod
  );

  gtag('event', 'conversion', { 
    'allow_custom_scripts': true, 
    'send_to': settings.advertiserId + '/' + settings.groupId + '/' + settings.activityId + '/' + settings.countingMethod
  });

  _satellite.logger.log('gtag fired: ' + settings.advertiserId + '/' + settings.groupId + '/' + settings.activityId + '/' + settings.countingMethod);

}