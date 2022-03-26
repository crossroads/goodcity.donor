import MessagesBaseRoute from "shared-goodcity/routes/messages_base";
import Ember from "ember";

export default MessagesBaseRoute.extend({
  model() {
    return Ember.RSVP.Promise.all([
      this.store.query("version", {
        for_item: "true",
        item_id: this.modelFor("item").get("id")
      })
    ]);
  },

  setupController(controller, model) {
    this._super(controller, model);
    controller.set("item", this.modelFor("item"));
  }
});
