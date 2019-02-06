window.extensionBridge.register({
    init: function (info) {
        if (info.settings) {
            // TODO Populate form values from persisted settings.
            document.querySelector('#advertiserId').value = info.settings.advertiserId;
            document.querySelector('#groupId').value = info.settings.groupId;
            document.querySelector('#activityId').value = info.settings.activityId;
            document.querySelector('input[name="counting-method"]:checked').value = info.settings.countingMethod;
        } else {
            document.querySelector('#advertiserId').value = '';
            document.querySelector('#groupId').value = '';
            document.querySelector('#activityId').value = '';
        }
    },

    getSettings: function () {
        // TODO Return settings object from form values.
        return {
            advertiserId: document.querySelector('#advertiserId').value,
            groupId: document.querySelector('#groupId').value,
            activityId: document.querySelector('#activityId').value,
            countingMethod: document.querySelector('input[name="counting-method"]:checked').value
        }
    },

    validate: function () {
        // TODO Return whether settings are valid.
        var valid = false;
        var advertiserId = document.querySelector('#advertiserId').value;
        var groupId = document.querySelector('#groupId').value;
        var activityId = document.querySelector('#activityId').value;
        var countingMethod = document.querySelector('input[name="counting-method"]:checked').value

        if (advertiserId && groupId && activityId) {
            valid = true;
        }

        return valid;
    }
});