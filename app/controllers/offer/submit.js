import Ember from 'ember';
const { getOwner } = Ember;

export default Ember.Controller.extend({

  cordova: Ember.inject.service(),
  appReview: Ember.inject.service(),

  actions: {
    submitOffer(saleable) {
      var loadingView = getOwner(this).lookup('component:loading').append();
      var offer = this.get("model");
      offer.setProperties({ state_event: 'submit', saleable: saleable });

      offer.save()
        .then(() => this.transitionToRoute('offer.offer_details'))
        .finally(() => {
          loadingView.destroy();
          //Commented in-app rating feature temporarily
          //this.get("appReview").promptReviewModal();
        });
    },

    backLink() {
      if(this.get("cordova").isIOS()) {

        var onEnabled = () => {
          this.transitionToRoute('offer.confirm');
        };

        var onDisabled = () => {
          this.transitionToRoute('offer.ios_notification');
        };

        this.get("cordova").verifyIosNotificationSetting(onEnabled, onDisabled);

      } else {
        this.transitionToRoute('offer.confirm');
      }
    }
  }
});
