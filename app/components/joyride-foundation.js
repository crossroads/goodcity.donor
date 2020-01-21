import $ from "jquery";
import { computed } from "@ember/object";
import { inject as service } from "@ember/service";
import Component from "@ember/component";
import "./../computed/local-storage";

export default Component.extend({
  store: service(),

  currentUserId: computed(function() {
    return this.get("session.currentUser.id");
  }).volatile(),

  isTourSeen: computed(function() {
    return this.get("session.seenTour") === this.get("currentUserId");
  }).volatile(),

  didInsertElement() {
    this._super();
    var _this = this;

    var offerCount = this.get("store")
      .peekAll("offer")
      .get("length");
    var itemCount = this.get("store")
      .peekAll("item")
      .get("length");
    var recentlyCreated =
      new Date() - this.get("currentController.model.createdAt") <=
      12 * 60 * 60 * 1000; // 12 hrs
    var isDraft = this.get("currentController.model.isDraft");
    var firstEverItem =
      offerCount === 1 && itemCount === 1 && recentlyCreated && isDraft;

    if (firstEverItem && !this.get("isTourSeen")) {
      $().ready(function() {
        $(document)
          .foundation({
            joyride: {
              modal: true,
              nub_position: "top",
              tip_animation: "pop",
              tip_location: "bottom",

              pre_ride_callback: function() {
                showJoyrideOverlay();
              },

              post_ride_callback: function() {
                hideJoyrideOverlay();
                setSeenTour();
              }
            }
          })
          .foundation("joyride", "start");

        $(".joyride-close-tip").click(function() {
          hideJoyrideOverlay();
        });

        function hideJoyrideOverlay() {
          $(".joyride-view-background").hide();
        }

        function showJoyrideOverlay() {
          $(".joyride-view-background").show();
        }

        function setSeenTour() {
          _this.set("session.seenTour", _this.get("currentUserId"));
        }
      });
    }
  }
});
