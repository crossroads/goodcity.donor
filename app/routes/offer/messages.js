import { Promise } from "rsvp";
import MessagesBaseRoute from "shared-goodcity/routes/messages_base";

export default MessagesBaseRoute.extend({
  model() {
    return Promise.all([
      this.store.query("message", {
        messageable_type: "Offer",
        messageable_id: this.modelFor("offer").get("id")
      })
    ]);
  }
});
