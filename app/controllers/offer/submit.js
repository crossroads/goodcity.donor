import Ember from 'ember';
const { getOwner } = Ember;

export default Ember.Controller.extend({

  cordova: Ember.inject.service(),

  actions: {
    submitOffer(saleable) {
      var loadingView = getOwner(this).lookup('component:loading').append();
      var offer = this.get("model");
      offer.setProperties({ state_event: 'submit', saleable: saleable });

      offer.save()
        .then(() => this.transitionToRoute('offer.offer_details'))
        .finally(() => loadingView.destroy());
    },

    backLink() {
      if(this.get("cordova").isIOS()) {

        var onEnabled = function() {
          this.transitionToRoute('offer.confirm');
        }.bind(this);

        var onDisabled = function() {
          this.transitionToRoute('offer.ios_notification');
        }.bind(this);

        this.get("cordova").verifyIosNotificationSetting(onEnabled, onDisabled);

      } else {
        this.transitionToRoute('offer.confirm');
      }
    }
  }
});
