import Ember from 'ember';
const { getOwner } = Ember;

export default Ember.Component.extend({

  allOffers: Ember.computed(function(){
    var store = this.get('targetObject.store');
    return store.peekAll("offer");
  }),

  existingOffer: Ember.computed('offers.@each.state', function(){
    var offers = this.get("allOffers");
    return offers.filterBy("isUnderReview", true).get("firstObject") ||
      offers.filterBy("isReviewed", true).get("firstObject") ||
      offers.filterBy("isSubmitted", true).get("firstObject");
  }),

  actions: {
    addNewOffer() {
      this.get("router").transitionTo("offers.new");
    },

    addNewItem(){
      var store = this.get('targetObject.store');
      var loadingView = getOwner(this).lookup('component:loading').append();
      var offer = this.get("existingOffer");
      var defaultDonorCondition = store.peekAll("donorCondition").sortBy("id").get("firstObject");

      var draft_item = offer.get("items").filterBy("isDrafted", true).get("firstObject");

      var item = draft_item || store.createRecord("item", {
        offer: offer,
        donorCondition: defaultDonorCondition,
        state: "draft"
      });

      item.save()
        .then(() => {
          loadingView.destroy();
          this.get("router").transitionTo("item.edit_images", offer, item);
        });
    },

    confirmNewOffer() {
      if(this.get("existingOffer")) {
        this.confirmAddNewOffer(() => this.send("addNewOffer"), () => this.send("addNewItem"));
      } else {
        this.send("addNewOffer");
      }
    },
  },

  confirmAddNewOffer: function(newOfferCallback, newItemCallback) {
    var _this = this;
    Ember.$("#addNewOfferModal").removeClass("open");
    Ember.$("#addNewOfferModal").foundation("reveal", "open");
    Ember.$(".loading-indicator").remove();

    Ember.$("#addNewOfferModal .closeLink").click(() => {
      _this.closeConfirmBox();
    });

    Ember.$("#addNewOfferModal .addNewOfferLink").click(() => {
      _this.closeConfirmBox();
      newOfferCallback();
    });

    Ember.$("#addNewOfferModal .addNewItemLink").click(() => {
      _this.closeConfirmBox();
      newItemCallback();
    });
  },

  closeConfirmBox: function() {
    Ember.run.next(function() {
      Ember.$("#addNewOfferModal").foundation("reveal", "close");
      Ember.$("#addNewOfferModal *").unbind('click');
    });
  },

});
