'use strict';

var triggers = [];
var enteredKeys = [];

var password = '83,69,67,82,69,84'; // this spells the word 'secret'

window.addEventListener('keydown', function (event) {
  enteredKeys.push(event.keyCode)
  enteredKeys.join(',')
  console.log(enteredKeys)

  if (enteredKeys === password)
})

module.exports = function(settings, trigger) {
  // TODO Start watching for an event. Call trigger when the event occurs.
  

};