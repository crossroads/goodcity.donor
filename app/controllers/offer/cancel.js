import { alias } from "@ember/object/computed";
import Controller, { inject as controller } from "@ember/controller";
import config from "../../config/environment";

export default Controller.extend({
  offerController: controller("offer/offer_details"),

  canCancel: alias("model.delivery.gogovanOrder.isCancelled"),
  driverContact: alias("model.delivery.gogovanOrder.driverMobile"),
  gogovanContact: config.APP.GOGOVAN_CONTACT,

  actions: {
    cancelOffer() {
      if (this.get("canCancel")) {
        this.get("offerController").send("cancelOffer", this.get("model"));
      }
    }
  }
});
