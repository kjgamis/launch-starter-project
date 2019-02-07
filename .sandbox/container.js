module.exports = {
  "dataElements": {},
  "rules": [{
    "id": "RL1549564251928",
    "events": [{
      "modulePath": "sandbox/click.js",
      "settings": {},
      "order": "40"
    }],
    "actions": [{
      "modulePath": "starter-project/src/lib/actions/loadGtagLibrary.js",
      "settings": {},
      "order": "40"
    }, {
      "modulePath": "starter-project/src/lib/actions/floodlightTag.js",
      "settings": {
        "advertiserId": "DC-6587013",
        "groupId": "telus001",
        "activityId": "telus00",
        "countingMethod": "standard"
      }
    }],
    "name": "Floodlight tag"
  }],
  "extensions": {},
  "property": {
    "settings": {}
  },
  "buildInfo": {
    "turbineVersion": "25.4.0",
    "turbineBuildDate": "2019-02-07T18:30:52.924Z",
    "buildDate": "2019-02-07T18:30:52.924Z",
    "environment": "development"
  }
}