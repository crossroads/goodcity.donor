import Ember from 'ember';
import './../computed/local-storage';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  currentUserId: Ember.computed(function() {
    return this.get("session.currentUser.id");
  }).volatile(),

  isTourSeen: Ember.computed(function() {
    return this.get("session.seenTour") === this.get("currentUserId");
  }).volatile(),

  didInsertElement() {
    this._super();
    var _this = this;

    var offerCount = this.get("store").peekAll("offer").get("length");
    var itemCount = this.get("store").peekAll("item").get("length");
    var recentlyCreated = new Date() - this.get("currentController.model.createdAt") <= 12 * 60 * 60 * 1000; // 12 hrs
    var isDraft = this.get("currentController.model.isDraft");
    var firstEverItem = offerCount === 1 && itemCount === 1 && recentlyCreated && isDraft;

    if (firstEverItem && !this.get("isTourSeen")) {
      Ember.$().ready(function(){
        Ember.$(document).foundation({
          joyride: {
            modal: true,
            nub_position: 'top',
            tip_animation: 'pop',
            tip_location: 'bottom',

            pre_ride_callback: function (){
              showJoyrideOverlay();
            },

            post_ride_callback: function(){
              hideJoyrideOverlay();
              setSeenTour();
            }
          },
        }).foundation('joyride', 'start');

        Ember.$(".joyride-close-tip").click(function(){
          hideJoyrideOverlay();
        });

        function hideJoyrideOverlay(){
          Ember.$(".joyride-view-background").hide();
        }

        function showJoyrideOverlay(){
          Ember.$(".joyride-view-background").show();
        }

        function setSeenTour(){
          _this.set("session.seenTour", _this.get("currentUserId"));
        }
      });
    }
  },
});
