module.exports = {
  "dataElements": {},
  "rules": [{
    "id": "RL1548876090339",
    "events": [{
      "modulePath": "starter-project/src/lib/events/delay.js",
      "settings": {
        "delay": "2500"
      }
    }],
    "actions": [{
      "modulePath": "starter-project/src/lib/actions/alertMessage.js",
      "settings": {
        "visitorName": "Karen",
        "message": "Welcome!"
      }
    }],
    "name": "Karen's Welcome."
  }],
  "extensions": {},
  "property": {
    "settings": {}
  },
  "buildInfo": {
    "turbineVersion": "25.4.0",
    "turbineBuildDate": "2019-01-30T19:21:32.682Z",
    "buildDate": "2019-01-30T19:21:32.682Z",
    "environment": "development"
  }
}