'use strict';

var triggers = [];
var enteredKeys = [];

var password = '83,69,67,82,69,84'; // this spells the word 'secret'

window.addEventListener('keydown', function (event) {
  enteredKeys.push(event.keyCode);
  console.log(enteredKeys);

  if (enteredKeys.join(',') === password) {
    triggers.forEach(function(trigger){
      trigger();
    });
  }
}, true);

module.exports = function(settings, trigger) {
  // TODO Start watching for an event. Call trigger when the event occurs.
  
  triggers.push(trigger);
};
