import Ember from "ember";
import config from "../config/environment";

export default Ember.Component.extend({
  tagName: "a",
  href: "#",
  cordova: Ember.inject.service(),

  click() {
    if (config.cordova.enabled) {
      /* jshint ignore:start */
      cordova.InAppBrowser.open(
        "https://www.crossroads.org.hk/home/donate-funds/",
        "_system"
      );
      /* jshint ignore:end */
    } else {
      window.open(this.decodeLink(), "_system");
    }
    return false;
  },

  decodeLink: function() {
    var link = this.attrs.linkUrl.value || this.attrs.linkUrl;
    return link.replace(/&amp;/g, "&");
  }
});
