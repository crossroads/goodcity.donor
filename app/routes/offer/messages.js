import MessagesBaseRoute from "shared-goodcity/routes/messages_base";
import Ember from "ember";

export default MessagesBaseRoute.extend({
  model() {
    return Ember.RSVP.Promise.all([
      this.store.query("message", {
        messageable_type: "Offer",
        messageable_id: this.modelFor("offer").get("id")
      })
    ]);
  }
});
