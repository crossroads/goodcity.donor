import { inject as service } from "@ember/service";
import { computed, observer } from "@ember/object";
import { inject as controller } from "@ember/controller";
import { empty, or } from "@ember/object/computed";
import { getOwner } from "@ember/application";
import MessagesBaseController from "shared-goodcity/controllers/messages_base";

export default MessagesBaseController.extend({
  item: null,
  noMessage: empty("messages"),
  offerDetailsController: controller("offer/offer_details"),

  displayChatNote: computed("noMessage", "disabled", function() {
    return this.get("noMessage") && !this.get("disabled");
  }),

  messageBox: service(),
  i18n: service(),

  cancelByDonor: computed("item", {
    get() {
      return false;
    },
    set(key, value) {
      return value;
    }
  }),

  isItemVanished: or("item.isDeleted", "item.isDeleting"),

  showDeleteError: observer("item", "isItemVanished", function() {
    var currentPath = window.location.href;

    if (this.get("isItemVanished") && !this.get("cancelByDonor")) {
      if (currentPath.indexOf(`items/${this.get("item.id")}`) >= 0) {
        this.get("messageBox").alert(this.get("i18n").t("404_error"), () =>
          this.transitionToRoute("offers")
        );
      }
    }
  }),

  actions: {
    removeItem(item) {
      var controller = this;
      var offer = item.get("offer");

      if (offer.get("state") !== "draft" && offer.get("items.length") <= 1) {
        this.get("messageBox").custom(
          this.get("i18n").t("item.cancel_last_item_confirm"),
          this.get("i18n").t("not_now"),
          null,
          this.get("i18n").t("item.cancel"),
          () => {
            this.get("offerDetailsController").send("cancelOffer", offer, true);
          }
        );
        return;
      }

      this.get("messageBox").custom(
        this.get("i18n").t("delete_confirm"),
        this.get("i18n").t("not_now"),
        null,
        this.get("i18n").t("item.cancel"),
        () => {
          this.set("cancelByDonor", true);
          var loadingView = getOwner(controller)
            .lookup("component:loading")
            .append();

          offer.get("items").removeObject(item);

          item
            .destroyRecord()
            .then(function() {
              if (offer.get("itemCount") === 0) {
                controller.transitionToRoute("offer");
              } else {
                controller.transitionToRoute("offer.offer_details");
              }
            })
            .finally(() => {
              loadingView.destroy();
              this.set("cancelByDonor", false);
            });
        }
      );
    }
  }
});
