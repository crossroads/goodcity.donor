import { inject as service } from "@ember/service";
import Controller from "@ember/controller";

export default Controller.extend({
  cordova: service(),

  actions: {
    confirmSubmitOffer() {
      if (this.get("cordova").isIOS()) {
        var onEnabled = () => {
          this.transitionToRoute("offer.submit");
        };

        var onDisabled = () => {
          this.transitionToRoute("offer.ios_notification");
        };

        this.get("cordova").verifyIosNotificationSetting(onEnabled, onDisabled);
      } else {
        this.transitionToRoute("offer.submit");
      }
    }
  }
});
