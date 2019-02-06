window.extensionBridge.register({
    init: function (info) {
        if (info.settings) {
            // TODO Populate form values from persisted settings.
            document.querySelector('#visitorName').value = info.settings.visitorName;
            document.querySelector('#message').value = info.settings.message;
        } else {
            document.querySelector('#visitorName').value = 'visitor';
            document.querySelector('#message').value = 'Welcome';
        }
    },

    getSettings: function () {
        // TODO Return settings object from form values.
        return {
            visitorName: document.querySelector('#visitorName').value,
            message: document.querySelector('#message').value
        }
    },

    validate: function () {
        // TODO Return whether settings are valid.
        var valid = false;
        var visitorName = document.querySelector('#visitorName').value;
        var message = document.querySelector('#message').value;

        if (visitorName && message) {
            valid = true;
        }

        if (!valid) {
            document.querySelector('#ifNotValid').style.display = 'block';
        } else {
            document.querySelector('#ifNotValid').style.display = 'none';
        }
        return valid;
    }
});