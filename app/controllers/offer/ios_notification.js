import { cancel, later } from "@ember/runloop";
import { inject as service } from "@ember/service";
import Controller from "@ember/controller";

export default Controller.extend({
  cordova: service(),
  displayUserPrompt: false,
  timer: null,
  _currentFunction: null,

  pollingFunction() {
    var onEnabled = () => {
      this.set("displayUserPrompt", false);
      this.stop();
      this.transitionToRoute("offer.submit");
    };

    var onDisabled = () => {
      this.set("displayUserPrompt", true);
    };

    this.get("cordova").verifyIosNotificationSetting(onEnabled, onDisabled);
  },

  start(context, pollingFunction) {
    this.set("_currentFunction", this._schedule(context, pollingFunction));
  },

  stop() {
    cancel(this.get("_currentFunction"));
  },

  _schedule(context, func) {
    return later(
      this,
      function() {
        this.set("_currentFunction", this._schedule(context, func));
        func.apply(context);
      },
      1000
    );
  },

  actions: {
    sendPushNotification() {
      this.get("cordova").initiatePushNotifications();
      this.start(this, this.pollingFunction);
    },

    closeDialog() {
      this.stop();
    },

    openSettings() {
      window.cordova.plugins.settings.open(
        function() {
          console.log("opened settings");
        },
        function() {
          console.log("error opened settings");
        }
      );
    }
  }
});
