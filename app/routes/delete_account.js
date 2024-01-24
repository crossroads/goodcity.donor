import Ember from "ember";
import AuthorizeRoute from "./authorize";

export default AuthorizeRoute.extend({
  session: Ember.inject.service(),

  renderTemplate() {
    this.render(); // default template

    if (this.get("session.isLoggedIn")) {
      this.render("appMenuList", {
        into: "delete_account",
        outlet: "appMenuList",
        controller: "application"
      });
    }
  },

  model() {
    return Ember.RSVP.hash({
      user: this.store.peekRecord("user", this.session.get("currentUser.id"))
    });
  },

  // load offers into store to ensure our 'can delete' calculations work
  beforeModel() {
    let cachedRecords = this.store.peekAll("offer");
    if (cachedRecords.get("length") === 0) {
      this.get("store").query("offer", { exclude_messages: "true" });
    }
  }
});
