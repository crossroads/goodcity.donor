import Ember from 'ember';

export default Ember.Controller.extend({

  cordova: Ember.inject.service(),

  actions: {
    confirmSubmitOffer() {

      if(this.get("cordova").isIOS()) {

        var onEnabled = () => {
          this.transitionToRoute('offer.submit');
        };

        var onDisabled = () => {
          this.transitionToRoute('offer.ios_notification');
        };

        this.get("cordova").verifyIosNotificationSetting(onEnabled, onDisabled);

      } else {
        this.transitionToRoute('offer.submit');
      }
    }

  }
});
