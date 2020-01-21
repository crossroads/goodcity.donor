import { computed } from "@ember/object";
import { inject as service } from "@ember/service";
import Component from "@ember/component";
import { getOwner } from "@ember/application";

export default Component.extend({
  store: service("store"),
  messageBox: service(),
  i18n: service(),

  allOffers: computed(function() {
    return this.get("store").peekAll("offer");
  }),

  existingOffer: computed("offers.@each.state", function() {
    var offers = this.get("allOffers");
    return (
      offers.filterBy("isUnderReview", true).get("firstObject") ||
      offers.filterBy("isReviewed", true).get("firstObject") ||
      offers.filterBy("isSubmitted", true).get("firstObject")
    );
  }),

  locale: function(str) {
    return this.get("i18n").t(str);
  },

  actions: {
    addNewOffer() {
      this.get("router").transitionTo("offers.new");
    },

    addNewItem() {
      var store = this.get("store");
      var loadingView = getOwner(this)
        .lookup("component:loading")
        .append();
      var offer = this.get("existingOffer");
      var defaultDonorCondition = store
        .peekAll("donorCondition")
        .sortBy("id")
        .get("firstObject");

      var draft_item = offer
        .get("items")
        .filterBy("isDrafted", true)
        .get("firstObject");

      var item =
        draft_item ||
        store.createRecord("item", {
          offer: offer,
          donorCondition: defaultDonorCondition,
          state: "draft"
        });

      item.save().then(() => {
        loadingView.destroy();
        this.get("router").transitionTo("item.edit_images", offer, item);
      });
    },

    confirmNewOffer() {
      if (this.get("existingOffer")) {
        this.get("messageBox").custom(
          this.locale("offers.index.new_offer_message"),
          this.locale("offers.index.new_offer"),
          () => this.send("addNewOffer"),
          this.locale("offers.index.add_item"),
          () => this.send("addNewItem"),
          true
        );
      } else {
        this.send("addNewOffer");
      }
    }
  }
});
