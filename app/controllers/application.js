import Ember from 'ember';

export default Ember.Controller.extend({
  isMobileDevice: false,

  init() {
    if( navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)|| navigator.userAgent.match(/iPod/i)) {
      this.set("isMobileDevice", true);
    }
  },

  actions: {
    closeBanner() {
      this.set("isMobileDevice", false);
    }
  }
});
