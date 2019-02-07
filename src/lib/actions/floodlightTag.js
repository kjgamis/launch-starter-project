'use strict';
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

  function gtag() { window.gTagLayer.push(arguments); }

  gtag('event', 'conversion', { 
    'allow_custom_scripts': true, 
    'send_to': settings.advertiserId + '/' + settings.groupId + '/' + settings.activityId + '/' + settings.countingMethod
  });

  _satellite.logger.log('gtag fired: ' + settings.advertiserId + '/' + settings.groupId + '/' + settings.activityId + '/' + settings.countingMethod);

}