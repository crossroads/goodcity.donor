import Route from "@ember/routing/route";
import AjaxPromise from "../utils/ajax-promise";

export default Route.extend({
  model(params) {
    var _this = this;
    return new AjaxPromise("/gogovan_orders/driver_details", "GET", null, {
      id: params.ggv_id
    }).then(function(data) {
      _this.store.pushPayload(data);
      return _this.store.peekRecord("offer", data.offer.id);
    });
  },

  afterModel(offer) {
    var validOffer =
      offer.get("isScheduled") &&
      offer.get("delivery.gogovanOrder.nonCompleted");
    if (!validOffer) {
      throw { status: 404 };
    }
  }
});
