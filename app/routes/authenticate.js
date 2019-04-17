import Route from "@ember/routing/route";
import { getOwner } from "@ember/application";

export default Route.extend({
  beforeModel() {
    if (this.session.get("isLoggedIn")) {
      if (this.get("session.currentUser")) {
        this.transitionTo("/offers");
      } else {
        getOwner(this)
          .lookup("route:application")
          ._loadDataStore();
      }
    }
  }
});
