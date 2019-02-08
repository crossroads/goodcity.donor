import Ember from "ember";

export default Ember.Component.extend({
  androidAppId: null,
  iOSAppId: null,

  appStoreURL: Ember.computed('androidAppId', function() {
    if( navigator.userAgent.match(/Android/i)) {
      let androidAppId = this.get('androidAppId');
      return `http://play.google.com/store/apps/details?id=${androidAppId}`;
    } else if(navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i)) {
      let iOSAppId = this.get('iOSAppId');
      return iOSAppId;
    }
  }),

  actions: {
    removeBanner() {
      this.get('onCancel')();
    }
  }
});
