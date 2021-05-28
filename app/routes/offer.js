import AuthorizeRoute from "./authorize";
import AjaxPromise from "../utils/ajax-promise";

export default AuthorizeRoute.extend({
  model(params) {
    var _this = this;
    return new AjaxPromise(
      `/offers/${params.offer_id}`,
      "GET",
      _this.get("session.authToken"),
      { exclude_messages: "true" }
    ).then(function(data) {
      _this.store.pushPayload(data);
      return _this.store.peekRecord("offer", params.offer_id);
    });
  }
});
