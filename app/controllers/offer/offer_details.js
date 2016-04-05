import Ember from 'ember';
import '../../computed/local-storage';
import recordsUtil from '../../utils/records';
import ItemBaseController from "../item/edit_images";
const { getOwner } = Ember;

export default ItemBaseController.extend({
  items: Ember.computed.alias('model.items'),
  sortProperties: ["latestUpdatedTime:desc"],
  sortedItems: Ember.computed.sort("offerAndItems", "sortProperties"),
  i18n: Ember.inject.service(),
  messageBox: Ember.inject.service(),

  cancelByDonor: Ember.computed('model', {
    get() {
      return false;
    },
    set(key, value) {
      return value;
    }
  }),

  isOfferVanished: Ember.computed.or('model.isDeleted', 'model.isDeleting'),

  showDeleteError: Ember.observer('model', 'isOfferVanished', function(){
    var currentPath = window.location.href;

    if(this.get("isOfferVanished") && !this.get("cancelByDonor")) {
      if(currentPath.indexOf(`offers/${this.get("model.id")}`) >= 0 && currentPath.indexOf("items") < 0) {
        this.get("messageBox").alert(this.get("i18n").t("404_error"), () => this.transitionToRoute("offers"));
      }
    }
  }),

  hasActiveGGVOrder: Ember.computed.alias('model.delivery.gogovanOrder.isActive'),

  offerAndItems: Ember.computed('model', 'items.@each.state', function(){
    // avoid deleted-items which are not persisted yet.
    var elements = this.get('items').rejectBy('state', 'draft').rejectBy('isDeleted', true).toArray();

    // add offer to array for general messages display
    elements.push(this.get("model"));
    return elements;
  }),

  offers: Ember.computed(function(){
    return this.store.peekAll("offer");
  }),

  displayHomeLink: Ember.computed('offers.@each.state', function(){
    return this.get("offers").rejectBy('state', 'draft').get('length') > 0;
  }),

  actions: {
    addItem() {
      var message;
      if(this.get('model.isScheduled')) {
        if(this.get('model.hasCrossroadsTransport')) {
          message = this.get("i18n").t("offer.offer_details.crossroads_booking_alert");
        } else {
          message = this.get("i18n").t("offer.offer_details.ggv_booking_alert");
        }

        this.get("messageBox").confirm(message, () => {
          this.send("allowAddItem");
        });
      } else {
        this.send('allowAddItem');
      }
    },

    allowAddItem() {
      var draftItemId = this.get("model.items").filterBy("state", "draft").get("firstObject.id");
      if(draftItemId) {
        this.transitionToRoute('item.edit', draftItemId);
      } else {
        this.send("triggerUpload");
      }
    },

    deleteOffer(offer) {
      this.set("cancelByDonor", true);
      var loadingView = getOwner(this).lookup('component:loading').append();
      offer.deleteRecord();
      offer.save()
        .then(() => {
          recordsUtil.unloadRecordTree(offer);
          this.transitionToRoute('offers.index');
        })
        .catch(error => { offer.rollback(); throw error; })
        .finally(() => {loadingView.destroy(); this.set("cancelByDonor", false);});
    },

    cancelOffer(offer, alreadyConfirmed) {
      if(this.get('hasActiveGGVOrder')) {
        this.transitionToRoute('offer.cancel', offer);
      } else if(alreadyConfirmed) {
        this.send("deleteOffer", offer);
      } else{
        this.get("messageBox").confirm(this.get("i18n").t("delete_confirm"), () => {
          this.send("deleteOffer", offer);
        });
      }
    },

    addMoreItem() {
      if(!this.get("model.preventNewItem")){ this.send("addItem"); }
    },

    handleBrokenImage() {
      this.get("model.reviewedBy").set("hasImage", null);
    },
  }
});
