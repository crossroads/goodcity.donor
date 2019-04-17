import { inject as service } from "@ember/service";
import Controller from "@ember/controller";
import { getOwner } from "@ember/application";

export default Controller.extend({
  cordova: service(),
  appReview: service(),

  actions: {
    submitOffer(saleable) {
      var loadingView = getOwner(this)
        .lookup("component:loading")
        .append();
      var offer = this.get("model");
      offer.setProperties({ state_event: "submit", saleable: saleable });

      offer
        .save()
        .then(() => this.transitionToRoute("offer.offer_details"))
        .finally(() => {
          loadingView.destroy();
          this.get("appReview").promptReviewModal();
        });
    },

    backLink() {
      if (this.get("cordova").isIOS()) {
        var onEnabled = () => {
          this.transitionToRoute("offer.confirm");
        };

        var onDisabled = () => {
          this.transitionToRoute("offer.ios_notification");
        };

        this.get("cordova").verifyIosNotificationSetting(onEnabled, onDisabled);
      } else {
        this.transitionToRoute("offer.confirm");
      }
    }
  }
});
